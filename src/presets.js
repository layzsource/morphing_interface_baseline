import { state } from './state.js';

console.log("💾 presets.js loaded");

const STORAGE_KEY = 'morphing_interface_presets';
let currentPresetName = null;
let presetCallbacks = [];

export function initPresets() {
  console.log("💾 Presets system initialized");
}

export function savePreset(name, state) {
  if (!name || typeof name !== 'string') {
    console.warn('💾 Invalid preset name:', name);
    return false;
  }

  const presets = getPresetsFromStorage();

  const presetData = {
    name,
    timestamp: new Date().toISOString(),
    visualSettings: { ...state.lighting },
    morphWeights: { ...state.morphWeights },
    color: state.color,
    idleSpin: state.idleSpin,
    scale: state.scale,
    vessel: {
      opacity: state.vessel.opacity,
      scale: state.vessel.scale,
      color: state.vessel.color,
      enabled: state.vessel.enabled,
      spinEnabled: state.vessel.spinEnabled,   // NEW
      spinSpeed: state.vessel.spinSpeed,       // NEW
      layout: state.vessel.layout,             // NEW
      layoutIndex: state.vessel.layoutIndex,   // NEW
      audioSmoothing: state.vessel.audioSmoothing,  // NEW
      hueShiftRange: state.vessel.hueShiftRange     // NEW
    },
    shadows: {
      enabled: state.shadows.enabled,
      ground: state.shadows.ground,
      backdrop: state.shadows.backdrop,
      opacity: state.shadows.opacity,
      color: state.shadows.color
    },
    particles: {
      layout: state.particles.layout
    }
  };

  presets[name] = presetData;
  savePresetsToStorage(presets);

  currentPresetName = name;
  console.log(`💾 Preset saved: ${name}`);

  notifyPresetUpdate({ action: 'saved', presetName: name });
  return true;
}

export function loadPreset(name) {
  if (!name || typeof name !== 'string') {
    console.warn('💾 Invalid preset name:', name);
    return null;
  }

  const presets = getPresetsFromStorage();
  const preset = presets[name];

  if (!preset) {
    console.warn(`💾 Preset not found: ${name}`);
    return null;
  }

  // Restore state from preset
  if (preset.visualSettings) {
    Object.assign(state.lighting, preset.visualSettings);
  }
  if (preset.morphWeights) {
    Object.assign(state.morphWeights, preset.morphWeights);
  }
  if (preset.color) {
    state.color = preset.color;
  }
  if (preset.idleSpin !== undefined) {
    state.idleSpin = preset.idleSpin;
  }
  if (preset.scale !== undefined) {
    state.scale = preset.scale;
  }
  if (preset.vessel) {
    if (preset.vessel.opacity !== undefined) state.vessel.opacity = preset.vessel.opacity;
    if (preset.vessel.scale !== undefined) state.vessel.scale = preset.vessel.scale;
    if (preset.vessel.color !== undefined) state.vessel.color = preset.vessel.color;
    if (preset.vessel.enabled !== undefined) state.vessel.enabled = preset.vessel.enabled;
    if (preset.vessel.spinEnabled !== undefined) state.vessel.spinEnabled = preset.vessel.spinEnabled;
    if (preset.vessel.spinSpeed !== undefined) state.vessel.spinSpeed = preset.vessel.spinSpeed;
    if (preset.vessel.layout !== undefined) {
      state.vessel.layout = preset.vessel.layout;
      // Update layoutIndex to match (with fallback)
      const layouts = ["lattice", "hoops", "shells"];
      state.vessel.layoutIndex = preset.vessel.layoutIndex !== undefined ?
        preset.vessel.layoutIndex : layouts.indexOf(preset.vessel.layout);
      // Reinitialize vessel with new layout
      import('./vessel.js').then(({ reinitVessel }) => {
        import('./geometry.js').then(({ scene }) => {
          reinitVessel(scene);
        });
      });
    }
    if (preset.vessel.audioSmoothing !== undefined) state.vessel.audioSmoothing = preset.vessel.audioSmoothing;
    if (preset.vessel.hueShiftRange !== undefined) state.vessel.hueShiftRange = preset.vessel.hueShiftRange;
  }

  // Load shadows state (with backward compatibility)
  if (preset.shadows) {
    if (preset.shadows.enabled !== undefined) state.shadows.enabled = preset.shadows.enabled;
    if (preset.shadows.ground !== undefined) state.shadows.ground = preset.shadows.ground;
    if (preset.shadows.backdrop !== undefined) state.shadows.backdrop = preset.shadows.backdrop;
    if (preset.shadows.opacity !== undefined) state.shadows.opacity = preset.shadows.opacity;
    if (preset.shadows.color !== undefined) state.shadows.color = preset.shadows.color;
  } else {
    // Backward compatibility: missing keys default to enabled/black
    state.shadows.enabled = true;
    state.shadows.ground = true;
    state.shadows.backdrop = true;
    state.shadows.opacity = 0.25;
    state.shadows.color = '#000000';
  }

  // Load particles state (with backward compatibility)
  if (preset.particles) {
    if (preset.particles.layout !== undefined) state.particles.layout = preset.particles.layout;
  } else {
    // Default to "cube" for legacy presets
    state.particles.layout = 'cube';
  }

  currentPresetName = name;
  console.log(`💾 Preset loaded: ${name}`);

  notifyPresetUpdate({ action: 'loaded', presetName: name, presetData: preset });
  return preset;
}

