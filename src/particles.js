// particles.js
import * as THREE from 'three';
import { state } from './state.js';

let particleSystem;
let particleGeometry;

// Layout configuration functions
function createCubeLayout(count) {
  const positions = new Float32Array(count * 3);
  // Current uniform 20³ grid
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20; // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
  }
  return positions;
}

function createSphereLayout(count) {
  const positions = new Float32Array(count * 3);
  // Random points on sphere shell
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 8 + Math.random() * 2; // 8-10 radius range

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
    positions[i * 3 + 2] = radius * Math.cos(phi); // z
  }
  return positions;
}

function createTorusLayout(count) {
  const positions = new Float32Array(count * 3);
  // Random points within torus volume
  for (let i = 0; i < count; i++) {
    const majorRadius = 6;
    const minorRadius = 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * minorRadius;

    positions[i * 3] = (majorRadius + r * Math.cos(phi)) * Math.cos(theta); // x
    positions[i * 3 + 1] = r * Math.sin(phi); // y
    positions[i * 3 + 2] = (majorRadius + r * Math.cos(phi)) * Math.sin(theta); // z
  }
  return positions;
}

function getLayoutPositions(layout, count) {
  switch (layout) {
    case 'sphere': return createSphereLayout(count);
    case 'torus': return createTorusLayout(count);
    case 'cube':
    default: return createCubeLayout(count);
  }
}

export function initParticles(scene, count = 1000) {
  console.log(`✨ Particles initialized (v2.2.1, count=${count}, layout=${state.particles.layout})`);

  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  switch (state.particles.layout) {
    case "sphere":
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.sin(phi) * Math.sin(theta);
        const z = Math.cos(phi);
        positions[i * 3] = x * 5; // Scale by 5
        positions[i * 3 + 1] = y * 5;
        positions[i * 3 + 2] = z * 5;
      }
      break;

    case "torus":
      const R = 1.0, r = 0.3;
      for (let i = 0; i < count; i++) {
        const u = Math.random() * 2 * Math.PI;
        const v = Math.random() * 2 * Math.PI;
        const x = (R + r * Math.cos(v)) * Math.cos(u);
        const y = (R + r * Math.cos(v)) * Math.sin(u);
        const z = r * Math.sin(v);
        positions[i * 3] = x * 5; // Scale by 5
        positions[i * 3 + 1] = y * 5;
        positions[i * 3 + 2] = z * 5;
      }
      break;

    case "cube":
    default:
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      }
      break;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry = geometry;

  const material = new THREE.PointsMaterial({
    color: state.color,
    size: state.particles.size || 0.15,
    transparent: true,
    opacity: state.particles.opacity || 0.5,
    depthWrite: false
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);
}

