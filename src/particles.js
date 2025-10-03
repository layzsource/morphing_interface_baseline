// particles.js
// Phase 4.9.0 — Stable Particle Baseline
// InstancedMesh particle system with per-particle hue spread, organic motion, audio reactivity

import * as THREE from 'three';
import { SHADOW_LAYER } from './constants.js'; // Phase 2.3.3
import { getEffectiveAudio, state } from './state.js'; // Phase 11.4.3: Stable audio gate + Phase 11.7: state access

// Phase 11.7.22: Musical scale definitions (intervals from root)
const MUSICAL_SCALES = {
  Major: [0, 2, 4, 5, 7, 9, 11], // Ionian
  Minor: [0, 2, 3, 5, 7, 8, 10], // Natural minor
  Pentatonic: [0, 2, 4, 7, 9], // Major pentatonic
  Dorian: [0, 2, 3, 5, 7, 9, 10],
  Phrygian: [0, 1, 3, 5, 7, 8, 10],
  Lydian: [0, 2, 4, 6, 7, 9, 11],
  Mixolydian: [0, 2, 4, 5, 7, 9, 10],
  Chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
};

// Phase 11.7.22: Circle of Fifths ordering (chromatic positions)
const CIRCLE_OF_FIFTHS = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];

export class ParticleSystem {
  constructor(scene, count = 5000) {
    this.scene = scene;
    this.count = count;

    this.angles    = new Float32Array(this.count);
    this.radii     = new Float32Array(this.count);

    // Phase 11.7: Base velocity storage (x, y, z per particle)
    this.velocities = new Float32Array(this.count * 3);
    this.targets   = new Float32Array(this.count * 3);

    this.orbitalSpeed    = 0.05;
    this.smoothness      = 0.5;
    this.opacity         = 1.0;
    this.organicStrength = 0.2;

    // Phase 11.5.2: Lightweight organic drift (sine+cos jitter, per-axis amp)
    this.driftOffsets = [];
    for (let i = 0; i < this.count; i++) {
      this.driftOffsets.push({
        // random phase per axis
        x: Math.random() * Math.PI * 2,
        y: Math.random() * Math.PI * 2,
        z: Math.random() * Math.PI * 2,
        // speed scalar
        s: 0.6 + Math.random() * 0.8,
        // per-axis amplitude jitter (kept small; multiplied later by organic strength)
        ax: 0.6 + Math.random() * 0.8,
        ay: 0.6 + Math.random() * 0.8,
        az: 0.6 + Math.random() * 0.8,
        // second-octave contribution (adds wobble)
        a2: 0.3 + Math.random() * 0.5
      });
    }

    this.hueShift      = 0.0;
    this.audioReactive = true;
    this.audioLevel    = 0.0;
    this.audioGain     = 2.0;

    this.sizeWorld     = 0.5;
    this.currentLayout = 'orbit';
    this.vesselGroup   = null; // Phase 2.3.1: Reference to Vessel for coupled rotation

    // Phase 2.3.2A/C/D: Particle trails (LineSegments)
    this.trailEnabled         = false;
    this.trailLength          = 0;     // default off (0-10 frames)
    this.trailOpacity         = 0.3;   // default opacity
    this.trailFade            = 1.0;   // Phase 2.3.2C: fade strength (0=no fade, 1=full taper)
    this.trailAudioReactive   = false; // Phase 2.3.2D: audio-reactive trail length
    this.trailLengthMin       = 2;     // Phase 2.3.2D: shortest trail (quiet audio)
    this.trailLengthMax       = 10;    // Phase 2.3.2D: longest trail (loud audio)
    this.trailHistory         = [];    // array of position snapshots
    this.maxTrailLength       = 20;    // Expanded to support max range

    const baseGeom = new THREE.SphereGeometry(1, 6, 6);

    // Uniforms
    this.uniforms = {
      uSize:            { value: this.sizeWorld },
      uOpacity:         { value: this.opacity },
      uHueShift:        { value: this.hueShift },
      uAudioReactive:   { value: this.audioReactive },
      uAudioLevel:      { value: 0.0 },
      uBrightnessBoost: { value: 1.0 },
    };

    // Shaders
    const vertexShader = `
      uniform float uSize;
      uniform float uHueShift;
      uniform bool  uAudioReactive;
      uniform float uAudioLevel;

      attribute float aBaseHue;
      attribute float aPhase;

      varying float vHue;

      void main() {
        vec3 p = position * uSize;
        vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        float audioHue = uAudioLevel * 360.0;
        float finalHue = uAudioReactive
          ? mod(uHueShift + audioHue + aBaseHue + aPhase * 30.0, 360.0)
          : mod(uHueShift + aBaseHue, 360.0);
        vHue = finalHue;
      }
    `;

    const fragmentShader = `
      precision mediump float;
      uniform float uOpacity;
      uniform float uBrightnessBoost;
      varying float vHue;

      vec3 hsl2rgb(float h, float s, float l) {
        float c = (1.0 - abs(2.0*l - 1.0)) * s;
        float hp = h * 6.0;
        float x = c * (1.0 - abs(mod(hp, 2.0) - 1.0));
        vec3 rgb;
        if      (0.0 <= hp && hp < 1.0) rgb = vec3(c, x, 0.0);
        else if (1.0 <= hp && hp < 2.0) rgb = vec3(x, c, 0.0);
        else if (2.0 <= hp && hp < 3.0) rgb = vec3(0.0, c, x);
        else if (3.0 <= hp && hp < 4.0) rgb = vec3(0.0, x, c);
        else if (4.0 <= hp && hp < 5.0) rgb = vec3(x, 0.0, c);
        else                            rgb = vec3(c, 0.0, x);
        float m = l - 0.5 * c;
        return rgb + vec3(m);
      }

      void main() {
        float h = vHue / 360.0;
        float brightness = 0.5 * uBrightnessBoost;
        vec3 color = hsl2rgb(h, 1.0, brightness);
        gl_FragColor = vec4(color, uOpacity);
      }
    `;

    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    this.mesh = new THREE.InstancedMesh(baseGeom, this.material, this.count);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    // Phase 2.3.3: Disable shadow layer by default (HUD controlled)
    this.mesh.layers.disable(SHADOW_LAYER);

    scene.add(this.mesh);

    // Per-instance attributes
    const aBaseHue = new Float32Array(this.count);
    const aPhase   = new Float32Array(this.count);

    for (let i = 0; i < this.count; i++) {
      aBaseHue[i] = Math.random() * 360.0;
      aPhase[i]   = Math.random();

      this.angles[i] = Math.random() * Math.PI * 2;
      this.radii[i]  = 2 + Math.random() * 5;

      // Phase 11.7: Initialize base velocities
      const vi = i * 3;
      this.velocities[vi]     = (Math.random() - 0.5) * 0.002;
      this.velocities[vi + 1] = (Math.random() - 0.5) * 0.002;
      this.velocities[vi + 2] = (Math.random() - 0.5) * 0.002;
    }

    this.geometry = baseGeom;
    this.geometry.setAttribute('aBaseHue', new THREE.InstancedBufferAttribute(aBaseHue, 1));
    this.geometry.setAttribute('aPhase',   new THREE.InstancedBufferAttribute(aPhase, 1));

    // Phase 2.3.2B: Store base hue for trail color computation
    this.particleBaseHues = aBaseHue;

    this._tmpMatrix = new THREE.Matrix4();
    this._tmpQuat   = new THREE.Quaternion();
    this._tmpScale  = new THREE.Vector3(1, 1, 1);
    this._tmpPos    = new THREE.Vector3();

    // Phase 2.3.2E: Create preallocated trail buffers for performance
    // Max segments: each particle can have maxTrailLength segments, each segment has 2 vertices
    this.maxSegments = this.count * this.maxTrailLength * 2;
    this.trailSegmentArray = new Float32Array(this.maxSegments * 3); // xyz per vertex
    this.trailColorArray = new Float32Array(this.maxSegments * 3);   // rgb per vertex

    this.trailGeometry = new THREE.BufferGeometry();
    this.trailGeometry.setAttribute('position', new THREE.BufferAttribute(this.trailSegmentArray, 3));
    this.trailGeometry.setAttribute('color', new THREE.BufferAttribute(this.trailColorArray, 3));
    this.trailGeometry.setDrawRange(0, 0); // Start with no segments drawn

    this.trailMaterial = new THREE.LineBasicMaterial({
      vertexColors: true, // Phase 2.3.2B: Use per-vertex colors
      transparent: true,
      opacity: this.trailOpacity,
    });

    this.trailLines = new THREE.LineSegments(this.trailGeometry, this.trailMaterial);
    this.trailLines.visible = false; // Hidden by default

    // Phase 2.3.3: Disable shadow layer by default for trails too
    this.trailLines.layers.disable(SHADOW_LAYER);

    scene.add(this.trailLines);

    this._initParticles();
    this.setLayout('orbit');

    // Phase 11.4.2S: Log per-axis drift initialization
    console.log(`✨ Particle drift initialized for ${this.count} particles`);
  }

