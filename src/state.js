console.log("🎯 state.js loaded");

// Centralized application state for modular signal routing
export const state = {
  // Geometry transformations
  rotationX: 0.01,  // Base rotation speed X
  rotationY: 0.01,  // Base rotation speed Y
  scale: 1.0,       // Global scale multiplier

  // Morph target weights (normalized 0-1, auto-normalized if sum > 1)
  morphWeights: {
    cube: 1.0,      // Start with cube visible
    sphere: 0.0,
    pyramid: 0.0,
    torus: 0.0,
  },

  // Visual properties
  color: "#00ff00",  // Current geometry color
  hue: 120,          // Current hue in degrees (0-360)
  idleSpin: true,    // Enable/disable idle rotation

  // Audio-reactive values (normalized 0-1)
  audio: {
    bass: 0.0,       // Low frequency (20-250Hz)
    mid: 0.0,        // Mid frequency (250-2000Hz)
    treble: 0.0,     // High frequency (2000-8000Hz)
    enabled: false,  // Audio reactivity enabled
    sensitivity: 1.0, // Audio sensitivity multiplier
  },

  // Audio reactivity toggle
  audioReactive: false,

  // Vessel system
  vessel: {
    opacity: 0.5,
    scale: 1.0,
    color: "#00ff00",
    enabled: true,
    spinEnabled: false,     // NEW
    spinSpeed: 0.0035,      // NEW (radians per frame approx; ~0.2°/frame @60fps)
    scaleMultiplier: 1.2    // NEW (adaptive scaling margin)
  },

  // Particle system
  particlesEnabled: true,
  particlesCount: 1000,

  // Lighting system
  lighting: {
    ambientIntensity: 0.4,
    directionalIntensity: 1.0,
    directionalAngleX: -45,
    directionalAngleY: 45,
  },

  // Preset system
  presets: [],

  // Morph state (for transitions and blending)
  morphState: {
    current: 'cube',
    previous: 'cube',
    progress: 0,
    isTransitioning: false,
    targets: ['cube', 'sphere', 'pyramid', 'torus']
  }
};

// Utility function to normalize morph weights
export function normalizeMorphWeights() {
  const weights = state.morphWeights;
  const total = Object.values(weights).reduce((sum, weight) => sum + weight, 0);

  if (total > 1.0) {
    // Auto-normalize if sum exceeds 1.0
    Object.keys(weights).forEach(target => {
      weights[target] = weights[target] / total;
    });
    console.log("🎯 Morph weights auto-normalized");
  }
}

// Utility function to set individual morph weight
export function setMorphWeight(target, weight) {
  if (state.morphState.targets.includes(target)) {
    state.morphWeights[target] = Math.max(0, Math.min(1, weight));
    normalizeMorphWeights();
  } else {
    console.warn(`🎯 Invalid morph target: ${target}`);
  }
}

// Utility function to set all morph weights at once
export function setMorphWeights(weights) {
  state.morphState.targets.forEach(target => {
    if (weights[target] !== undefined) {
      state.morphWeights[target] = Math.max(0, Math.min(1, weights[target]));
    }
  });
  normalizeMorphWeights();
}

// Utility function to get current morph weights
export function getMorphWeights() {
  return { ...state.morphWeights };
}

// Utility function to set color and update hue
export function setColor(color) {
  state.color = color;
  // Extract hue from hex color for consistency
  const r = parseInt(color.slice(1, 3), 16) / 255;
  const g = parseInt(color.slice(3, 5), 16) / 255;
  const b = parseInt(color.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  if (diff === 0) {
    state.hue = 0;
  } else if (max === r) {
    state.hue = ((g - b) / diff) * 60;
  } else if (max === g) {
    state.hue = ((b - r) / diff + 2) * 60;
  } else {
    state.hue = ((r - g) / diff + 4) * 60;
  }

  if (state.hue < 0) state.hue += 360;
  state.hue = Math.round(state.hue);
}

// Utility function to set hue and update color
export function setHue(hue) {
  state.hue = hue % 360;

  // Convert HSL to hex (saturation 100%, lightness 50%)
  const h = state.hue / 360;
  const s = 1.0;
  const l = 0.5;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h * 6) % 2 - 1));
  const m = l - c / 2;

  let r, g, b;
  if (h < 1/6) { r = c; g = x; b = 0; }
  else if (h < 2/6) { r = x; g = c; b = 0; }
  else if (h < 3/6) { r = 0; g = c; b = x; }
  else if (h < 4/6) { r = 0; g = x; b = c; }
  else if (h < 5/6) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  state.color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

console.log("🎯 State initialized:", state);