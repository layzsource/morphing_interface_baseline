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
  const positions = getLayoutPositions(state.particles.layout, count);

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

  // Gentle orbital drift motion
  const positions = particleGeometry.attributes.position.array;
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] += 0.002 * Math.sin(time + i);   // x drift
    positions[i + 1] += 0.002 * Math.cos(time + i * 0.5); // y drift
    // z left static for now
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
  initParticles(scene, state.particlesCount);
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