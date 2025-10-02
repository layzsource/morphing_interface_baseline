import * as THREE from 'three';
import { state, blendColors, getEffectiveAudio } from './state.js'; // Phase 11.4.3: Import stable audio gate
import { morphMesh } from './geometry.js';
import { SHADOW_LAYER } from './constants.js'; // Phase 2.3.3

console.log("🚢 vessel.js loaded");

let vesselGroup, vesselMaterial;
let shadowBox = null;

// Layout configuration
const layouts = ["lattice", "hoops", "shells"];
const modes = ["gyre", "conflat6"]; // Phase 2.x: Vessel modes

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

function createConflat6Layout() {
  // Phase 2.x: Conflat 6 - cube-sphere with 6 circles
  return [
    { dir: [1, 0, 0] },   // right
    { dir: [-1, 0, 0] },  // left
    { dir: [0, 1, 0] },   // up
    { dir: [0, -1, 0] },  // down
    { dir: [0, 0, 1] },   // front
    { dir: [0, 0, -1] }   // back
  ];
}

function getLayoutConfig(layoutType) {
  switch (layoutType) {
    case 'hoops': return createHoopsLayout();
    case 'shells': return createShellsLayout();
    case 'conflat6': return createConflat6Layout();
    case 'lattice':
    default: return createLatticeLayout();
  }
}

// Phase 2.2.0: ShadowBox class for shadow projection with real-time rendering
class ShadowBox {
  constructor(scene, renderer, camera) {
    const size = 6.0;

    const geo = new THREE.PlaneGeometry(size, size);
    const mat = new THREE.MeshBasicMaterial({
      map: null,
      transparent: true,
      opacity: 0.9
    });

    this.plane = new THREE.Mesh(geo, mat);
    this.plane.position.set(0, -5, 0); // below Vessel
    this.plane.rotation.x = -Math.PI / 2;

    scene.add(this.plane);
    this.scene = scene;

    // Render target for vessel projection (1024x1024 for clarity)
    this.renderTarget = new THREE.WebGLRenderTarget(1024, 1024);
    this.plane.material.map = this.renderTarget.texture;

    this.renderer = renderer;
    this.camera = camera;

    // Projection camera (top-down orthographic)
    this.shadowCam = new THREE.OrthographicCamera(-3, 3, 3, -3, 0.1, 20);
    this.shadowCam.position.set(0, 5, 0);
    this.shadowCam.lookAt(0, 0, 0);
  }

  render() {
    if (!vesselGroup || !this.renderer) return;

    // Render Vessel only into render target
    const oldTarget = this.renderer.getRenderTarget();
    this.renderer.setRenderTarget(this.renderTarget);
    this.renderer.clear();
    this.renderer.render(vesselGroup, this.shadowCam);
    this.renderer.setRenderTarget(oldTarget);
  }

  dispose() {
    if (this.plane) {
      this.scene.remove(this.plane);
      this.plane.geometry.dispose();
      this.plane.material.dispose();
    }
    if (this.renderTarget) {
      this.renderTarget.dispose();
    }
  }
}

