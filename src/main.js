// Phase 2.3.3SS: Shadow Box Safe Stub (MUST be before imports to prevent boot crash)
var shadowBox = {
  render: () => {},
  setThreshold: () => {},
  setGain: () => {},
  setColors: () => {},
  setPalette: () => {},
  setShadowGain: () => {}
};

console.log("📦 ShadowBox safe stub active (Phase 2.3.3SS) - prevents initialization errors");

import * as THREE from 'three';
import { initHUD, updatePresetList } from './hud.js';
import { initMIDI, getMIDIDeviceCount } from './midi.js';
import { getHUDIdleSpin, getVisualData, getMorphState, scene, renderer, camera } from './geometry.js';
import { initShadows } from './shadows.js';
import { initSprites } from './sprites.js';
import { initParticles, getParticleSystemInstance } from './particles.js';
import { initVessel, updateVessel, getVesselGroup } from './vessel.js';
import { initTelemetry } from './telemetry.js';
import { initPresets, createDefaultPresets, listPresets, getCurrentPresetName } from './presets.js';
import { initAudio, getAudioValues } from './audio.js';
import { state } from './state.js';
import { SHADOW_LAYER } from './constants.js'; // Phase 2.3.3
import { initVisual, updateVisual } from './visual.js'; // Phase 11.6.0

// Import the new router modules to set up the signal routing
import './midiRouter.js';
import './hudRouter.js';
import './audioRouter.js';
import './presetRouter.js';

// Phase 11.2.3: Initialize unified control binding system
import { initDefaultBindings } from './controlBindings.js';
initDefaultBindings();

console.log("🔄 Build timestamp:", new Date().toISOString());

// Phase 2.3.3R: Shadow Box failsafe fallback (disabled rendering, app stability restored)
class ShadowBox {
  constructor(scene, renderer) {
    console.log("⚠️ ShadowBox initialized in FAILSAFE mode (Phase 2.3.3R) - rendering disabled");
    this.renderer = renderer;
    this.plane = null; // nothing added to scene
  }

  render(scene) {
    // Do nothing — avoid crashes
    // Uncomment for debugging: console.log("📦 ShadowBox render tick (failsafe)");
  }

  setThreshold(value) {
    console.log(`📦 ShadowBox threshold set: ${value.toFixed(2)} (failsafe mode)`);
  }

  setGain(value) {
    console.log(`📦 ShadowBox gain set: ${value.toFixed(1)} (failsafe mode)`);
  }

  setColors(bgColor, fgColor) {
    console.log(`📦 ShadowBox colors set: bg=${bgColor}, fg=${fgColor} (failsafe mode)`);
  }

  setPalette(name) {
    console.log(`📦 ShadowBox palette set: ${name} (failsafe mode)`);
  }

  setShadowGain(g) {
    console.log(`📦 ShadowBox gain (legacy) set: ${g.toFixed(1)} (failsafe mode)`);
  }
}

initHUD();

initMIDI(() => {
  console.log("🎹 MIDI ready");
});

initPresets();
createDefaultPresets();

// Restore presets from localStorage
try {
  const savedPresets = JSON.parse(localStorage.getItem("presets") || "{}");
  if (Object.keys(savedPresets).length > 0) {
    console.log("💾 Restored presets from localStorage");
  }
} catch (error) {
  console.warn("💾 Failed to restore presets:", error);
}

initAudio();

initShadows(scene);

initSprites(scene);

initVessel(scene, renderer, camera);

// Phase 11.6.0: Initialize background plane
initVisual(scene);

// Phase 2.3.3SS: Overwrite stub with real ShadowBox instance (currently failsafe/disabled)
shadowBox = new ShadowBox(scene, renderer);
console.log("📦 ShadowBox stub replaced with failsafe instance");

if (state.particlesEnabled) {
  initParticles(scene, state.particlesCount);
  // Phase 2.3.1: Couple particles to Vessel rotation
  const particleSystem = getParticleSystemInstance();
  const vesselGroup = getVesselGroup();
  if (particleSystem && vesselGroup) {
    particleSystem.setVesselReference(vesselGroup);
    console.log("🔗 Particles coupled to Vessel rotation");
  }
}

initTelemetry(() => ({
  midiDevices: getMIDIDeviceCount(),
  hudIdle: state.idleSpin,
  morphState: {
    current: state.morphState.current,
    previous: state.morphState.previous,
    progress: state.morphState.progress,
    weights: { ...state.morphWeights },
    isTransitioning: state.morphState.isTransitioning,
    targets: state.morphState.targets
  },
  currentPreset: state.presets.currentPresetName,
  audioData: {
    bass: state.audio.bass,
    mid: state.audio.mid,
    treble: state.audio.treble,
    isEnabled: state.audio.enabled,
    sensitivity: state.audio.sensitivity
  },
  visualData: {
    ambientIntensity: state.lighting.ambientIntensity,
    directionalIntensity: state.lighting.directionalIntensity,
    color: state.color,
    hue: state.hue
  }
}));

// Update preset list in HUD after initialization
setTimeout(() => {
  updatePresetList(listPresets());
}, 100);

window.addEventListener('keydown', (e) => {
  if (e.key === 'p' || e.key === 'P') {
    // Toggle to next morph target
    const targets = state.morphState.targets;
    const currentIndex = targets.indexOf(state.morphState.current);
    const nextIndex = (currentIndex + 1) % targets.length;
    const newTarget = targets[nextIndex];

    // Update state
    state.morphState.previous = state.morphState.current;
    state.morphState.current = newTarget;

    // Reset all weights and set new target to 1.0
    targets.forEach(target => {
      state.morphWeights[target] = 0;
    });
    state.morphWeights[newTarget] = 1.0;

    console.log(`🔄 Toggled to morph target: ${newTarget}`);
  }
});

console.log("✅ main.js loaded – all modules imported");

// Phase 2.3.3: Export shadowBox for HUD access
export function getShadowBox() {
  return shadowBox;
}

// 🔎 Debug: list all objects in the scene
function logSceneObjects(scene) {
  console.log("🔍 Scene Object Inventory:");
  console.log("===========================");
  let count = 0;
  scene.traverse((obj) => {
    if (obj.isMesh || obj.isLine || obj.isLineSegments) {
      count++;
      const geometryType = obj.geometry ? obj.geometry.type : "unknown";
      const material = obj.material ? `${obj.material.type} (wireframe:${obj.material.wireframe})` : "no material";
      console.log(`${count}. ${obj.type} | name="${obj.name || "(unnamed)"}" | geometry=${geometryType} | material=${material}`);
      console.log(`   visible=${obj.visible} | position=(${obj.position.x.toFixed(2)}, ${obj.position.y.toFixed(2)}, ${obj.position.z.toFixed(2)})`);
      console.log(`   `, obj);
    }
  });
  console.log(`===========================`);
  console.log(`Total renderable objects: ${count}`);
}

// Run once after everything has initialized
setTimeout(() => {
  logSceneObjects(scene);
}, 2000);
