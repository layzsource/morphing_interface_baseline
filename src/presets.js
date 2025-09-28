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
    scale: state.scale
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