export function initVessel(scene, renderer, camera) {
  console.log("🚢 Initializing vessel system...");

  vesselGroup = new THREE.Group();

  const vesselMode = state.vessel.mode || 'gyre';

  // Phase 2.x: Handle Conflat 6 mode differently
  if (vesselMode === 'conflat6') {
    // Conflat 6: Six circles (cube-sphere faces) with unique colors
    const ringConfigs = getLayoutConfig('conflat6');
    const radius = 2.0;
    const segments = 64;

    // Canonical color palette for Conflat 6
    const colorList = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff];

    ringConfigs.forEach((config, i) => {
      const { dir } = config;

      const circleGeo = new THREE.CircleGeometry(radius, segments);
      const circleMat = new THREE.MeshBasicMaterial({
        color: colorList[i % colorList.length],
        transparent: true,
        opacity: state.vessel.opacity || 0.4, // Phase 2.2.0: slightly more transparent
        side: THREE.DoubleSide
      });
      const circle = new THREE.Mesh(circleGeo, circleMat);

      // Orient circle to face outwards
      circle.lookAt(new THREE.Vector3(...dir));

      vesselGroup.add(circle);
    });

    // Phase 2.2.0: Pre-rotate so it doesn't look like one flat disc
    vesselGroup.rotation.set(Math.PI / 6, Math.PI / 6, 0);

    // Phase 2.2.0: Initialize shadow box for conflat6 with renderer and camera
    if (!shadowBox && renderer && camera) {
      shadowBox = new ShadowBox(scene, renderer, camera);
    }

    console.log("✅ Vessel initialized - Conflat 6 (cube-sphere) mode");
  } else {
    // Gyre mode: Torus-based rings (existing behavior)
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

    // Clean up shadow box if it exists
    if (shadowBox) {
      shadowBox.dispose();
      shadowBox = null;
    }

    console.log(`✅ Vessel initialized - Gyre mode (${state.vessel.layout} layout)`);
  }

  vesselGroup.scale.setScalar(state.vessel.scale);
  vesselGroup.visible = state.vessel.enabled;

  // Phase 2.3.3: Enable Vessel in shadow layer for projection
  vesselGroup.layers.enable(SHADOW_LAYER);

  scene.add(vesselGroup);
}

// Phase 2.2.0: Export function to render shadow projection
export function renderShadowProjection() {
  if (shadowBox && state.vessel.mode === 'conflat6' && state.vessel.enabled) {
    shadowBox.render();
  }
}

export function updateVessel() {
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

  // Base adaptive scale + opacity
  vesselGroup.scale.set(adaptiveRadius, adaptiveRadius, adaptiveRadius);
  vesselMaterial.opacity = state.vessel.opacity;

  // Phase 11.2.1: Layered color system
  const layerConfig = state.colorLayers.vessel;
  const audioData = getEffectiveAudio();
  const audioLevel = (audioData.bass + audioData.mid + audioData.treble) / 3;

  let finalColor = layerConfig.baseColor;

  if (state.audioReactive) {
    // Bass pulses vessel scale (±5%), does not affect morphs
    const bassFactor = 1 + (audioData.bass - 0.5) * 0.1;
    vesselGroup.scale.multiplyScalar(bassFactor);

    // Mid pulses vessel opacity (0.2–0.8 range)
    vesselMaterial.opacity = THREE.MathUtils.clamp(0.2 + audioData.mid * 0.6, 0.2, 0.8);

    // Phase 11.2.1: Additive color blending
    finalColor = blendColors(
      layerConfig.baseColor,
      layerConfig.audioColor,
      layerConfig.audioIntensity,
      audioLevel
    );

    // Debug logging (2% sample rate)
    if (Math.random() < 0.02) {
      console.log(`🎨 Vessel: base=${layerConfig.baseColor} audio=${layerConfig.audioColor} final=${finalColor}`);
    }
  }

  vesselMaterial.color.set(finalColor);

  // Update debug display
  const debugElement = document.getElementById('vessel-debug');
  if (debugElement) {
    debugElement.textContent = `Radius: ${adaptiveRadius.toFixed(2)}`;
  }
}

export function cycleLayout(scene) {
  state.vessel.layoutIndex = (state.vessel.layoutIndex + 1) % layouts.length;
  state.vessel.layout = layouts[state.vessel.layoutIndex];
  console.log(`🔄 Vessel layout cycled to: ${state.vessel.layout}`);
  reinitVessel(scene);

  // Trigger HUD sync
  notifyHUDUpdate();
}

export function reinitVessel(scene, renderer, camera) {
  if (vesselGroup) {
    // Remove existing vessel from scene
    scene.remove(vesselGroup);
    // Clear the group
    vesselGroup.clear();
  }
  // Reinitialize with current layout
  initVessel(scene, renderer, camera);
  // Ensure material color is synced after reinit
  if (vesselMaterial) {
    vesselMaterial.color.set(state.vessel.color);
  }
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