export function updateParticles(audioReactive, time) {
  if (!particleSystem) return;

  // Calculate color with hue shift
  let particleColor = state.color;
  if (state.particles.hue !== 0 || state.particles.audioReactiveHue) {
    const baseColor = new THREE.Color(state.color);
    let hsl = {};
    baseColor.getHSL(hsl);

    let hueShift = state.particles.hue / 360;

    // Audio-reactive hue cycling based on treble
    if (state.particles.audioReactiveHue && audioReactive && state.audio) {
      hueShift += state.audio.treble * 0.3; // Treble drives hue cycling
    }

    hsl.h = (hsl.h + hueShift) % 1;
    baseColor.setHSL(hsl.h, hsl.s, hsl.l);
    particleColor = baseColor;
  }

  // Sync color - ensure proper color propagation
  particleSystem.material.color.set(state.color);

  // Apply motion with velocity + spread multipliers
  const { velocity, spread } = state.particlesMotion || { velocity: 0.5, spread: 1.0 };
  const positions = particleGeometry.attributes.position.array;

  for (let i = 0; i < positions.length; i += 3) {
    const particleIndex = i / 3;

    // Store base positions (initial layout positions)
    if (!particleSystem.userData.basePositions) {
      particleSystem.userData.basePositions = new Float32Array(positions.length);
      for (let j = 0; j < positions.length; j++) {
        particleSystem.userData.basePositions[j] = positions[j];
      }
    }

    // Store velocities for damping (only when organic motion is enabled)
    if (state.particles.organicMotion && !particleSystem.userData.velocities) {
      particleSystem.userData.velocities = new Float32Array(positions.length);
    } else if (!state.particles.organicMotion && particleSystem.userData.velocities) {
      // Clear velocities when organic motion is disabled
      particleSystem.userData.velocities = null;
    }

    const baseX = particleSystem.userData.basePositions[i];
    const baseY = particleSystem.userData.basePositions[i + 1];
    const baseZ = particleSystem.userData.basePositions[i + 2];

    // Base drift with velocity multiplier
    let driftX = Math.sin(time * 0.1 * velocity + particleIndex) * 0.5 * spread;
    let driftY = Math.cos(time * 0.1 * velocity + particleIndex * 1.1) * 0.5 * spread;
    let driftZ = Math.sin(time * 0.1 * velocity + particleIndex * 1.3) * 0.5 * spread;

    // Add organic motion jitter if enabled
    if (state.particles.organicMotion) {
      const jitterAmount = 0.02; // Much smaller amplitude for smooth motion
      const slowTime = time * 0.003; // Very slow time for organic variation
      const dampingFactor = 0.95; // Smooth velocity damping

      // Use smooth noise-like functions instead of random for organic motion
      const organicX = Math.sin(slowTime + particleIndex * 0.01) * Math.cos(slowTime * 1.3 + particleIndex * 0.02);
      const organicY = Math.cos(slowTime * 1.1 + particleIndex * 0.015) * Math.sin(slowTime * 0.8 + particleIndex * 0.025);
      const organicZ = Math.sin(slowTime * 0.9 + particleIndex * 0.02) * Math.cos(slowTime * 1.2 + particleIndex * 0.01);

      // Apply damping to organic motion if velocities exist
      if (particleSystem.userData.velocities) {
        const prevVelX = particleSystem.userData.velocities[i] || 0;
        const prevVelY = particleSystem.userData.velocities[i + 1] || 0;
        const prevVelZ = particleSystem.userData.velocities[i + 2] || 0;

        // Smooth transition between previous and current organic motion
        const smoothedX = prevVelX * dampingFactor + organicX * jitterAmount * (1 - dampingFactor);
        const smoothedY = prevVelY * dampingFactor + organicY * jitterAmount * (1 - dampingFactor);
        const smoothedZ = prevVelZ * dampingFactor + organicZ * jitterAmount * (1 - dampingFactor);

        // Store smoothed velocities
        particleSystem.userData.velocities[i] = smoothedX;
        particleSystem.userData.velocities[i + 1] = smoothedY;
        particleSystem.userData.velocities[i + 2] = smoothedZ;

        driftX += smoothedX;
        driftY += smoothedY;
        driftZ += smoothedZ;
      } else {
        // Fallback to direct organic motion if no velocity storage
        driftX += organicX * jitterAmount;
        driftY += organicY * jitterAmount;
        driftZ += organicZ * jitterAmount;
      }
    }

    positions[i] = baseX + driftX;
    positions[i + 1] = baseY + driftY;
    positions[i + 2] = baseZ + driftZ;
  }

  particleGeometry.attributes.position.needsUpdate = true;

  // Update size and opacity from state with fallbacks
  let baseSize = state.particles.size || 0.15;
  let baseOpacity = state.particles.opacity || 0.5;

  // Audio reactivity with proper bass-driven opacity
  if (audioReactive && state.audio) {
    const avg = (state.audio.bass + state.audio.mid + state.audio.treble) / 3;
    baseSize = baseSize + avg * 0.3; // Add audio boost to base size

    // Bass-driven opacity using THREE.MathUtils.lerp for 0.3-0.8 range
    baseOpacity = THREE.MathUtils.lerp(0.3, 0.8, state.audio.bass || 0);
  }

  particleSystem.material.size = baseSize;
  particleSystem.material.opacity = baseOpacity;

  // Debug logging for validation
  console.log("✨ Particle sync → color:", state.color,
              "opacity:", particleSystem.material.opacity.toFixed(2),
              "size:", particleSystem.material.size.toFixed(2),
              "audioReactive:", audioReactive);
}

export function reinitParticles(scene) {
  if (particleSystem) {
    destroyParticles(scene);
  }
  // Reinitialize with current layout and count
  initParticles(scene, state.particles.count);
  // Clear base positions so they get recalculated for new layout
  if (particleSystem) {
    particleSystem.userData.basePositions = null;
  }
  console.log(`✨ Particles reinitalized with layout: ${state.particles.layout}`);
}

export function destroyParticles(scene) {
  if (particleSystem) {
    scene.remove(particleSystem);
    particleSystem.geometry.dispose();
    particleSystem.material.dispose();
    particleSystem = null;
    particleGeometry = null;
    console.log("✨ Particles destroyed");
  }
}