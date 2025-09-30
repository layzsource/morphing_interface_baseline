// Phase 11.2.3: Unified Control Binding System
// Purpose: Centralize ALL control → parameter mapping for MIDI, HUD, presets
// All state mutations flow through applyBinding() - no direct state writes

import { state } from './state.js';

console.log("🎛️ controlBindings.js loaded");

/**
 * Phase 11.2.3: Complete Binding Registry
 * Maps controls (HUD/MIDI/Preset) → state paths
 * Format: { category: { property: { source, midi, statePath, mapper } } }
 */
const controlBindings = {
  geometry: {
    baseColor: { source: "HUD", midi: null, statePath: "colorLayers.geometry.baseColor" },
    audioColor: { source: "HUD", midi: null, statePath: "colorLayers.geometry.audioColor" },
    audioIntensity: { source: "HUD", midi: "CC20", statePath: "colorLayers.geometry.audioIntensity" },
  },
  vessel: {
    baseColor: { source: "HUD", midi: null, statePath: "colorLayers.vessel.baseColor" },
    audioColor: { source: "HUD", midi: null, statePath: "colorLayers.vessel.audioColor" },
    audioIntensity: { source: "HUD", midi: "CC21", statePath: "colorLayers.vessel.audioIntensity" },
  },
  shadows: {
    baseColor: { source: "HUD", midi: null, statePath: "colorLayers.shadows.baseColor" },
    audioColor: { source: "HUD", midi: null, statePath: "colorLayers.shadows.audioColor" },
    audioIntensity: { source: "HUD", midi: "CC22", statePath: "colorLayers.shadows.audioIntensity" },
  },
  particles: {
    baseColor: { source: "HUD", midi: null, statePath: "colorLayers.particles.baseColor" },
    audioColor: { source: "HUD", midi: null, statePath: "colorLayers.particles.audioColor" },
    audioIntensity: { source: "HUD", midi: "CC23", statePath: "colorLayers.particles.audioIntensity" },
    hueShift: { source: "HUD/MIDI", midi: "CC21", statePath: "particles.hue" },
  },
  morph: {
    // CC2 and CC3 handled specially in midiRouter due to complex blend logic
    sphereWeight: { source: "HUD/MIDI", midi: "CC10", statePath: "morphBaseWeights[0]" },
    cubeWeight: { source: "HUD/MIDI", midi: null, statePath: "morphBaseWeights[1]" },
    pyramidWeight: { source: "HUD/MIDI", midi: "CC22", statePath: "morphBaseWeights[2]" },
    torusWeight: { source: "HUD/MIDI", midi: "CC23", statePath: "morphBaseWeights[3]" },
  }
};

// MIDI CC → Binding lookup table (reverse map for fast MIDI routing)
const midiCCMap = {};
Object.keys(controlBindings).forEach(category => {
  Object.keys(controlBindings[category]).forEach(property => {
    const binding = controlBindings[category][property];
    if (binding.midi) {
      midiCCMap[binding.midi] = { category, property, statePath: binding.statePath };
    }
  });
});

/**
 * Phase 11.2.3: Core binding application function
 * ALL state mutations should flow through this function
 * @param {string} category - Control category (geometry, vessel, shadows, particles, morph)
 * @param {string} property - Property name (baseColor, audioIntensity, etc.)
 * @param {any} value - New value to apply
 * @param {string} source - Control source for logging ('HUD', 'MIDI', 'Preset')
 */
export function applyBinding(category, property, value, source = "HUD") {
  const binding = controlBindings[category]?.[property];

  if (!binding) {
    console.warn(`🎛️ [ControlBinding] Unknown binding: ${category}.${property}`);
    return;
  }

  const statePath = binding.statePath;
  console.log(`🎛️ [ControlUpdate] ${source} → ${category}.${property} = ${value} (${statePath})`);

  // Apply value to state using path notation
  setNestedValue(state, statePath, value);
}

/**
 * Helper: Set nested state value using dot/bracket notation
 * Supports: "colorLayers.geometry.baseColor" and "morphBaseWeights[0]"
 * @param {object} obj - Root state object
 * @param {string} path - Dot-notation path (e.g., "vessel.opacity")
 * @param {any} value - Value to set
 */
