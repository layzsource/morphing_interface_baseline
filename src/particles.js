// particles.js
import * as THREE from 'three';
import { state } from './state.js';

let particleSystem;
let particleGeometry;

export function initParticles(scene, count = 1000) {
  console.log(`✨ Particles initialized (v1.9.1, count=${count})`);

  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20; // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
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