  _initParticles() {
    for (let i = 0; i < this.count; i++) {
      const x = Math.cos(this.angles[i]) * this.radii[i];
      const y = Math.sin(this.angles[i]) * this.radii[i];
      const z = 0;

      const ti = i * 3;
      this.targets[ti]     = x;
      this.targets[ti + 1] = y;
      this.targets[ti + 2] = z;

      this._tmpPos.set(x, y, z);
      this._tmpMatrix.compose(this._tmpPos, this._tmpQuat, this._tmpScale);
      this.mesh.setMatrixAt(i, this._tmpMatrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  setLayout(layout) {
    this.currentLayout = layout;
  }

  updateLayoutVesselPlanes() {
    const radius = 2.0;
    for (let i = 0; i < this.count; i++) {
      const ti = i * 3;
      const plane = i % 6;
      const angle = (i / this.count) * Math.PI * 2;

      switch (plane) {
        case 0: // +X
          this.targets[ti]     = radius;
          this.targets[ti + 1] = Math.cos(angle) * radius;
          this.targets[ti + 2] = Math.sin(angle) * radius;
          break;
        case 1: // -X
          this.targets[ti]     = -radius;
          this.targets[ti + 1] = Math.cos(angle) * radius;
          this.targets[ti + 2] = Math.sin(angle) * radius;
          break;
        case 2: // +Y
          this.targets[ti]     = Math.cos(angle) * radius;
          this.targets[ti + 1] = radius;
          this.targets[ti + 2] = Math.sin(angle) * radius;
          break;
        case 3: // -Y
          this.targets[ti]     = Math.cos(angle) * radius;
          this.targets[ti + 1] = -radius;
          this.targets[ti + 2] = Math.sin(angle) * radius;
          break;
        case 4: // +Z
          this.targets[ti]     = Math.cos(angle) * radius;
          this.targets[ti + 1] = Math.sin(angle) * radius;
          this.targets[ti + 2] = radius;
          break;
        case 5: // -Z
          this.targets[ti]     = Math.cos(angle) * radius;
          this.targets[ti + 1] = Math.sin(angle) * radius;
          this.targets[ti + 2] = -radius;
          break;
      }

      // Organic jitter overlay
      const jitter = this.organicStrength * 0.1;
      this.targets[ti]     += (Math.random() - 0.5) * jitter;
      this.targets[ti + 1] += (Math.random() - 0.5) * jitter;
      this.targets[ti + 2] += (Math.random() - 0.5) * jitter;
    }
  }

  update() {
    const t = Date.now() * 0.001;
    const sm = this.smoothness;

    // Audio Gating Fix: Get audio data through centralized gating once at top
    const a = getEffectiveAudio();
    const audioMix = this.audioReactive ? ((a.bass + a.mid + a.treble) / 3) * this.audioGain : 0.0;

    for (let i = 0; i < this.count; i++) {
      const ti = i * 3;

      switch (this.currentLayout) {
        case 'orbit': {
          // Phase 4.8.1.7: Decoupled organic motion
          // Base orbital rotation (controlled by orbitalSpeed)
          this.angles[i] += this.orbitalSpeed * 0.01;

          // Organic wander (controlled by organicStrength)
          const angleJitter  = this.organicStrength * 0.05 * Math.sin(t * 0.3 + i * 0.17);
          const radiusJitter = this.organicStrength * Math.sin(t * 0.5 + i * 0.23);

          // Final position with angular + radial jitter
          this.targets[ti]     = Math.cos(this.angles[i] + angleJitter) * (this.radii[i] + radiusJitter);
          this.targets[ti + 1] = Math.sin(this.angles[i] + angleJitter) * (this.radii[i] + radiusJitter);
          this.targets[ti + 2] = radiusJitter * 0.5;
          break;
        }
        case 'sphere': {
          // Phase 4.8.1.7: Decoupled organic motion
          const phi = (i % 180) * Math.PI / 180.0;
          const th  = (i % 360) * Math.PI / 180.0;
          const r   = 2.5 + this.organicStrength * Math.sin(t * 0.8 + i * 0.19);
          const angleJitter = this.organicStrength * 0.05 * Math.cos(t * 0.2 + i * 0.31);

          this.targets[ti]     = r * Math.sin(phi) * Math.cos(th + angleJitter);
          this.targets[ti + 1] = r * Math.sin(phi) * Math.sin(th + angleJitter);
          this.targets[ti + 2] = r * Math.cos(phi);
          break;
        }
        case 'torus': {
          // Phase 4.8.1.7: Decoupled organic motion
          const u = (i % 360) * Math.PI / 180.0;
          const v = (i % 360) * Math.PI / 180.0;
          const R = 2.5 + this.organicStrength * Math.sin(t * 0.5 + i * 0.11);
          const r = 1.0 + this.organicStrength * Math.cos(t * 0.7 + i * 0.17);
          const angleJitter = this.organicStrength * 0.05 * Math.sin(t * 0.4 + i * 0.29);

          this.targets[ti]     = (R + r * Math.cos(v)) * Math.cos(u + angleJitter);
          this.targets[ti + 1] = (R + r * Math.cos(v)) * Math.sin(u + angleJitter);
          this.targets[ti + 2] = r * Math.sin(v);
          break;
        }
        case 'cube': {
          // Phase 4.8.1.7: Decoupled organic motion
          const s = 5;
          // Base position jitter
          const baseX = Math.sin(t * 0.1 + i * 0.37) * s;
          const baseY = Math.cos(t * 0.15 + i * 0.41) * s;
          const baseZ = Math.sin(t * 0.12 + i * 0.43) * s;

          // Organic wander
          const wx = this.organicStrength * Math.sin(t * 0.6 + i * 0.23);
          const wy = this.organicStrength * Math.cos(t * 0.7 + i * 0.29);
          const wz = this.organicStrength * Math.sin(t * 0.5 + i * 0.31);

          this.targets[ti]     = baseX + wx;
          this.targets[ti + 1] = baseY + wy;
          this.targets[ti + 2] = baseZ + wz;
          break;
        }
        case 'vesselPlanes': {
          // Phase 2.3.0: Vessel-aware layout with organic motion
          this.updateLayoutVesselPlanes();
          break;
        }
      }

      this.mesh.getMatrixAt(i, this._tmpMatrix);
      this._tmpMatrix.decompose(this._tmpPos, this._tmpQuat, this._tmpScale);

      let tx = this.targets[ti];
      let ty = this.targets[ti + 1];
      let tz = this.targets[ti + 2];

      // Phase 11.5.2: Layered jitter (sine + cosine + 2nd octave), per-axis amp
      if (this.organicStrength > 0 && this.driftOffsets.length) {
        const off = this.driftOffsets[i];

        const fx = 0.18 * off.s;
        const fy = 0.23 * off.s;
        const fz = 0.15 * off.s;

        // base scale tuned down slightly; amplitudes come from ax/ay/az
        const driftScale = this.organicStrength * 0.018;

        // primary (slow) layer
        const dx1 = Math.sin(t * fx + off.x) * off.ax;
        const dy1 = Math.cos(t * fy + off.y) * off.ay; // cosine to desync phase families
        const dz1 = Math.sin(t * fz + off.z) * off.az;

        // secondary (faster) layer — subtle wobble
        const dx2 = Math.sin(t * fx * 2.3 + off.x * 1.7) * off.a2;
        const dy2 = Math.sin(t * fy * 2.1 + off.y * 1.3) * off.a2;
        const dz2 = Math.cos(t * fz * 2.4 + off.z * 1.9) * off.a2;

        // combine and scale
        tx += (dx1 + 0.4 * dx2) * driftScale;
        ty += (dy1 + 0.4 * dy2) * driftScale;
        tz += (dz1 + 0.4 * dz2) * driftScale;

        // Phase 11.4.2S: One-time drift active log
        if (!this._driftNotified) {
          this._driftNotified = true;
          console.log(`✨ Particle drift per-axis active (organic=${this.organicStrength.toFixed(2)})`);
        }
      }

      // Phase 11.7: Base velocity drift + noise field (safe defaults)
      const vi = i * 3;
      const motionStrength = state?.particleMotionStrength ?? 0.5;

      // Apply base velocity (persistent tiny velocities)
      tx += this.velocities[vi] * motionStrength;
      ty += this.velocities[vi + 1] * motionStrength;
      tz += this.velocities[vi + 2] * motionStrength;

      // Noise field drift (sine/cosine based)
      const noiseScale = motionStrength * 0.01;
      tx += Math.sin(t * 0.3 + i * 0.17) * noiseScale;
      ty += Math.cos(t * 0.4 + i * 0.23) * noiseScale;
      tz += Math.sin(t * 0.35 + i * 0.29) * noiseScale;

      // Phase 11.7: Audio jitter (velocity bursts on FFT peaks, safe default)
      const useJitter = state?.useAudioJitter ?? true;
      if (useJitter && this.audioReactive && audioMix > 0.1) {
        const audioBoost = audioMix * 0.01;
        // Add random directional burst scaled by audio level
        const burstAngle = (i * 0.37) % (Math.PI * 2);
        const burstX = Math.cos(burstAngle) * audioBoost;
        const burstY = Math.sin(burstAngle) * audioBoost;
        const burstZ = Math.sin(burstAngle * 0.7) * audioBoost;

        tx += burstX;
        ty += burstY;
        tz += burstZ;
      }

      // Phase 2.3.1: Apply Vessel rotation to vesselPlanes layout
      if (this.currentLayout === 'vesselPlanes' && this.vesselGroup) {
        const v = new THREE.Vector3(tx, ty, tz);
        v.applyQuaternion(this.vesselGroup.quaternion);
        tx = v.x;
        ty = v.y;
        tz = v.z;
      }

      // Phase 11.7: Boundary clamping (keep particles within sphere)
      const maxRadius = 10; // Maximum distance from origin
      const distSq = tx * tx + ty * ty + tz * tz;
      if (distSq > maxRadius * maxRadius) {
        const dist = Math.sqrt(distSq);
        const scale = maxRadius / dist;
        tx *= scale;
        ty *= scale;
        tz *= scale;
      }

      this._tmpPos.set(
        this._tmpPos.x + (tx - this._tmpPos.x) * sm,
        this._tmpPos.y + (ty - this._tmpPos.y) * sm,
        this._tmpPos.z + (tz - this._tmpPos.z) * sm
      );

      this._tmpMatrix.compose(this._tmpPos, this._tmpQuat, this._tmpScale);
      this.mesh.setMatrixAt(i, this._tmpMatrix);
    }

    this.mesh.instanceMatrix.needsUpdate = true;

    // Phase 2.3.2D: Audio-reactive trail length modulation
    if (this.trailEnabled && this.trailAudioReactive) {
      const dynamicLength = Math.floor(
        THREE.MathUtils.lerp(this.trailLengthMin, this.trailLengthMax, this.audioLevel)
      );
      this.trailLength = Math.max(0, Math.min(this.maxTrailLength, dynamicLength));
    }

    // Phase 2.3.2E: Update particle trails with preallocated buffers (performance fix)
    // Performance guard: Early exit if trails disabled or count is zero
    if (!this.trailEnabled || this.trailLength <= 0 || this.count === 0) {
      this.trailHistory = [];
      this.trailLines.visible = false;
      this.trailGeometry.setDrawRange(0, 0);
    } else {
      // Capture current particle positions (reuse single allocation)
      const currentPositions = new Float32Array(this.count * 3);
      for (let i = 0; i < this.count; i++) {
        this.mesh.getMatrixAt(i, this._tmpMatrix);
        this._tmpMatrix.decompose(this._tmpPos, this._tmpQuat, this._tmpScale);
        const idx = i * 3;
        currentPositions[idx]     = this._tmpPos.x;
        currentPositions[idx + 1] = this._tmpPos.y;
        currentPositions[idx + 2] = this._tmpPos.z;
      }

      // Add to history
      this.trailHistory.unshift(currentPositions);
      if (this.trailHistory.length > this.trailLength) {
        this.trailHistory.pop();
      }

      // Build line segments in preallocated arrays (no push, no new allocations)
      let segIndex = 0;
      let colIndex = 0;
      const tempColor = new THREE.Color();

      for (let i = 0; i < this.count; i++) {
        const idx = i * 3;

        // Phase 2.3.2B: Derive current particle hue from audio + hueShift
        const baseHue = this.particleBaseHues[i];
        let finalHue = this.hueShift;

        if (this.audioReactive) {
          const audioHue = audioMix * 360;
          finalHue = (this.hueShift + audioHue + baseHue) % 360;
        } else {
          finalHue = (this.hueShift + baseHue) % 360;
        }

        tempColor.setHSL(finalHue / 360, 1.0, 0.5);

        for (let t = 0; t < this.trailHistory.length - 1; t++) {
          const a = this.trailHistory[t];
          const b = this.trailHistory[t + 1];

          // Write positions directly to preallocated array
          this.trailSegmentArray[segIndex++] = a[idx];
          this.trailSegmentArray[segIndex++] = a[idx + 1];
          this.trailSegmentArray[segIndex++] = a[idx + 2];

          this.trailSegmentArray[segIndex++] = b[idx];
          this.trailSegmentArray[segIndex++] = b[idx + 1];
          this.trailSegmentArray[segIndex++] = b[idx + 2];

          // Phase 2.3.2C: Fade factor (1.0 at head, → (1 - trailFade) at tail)
          const fadeFactor = 1.0 - (t / this.trailHistory.length) * this.trailFade;

          // Write colors directly to preallocated array
          this.trailColorArray[colIndex++] = tempColor.r * fadeFactor;
          this.trailColorArray[colIndex++] = tempColor.g * fadeFactor;
          this.trailColorArray[colIndex++] = tempColor.b * fadeFactor;

          this.trailColorArray[colIndex++] = tempColor.r * fadeFactor;
          this.trailColorArray[colIndex++] = tempColor.g * fadeFactor;
          this.trailColorArray[colIndex++] = tempColor.b * fadeFactor;
        }
      }

      // Update geometry with actual vertex count used
      const vertexCount = segIndex / 3;
      if (vertexCount > 0) {
        this.trailGeometry.setDrawRange(0, vertexCount);
        this.trailGeometry.attributes.position.needsUpdate = true;
        this.trailGeometry.attributes.color.needsUpdate = true;
        this.trailLines.visible = true;
      } else {
        this.trailGeometry.setDrawRange(0, 0);
        this.trailLines.visible = false;
      }

      // Update material opacity
      this.trailMaterial.opacity = this.trailOpacity;
    }

    // Phase 4.9.0: Brightness compensation for small particles (under 0.3 world units)
    let brightnessBoost = 1.0;
    if (this.sizeWorld < 0.3) {
      brightnessBoost = THREE.MathUtils.lerp(1.6, 1.0, this.sizeWorld / 0.3);
    }

    this.uniforms.uSize.value            = this.sizeWorld;
    this.uniforms.uOpacity.value         = this.opacity;
    this.uniforms.uHueShift.value        = this.hueShift;
    this.uniforms.uAudioReactive.value   = this.audioReactive;
    this.uniforms.uAudioLevel.value      = audioMix;
    this.uniforms.uBrightnessBoost.value = brightnessBoost;

    // Debug log (Phase 2.3.2E: added trail performance status)
    if (Math.random() < 0.01) {
      const audioHue = audioMix * 360;
      const finalHue = (this.hueShift + audioHue) % 360;
      const coupled = this.currentLayout === 'vesselPlanes' && this.vesselGroup ? ' (coupled)' : '';
      const hueMode = this.audioReactive ? 'audio' : 'manual';
      const audioReactiveLen = this.trailAudioReactive ? `audioReactiveLen=true` : '';
      const trailStatus = this.trailEnabled
        ? ` | trails: enabled length=${this.trailLength} opacity=${this.trailOpacity.toFixed(2)} fade=${this.trailFade.toFixed(2)} ${audioReactiveLen} perf=OK`
        : '';
      // Phase 11.4.2: Log organic drift status
      const organicStatus = this.organicStrength > 0 ? ` ✨ Particle drift active (organic=${this.organicStrength.toFixed(2)})` : '';
      console.log(
        `✨ Layout: ${this.currentLayout}${coupled} | count: ${this.count} | size: ${this.sizeWorld.toFixed(2)} | speed: ${this.orbitalSpeed.toFixed(2)} | organic: ${this.organicStrength.toFixed(2)}${organicStatus}${trailStatus}`
      );
    }
  }

  // HUD hooks
  setOrbitalSpeed(v)     { this.orbitalSpeed = Math.max(0.01, v); }
  setSmoothness(v)       { this.smoothness = v; }
  setOpacity(v)          { this.opacity = v; }
  setOrganicStrength(v)  { this.organicStrength = v; }
  setHueShift(v)         { this.hueShift = v % 360; }
  setAudioReactive(b)    { this.audioReactive = !!b; }
  setVesselReference(vesselGroup) { this.vesselGroup = vesselGroup; } // Phase 2.3.1

  // Phase 2.3.2A/C/D: Trail control methods
  setTrailEnabled(v)        { this.trailEnabled = !!v; }
  setTrailLength(v)         { this.trailLength = Math.max(0, Math.min(this.maxTrailLength, Math.floor(v))); }
  setTrailOpacity(v)        { this.trailOpacity = Math.max(0, Math.min(1, v)); }
  setTrailFade(v)           { this.trailFade = Math.max(0, Math.min(1, v)); } // Phase 2.3.2C
  setTrailAudioReactive(v)  { this.trailAudioReactive = !!v; } // Phase 2.3.2D
  setTrailLengthMin(v)      { this.trailLengthMin = Math.max(1, Math.min(this.maxTrailLength, Math.floor(v))); }
  setTrailLengthMax(v)      { this.trailLengthMax = Math.max(1, Math.min(this.maxTrailLength, Math.floor(v))); }

  // Phase 2.3.3: Shadow Box projection control
  setProjectParticlesToShadow(enabled) {
    if (enabled) {
      this.mesh.layers.enable(SHADOW_LAYER);
      this.trailLines.layers.enable(SHADOW_LAYER);
    } else {
      this.mesh.layers.disable(SHADOW_LAYER);
      this.trailLines.layers.disable(SHADOW_LAYER);
    }
  }
  setAudioLevel(v)       { this.audioLevel = v; }
  setAudioGain(v)        { this.audioGain = v; }
  setParticleSizeWorld(v){ this.sizeWorld = Math.max(0.05, v); }
  setParticleSize(v)     { this.sizeWorld = Math.max(0.05, v); } // Alias
  changeLayout(name)     { this.setLayout(name); }

  setParticleCount(v) {
    this.dispose(this.scene);
    const sys = new ParticleSystem(this.scene, v);
    sys.setParticleSizeWorld(this.sizeWorld);
    sys.setAudioGain(this.audioGain);
    sys.setHueShift(this.hueShift);
    sys.setAudioReactive(this.audioReactive);
    sys.setOrbitalSpeed(this.orbitalSpeed);
    sys.setSmoothness(this.smoothness);
    sys.setOpacity(this.opacity);
    sys.setOrganicStrength(this.organicStrength);
    sys.setLayout(this.currentLayout);
    return sys;
  }

  dispose(scene) {
    scene.remove(this.mesh);
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
  }
}

// Legacy compatibility
let particleSystemInstance = null;

export function initParticles(scene, count = 5000) {
  if (particleSystemInstance) {
    destroyParticles(scene);
  }
  particleSystemInstance = new ParticleSystem(scene, count);
  return particleSystemInstance;
}

export function updateParticles(audioReactive, time) {
  if (particleSystemInstance) {
    particleSystemInstance.update();
  }
}

export function destroyParticles(scene) {
  if (particleSystemInstance) {
    particleSystemInstance.dispose(scene);
    particleSystemInstance = null;
  }
}

export function getParticleSystemInstance() {
  return particleSystemInstance;
}

// === 🍕 Phase 11.7.10: Emoji Particle Extension (Instanced Rendering) ===
// InstancedMesh-based emoji particles for 1k+ performance with audio reactivity

// Phase 11.7.12: Emoji narrative sets
const EMOJI_SETS = {
  pizza: ["🍕", "🌶️", "🍄", "🧄", "🧀"],
  cosmos: ["⭐", "🌙", "☀️", "🌍", "🌌"],
  myth: ["🦁", "🦅", "🐍", "🐉", "🔥"],
  ocean: ["🌊", "🐠", "🐙", "🦈", "🐚"],
  nature: ["🌲", "🍃", "🌺", "🦋", "🌈"],
  tech: ["💻", "🤖", "⚡", "🔮", "💎"]
};

export class EmojiParticles {
  constructor(scene, count = 50, emoji = "🍕") {
    this.scene = scene;
    this.count = count;
    this.emoji = emoji;
    this.layout = "cube"; // Phase 11.7.5: default layout
    this.audioReactivity = 1.0; // Phase 11.7.8: audio response multiplier
    this.useInstancing = true; // Phase 11.7.10: instancing flag
    this.linkedToSignals = false; // Phase 11.7.11: morph/audio linking

    // Phase 11.7.12: Narrative/symbol layer
    this.currentSet = null; // Active emoji set name
    this.currentSetIndex = 0; // Index within the set
    this.autoCycleEnabled = false; // Auto-cycle through set
    this.cycleInterval = 4000; // Milliseconds between cycles
    this.lastCycleTime = performance.now();
    this.storyMode = false; // Story sequence mode
    this.storySequence = ["pizza", "cosmos", "myth"]; // Default story order
    this.storyIndex = 0;

    // Phase 11.7.13: Beat sync & sequencing
    this.bpm = 120; // Beats per minute
    this.beatSyncEnabled = false; // BPM-locked pulse
    this.lastBeatTime = performance.now();
    this.beatInterval = 0; // Calculated from BPM
    this.subdivision = 4; // 1/4 notes (4), 1/8 (8), 1/16 (16)
    this.sequencerEnabled = false; // Sequencer mode
    this.sequence = ["🍕", "🌶️", "🍄", "🧄"]; // Default sequence
    this.sequenceIndex = 0;
    this.pulseAmount = 0; // Current pulse intensity (0-1)
    this.pulseDuration = 200; // Milliseconds for pulse decay
    this.lastPulseTime = 0;
    this.onsetDetection = false; // Audio onset detection mode
    this.lastOnsetValue = 0;

    // Phase 11.7.14: Spatial layout & orbit dynamics
    this.orbitSpeed = 0.01; // Radians per frame for orbit rotation
    this.spiralRotation = 0; // Cumulative rotation for spiral
    this.gridSpacing = 1.0; // Grid cell spacing
    this.orbitRings = 3; // Number of orbital rings
    this.orbitRadii = []; // Radius for each particle's orbit

    // Phase 11.7.10: Per-instance data storage
    this.positions = [];
    this.velocities = [];
    this.baseScales = [];
    this.rotations = [];

    // Phase 11.7.11: Layout interpolation storage
    this.basePositions = []; // Original layout positions for morphing

    // Phase 11.7.18: Physics properties
    this.physicsMode = 'none'; // 'none', 'gravity', 'orbit', 'repulsion'
    this.accelerations = []; // Per-particle acceleration vectors
    this.vesselCenter = new THREE.Vector3(0, 0, 0); // Center point for orbit/repulsion
    this.mousePosition = new THREE.Vector3(0, 0, 0); // Mouse position in 3D space

    // Phase 11.7.19: Fusion & Cluster system
    this.clusters = []; // Array of active clusters { particleIndices: [], position: Vector3, scale: float, opacity: float }
    this.particleToCluster = new Map(); // Maps particle index → cluster ID
    this.nextClusterId = 0; // Cluster ID counter

    // Phase 11.7.50: Check for custom image, otherwise use emoji
    let texture;
    if (state.mandala?.useCustomImage && state.mandala?.customImage) {
      const loader = new THREE.TextureLoader();
      texture = loader.load(state.mandala.customImage,
        () => console.log(`🖼️ Initial mandala texture: ${state.mandala.customImageName || 'custom image'}`),
        undefined,
        (error) => {
          console.error('🖼️ Failed to load custom image, using emoji fallback:', error);
        }
      );
    } else {
      texture = this.createEmojiTexture(this.emoji, 128);
    }

    try {
      // Phase 11.7.10: Create instanced mesh for performance
      const geometry = new THREE.PlaneGeometry(1, 1);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
      });

      this.instancedMesh = new THREE.InstancedMesh(geometry, material, count);
      this.dummy = new THREE.Object3D();

      // Initialize per-instance data
      for (let i = 0; i < count; i++) {
        // Phase 11.7.7: Size variation (0.4-0.8 base scale)
        const baseScale = 0.4 + Math.random() * 0.4;
        this.baseScales.push(baseScale);

        // Phase 11.7.7: Per-particle velocity for continuous drift
        const velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        );
        this.velocities.push(velocity);

        // Initialize position (will be set by positionSprites)
        this.positions.push(new THREE.Vector3(0, 0, 0));

        // Initialize rotation
        this.rotations.push(0);

        // Phase 11.7.18: Initialize acceleration
        this.accelerations.push(new THREE.Vector3(0, 0, 0));
      }

      this.scene.add(this.instancedMesh);

      // Phase 11.7.5: Position sprites according to layout
      this.positionSprites();

      console.log(`🍕 EmojiParticles (instanced) initialized: ${count} x ${emoji}`);
    } catch (error) {
      console.warn("🍕 Instancing failed, using fallback sprite mode:", error);
      this.useInstancing = false;
      this.initSpriteFallback(texture);
    }

    // Phase 11.7.50: Listen for mandala image upload/clear events
    this.setupMandalaImageListeners();
  }

