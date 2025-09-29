import * as THREE from 'three';
import { state } from './state.js';
import { morphMesh } from './geometry.js';

console.log("🚢 vessel.js loaded");

let vesselGroup, vesselMaterial;

export function initVessel(scene) {
  console.log("🚢 Initializing vessel system...");

  vesselGroup = new THREE.Group();

  vesselMaterial = new THREE.MeshStandardMaterial({
    color: state.vessel.color,
    transparent: true,
    opacity: state.vessel.opacity
  });

  // 12-ring spherical lattice configuration
  const ringConfigs = [
    // 4 equatorial rings (XY plane at different angles)
    { axis: [0, 0, 1], angle: 0 },
    { axis: [0, 0, 1], angle: Math.PI / 4 },
    { axis: [0, 0, 1], angle: Math.PI / 2 },
    { axis: [0, 0, 1], angle: (3 * Math.PI) / 4 },
    // 4 tilted rings (XZ and YZ planes at ±45°)
    { axis: [1, 0, 0], angle: Math.PI / 4 },
    { axis: [1, 0, 0], angle: -Math.PI / 4 },
    { axis: [0, 1, 0], angle: Math.PI / 4 },
    { axis: [0, 1, 0], angle: -Math.PI / 4 },
    // 4 polar support rings (±135° on XZ + YZ planes)
    { axis: [1, 0, 0], angle: (3 * Math.PI) / 4 },
    { axis: [1, 0, 0], angle: -(3 * Math.PI) / 4 },
    { axis: [0, 1, 0], angle: (3 * Math.PI) / 4 },
    { axis: [0, 1, 0], angle: -(3 * Math.PI) / 4 },
  ];

  ringConfigs.forEach(({ axis, angle }) => {
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.04, 16, 64),
      vesselMaterial
    );
    torus.rotateOnAxis(new THREE.Vector3(...axis), angle);
    vesselGroup.add(torus);
  });

  vesselGroup.scale.setScalar(state.vessel.scale);
  vesselGroup.visible = state.vessel.enabled;
  scene.add(vesselGroup);

  console.log("✅ Vessel initialized - 12-ring spherical lattice configuration");
}

export function updateVessel(audioData) {
  if (!vesselGroup || !morphMesh) return;

  // Update visibility
  vesselGroup.visible = state.vessel.enabled;

  if (!state.vessel.enabled) return;

  // Gentle global spin (optional)
  if (state.vessel.spinEnabled) {
    vesselGroup.rotation.y += state.vessel.spinSpeed;
  }

  // Adaptive scale based on morph target size
  morphMesh.geometry.computeBoundingSphere();
  const radius = morphMesh.geometry.boundingSphere.radius;
  let adaptiveRadius = radius * (state.vessel.scaleMultiplier || 1.2) * state.vessel.scale;

  // Audio reactivity: subtle scale modulation (±5%)
  if (state.audioReactive && audioData) {
    const bass = audioData.bass || 0;
    const scaleModulation = 1 + (bass - 0.5) * 0.1; // ±5% scale variation
    adaptiveRadius *= scaleModulation;
  }

  // Apply adaptive scale to vessel group
  vesselGroup.scale.set(adaptiveRadius, adaptiveRadius, adaptiveRadius);

  // Live material sync + audio pulse
  vesselMaterial.color.set(state.vessel.color);
  let opacity = state.vessel.opacity;

  // Audio reactivity: opacity modulation (0.2-0.8 range)
  if (state.audioReactive && audioData) {
    const mid = audioData.mid || 0;
    opacity = THREE.MathUtils.clamp(0.2 + mid * 0.6, 0.2, 0.8);
  }

  vesselMaterial.opacity = opacity;
}

export function getVesselGroup() {
  return vesselGroup;
}

console.log("🚢 Vessel module ready");