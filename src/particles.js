// particles.js
// Phase 4.9.0 — Stable Particle Baseline
// InstancedMesh particle system with per-particle hue spread, organic motion, audio reactivity

import * as THREE from 'three';
import { SHADOW_LAYER } from './constants.js'; // Phase 2.3.3
import { getEffectiveAudio } from './state.js'; // Phase 11.4.3: Stable audio gate

export class ParticleSystem {
  constructor(scene, count = 5000) {
    this.scene = scene;
    this.count = count;

    this.angles    = new Float32Array(this.count);
    this.radii     = new Float32Array(this.count);
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

      // Phase 2.3.1: Apply Vessel rotation to vesselPlanes layout
      if (this.currentLayout === 'vesselPlanes' && this.vesselGroup) {
        const v = new THREE.Vector3(tx, ty, tz);
        v.applyQuaternion(this.vesselGroup.quaternion);
        tx = v.x;
        ty = v.y;
        tz = v.z;
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