  // Phase 11.7.50: Setup event listeners for mandala image changes
  setupMandalaImageListeners() {
    window.addEventListener('mandala:imageSelected', () => {
      // Refresh texture when custom image is uploaded
      this.swapEmoji(this.emoji);
    });

    window.addEventListener('mandala:imageCleared', () => {
      // Refresh texture when custom image is cleared (return to emoji)
      this.swapEmoji(this.emoji);
    });
  }

  // Phase 11.7.10: Fallback sprite mode for unsupported browsers
  initSpriteFallback(texture) {
    this.sprites = [];
    for (let i = 0; i < this.count; i++) {
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.8
      });
      const sprite = new THREE.Sprite(material);
      sprite.userData.baseScale = this.baseScales[i];
      this.scene.add(sprite);
      this.sprites.push(sprite);
    }
    this.positionSprites();
    console.log(`🍕 EmojiParticles (fallback sprites) initialized: ${this.count} x ${this.emoji}`);
  }

  createEmojiTexture(emoji, size) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.font = `${size * 0.8}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(emoji, size / 2, size / 2);
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  update(audioLevel = 0) {
    // Phase 11.7.4: Safe fallback to prevent vanishing when audioMorph overrides audio.level
    const level = audioLevel ?? (state?.audio?.level ?? 0);
    const reactivity = this.audioReactivity; // Phase 11.7.8: apply reactivity multiplier

    // Phase 11.7.12: Auto-cycle emoji in set
    if (this.autoCycleEnabled && this.currentSet) {
      const now = performance.now();
      if (now - this.lastCycleTime >= this.cycleInterval) {
        this.cycleEmoji();
        this.lastCycleTime = now;
      }
    }

    // Phase 11.7.11: Audio band extraction
    const bass = state?.audio?.bass ?? 0;
    const mid = state?.audio?.mid ?? 0;
    const treble = state?.audio?.treble ?? 0;

    // Phase 11.7.13: Beat sync & sequencing
    const now = performance.now();

    // BPM-based beat detection
    if (this.beatSyncEnabled && this.bpm > 0) {
      const beatInterval = (60000 / this.bpm) / (this.subdivision / 4);
      this.beatInterval = beatInterval;

      if (now - this.lastBeatTime >= beatInterval) {
        this.triggerBeat();
        this.lastBeatTime = now;
      }
    }

    // Onset detection (audio RMS spike)
    if (this.onsetDetection) {
      const currentOnset = bass + mid + treble;
      const onsetThreshold = 0.5;
      if (currentOnset > onsetThreshold && currentOnset > this.lastOnsetValue * 1.5) {
        this.triggerBeat();
        console.log("🥁 Beat detected → pulse");
      }
      this.lastOnsetValue = currentOnset;
    }

    // Pulse decay
    if (this.pulseAmount > 0) {
      const pulseDecay = (now - this.lastPulseTime) / this.pulseDuration;
      this.pulseAmount = Math.max(0, 1 - pulseDecay);
    }

    // Phase 11.7.11: Morph weight influence (if linked)
    let morphBias = { cube: 0.25, sphere: 0.25, pyramid: 0.25, torus: 0.25 };
    if (this.linkedToSignals && state?.morphWeights) {
      const weights = state.morphWeights;
      const total = (weights.cube || 0) + (weights.sphere || 0) + (weights.pyramid || 0) + (weights.torus || 0);
      if (total > 0) {
        morphBias.cube = (weights.cube || 0) / total;
        morphBias.sphere = (weights.sphere || 0) / total;
        morphBias.pyramid = (weights.pyramid || 0) / total;
        morphBias.torus = (weights.torus || 0) / total;
      }
    }

    // Phase 11.7.18: Apply physics forces before position updates
    this.applyPhysics(level, bass, mid, treble);

    // Phase 11.7.18: Apply collision detection
    this.applyCollisions();

    // Phase 11.7.19: Apply fusion logic
    this.applyFusion(level);

    // Phase 11.7.20: Apply constellation geometry (overrides free motion if active)
    this.applyConstellation();

    // Phase 11.7.21: Apply mandala geometry (overrides constellation if enabled)
    this.applyMandala();

    if (this.useInstancing && this.instancedMesh) {
      // Phase 11.7.10: Instanced mesh update
      for (let i = 0; i < this.count; i++) {
        const pos = this.positions[i];
        const vel = this.velocities[i];
        const baseScale = this.baseScales[i];

        // Apply velocity (drift)
        pos.add(vel);

        // Phase 11.7.14: Orbit dynamics (audio-reactive rotation around vessel)
        if (this.layout === "orbit" || this.layout === "ring") {
          const orbitRotation = this.orbitSpeed * (1 + level * reactivity);
          const radius = this.orbitRadii[i] || 6;
          const baseAngle = (i / this.count) * Math.PI * 2;
          const angle = baseAngle + this.spiralRotation;
          pos.x = radius * Math.cos(angle);
          pos.z = radius * Math.sin(angle);
        }

        // Phase 11.7.14: Spiral rotation animation (cosmic swirl)
        if (this.layout === "spiral") {
          const angle = i * 0.3 + this.spiralRotation;
          const radius = 5 + i * 0.02;
          pos.x = Math.cos(angle) * radius;
          pos.z = Math.sin(angle) * radius;
          pos.y = i * 0.1; // Keep vertical spacing
        }

        // Phase 11.7.11: Bass → radial expansion
        if (this.linkedToSignals && bass > 0.1) {
          const direction = pos.clone().normalize();
          pos.add(direction.multiplyScalar(bass * 0.05 * reactivity));
        }

        // Boundary bounce
        const maxBound = 10;
        if (Math.abs(pos.x) > maxBound) {
          vel.x *= -1;
          pos.x = Math.sign(pos.x) * maxBound;
        }
        if (Math.abs(pos.y) > maxBound) {
          vel.y *= -1;
          pos.y = Math.sign(pos.y) * maxBound;
        }
        if (Math.abs(pos.z) > maxBound) {
          vel.z *= -1;
          pos.z = Math.sign(pos.z) * maxBound;
        }

        // Audio-reactive scale
        let scale = baseScale + level * 1.5 * reactivity;

        // Phase 11.7.13: Add beat pulse to scale
        if (this.pulseAmount > 0) {
          scale += this.pulseAmount * 0.3;
        }

        // Phase 11.7.19: Apply cluster scale if particle is in a cluster
        if (this.particleToCluster.has(i)) {
          const clusterId = this.particleToCluster.get(i);
          const cluster = this.clusters.find(c => c.id === clusterId);
          if (cluster) {
            scale = cluster.scale;
          }
        }

        // Phase 11.7.11: Mid → rotation speed boost
        const rotationBoost = this.linkedToSignals ? mid * 0.1 : 0;
        this.rotations[i] += (level * 0.05 + rotationBoost) * reactivity;

        // Update instance matrix
        this.dummy.position.copy(pos);
        this.dummy.scale.set(scale, scale, scale);
        this.dummy.rotation.z = this.rotations[i];
        this.dummy.updateMatrix();
        this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
      }

      // Phase 11.7.11/11.7.13: Treble sparkle + beat pulse opacity
      let opacity = 0.8;
      if (this.linkedToSignals && treble > 0.2) {
        opacity = 0.7 + treble * 0.3;
      }
      if (this.pulseAmount > 0) {
        opacity = Math.min(1.0, opacity + this.pulseAmount * 0.2);
      }
      this.instancedMesh.material.opacity = opacity;

      this.instancedMesh.instanceMatrix.needsUpdate = true;

      // Phase 11.7.14: Accumulate spiral/orbit rotation
      if (this.layout === "spiral" || this.layout === "orbit" || this.layout === "ring") {
        this.spiralRotation += this.orbitSpeed * (1 + level * 0.5);
      }

    } else if (this.sprites) {
      // Fallback sprite mode
      this.sprites.forEach((sprite, i) => {
        const baseScale = sprite.userData.baseScale || 0.5;
        const scale = baseScale + level * 1.5 * reactivity;
        sprite.scale.set(scale, scale, scale);
        sprite.material.rotation += level * 0.05 * reactivity;

        // Opacity shift
        sprite.material.opacity = 0.7 + level * 0.3 * reactivity;

        // Phase 11.7.7: Continuous drift with velocity
        const vel = this.velocities[i];
        sprite.position.add(vel);

        // Phase 11.7.7: Drift bounds - bounce off walls instead of reset
        const maxBound = 10;
        if (Math.abs(sprite.position.x) > maxBound) {
          vel.x *= -1;
          sprite.position.x = Math.sign(sprite.position.x) * maxBound;
        }
        if (Math.abs(sprite.position.y) > maxBound) {
          vel.y *= -1;
          sprite.position.y = Math.sign(sprite.position.y) * maxBound;
        }
        if (Math.abs(sprite.position.z) > maxBound) {
          vel.z *= -1;
          sprite.position.z = Math.sign(sprite.position.z) * maxBound;
        }
      });
    }
  }

  // Phase 11.7.18: Set physics mode
  setPhysicsMode(mode) {
    this.physicsMode = mode;
    console.log(`🌐 Emoji physics: ${mode}`);
  }

  // Phase 11.7.18: Apply physics forces
  applyPhysics(audioLevel, bass, mid, treble) {
    if (this.physicsMode === 'none') return;

    const { physicsMode: mode } = state.emojiPhysics || {};
    const gravityStr = state.emojiPhysics?.gravityStrength ?? 0.01;
    const orbitStr = state.emojiPhysics?.orbitStrength ?? 0.005;
    const repulsionStr = state.emojiPhysics?.repulsionStrength ?? 0.02;
    const audioMod = state.emojiPhysics?.audioModulation ?? true;

    for (let i = 0; i < this.count; i++) {
      const pos = this.positions[i];
      const vel = this.velocities[i];
      const accel = this.accelerations[i];

      // Reset acceleration
      accel.set(0, 0, 0);

      // Gravity mode
      if (this.physicsMode === 'gravity') {
        const gravityForce = audioMod ? gravityStr * (1 + bass * 2) : gravityStr;
        accel.y -= gravityForce;
      }

      // Orbit attraction mode
      else if (this.physicsMode === 'orbit') {
        const toCenter = new THREE.Vector3().subVectors(this.vesselCenter, pos);
        const distance = toCenter.length();
        if (distance > 0.1) {
          toCenter.normalize();
          const attractionForce = audioMod ? orbitStr * (1 + mid * 0.5) : orbitStr;
          accel.add(toCenter.multiplyScalar(attractionForce));
        }
      }

      // Repulsion mode
      else if (this.physicsMode === 'repulsion') {
        const fromCenter = new THREE.Vector3().subVectors(pos, this.vesselCenter);
        const distance = fromCenter.length();
        if (distance > 0.1) {
          fromCenter.normalize();
          const repelForce = audioMod ? repulsionStr * (1 + treble * 3) : repulsionStr;
          accel.add(fromCenter.multiplyScalar(repelForce));
        }
      }

      // Apply acceleration to velocity
      vel.add(accel);

      // Damping to prevent runaway speeds
      vel.multiplyScalar(0.98);
    }
  }

  // Phase 11.7.18: Collision detection and bouncing
  applyCollisions() {
    if (!state.emojiPhysics?.collisionEnabled) return;

    const collisionRadius = 0.5; // Radius for collision detection

    for (let i = 0; i < this.count; i++) {
      for (let j = i + 1; j < this.count; j++) {
        const pos1 = this.positions[i];
        const pos2 = this.positions[j];
        const vel1 = this.velocities[i];
        const vel2 = this.velocities[j];

        const delta = new THREE.Vector3().subVectors(pos1, pos2);
        const distance = delta.length();

        if (distance < collisionRadius * 2 && distance > 0) {
          // Collision detected - apply gentle bounce
          const overlap = collisionRadius * 2 - distance;
          const direction = delta.normalize();

          // Separate particles
          pos1.add(direction.clone().multiplyScalar(overlap * 0.5));
          pos2.sub(direction.clone().multiplyScalar(overlap * 0.5));

          // Exchange velocity components along collision axis
          const relativeVel = new THREE.Vector3().subVectors(vel1, vel2);
          const velAlongNormal = relativeVel.dot(direction);

          if (velAlongNormal < 0) {
            const restitution = 0.3; // Bounciness (0 = no bounce, 1 = perfect bounce)
            const impulse = direction.multiplyScalar(velAlongNormal * restitution);
            vel1.sub(impulse);
            vel2.add(impulse);
          }
        }
      }
    }
  }

  // Phase 11.7.18: Apply mouse swirl force
  applySwirlForce(mouseX, mouseY) {
    if (!state.emojiPhysics?.mouseInteraction) return;

    // Convert screen coords to 3D world space (simplified)
    this.mousePosition.set(
      (mouseX / window.innerWidth) * 20 - 10,
      -(mouseY / window.innerHeight) * 20 + 10,
      0
    );

    const swirlStrength = 0.05;
    const swirlRadius = 5;

    for (let i = 0; i < this.count; i++) {
      const pos = this.positions[i];
      const vel = this.velocities[i];
      const toMouse = new THREE.Vector3().subVectors(this.mousePosition, pos);
      const distance = toMouse.length();

      if (distance < swirlRadius && distance > 0.1) {
        // Tangential swirl force (perpendicular to radial direction)
        const tangent = new THREE.Vector3(-toMouse.y, toMouse.x, 0).normalize();
        const falloff = 1 - (distance / swirlRadius);
        vel.add(tangent.multiplyScalar(swirlStrength * falloff));
      }
    }
  }

  // Phase 11.7.19: Detect fusion events and create/update clusters
  applyFusion(audioLevel = 0) {
    if (!state.emojiFusion?.enabled) return;

    const threshold = state.emojiFusion?.threshold ?? 1.0;
    const fusionOccurred = new Set();

    // Check for overlapping particles
    for (let i = 0; i < this.count; i++) {
      if (this.particleToCluster.has(i)) continue; // Skip already clustered particles

      for (let j = i + 1; j < this.count; j++) {
        if (this.particleToCluster.has(j)) continue;

        const pos1 = this.positions[i];
        const pos2 = this.positions[j];
        const distance = pos1.distanceTo(pos2);

        // Fusion threshold detected
        if (distance < threshold) {
          // Create new cluster
          const clusterId = this.nextClusterId++;
          const clusterPosition = new THREE.Vector3().addVectors(pos1, pos2).multiplyScalar(0.5);

          const cluster = {
            id: clusterId,
            particleIndices: [i, j],
            position: clusterPosition,
            scale: this.baseScales[i] + this.baseScales[j], // Combined scale
            opacity: 0.9,
            driftVelocity: new THREE.Vector3(
              (this.velocities[i].x + this.velocities[j].x) * 0.5,
              (this.velocities[i].y + this.velocities[j].y) * 0.5,
              (this.velocities[i].z + this.velocities[j].z) * 0.5
            ),
            createdAt: performance.now()
          };

          this.clusters.push(cluster);
          this.particleToCluster.set(i, clusterId);
          this.particleToCluster.set(j, clusterId);
          fusionOccurred.add(clusterId);

          // Console log fusion event
          console.log(`⚡ ${this.emoji} + ${this.emoji} fused → cluster #${clusterId}`);
        }
      }
    }

    // Update cluster dynamics (breathing, drift)
    this.updateClusters(audioLevel);

    // Check for cluster decay (particles drifting apart)
    this.checkClusterDecay(threshold);
  }

  // Phase 11.7.19: Update cluster dynamics (breathing, opacity pulse, drift)
  updateClusters(audioLevel = 0) {
    const now = performance.now();
    const bass = state?.audio?.bass ?? 0;
    const mid = state?.audio?.mid ?? 0;

    for (const cluster of this.clusters) {
      // Breathing effect: scale grows with audio level
      const breathingScale = 1 + audioLevel * 0.5;
      cluster.scale *= breathingScale;

      // Opacity pulses with mid-range audio
      cluster.opacity = 0.85 + mid * 0.15;

      // Slow drift apart (unless reinforced by audio)
      if (audioLevel < 0.1) {
        const decayRate = 0.001;
        cluster.driftVelocity.multiplyScalar(1 - decayRate);
      }

      // Apply drift to cluster position
      cluster.position.add(cluster.driftVelocity);

      // Update constituent particle positions to match cluster
      for (const particleIdx of cluster.particleIndices) {
        this.positions[particleIdx].copy(cluster.position);
      }
    }
  }

  // Phase 11.7.19: Check if clusters should decay (particles drift apart)
  checkClusterDecay(threshold) {
    const clustersToRemove = [];

    for (let i = 0; i < this.clusters.length; i++) {
      const cluster = this.clusters[i];
      const age = performance.now() - cluster.createdAt;

      // If cluster is old and low audio, allow decay
      if (age > 5000 && (state?.audio?.level ?? 0) < 0.1) {
        // Release particles back to independent motion
        for (const particleIdx of cluster.particleIndices) {
          this.particleToCluster.delete(particleIdx);
          // Restore original velocity with small random jitter
          this.velocities[particleIdx].set(
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01
          );
        }
        clustersToRemove.push(i);
        console.log(`💥 Cluster #${cluster.id} decayed → particles restored`);
      }
    }

    // Remove decayed clusters (reverse order to preserve indices)
    for (let i = clustersToRemove.length - 1; i >= 0; i--) {
      this.clusters.splice(clustersToRemove[i], 1);
    }
  }

  // Phase 11.7.20: Generate constellation pattern positions
  generateConstellationPositions() {
    const { type, scale, customPattern } = state.emojiConstellations || {};
    const positions = [];

    switch (type) {
      case 'Line':
        // Simple line of particles
        for (let i = 0; i < this.count; i++) {
          const t = (i / (this.count - 1)) - 0.5; // -0.5 to 0.5
          positions.push(new THREE.Vector3(t * scale * 2, 0, 0));
        }
        break;

      case 'Triangle':
        // Equilateral triangle
        for (let i = 0; i < this.count; i++) {
          const angle = (i / this.count) * Math.PI * 2;
          const side = i % 3;
          if (side === 0) {
            positions.push(new THREE.Vector3(
              Math.cos(angle) * scale,
              Math.sin(angle) * scale,
              0
            ));
          } else if (side === 1) {
            positions.push(new THREE.Vector3(
              Math.cos(angle + Math.PI * 2/3) * scale,
              Math.sin(angle + Math.PI * 2/3) * scale,
              0
            ));
          } else {
            positions.push(new THREE.Vector3(
              Math.cos(angle + Math.PI * 4/3) * scale,
              Math.sin(angle + Math.PI * 4/3) * scale,
              0
            ));
          }
        }
        break;

      case 'Star':
        // 5-point star
        for (let i = 0; i < this.count; i++) {
          const angle = (i / this.count) * Math.PI * 2;
          const isOuter = i % 2 === 0;
          const radius = isOuter ? scale : scale * 0.4;
          positions.push(new THREE.Vector3(
            Math.cos(angle - Math.PI / 2) * radius,
            Math.sin(angle - Math.PI / 2) * radius,
            0
          ));
        }
        break;

      case 'Spiral':
        // Golden spiral / Fibonacci
        for (let i = 0; i < this.count; i++) {
          const theta = i * 0.5; // Spiral tightness
          const radius = scale * Math.sqrt(i / this.count);
          positions.push(new THREE.Vector3(
            Math.cos(theta) * radius,
            Math.sin(theta) * radius,
            i * 0.05 // Slight vertical offset
          ));
        }
        break;

      case 'CircleOf5ths':
        // Musical Circle of Fifths (12 positions)
        const fifthsOrder = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5]; // Chromatic fifths
        for (let i = 0; i < this.count; i++) {
          const noteIndex = i % 12;
          const position = fifthsOrder[noteIndex];
          const angle = (position / 12) * Math.PI * 2 - Math.PI / 2;
          const ring = Math.floor(i / 12);
          const radius = scale * (1 + ring * 0.3);
          positions.push(new THREE.Vector3(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            ring * 0.2
          ));
        }
        break;

      case 'Platonic':
        // Icosahedron vertices (20-sided platonic solid)
        const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
        const vertices = [
          [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
          [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
          [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1]
        ];
        for (let i = 0; i < this.count; i++) {
          const v = vertices[i % vertices.length];
          const scaleFactor = scale / 2;
          positions.push(new THREE.Vector3(
            v[0] * scaleFactor,
            v[1] * scaleFactor,
            v[2] * scaleFactor
          ));
        }
        break;

      case 'Custom':
        // Load from custom pattern JSON
        if (customPattern && customPattern.positions) {
          for (let i = 0; i < this.count; i++) {
            const p = customPattern.positions[i % customPattern.positions.length];
            positions.push(new THREE.Vector3(
              p.x * scale,
              p.y * scale,
              (p.z || 0) * scale
            ));
          }
        }
        break;

      default:
        // No constellation - return null to use default layout
        return null;
    }

    return positions;
  }

  // Phase 11.7.20: Apply constellation layout
  applyConstellation() {
    const { type, rotation, audioSync, beatSync } = state.emojiConstellations || {};

    if (type === 'None') return;

    const constellationPositions = this.generateConstellationPositions();
    if (!constellationPositions) return;

    const audioLevel = state?.audio?.level ?? 0;
    const rotationAngle = rotation + (audioSync ? audioLevel * 0.5 : 0);

    // Apply constellation positions with rotation
    for (let i = 0; i < this.count; i++) {
      if (i < constellationPositions.length) {
        const basePos = constellationPositions[i];

        // Apply rotation around Y axis
        const rotatedX = basePos.x * Math.cos(rotationAngle) - basePos.z * Math.sin(rotationAngle);
        const rotatedZ = basePos.x * Math.sin(rotationAngle) + basePos.z * Math.cos(rotationAngle);

        this.positions[i].set(rotatedX, basePos.y, rotatedZ);

        // Beat pulse scale
        if (beatSync && this.pulseAmount > 0) {
          const pulseScale = 1 + this.pulseAmount * 0.2;
          this.positions[i].multiplyScalar(pulseScale);
        }
      }
    }

    // Update rotation
    const rotSpeed = state.emojiConstellations?.rotationSpeed ?? 0.01;
    state.emojiConstellations.rotation += rotSpeed;
  }

  // Phase 11.7.21/11.7.22/11.7.26: Generate mandala pattern positions (with musical mode + layout modes)
  generateMandalaPositions() {
    const { enabled, rings, symmetry, ringRadii, musicalMode, scale, rootNote, layoutMode } = state.emojiMandala || {};
    if (!enabled) return null;

    const positions = [];
    const particleRingAssignment = []; // Track which ring each particle belongs to
    const particleNoteAssignment = []; // Track MIDI note for each particle (Phase 11.7.22)
    let particleIndex = 0;

    // Phase 11.7.22: Get scale intervals
    const scaleIntervals = musicalMode ? (MUSICAL_SCALES[scale] || MUSICAL_SCALES.Major) : null;

    // Phase 11.7.26: Layout mode (radial, spiral, grid)
    const mode = layoutMode || 'radial';
    const spiralOffset = Math.PI / 6; // 30 degrees per ring

    for (let ring = 0; ring < rings && ring < 6; ring++) {
      const radius = ringRadii[ring] || (ring * 2);
      let particlesInRing = ring === 0 ? 1 : symmetry;

      // Phase 11.7.22: Musical mode overrides particle count with scale notes
      if (musicalMode && scaleIntervals && ring > 0) {
        particlesInRing = scaleIntervals.length;
      }

      for (let i = 0; i < particlesInRing; i++) {
        if (particleIndex >= this.count) break;

        if (ring === 0) {
          // Center particle (root note in musical mode)
          positions.push(new THREE.Vector3(0, 0, 0));
          particleNoteAssignment.push(rootNote); // Root note
        } else {
          // Phase 11.7.26: Calculate position based on layout mode
          let x, y, z = 0;
          let angle;
          let midiNote = rootNote;

          // Calculate base angle
          if (musicalMode && scaleIntervals) {
            // Use Circle of Fifths spacing
            const interval = scaleIntervals[i % scaleIntervals.length];
            const fifthsIndex = CIRCLE_OF_FIFTHS.indexOf(interval);
            angle = (fifthsIndex / 12) * Math.PI * 2 - Math.PI / 2; // Start at top
            midiNote = rootNote + interval + (Math.floor(ring / 2) * 12); // Higher rings = higher octaves
          } else {
            // Standard symmetry spacing
            angle = (i / particlesInRing) * Math.PI * 2;
          }

          // Apply layout mode
          if (mode === 'spiral') {
            // Spiral: Add offset per ring to create Fibonacci-like spiral
            angle += ring * spiralOffset;
            x = Math.cos(angle) * radius;
            y = Math.sin(angle) * radius;
          } else if (mode === 'grid') {
            // Grid: XY lattice arrangement (ignore angle)
            const gridSize = Math.ceil(Math.sqrt(particlesInRing));
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;
            const spacing = (radius * 2) / gridSize;
            x = (col - gridSize / 2) * spacing + spacing / 2;
            y = (row - gridSize / 2) * spacing + spacing / 2 + (ring * 2); // Offset by ring
          } else {
            // Radial (default): Concentric rings
            x = Math.cos(angle) * radius;
            y = Math.sin(angle) * radius;
          }

          positions.push(new THREE.Vector3(x, y, z));
          particleNoteAssignment.push(midiNote);
        }

        particleRingAssignment.push(ring);
        particleIndex++;
      }
    }

    // Fill remaining particles if any
    while (particleIndex < this.count) {
      positions.push(new THREE.Vector3(0, 0, 0));
      particleRingAssignment.push(rings - 1);
      particleNoteAssignment.push(rootNote);
      particleIndex++;
    }

    return { positions, particleRingAssignment, particleNoteAssignment };
  }

  // Phase 11.7.21/11.7.22/11.7.23/11.7.27: Apply mandala layout with layered audio + differential rotation + audio pulse
  applyMandala() {
    const { enabled, rotation, rotationSpeed, audioModulation, layeredAudio, musicalMode, activeNotes, notePulse,
            differentialRotation, ringRotationSpeeds, scaleSequenceEnabled, scaleSequence, scaleSequenceIndex,
            scaleSequenceInterval, lastScaleChange, mandalaAudioReactive, radiusPulse, anglePulse } = state.emojiMandala || {};
    if (!enabled) return;

    // Phase 11.7.23: Scale sequencing
    if (scaleSequenceEnabled && scaleSequence && scaleSequence.length > 0) {
      const now = performance.now();
      if (now - lastScaleChange >= scaleSequenceInterval) {
        const nextIndex = (scaleSequenceIndex + 1) % scaleSequence.length;
        state.emojiMandala.scaleSequenceIndex = nextIndex;
        state.emojiMandala.scale = scaleSequence[nextIndex];
        state.emojiMandala.lastScaleChange = now;
        console.log(`🎛️ Scale sequence → ${scaleSequence[nextIndex]}`);
      }
    }

    const mandalaData = this.generateMandalaPositions();
    if (!mandalaData) return;

    const { positions: mandalaPositions, particleRingAssignment, particleNoteAssignment } = mandalaData;
    const audioLevel = state?.audio?.level ?? 0;
    const bass = state?.audio?.bass ?? 0;
    const mid = state?.audio?.mid ?? 0;
    const treble = state?.audio?.treble ?? 0;

    // Apply mandala positions with rotation and layered audio scaling
    for (let i = 0; i < this.count; i++) {
      if (i < mandalaPositions.length) {
        const basePos = mandalaPositions[i];
        const ringIndex = particleRingAssignment[i];

        // Phase 11.7.23: Differential rotation per ring
        let rotationAngle;
        if (differentialRotation && ringRotationSpeeds) {
          const ringSpeed = ringRotationSpeeds[ringIndex] || 0.01;

          // Audio-reactive: outer rings (treble) spin faster
          const audioBoost = audioModulation ? (
            ringIndex === 0 ? bass * 0.2 :
            ringIndex <= 2 ? mid * 0.3 :
            treble * 0.5
          ) : 0;

          const effectiveSpeed = ringSpeed * (1 + audioBoost);

          // Initialize ring rotation tracking
          if (!this.ringRotations) this.ringRotations = Array(6).fill(0);
          this.ringRotations[ringIndex] += effectiveSpeed;
          rotationAngle = this.ringRotations[ringIndex];
        } else {
          // Global rotation (audio-modulated if enabled)
          rotationAngle = rotation + (audioModulation ? audioLevel * 0.3 : 0);
        }

        // Phase 11.7.27: Add angle pulse (symmetry twist on beats)
        if (mandalaAudioReactive && anglePulse) {
          rotationAngle += anglePulse;
        }

        // Phase 11.7.27: Apply radius pulse (mandala expansion on beats)
        const radiusScale = mandalaAudioReactive ? (1 + (radiusPulse || 0)) : 1.0;

        // Apply rotation around Z axis (top-down view)
        const rotatedX = basePos.x * Math.cos(rotationAngle) - basePos.y * Math.sin(rotationAngle);
        const rotatedY = basePos.x * Math.sin(rotationAngle) + basePos.y * Math.cos(rotationAngle);

        // Layered audio reactivity: different rings scale with different bands
        let audioScale = 1.0;
        if (layeredAudio) {
          if (ringIndex === 0) {
            // Center: bass
            audioScale = 1.0 + bass * 0.3;
          } else if (ringIndex <= 1) {
            // Inner rings: bass
            audioScale = 1.0 + bass * 0.2;
          } else if (ringIndex <= 3) {
            // Middle rings: mids
            audioScale = 1.0 + mid * 0.25;
          } else {
            // Outer rings: treble
            audioScale = 1.0 + treble * 0.3;
          }
        } else {
          audioScale = 1.0 + audioLevel * 0.2;
        }

        // Phase 11.7.22: Add MIDI note pulse in musical mode
        if (musicalMode && particleNoteAssignment[i] !== undefined) {
          const midiNote = particleNoteAssignment[i];
          const pulse = notePulse[midiNote] || 0;
          audioScale += pulse * 0.5; // Additional pulse from MIDI note

          // Store note for particle (for later reference)
          if (!this.particleNoteMap) this.particleNoteMap = {};
          this.particleNoteMap[i] = midiNote;
        }

        // Phase 11.7.27: Combine radius pulse with audio scale + emoji scale
        const finalScale = audioScale * radiusScale;

        this.positions[i].set(
          rotatedX * finalScale,
          rotatedY * finalScale,
          basePos.z
        );

        // Store ring index in particle metadata for later use
        if (!this.particleRingIndex) this.particleRingIndex = [];
        this.particleRingIndex[i] = ringIndex;
      }
    }

    // Update rotation
    const baseRotSpeed = rotationSpeed ?? 0.02;
    const finalRotSpeed = audioModulation ? baseRotSpeed * (1 + audioLevel * 2) : baseRotSpeed;
    state.emojiMandala.rotation += finalRotSpeed;
  }

  // Phase 11.7.5/11.7.10: Position instances or sprites based on current layout
  positionSprites() {
    const positionInstance = (i, pos) => {
      if (this.useInstancing && this.instancedMesh) {
        this.positions[i].copy(pos);
        const baseScale = this.baseScales[i];
        this.dummy.position.copy(pos);
        this.dummy.scale.set(baseScale, baseScale, baseScale);
        this.dummy.rotation.z = this.rotations[i];
        this.dummy.updateMatrix();
        this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
      } else if (this.sprites && this.sprites[i]) {
        this.sprites[i].position.copy(pos);
      }
    };

    for (let i = 0; i < this.count; i++) {
      const pos = new THREE.Vector3();

      if (this.layout === "cube") {
        pos.set(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        );
      } else if (this.layout === "sphere") {
        const r = 5;
        const theta = Math.acos(2 * Math.random() - 1);
        const phi = 2 * Math.PI * Math.random();
        pos.set(
          r * Math.sin(theta) * Math.cos(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(theta)
        );
      } else if (this.layout === "ring" || this.layout === "orbit") {
        // Phase 11.7.14: Multi-ring orbit with stored radii
        const ringIndex = i % this.orbitRings;
        const r = 4 + ringIndex * 2; // Rings at r=4, 6, 8...
        this.orbitRadii[i] = r; // Store for dynamic rotation
        const angle = (i / this.count) * Math.PI * 2;
        pos.set(
          r * Math.cos(angle),
          0,
          r * Math.sin(angle)
        );
      } else if (this.layout === "random") {
        pos.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
      } else if (this.layout === "spiral") {
        const angle = i * 0.3;
        const radius = 5 + i * 0.02;
        pos.set(
          Math.cos(angle) * radius,
          i * 0.1,
          Math.sin(angle) * radius
        );
      } else if (this.layout === "wave") {
        // Phase 11.7.14: Enhanced grid with configurable spacing
        const gridWidth = Math.ceil(Math.sqrt(this.count));
        const x = (i % gridWidth) * this.gridSpacing - (gridWidth * this.gridSpacing) / 2;
        const z = Math.floor(i / gridWidth) * this.gridSpacing - (gridWidth * this.gridSpacing) / 2;
        pos.set(x, Math.sin((x + z) * 0.5) * 2, z);
      } else if (this.layout === "burst") {
        const r = Math.random() * 2;
        const theta = Math.acos(2 * Math.random() - 1);
        const phi = 2 * Math.PI * Math.random();
        pos.set(
          r * Math.sin(theta) * Math.cos(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(theta)
        );
        // Set outward velocity for burst effect
        const vel = this.velocities[i];
        const direction = pos.clone().normalize();
        vel.copy(direction.multiplyScalar(0.02));
      }

      positionInstance(i, pos);
    }

    // Update instance matrix after all positions set
    if (this.useInstancing && this.instancedMesh) {
      this.instancedMesh.instanceMatrix.needsUpdate = true;
    }
  }

  // Phase 11.7.5: Set layout and reposition all sprites
  setLayout(layout) {
    this.layout = layout;
    this.positionSprites();
    console.log(`🍕 Emoji layout set to: ${layout}`);
  }

  // Phase 11.7.8: Set audio reactivity multiplier
  setAudioReactivity(value) {
    this.audioReactivity = value;
    console.log(`🍕 Emoji audio reactivity = ${value.toFixed(1)}x`);
  }

  // Phase 11.7.11: Toggle signal linking (morph/audio)
  setSignalLinking(enabled) {
    this.linkedToSignals = enabled;
    if (enabled) {
      console.log("🍕 EmojiParticles linked to morph/audio");
    } else {
      console.log("🍕 EmojiParticles unlinked from signals");
    }
  }

  // Phase 11.7.12: Load emoji set
  loadEmojiSet(setName) {
    if (!EMOJI_SETS[setName]) {
      console.warn(`🍕 Unknown emoji set: ${setName}`);
      return;
    }
    this.currentSet = setName;
    this.currentSetIndex = 0;
    this.emoji = EMOJI_SETS[setName][0];
    this.swapEmoji(this.emoji);
    console.log(`🍕 Emoji set loaded: ${setName}`);
  }

  // Phase 11.7.12: Cycle to next emoji in current set
  cycleEmoji() {
    if (!this.currentSet || !EMOJI_SETS[this.currentSet]) {
      console.warn("🍕 No emoji set active for cycling");
      return;
    }
    const set = EMOJI_SETS[this.currentSet];
    this.currentSetIndex = (this.currentSetIndex + 1) % set.length;
    this.emoji = set[this.currentSetIndex];
    this.swapEmoji(this.emoji);
    console.log(`🍕 Emoji cycled: ${this.emoji}`);
  }

  // Phase 11.7.12: Toggle auto-cycle mode
  setAutoCycle(enabled, interval = 4000) {
    this.autoCycleEnabled = enabled;
    this.cycleInterval = interval;
    this.lastCycleTime = performance.now();
    if (enabled) {
      console.log(`🍕 Emoji auto-cycle enabled (${interval}ms interval)`);
    } else {
      console.log("🍕 Emoji auto-cycle disabled");
    }
  }

  // Phase 11.7.13: Set BPM for beat sync
  setBPM(bpm) {
    this.bpm = bpm;
    console.log(`🥁 Emoji sync at ${bpm} BPM`);
  }

  // Phase 11.7.13: Toggle beat sync
  setBeatSync(enabled) {
    this.beatSyncEnabled = enabled;
    this.lastBeatTime = performance.now();
    if (enabled) {
      console.log(`🥁 Beat sync enabled at ${this.bpm} BPM`);
    } else {
      console.log("🥁 Beat sync disabled");
    }
  }

  // Phase 11.7.13: Set subdivision (4=quarter, 8=eighth, 16=sixteenth)
  setSubdivision(subdivision) {
    this.subdivision = subdivision;
    const noteNames = { 4: "1/4", 8: "1/8", 16: "1/16" };
    console.log(`🥁 Emoji subdivision = ${noteNames[subdivision] || subdivision} notes`);
  }

  // Phase 11.7.13: Toggle onset detection
  setOnsetDetection(enabled) {
    this.onsetDetection = enabled;
    if (enabled) {
      console.log("🥁 Onset detection enabled");
    } else {
      console.log("🥁 Onset detection disabled");
    }
  }

  // Phase 11.7.13: Toggle sequencer mode
  setSequencer(enabled, sequence = ["🍕", "🌶️", "🍄", "🧄"]) {
    this.sequencerEnabled = enabled;
    this.sequence = sequence;
    this.sequenceIndex = 0;
    if (enabled) {
      console.log(`🥁 Sequencer ON: ${sequence.join(" → ")}`);
    } else {
      console.log("🥁 Sequencer OFF");
    }
  }

  // Phase 11.7.13: Trigger beat pulse and sequencer step
  triggerBeat() {
    this.pulseAmount = 1.0;
    this.lastPulseTime = performance.now();

    // Sequencer: advance to next emoji
    if (this.sequencerEnabled && this.sequence.length > 0) {
      this.emoji = this.sequence[this.sequenceIndex];
      this.swapEmoji(this.emoji);
      console.log(`🥁 Step ${this.sequenceIndex + 1}/${this.sequence.length} → ${this.emoji}`);
      this.sequenceIndex = (this.sequenceIndex + 1) % this.sequence.length;
    }
  }

  // Phase 11.7.12: Toggle story mode
  setStoryMode(enabled, sequence = ["pizza", "cosmos", "myth"]) {
    this.storyMode = enabled;
    this.storySequence = sequence;
    this.storyIndex = 0;
    if (enabled) {
      this.loadEmojiSet(sequence[0]);
      console.log(`📖 Story mode enabled: ${sequence.join(" → ")}`);
    } else {
      console.log("📖 Story mode disabled");
    }
  }

  // Phase 11.7.12: Advance to next set in story
  advanceStory() {
    if (!this.storyMode || this.storySequence.length === 0) {
      console.warn("📖 Story mode not active");
      return;
    }
    this.storyIndex = (this.storyIndex + 1) % this.storySequence.length;
    const nextSet = this.storySequence[this.storyIndex];
    this.loadEmojiSet(nextSet);
    console.log(`📖 Story advanced → ${nextSet} set`);
  }

  // Phase 11.7.10/11.7.50: Swap emoji texture (instanced or sprite mode) with custom image support
  swapEmoji(newEmoji) {
    this.emoji = newEmoji;

    // Phase 11.7.50: Check if custom image should be used instead of emoji
    let texture;
    if (state.mandala?.useCustomImage && state.mandala?.customImage) {
      // Load custom image texture from data URL
      const loader = new THREE.TextureLoader();
      texture = loader.load(state.mandala.customImage,
        () => {
          console.log(`🖼️ Custom mandala image loaded: ${state.mandala.customImageName || 'uploaded image'}`);
          // Update material after texture loads
          if (this.useInstancing && this.instancedMesh) {
            this.instancedMesh.material.needsUpdate = true;
          } else if (this.sprites) {
            this.sprites.forEach(sprite => sprite.material.needsUpdate = true);
          }
        },
        undefined,
        (error) => {
          console.error('🖼️ Failed to load custom mandala image, falling back to emoji:', error);
          // Fallback to emoji on error
          const fallbackTexture = this.createEmojiTexture(newEmoji, 128);
          this.applyTexture(fallbackTexture);
        }
      );
    } else {
      // Use emoji texture
      texture = this.createEmojiTexture(newEmoji, 128);
    }

    this.applyTexture(texture);

    const sourceType = (state.mandala?.useCustomImage && state.mandala?.customImage) ? 'custom image' : 'emoji';
    console.log(`🍕 Texture updated: ${sourceType} ${sourceType === 'emoji' ? newEmoji : '(' + (state.mandala?.customImageName || 'uploaded') + ')'}`);
  }

  // Phase 11.7.50: Helper to apply texture to instanced mesh or sprites
  applyTexture(texture) {
    if (this.useInstancing && this.instancedMesh) {
      // Update instanced mesh material texture
      if (this.instancedMesh.material.map) {
        this.instancedMesh.material.map.dispose();
      }
      this.instancedMesh.material.map = texture;
      this.instancedMesh.material.needsUpdate = true;
    } else if (this.sprites) {
      // Fallback sprite mode
      this.sprites.forEach(sprite => {
        if (sprite.material.map) {
          sprite.material.map.dispose();
        }
        sprite.material.map = texture;
        sprite.material.needsUpdate = true;
      });
    }
  }

  // Phase 11.7.10: Dispose (instanced or sprite mode)
  dispose() {
    if (this.useInstancing && this.instancedMesh) {
      this.scene.remove(this.instancedMesh);
      this.instancedMesh.geometry.dispose();
      this.instancedMesh.material.dispose();
      if (this.instancedMesh.material.map) {
        this.instancedMesh.material.map.dispose();
      }
      this.instancedMesh = null;
      console.log("🍕 EmojiParticles (instanced) disposed");
    } else if (this.sprites) {
      this.sprites.forEach(sprite => {
        this.scene.remove(sprite);
        sprite.material.dispose();
        if (sprite.material.map) sprite.material.map.dispose();
      });
      this.sprites = [];
      console.log("🍕 EmojiParticles disposed");
    }

    this.positions = [];
    this.velocities = [];
    this.baseScales = [];
    this.rotations = [];
  }
}

// Phase 11.7.15: Emoji Mixer & Multiple Streams Manager
export class EmojiStreamManager {
  constructor(scene) {
    this.scene = scene;
    this.streams = new Map(); // Map<emoji, EmojiParticles>
    console.log("🎨 EmojiStreamManager initialized");
  }

  // Add a new emoji stream
  addStream(emoji, count = 100, enabled = true) {
    if (this.streams.has(emoji)) {
      console.warn(`🎨 Stream already exists: ${emoji}`);
      return;
    }

    const stream = new EmojiParticles(this.scene, count, emoji);
    stream.enabled = enabled;

    if (!enabled) {
      // If disabled, remove from scene immediately
      if (stream.instancedMesh) {
        this.scene.remove(stream.instancedMesh);
      }
    }

    this.streams.set(emoji, stream);
    console.log(`${emoji} Stream added: ${count}`);
  }

  // Remove and dispose a stream
  removeStream(emoji) {
    const stream = this.streams.get(emoji);
    if (!stream) {
      console.warn(`🎨 Stream not found: ${emoji}`);
      return;
    }

    stream.dispose();
    this.streams.delete(emoji);
    console.log(`${emoji} Stream disposed`);
  }

  // Toggle stream visibility without disposing
  toggleStream(emoji, enabled) {
    const stream = this.streams.get(emoji);
    if (!stream) {
      console.warn(`🎨 Stream not found: ${emoji}`);
      return;
    }

    stream.enabled = enabled;

    if (enabled) {
      // Re-add to scene
      if (stream.instancedMesh && !this.scene.children.includes(stream.instancedMesh)) {
        this.scene.add(stream.instancedMesh);
      }
      console.log(`${emoji} Stream enabled`);
    } else {
      // Remove from scene but keep in memory
      if (stream.instancedMesh) {
        this.scene.remove(stream.instancedMesh);
      }
      console.log(`${emoji} Stream disabled`);
    }
  }

  // Update stream count (recreate with new count)
  updateStreamCount(emoji, newCount) {
    const stream = this.streams.get(emoji);
    if (!stream) {
      console.warn(`🎨 Stream not found: ${emoji}`);
      return;
    }

    const wasEnabled = stream.enabled;
    const layout = stream.layout;
    const audioReactivity = stream.audioReactivity;

    // Dispose old stream
    stream.dispose();

    // Create new stream with updated count
    const newStream = new EmojiParticles(this.scene, newCount, emoji);
    newStream.enabled = wasEnabled;
    newStream.setLayout(layout);
    newStream.setAudioReactivity(audioReactivity);

    if (!wasEnabled && newStream.instancedMesh) {
      this.scene.remove(newStream.instancedMesh);
    }

    this.streams.set(emoji, newStream);
    console.log(`${emoji} Count updated: ${newCount}`);
  }

  // Update all active streams
  update(audioLevel) {
    this.streams.forEach((stream, emoji) => {
      if (stream.enabled) {
        stream.update(audioLevel);
      }
    });
  }

  // Phase 11.7.18: Set physics mode for all streams
  setPhysicsMode(mode) {
    this.streams.forEach((stream, emoji) => {
      stream.setPhysicsMode(mode);
    });
  }

  // Get all streams as array (for state sync)
  getStreamsArray() {
    const arr = [];
    this.streams.forEach((stream, emoji) => {
      arr.push({
        emoji,
        count: stream.count,
        enabled: stream.enabled
      });
    });
    return arr;
  }

  // Load streams from state array
  loadStreams(streamsArray) {
    // Clear existing streams
    this.streams.forEach((stream, emoji) => {
      stream.dispose();
    });
    this.streams.clear();

    // Add new streams from array
    streamsArray.forEach(({ emoji, count, enabled }) => {
      this.addStream(emoji, count, enabled);
    });

    console.log(`🎨 Loaded ${streamsArray.length} emoji streams`);
  }

  // Dispose all streams
  dispose() {
    this.streams.forEach((stream, emoji) => {
      stream.dispose();
    });
    this.streams.clear();
    console.log("🎨 EmojiStreamManager disposed");
  }
}

// Phase 11.7.16: Emoji Sequencer & Timeline
export class EmojiSequencer {
  constructor(streamManager) {
    this.streamManager = streamManager;
    this.enabled = false;
    this.bpm = 120;
    this.currentBeat = 0;
    this.patterns = {}; // { emoji: [1,0,1,0,...] }
    this.timelineLength = 16;
    this.lastBeatTime = performance.now();
    this.beatInterval = (60000 / this.bpm); // milliseconds per beat

    console.log("🎶 EmojiSequencer initialized");
  }

  // Set BPM and recalculate beat interval
  setBPM(bpm) {
    this.bpm = bpm;
    this.beatInterval = (60000 / this.bpm);
    console.log(`🎶 Sequencer BPM set to ${bpm}`);
  }

  // Set timeline length (number of beats)
  setTimelineLength(length) {
    this.timelineLength = length;
    // Extend or truncate existing patterns
    Object.keys(this.patterns).forEach(emoji => {
      const pattern = this.patterns[emoji];
      if (pattern.length < length) {
        // Extend with zeros
        this.patterns[emoji] = [...pattern, ...new Array(length - pattern.length).fill(0)];
      } else if (pattern.length > length) {
        // Truncate
        this.patterns[emoji] = pattern.slice(0, length);
      }
    });
    console.log(`🎶 Timeline length set to ${length} beats`);
  }

  // Set pattern for an emoji
  setPattern(emoji, pattern) {
    if (!Array.isArray(pattern)) {
      console.warn(`🎶 Invalid pattern for ${emoji}`);
      return;
    }
    // Ensure pattern matches timeline length
    if (pattern.length !== this.timelineLength) {
      const adjusted = new Array(this.timelineLength).fill(0);
      for (let i = 0; i < Math.min(pattern.length, this.timelineLength); i++) {
        adjusted[i] = pattern[i];
      }
      this.patterns[emoji] = adjusted;
    } else {
      this.patterns[emoji] = [...pattern];
    }
    console.log(`🎶 Pattern set for ${emoji}: ${this.patterns[emoji].join('')}`);
  }

  // Toggle beat in pattern
  toggleBeat(emoji, beatIndex) {
    if (!this.patterns[emoji]) {
      this.patterns[emoji] = new Array(this.timelineLength).fill(0);
    }
    this.patterns[emoji][beatIndex] = this.patterns[emoji][beatIndex] ? 0 : 1;
    console.log(`🎶 ${emoji} beat ${beatIndex}: ${this.patterns[emoji][beatIndex] ? 'ON' : 'OFF'}`);
    return this.patterns[emoji][beatIndex];
  }

  // Get pattern for emoji (create if doesn't exist)
  getPattern(emoji) {
    if (!this.patterns[emoji]) {
      this.patterns[emoji] = new Array(this.timelineLength).fill(0);
    }
    return this.patterns[emoji];
  }

  // Enable/disable sequencer
  setEnabled(enabled) {
    this.enabled = enabled;
    if (enabled) {
      this.currentBeat = 0;
      this.lastBeatTime = performance.now();
      console.log(`🎶 Sequencer ON @ ${this.bpm} BPM`);
    } else {
      console.log("🎶 Sequencer OFF");
    }
  }

  // Reset to beat 0
  reset() {
    this.currentBeat = 0;
    this.lastBeatTime = performance.now();
    console.log("🎶 Sequencer reset to beat 0");
  }

  // Update - called each frame
  update() {
    if (!this.enabled) return;

    const now = performance.now();
    const elapsed = now - this.lastBeatTime;

    // Check if it's time to advance to next beat
    if (elapsed >= this.beatInterval) {
      this.advanceBeat();
      this.lastBeatTime = now;
    }
  }

  // Advance to next beat and apply pattern
  advanceBeat() {
    this.currentBeat = (this.currentBeat + 1) % this.timelineLength;

    // Apply patterns for this beat
    Object.keys(this.patterns).forEach(emoji => {
      const shouldBeActive = this.patterns[emoji][this.currentBeat];
      const stream = this.streamManager.streams.get(emoji);

      if (stream) {
        const wasEnabled = stream.enabled;
        const nowEnabled = shouldBeActive === 1;

        if (wasEnabled !== nowEnabled) {
          this.streamManager.toggleStream(emoji, nowEnabled);
          if (nowEnabled) {
            console.log(`🎶 ${emoji} active on beat ${this.currentBeat + 1}`);
          }
        }
      }
    });
  }

  // Load from state
  loadFromState(stateData) {
    this.bpm = stateData.bpm || 120;
    this.timelineLength = stateData.timelineLength || 16;
    this.patterns = {};

    // Deep copy patterns
    Object.keys(stateData.patterns || {}).forEach(emoji => {
      this.patterns[emoji] = [...stateData.patterns[emoji]];
    });

    this.beatInterval = (60000 / this.bpm);
    console.log(`🎶 Sequencer loaded: ${this.bpm} BPM, ${this.timelineLength} beats`);
  }

  // Save to state
  saveToState() {
    return {
      enabled: this.enabled,
      bpm: this.bpm,
      currentBeat: this.currentBeat,
      patterns: JSON.parse(JSON.stringify(this.patterns)), // Deep copy
      timelineLength: this.timelineLength
    };
  }
}

// Phase 11.7.17: Emoji Pattern Banks Manager
export class EmojiPatternBankManager {
  constructor(streamManager, sequencer) {
    this.streamManager = streamManager;
    this.sequencer = sequencer;
    this.banks = new Array(8).fill(null); // 8 bank slots
    this.currentBankIndex = null;

    console.log("💾 EmojiPatternBankManager initialized (8 banks)");
  }

  // Save current state to a bank
  saveBank(bankIndex, name = null) {
    if (bankIndex < 0 || bankIndex >= 8) {
      console.warn(`💾 Invalid bank index: ${bankIndex}`);
      return false;
    }

    // Capture current streams
    const streams = this.streamManager.getStreamsArray();

    // Capture current sequencer state
    const sequencerState = this.sequencer.saveToState();

    const bankData = {
      name: name || `Bank ${bankIndex + 1}`,
      streams: JSON.parse(JSON.stringify(streams)), // Deep copy
      patterns: JSON.parse(JSON.stringify(sequencerState.patterns)),
      bpm: sequencerState.bpm,
      timelineLength: sequencerState.timelineLength,
      timestamp: new Date().toISOString()
    };

    this.banks[bankIndex] = bankData;

    // Build emoji summary
    const emojiList = streams.map(s => s.emoji).join('');
    console.log(`💾 Bank ${bankIndex + 1} saved → ${emojiList}`);

    return true;
  }

  // Load a bank
  loadBank(bankIndex) {
    if (bankIndex < 0 || bankIndex >= 8) {
      console.warn(`📂 Invalid bank index: ${bankIndex}`);
      return false;
    }

    const bank = this.banks[bankIndex];
    if (!bank) {
      console.warn(`📂 Bank ${bankIndex + 1} is empty`);
      return false;
    }

    // Load streams
    if (this.streamManager) {
      this.streamManager.loadStreams(bank.streams);
    }

    // Load sequencer patterns
    if (this.sequencer) {
      this.sequencer.loadFromState({
        bpm: bank.bpm,
        patterns: bank.patterns,
        timelineLength: bank.timelineLength,
        enabled: this.sequencer.enabled // Preserve enabled state
      });
    }

    this.currentBankIndex = bankIndex;

    const emojiList = bank.streams.map(s => s.emoji).join('');
    console.log(`📂 Bank ${bankIndex + 1} loaded → ${emojiList}`);

    return true;
  }

  // Clear a bank
  clearBank(bankIndex) {
    if (bankIndex < 0 || bankIndex >= 8) {
      console.warn(`💾 Invalid bank index: ${bankIndex}`);
      return false;
    }

    this.banks[bankIndex] = null;
    console.log(`💾 Bank ${bankIndex + 1} cleared`);
    return true;
  }

  // Get bank data
  getBank(bankIndex) {
    if (bankIndex < 0 || bankIndex >= 8) return null;
    return this.banks[bankIndex];
  }

  // Check if bank is empty
  isBankEmpty(bankIndex) {
    if (bankIndex < 0 || bankIndex >= 8) return true;
    return this.banks[bankIndex] === null;
  }

  // Get bank name
  getBankName(bankIndex) {
    const bank = this.getBank(bankIndex);
    return bank ? bank.name : `Bank ${bankIndex + 1}`;
  }

  // Rename bank
  renameBank(bankIndex, newName) {
    if (bankIndex < 0 || bankIndex >= 8) return false;
    const bank = this.banks[bankIndex];
    if (!bank) return false;

    bank.name = newName;
    console.log(`💾 Bank ${bankIndex + 1} renamed to "${newName}"`);
    return true;
  }

  // Load all banks from state
  loadBanksFromState(banksArray) {
    if (!Array.isArray(banksArray) || banksArray.length !== 8) {
      console.warn("💾 Invalid banks array, resetting to empty");
      this.banks = new Array(8).fill(null);
      return;
    }

    this.banks = banksArray.map(bank => {
      if (!bank) return null;
      return {
        name: bank.name || "Unnamed",
        streams: bank.streams || [],
        patterns: bank.patterns || {},
        bpm: bank.bpm || 120,
        timelineLength: bank.timelineLength || 16,
        timestamp: bank.timestamp || new Date().toISOString()
      };
    });

    const loadedCount = this.banks.filter(b => b !== null).length;
    console.log(`💾 Loaded ${loadedCount} pattern banks`);
  }

  // Save all banks to state
  saveBanksToState() {
    return this.banks.map(bank => {
      if (!bank) return null;
      return {
        name: bank.name,
        streams: JSON.parse(JSON.stringify(bank.streams)),
        patterns: JSON.parse(JSON.stringify(bank.patterns)),
        bpm: bank.bpm,
        timelineLength: bank.timelineLength,
        timestamp: bank.timestamp
      };
    });
  }
}