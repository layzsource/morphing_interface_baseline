// visual.js - Phase 11.6.0: Background plane texture system
import * as THREE from "three";
import { state } from "./state.js";

console.log("🖼️ visual.js loaded");

let backgroundMesh = null;

export function initVisual(scene) {
  const geometry = new THREE.PlaneGeometry(16, 9); // widescreen ratio
  const material = new THREE.MeshBasicMaterial({ color: 0x111111 });
  backgroundMesh = new THREE.Mesh(geometry, material);
  backgroundMesh.position.z = -10; // push back behind everything
  scene.add(backgroundMesh);
  console.log("🖼️ Background plane initialized");
}

export function updateVisual() {
  if (!backgroundMesh) return;

  if (state.texture) {
    backgroundMesh.material.map = state.texture;
    backgroundMesh.material.needsUpdate = true;
  } else {
    backgroundMesh.material.map = null;
    backgroundMesh.material.color.set(0x111111);
    backgroundMesh.material.needsUpdate = true;
  }
}
