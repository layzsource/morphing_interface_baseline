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
    sprites: {
      enabled: state.sprites.enabled,
      count: state.sprites.count
    },
    particles: {
      enabled: state.particles.enabled,
      count: state.particles.count,
      layout: state.particles.layout,
      hue: state.particles.hue,
      size: state.particles.size,
      opacity: state.particles.opacity,
      organicMotion: state.particles.organicMotion,
      organicStrength: state.particles.organicStrength || 0.2,  // Phase 4.2
      audioReactiveHue: state.particles.audioReactiveHue,
      velocity: state.particles.velocity,
      orbitalSpeed: state.particles.orbitalSpeed || 0.05,  // Phase 4.2a: gentle default
      motionSmoothness: state.particles.motionSmoothness,
      spread: state.particlesMotion?.spread || 1.0,  // Legacy spread only
      minCount: state.particles.minCount || 1000,    // Phase 4.4: adjusted ranges
      maxCount: state.particles.maxCount || 10000,
      minSize: state.particles.minSize || 0.005,
      maxSize: state.particles.maxSize || 0.1
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

  // Load sprites state (with backward compatibility)
  if (preset.sprites) {
    state.sprites.enabled = preset.sprites.enabled ?? true;
    state.sprites.count = preset.sprites.count ?? 200;
  } else {
    // Backward compatibility: default to enabled
    state.sprites = { enabled: true, count: 200 };
  }

  // Load particles state (with backward compatibility)
  if (preset.particles) {
    if (preset.particles.enabled !== undefined) state.particles.enabled = preset.particles.enabled;
    if (preset.particles.count !== undefined) state.particles.count = preset.particles.count;
    if (preset.particles.layout !== undefined) state.particles.layout = preset.particles.layout;

    // Particle polish properties (with backward compatibility and safe defaults)
    state.particles.hue = preset.particles.hue ?? 0;
    state.particles.size = preset.particles.size ?? 0.02; // Phase 4.4: smaller default
    state.particles.opacity = preset.particles.opacity ?? 0.5;
    state.particles.organicMotion = preset.particles.organicMotion ?? false;
    state.particles.organicStrength = preset.particles.organicStrength ?? 0.2; // Phase 4.2
    state.particles.audioReactiveHue = preset.particles.audioReactiveHue ?? false;

    // Velocity: prefer new single value, fallback to legacy motion.velocity
    state.particles.velocity = preset.particles.velocity ?? preset.particles.motion?.velocity ?? 0.05;
    state.particles.orbitalSpeed = preset.particles.orbitalSpeed ?? preset.particles.velocity ?? 0.05; // Phase 4.2a: gentle default
    state.particles.motionSmoothness = preset.particles.motionSmoothness ?? 0.5;

    // Phase 4.4: adjusted ranges for higher density/smaller particles
    state.particles.minCount = preset.particles.minCount ?? 1000;
    state.particles.maxCount = preset.particles.maxCount ?? 10000;
    state.particles.minSize = preset.particles.minSize ?? 0.005;
    state.particles.maxSize = preset.particles.maxSize ?? 0.1;

    // Legacy spread support only
    state.particlesMotion = {
      velocity: 0.5,  // Deprecated, not used
      spread: preset.particles.spread ?? preset.particles.motion?.spread ?? 1.0
    };

    // Note: HUD sliders are now controlled via HUD update callbacks, no manual sync needed

    // Reinitialize particles with new layout
    if (state.particles.enabled) {
      import('./particles.js').then(({ reinitParticles }) => {
        import('./geometry.js').then(({ scene }) => {
          reinitParticles(scene);
        });
      });
    }
  } else {
    // Default to safe values for legacy presets (Phase 4.4: higher density/smaller particles)
    state.particles.layout = 'cube';
    state.particles.hue = 0;
    state.particles.size = 0.02; // Phase 4.4: smaller default
    state.particles.opacity = 0.5;
    state.particles.organicMotion = false;
    state.particles.organicStrength = 0.2; // Phase 4.2
    state.particles.audioReactiveHue = false;
    state.particles.velocity = 0.05;
    state.particles.orbitalSpeed = 0.05; // Phase 4.2a: gentle default
    state.particles.motionSmoothness = 0.5;
    state.particles.minCount = 1000; // Phase 4.4: adjusted
    state.particles.maxCount = 10000; // Phase 4.4: adjusted
    state.particles.minSize = 0.005; // Phase 4.4: adjusted
    state.particles.maxSize = 0.1; // Phase 4.4: adjusted
    state.particlesMotion = {
      velocity: 0.5,
      spread: 1.0
    };
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