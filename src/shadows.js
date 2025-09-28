// src/shadows.js
import * as THREE from 'three';
import { state } from './state.js';

let shadowMesh;

export function initShadows(scene) {
  const shadowMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide,
  });

  // Flat plane behind vessel
  const shadowGeometry = new THREE.PlaneGeometry(4, 4);
  shadowMesh = new THREE.Mesh(shadowGeometry, shadowMaterial);
  shadowMesh.position.z = -20;
  scene.add(shadowMesh);

  console.log("🌑 Shadows initialized");
}

export function updateShadows() {
  if (!shadowMesh) return;

  // Tie shadow scale to Vessel state (2x multiplier for visibility)
  shadowMesh.scale.set(state.scale * 2, state.scale * 2, 1);

  // Force shadow color to black for proper projection
  shadowMesh.material.color.set(0x000000);

  // Subtle opacity with audio reactivity
  if (state.audio.enabled) {
    const avg =
      (state.audio.bass + state.audio.mid + state.audio.treble) / 3;
    shadowMesh.material.opacity = 0.1 + avg * 0.2;
  } else {
    shadowMesh.material.opacity = 0.1;
  }
}