export function deletePreset(name) {
  if (!name || typeof name !== 'string') {
    console.warn('💾 Invalid preset name:', name);
    return false;
  }

  const presets = getPresetsFromStorage();

  if (!presets[name]) {
    console.warn(`💾 Preset not found: ${name}`);
    return false;
  }

  delete presets[name];
  savePresetsToStorage(presets);

  if (currentPresetName === name) {
    currentPresetName = null;
  }

  console.log(`💾 Preset deleted: ${name}`);
  notifyPresetUpdate({ action: 'deleted', presetName: name });
  return true;
}

export function listPresets() {
  const presets = getPresetsFromStorage();
  return Object.keys(presets).sort();
}

export function getCurrentPresetName() {
  return currentPresetName;
}

export function getPresetData(name) {
  const presets = getPresetsFromStorage();
  return presets[name] || null;
}

export function onPresetUpdate(callback) {
  presetCallbacks.push(callback);
}

function getPresetsFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('💾 Error reading presets from localStorage:', error);
    return {};
  }
}

function savePresetsToStorage(presets) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
  } catch (error) {
    console.error('💾 Error saving presets to localStorage:', error);
  }
}

function notifyPresetUpdate(updateData) {
  presetCallbacks.forEach(callback => {
    try {
      callback(updateData);
    } catch (error) {
      console.error('💾 Error in preset callback:', error);
    }
  });
}

// Create a few default presets on first run
export function createDefaultPresets() {
  const presets = getPresetsFromStorage();

  if (Object.keys(presets).length === 0) {
    console.log("💾 Creating default presets...");

    // Cube Default
    savePreset('Cube Default', {
      morphWeights: { cube: 1.0, sphere: 0.0, pyramid: 0.0, torus: 0.0 },
      morphBlend: 0.0,
      currentTarget: 'cube',
      hudIdleSpin: true,
      hudRotX: 0,
      hudRotY: 0,
      hudScale: 1.0,
      visualSettings: {
        color: '#ff0000',
        hue: 0
      }
    });

    // Sphere Focus
    savePreset('Sphere Focus', {
      morphWeights: { cube: 0.0, sphere: 1.0, pyramid: 0.0, torus: 0.0 },
      morphBlend: 0.0,
      currentTarget: 'sphere',
      hudIdleSpin: true,
      hudRotX: 0,
      hudRotY: 0,
      hudScale: 1.0,
      visualSettings: {
        color: '#00ff00',
        hue: 120
      }
    });

    // Mixed Blend
    savePreset('Mixed Blend', {
      morphWeights: { cube: 0.3, sphere: 0.3, pyramid: 0.2, torus: 0.2 },
      morphBlend: 0.0,
      currentTarget: 'cube',
      hudIdleSpin: true,
      hudRotX: 0,
      hudRotY: 0,
      hudScale: 1.0,
      visualSettings: {
        color: '#0000ff',
        hue: 240
      }
    });
  }
}