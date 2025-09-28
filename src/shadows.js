// src/shadows.js
import * as THREE from 'three';
import { state } from './state.js';

let shadowMesh;

export function initShadows(scene) {
  console.log("🌑 Shadows initialized (v1.8.5)");

  const geom = new THREE.CircleGeometry(2.5, 64);
  const mat = new THREE.MeshBasicMaterial({
    color: 0x000000,    // true black
    transparent: true,
    opacity: 0.25,      // subtle default
    depthWrite: false
  });

  shadowMesh = new THREE.Mesh(geom, mat);

  // Flat disk directly under vessel
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.set(0, -1.2, 0);

  scene.add(shadowMesh);
}

export function updateShadows(audioReactive) {
  if (!shadowMesh) return;

  // Scale relative to vessel
  shadowMesh.scale.set(state.scale * 2, state.scale * 2, 1);

  // Audio-reactive opacity
  if (audioReactive && state.audio) {
    const avg = (state.audio.bass + state.audio.mid + state.audio.treble) / 3;
    shadowMesh.material.opacity = 0.1 + avg * 0.4; // 0.1 – 0.5 range
  } else {
    shadowMesh.material.opacity = 0.25;
  }
}