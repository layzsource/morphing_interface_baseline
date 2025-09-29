import * as THREE from 'three';
import { state } from './state.js';

console.log("🚢 vessel.js loaded");

let vesselGroup;

export function initVessel(scene) {
  console.log("🚢 Initializing vessel system...");

  vesselGroup = new THREE.Group();

  // Create 6 stacked torus rings
  for (let i = 0; i < 6; i++) {
    const geometry = new THREE.TorusGeometry(1, 0.05, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: state.vessel.color,
      transparent: true,
      opacity: state.vessel.opacity,
      side: THREE.DoubleSide
    });

    const ring = new THREE.Mesh(geometry, material);
    ring.position.y = (i - 2.5) * 0.3; // Stack vertically with 0.3 spacing
    vesselGroup.add(ring);
  }

  vesselGroup.scale.setScalar(state.vessel.scale);
  vesselGroup.visible = state.vessel.enabled;
  scene.add(vesselGroup);

  console.log("✅ Vessel initialized - 6 rings created");
}

export function updateVessel(audioData) {
  if (!vesselGroup) return;

  // Update visibility
  vesselGroup.visible = state.vessel.enabled;

  if (!state.vessel.enabled) return;

  // Update scale
  vesselGroup.scale.setScalar(state.vessel.scale);

  // Update all ring materials
  vesselGroup.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(state.vessel.color);
      child.material.opacity = state.vessel.opacity;

      // Apply audio-reactive opacity pulsing if enabled
      if (state.audioReactive && audioData) {
        const bass = audioData.bass || 0;
        child.material.opacity = THREE.MathUtils.clamp(
          state.vessel.opacity + bass * 0.2,
          0, 1
        );
      }
    }
  });
}

export function getVesselGroup() {
  return vesselGroup;
}

console.log("🚢 Vessel module ready");