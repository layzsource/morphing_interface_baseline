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
    size: 0.15,
    transparent: true,
    opacity: 0.5,
    depthWrite: false
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);
}

export function updateParticles(audioReactive, time) {
  if (!particleSystem) return;

  // Sync color
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

    const baseX = particleSystem.userData.basePositions[i];
    const baseY = particleSystem.userData.basePositions[i + 1];
    const baseZ = particleSystem.userData.basePositions[i + 2];

    // Use base drift with velocity multiplier
    const driftX = Math.sin(time * 0.1 * velocity + particleIndex) * 0.5 * spread;
    const driftY = Math.cos(time * 0.1 * velocity + particleIndex * 1.1) * 0.5 * spread;
    const driftZ = Math.sin(time * 0.1 * velocity + particleIndex * 1.3) * 0.5 * spread;

    positions[i] = baseX + driftX;
    positions[i + 1] = baseY + driftY;
    positions[i + 2] = baseZ + driftZ;
  }

  particleGeometry.attributes.position.needsUpdate = true;

  // Audio reactivity
  if (audioReactive && state.audio) {
    const avg = (state.audio.bass + state.audio.mid + state.audio.treble) / 3;
    particleSystem.material.size = 0.1 + avg * 0.3;
    particleSystem.material.opacity = 0.3 + avg * 0.5;
  } else {
    particleSystem.material.size = 0.15;
    particleSystem.material.opacity = 0.5;
  }
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