function setNestedValue(obj, path, value) {
  // Handle array bracket notation: morphBaseWeights[0]
  const arrayMatch = path.match(/^(.+)\[(\d+)\]$/);
  if (arrayMatch) {
    const arrayPath = arrayMatch[1];
    const index = parseInt(arrayMatch[2]);
    const parts = arrayPath.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      current = current[parts[i]];
    }
    const arrayName = parts[parts.length - 1];
    if (current[arrayName] && Array.isArray(current[arrayName])) {
      current[arrayName][index] = value;
    }
    return;
  }

  // Handle standard dot notation: colorLayers.geometry.baseColor
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) {
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

/**
 * Get binding info for a MIDI CC number
 * @param {number} cc - MIDI CC number (1-127)
 * @returns {object|null} Binding info or null if not mapped
 */
export function getBindingForCC(cc) {
  const ccKey = `CC${cc}`;
  return midiCCMap[ccKey] || null;
}

/**
 * Apply MIDI CC value through binding system
 * @param {number} cc - MIDI CC number
 * @param {number} value - MIDI value (0-127)
 * @param {function} mapper - Optional value transformation (default: 0-127 → 0-1)
 */
export function applyMIDIBinding(cc, value, mapper = (v) => v / 127) {
  const binding = getBindingForCC(cc);
  if (binding) {
    const mappedValue = mapper(value);
    applyBinding(binding.category, binding.property, mappedValue, "MIDI");
    return true;
  }
  return false;
}

/**
 * Legacy compatibility: Update control by ID (Phase 11.2.2 interface)
 * @param {string} controlId - Control identifier (e.g., "colorLayer.geometry.baseColor")
 * @param {any} value - New value
 */
export function updateControl(controlId, value) {
  // Parse controlId format: "colorLayer.geometry.baseColor"
  if (controlId.startsWith('colorLayer.')) {
    const parts = controlId.split('.');
    const category = parts[1]; // geometry, vessel, shadows, particles
    const property = parts[2]; // baseColor, audioColor, audioIntensity
    applyBinding(category, property, value, "HUD");
  } else {
    console.log(`🎛️ [ControlUpdate] ${controlId} = ${value}`);
  }
}

/**
 * Register a custom binding (for advanced use cases)
 * @param {string} category - Control category
 * @param {string} property - Property name
 * @param {object} bindingConfig - { source, midi, statePath, mapper }
 */
export function registerBinding(category, property, bindingConfig) {
  if (!controlBindings[category]) {
    controlBindings[category] = {};
  }
  controlBindings[category][property] = bindingConfig;

  // Update MIDI map if MIDI CC specified
  if (bindingConfig.midi) {
    midiCCMap[bindingConfig.midi] = {
      category,
      property,
      statePath: bindingConfig.statePath
    };
  }

  console.log(`🎛️ [ControlBinding] Registered: ${category}.${property} → ${bindingConfig.statePath}`);
}

/**
 * Get all bindings for debugging
 */
export function getBindings() {
  return { controlBindings, midiCCMap };
}

/**
 * Initialize default bindings (called on app startup)
 */
export function initDefaultBindings() {
  console.log("🎛️ [ControlBinding] Initializing unified binding system");
  console.log(`🎛️ [ControlBinding] Loaded ${Object.keys(controlBindings).length} categories`);
  console.log(`🎛️ [ControlBinding] MIDI mappings: ${Object.keys(midiCCMap).length} CCs`);

  // Log MIDI mappings for debugging
  Object.keys(midiCCMap).forEach(cc => {
    const binding = midiCCMap[cc];
    console.log(`🎛️ [MIDI Map] ${cc} → ${binding.category}.${binding.property}`);
  });
}

export default {
  applyBinding,
  applyMIDIBinding,
  getBindingForCC,
  updateControl,
  registerBinding,
  getBindings,
  initDefaultBindings
};

console.log("🎛️ Control binding system ready (Phase 11.2.3)");
