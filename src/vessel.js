import * as THREE from 'three';
import { state } from './state.js';
import { morphMesh } from './geometry.js';

console.log("🚢 vessel.js loaded");

let vesselGroup, vesselMaterial;

// Layout configuration
const layouts = ["lattice", "hoops", "shells"];

// Orbital layout configurations
function createLatticeLayout() {
  // 12-ring spherical lattice (current default)
  return [
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
}

function createHoopsLayout() {
  // 6 stacked orbital hoops
  const hoops = [];
  for (let i = 0; i < 6; i++) {
    const yOffset = (i - 2.5) * 0.4; // Stack vertically
    hoops.push({
      axis: [0, 0, 1],
      angle: 0,
      position: [0, yOffset, 0],
      scale: 1 - Math.abs(yOffset) * 0.1 // Slight taper
    });
  }
  return hoops;
}

function createShellsLayout() {
  // 3 nested shells at different radii
  const shells = [];
  const radii = [0.8, 1.0, 1.2];
  radii.forEach(radius => {
    // 4 rings per shell
    for (let i = 0; i < 4; i++) {
      shells.push({
        axis: [0, 0, 1],
        angle: (i * Math.PI) / 2,
        radius: radius
      });
    }
  });
  return shells;
}

function getLayoutConfig(layoutType) {
  switch (layoutType) {
    case 'hoops': return createHoopsLayout();
    case 'shells': return createShellsLayout();
    case 'lattice':
    default: return createLatticeLayout();
  }
}

export function initVessel(scene) {
  console.log("🚢 Initializing vessel system...");

  vesselGroup = new THREE.Group();

  vesselMaterial = new THREE.MeshStandardMaterial({
    color: state.vessel.color,
    transparent: true,
    opacity: state.vessel.opacity
  });

  // Create rings based on current layout
  const ringConfigs = getLayoutConfig(state.vessel.layout);

  ringConfigs.forEach((config) => {
    const { axis, angle, position, scale: ringScale, radius } = config;

    // Improved subdivision for smoother rings
    const geometry = new THREE.TorusGeometry(
      radius || 1,    // Use custom radius for shells layout
      0.03,           // Slightly thinner for less visual clutter
      24,             // More radial segments for smoothness
      100             // More tubular segments for quality
    );

    const torus = new THREE.Mesh(geometry, vesselMaterial);

    // Apply rotation
    torus.rotateOnAxis(new THREE.Vector3(...axis), angle);

    // Apply position offset (for hoops layout)
    if (position) {
      torus.position.set(...position);
    }

    // Apply individual ring scaling (for hoops layout)
    if (ringScale) {
      torus.scale.setScalar(ringScale);
    }

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

export function cycleLayout(scene) {
  state.vessel.layoutIndex = (state.vessel.layoutIndex + 1) % layouts.length;
  state.vessel.layout = layouts[state.vessel.layoutIndex];
  console.log(`🔄 Vessel layout cycled to: ${state.vessel.layout}`);
  reinitVessel(scene);

  // Trigger HUD sync
  notifyHUDUpdate();
}

export function reinitVessel(scene) {
  if (vesselGroup) {
    // Remove existing vessel from scene
    scene.remove(vesselGroup);
    // Clear the group
    vesselGroup.clear();
  }
  // Reinitialize with current layout
  initVessel(scene);
}

// Notify HUD about layout changes
function notifyHUDUpdate() {
  const dropdown = document.getElementById('vessel-layout-dropdown');
  if (dropdown) {
    dropdown.value = state.vessel.layout;
    console.log(`🔄 HUD synced to layout: ${state.vessel.layout}`);
  }
}

export function getVesselGroup() {
  return vesselGroup;
}

console.log("🚢 Vessel module ready");