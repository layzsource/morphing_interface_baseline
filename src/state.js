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

  // Phase 11.2: Additive audio morphing (base + audio modulation)
  morphBaseWeights: [0.0, 1.0, 0.0, 0.0],  // [sphere, cube, pyramid, torus] - persistent manual values
  morphAudioWeights: [0.0, 0.0, 0.0, 0.0], // Audio modulation deltas (applied additively)
  morphBaseFrozen: false,                   // Phase 11.4.3E: Freeze flag - prevents morphBaseWeights updates when audio OFF

  // Visual properties
  color: "#00ff00",  // Current geometry color (legacy)
  hue: 120,          // Current hue in degrees (0-360)
  idleSpin: true,    // Enable/disable idle rotation

  // Phase 11.6.0: Image texture system
  texture: null,            // THREE.Texture loaded from image
  useTextureOnMorph: false,  // Toggle to apply texture to morph shape

  // Phase 11.2.1: Per-layer color system (base + audio additive)
  colorLayers: {
    geometry: {
      baseColor: "#00ff00",
      audioColor: "#ff0000",
      audioIntensity: 0.5
    },
    vessel: {
      baseColor: "#00ff00",
      audioColor: "#00ffff",
      audioIntensity: 0.3
    },
    particles: {
      baseColor: "#ffff00",
      audioColor: "#ff00ff",
      audioIntensity: 0.7
    },
    shadows: {
      baseColor: "#000000",
      audioColor: "#333333",
      audioIntensity: 0.2
    }
  },

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
    scaleMultiplier: 1.2,   // NEW (adaptive scaling margin)
    layout: 'lattice',      // NEW (orbital layout: 'lattice' | 'hoops' | 'shells')
    layoutIndex: 0,         // NEW (layout index for MIDI cycling: 0=lattice, 1=hoops, 2=shells)
    audioSmoothing: 0.7,    // NEW (audio smoothing factor)
    hueShiftRange: 20,      // NEW (hue shift range in degrees)
    mode: 'gyre'            // Phase 2.x: Vessel mode ('gyre' | 'conflat6')
  },

  // Particle system
  particles: {
    enabled: true,
    count: 5000,         // Phase 4.4: default (was 1000)
    minCount: 1000,      // Phase 4.4: lower bound (was 100)
    maxCount: 10000,     // Phase 4.4: upper bound (was 5000)
    layout: "cube",      // 'cube' | 'sphere' | 'torus'
    hue: 0,              // Hue shift in degrees (0-360)
    size: 0.02,          // Phase 4.4: Particle size (was 0.15)
    minSize: 0.005,      // Phase 4.4: lower size bound (was 0.05)
    maxSize: 0.1,        // Phase 4.4: upper size bound (was 1.0)
    opacity: 0.5,        // Particle opacity (0.0-1.0)
    organicMotion: false,  // Enable organic motion with jitter
    organicStrength: 0.2,  // Phase 4.2: Organic wobble strength (0-1)
    audioReactiveHue: false,  // Enable audio-reactive hue cycling
    velocity: 0.05,      // Orbital speed factor (0.1-2.0) - legacy compatibility
    orbitalSpeed: 0.05,  // Phase 4.2a: Gentle start (was 0.8)
    motionSmoothness: 0.5,  // Motion damping factor (0-1, higher = smoother)
    trailEnabled: false,    // Phase 2.3.2A: Line trails (InstancedMesh segments)
    trailLength: 0,         // Phase 2.3.2A: Trail length in frames (0-10)
    trailOpacity: 0.3,      // Phase 2.3.2A: Trail line opacity
    trailFade: 1.0,         // Phase 2.3.2C: Trail fade strength
    trailAudioReactive: false,  // Phase 2.3.2D: Audio-reactive trail length
    trailLengthMin: 2,      // Phase 2.3.2D: Min trail length for audio reactivity
    trailLengthMax: 10      // Phase 2.3.2D: Max trail length for audio reactivity
  },

  // Dual Trail System: Motion Trails (postprocessing blur)
  motionTrailsEnabled: false,     // AfterimagePass toggle
  motionTrailIntensity: 0.96,     // Blur damp value (0.85-0.99)
  // Backward compatibility
  particlesEnabled: true,
  particlesCount: 5000, // Phase 4.4: matches new default
  particlesMotion: {
    velocity: 0.5,   // base drift speed multiplier (HUD slider: 0.1–2.0)
    spread: 1.0,     // spatial spread multiplier (HUD slider: 0.1–2.0)
  },

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
  },

  // Shadows configuration
  shadows: {
    enabled: true,
    ground: true,
    backdrop: true,
    opacity: 0.25,
    color: '#000000'
  },

  // Phase 2.3.5/6: Shadow Box configuration
  shadowBox: {
    threshold: 0.5,
    gain: 1.0,
    bgColor: '#000000',
    fgColor: '#ffffff',
    palette: 'Manual'  // Phase 2.3.6: 'Manual' | 'Alchemy Gold' | 'Blake Indigo' | 'Cosmic White'
  },

  // Sprites configuration
  sprites: {
    enabled: true,
    count: 200
  },

  // Wireframe overlay configuration
  wireframe: {
    enabled: true
  },

  // Debug visualization options (OFF by default)
  debug: {
    showWireframe: false,
    showRibbon: false
  },

  // Phase 11.2.8: Preset interpolation system
  interpolation: {
    enabled: true,          // User toggle for interpolation
    active: false,          // Currently interpolating
    duration: 2000,         // Interpolation duration in ms
    startTime: null,        // performance.now() when interpolation started
    startState: null,       // Snapshot of state at interpolation start
    targetState: null       // Target preset state to interpolate towards
  }
};

// Phase 11.3.0: Morph Chain
export const morphChain = {
  presets: [],       // array of preset names (strings)
  currentIndex: 0,   // index into presets (target)
  active: false,     // chain running?
  duration: 2000,    // ms per step; mirrors interpolation.duration by default
  // Phase 11.3.1: Enhanced features
  loop: false,       // repeat chain continuously
  shuffle: false,    // randomize order each run
  savedChains: [],   // array of saved chain configs: { name, presets, duration, loop, shuffle }
  currentChainName: null,  // name of currently running saved chain (if any)
  // Phase 11.3.2: Progress tracking
  stepStartTime: null,  // performance.now() when current step started
  // Phase 11.4.0: Playback controls
  paused: false,     // chain paused?
  pausedAt: null,    // performance.now() when paused
  pausedProgress: 0  // progress (0-1) when paused
};

// Phase 11.5.0: Flag to suppress redundant normalize logs
let normalizeLogged = false;

// Utility function to normalize morph weights
export function normalizeMorphWeights() {
  const weights = state.morphWeights;
  const total = Object.values(weights).reduce((sum, weight) => sum + weight, 0);

  if (total > 1.0) {
    // Auto-normalize if sum exceeds 1.0
    Object.keys(weights).forEach(target => {
      weights[target] = weights[target] / total;
    });
    // Phase 11.5.0: Log only once when normalization starts
    if (!normalizeLogged) {
      console.log("🎯 Morph weights auto-normalized (sum exceeded 1.0)");
      normalizeLogged = true;
    }
  } else {
    // Reset flag when weights are back in valid range
    normalizeLogged = false;
  }
}

// Utility function to set individual morph weight
export function setMorphWeight(target, weight) {
  // Phase 11.4.3E: Freeze morphBaseWeights when audio OFF
  if (!state.audioReactive) {
    // 🚫 Audio OFF — freeze morphBaseWeights (no overwrites)
    if (!state.morphBaseFrozen) {
      console.log("🛑 Audio OFF — morphBaseWeights frozen at", state.morphBaseWeights);
      state.morphBaseFrozen = true;
    }
    return; // Skip updating while frozen
  }

  // 🎵 Audio ON — allow updates + normalization
  state.morphBaseFrozen = false;

  if (state.morphState.targets.includes(target)) {
    state.morphWeights[target] = Math.max(0, Math.min(1, weight));
    normalizeMorphWeights();

    // Phase 11.2: Sync to morphBaseWeights array [sphere, cube, pyramid, torus]
    const targetIndex = ['sphere', 'cube', 'pyramid', 'torus'].indexOf(target);
    if (targetIndex >= 0) {
      state.morphBaseWeights[targetIndex] = state.morphWeights[target];
      // Phase 11.4.3D: Trace morphBaseWeights update
      console.log("📦 morphBaseWeights updated (setMorphWeight)", state.morphBaseWeights);
    }
  } else {
    console.warn(`🎯 Invalid morph target: ${target}`);
  }
}

// Utility function to set all morph weights at once
export function setMorphWeights(weights) {
  // Phase 11.4.3E: Freeze morphBaseWeights when audio OFF
  if (!state.audioReactive) {
    // 🚫 Audio OFF — freeze morphBaseWeights (no overwrites)
    if (!state.morphBaseFrozen) {
      console.log("🛑 Audio OFF — morphBaseWeights frozen at", state.morphBaseWeights);
      state.morphBaseFrozen = true;
    }
    return; // Skip updating while frozen
  }

  // 🎵 Audio ON — allow updates + normalization
  state.morphBaseFrozen = false;

  state.morphState.targets.forEach(target => {
    if (weights[target] !== undefined) {
      state.morphWeights[target] = Math.max(0, Math.min(1, weights[target]));
    }
  });
  normalizeMorphWeights();

  // Phase 11.2: Sync to morphBaseWeights array [sphere, cube, pyramid, torus]
  state.morphBaseWeights = [
    state.morphWeights.sphere || 0,
    state.morphWeights.cube || 0,
    state.morphWeights.pyramid || 0,
    state.morphWeights.torus || 0
  ];
  // Phase 11.4.3D: Trace morphBaseWeights update
  console.log("📦 morphBaseWeights updated (setMorphWeights)", state.morphBaseWeights);
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

// Phase 11.2.1: Color blending utilities for per-layer additive colors
export function hexToRGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

export function rgbToHex(rgb) {
  const r = Math.round(Math.max(0, Math.min(255, rgb.r)));
  const g = Math.round(Math.max(0, Math.min(255, rgb.g)));
  const b = Math.round(Math.max(0, Math.min(255, rgb.b)));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Phase 11.2.1: Additive color blending
// final = base + (audio * intensity * audioLevel)
export function blendColors(baseHex, audioHex, intensity, audioLevel) {
  const baseRGB = hexToRGB(baseHex);
  const audioRGB = hexToRGB(audioHex);

  const contribution = intensity * audioLevel;
  const finalRGB = {
    r: baseRGB.r + (audioRGB.r * contribution),
    g: baseRGB.g + (audioRGB.g * contribution),
    b: baseRGB.b + (audioRGB.b * contribution)
  };

  return rgbToHex(finalRGB);
}

// Phase 11.2.8: Interpolation helper functions
// Linear interpolation between two values
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Interpolate between two hex colors
export function lerpColor(colorA, colorB, t) {
  const rgbA = hexToRGB(colorA);
  const rgbB = hexToRGB(colorB);

  const lerpedRGB = {
    r: lerp(rgbA.r, rgbB.r, t),
    g: lerp(rgbA.g, rgbB.g, t),
    b: lerp(rgbA.b, rgbB.b, t)
  };

  return rgbToHex(lerpedRGB);
}

// Interpolate between two arrays (for morphBaseWeights)
export function lerpArray(arrA, arrB, t) {
  return arrA.map((a, i) => lerp(a, arrB[i] || 0, t));
}

// Ease-in-out cubic easing function
export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Phase 11.4.1: Baseline snapshot + reset
export const BASELINE = {
  rotationX: 0.01,
  rotationY: 0.01,
  scale: 1.0,
  morphBaseWeights: [0.0, 1.0, 0.0, 0.0], // [sphere, cube, pyramid, torus] - default cube
  colorLayers: JSON.parse(JSON.stringify(state.colorLayers)),
  vessel: { opacity: state.vessel?.opacity ?? 0.5 },
  shadows: { opacity: state.shadows?.opacity ?? 0.25 },
  particles: { opacity: state.particles?.opacity ?? 0.5 }
};

export function resetToBaseline() {
  // Stop any active interpolation/chain
  state.interpolation.active = false;
  morphChain.active = false;
  morphChain.paused = false;

  // Reset transform values
  state.rotationX = BASELINE.rotationX;
  state.rotationY = BASELINE.rotationY;
  state.scale = BASELINE.scale;

  // Reset morph weights
  state.morphBaseWeights = [...BASELINE.morphBaseWeights];
  // Phase 11.4.3D: Trace morphBaseWeights update
  console.log("📦 morphBaseWeights updated (resetToBaseline)", state.morphBaseWeights);

  // Reset color layers
  state.colorLayers = JSON.parse(JSON.stringify(BASELINE.colorLayers));

  // Reset opacities
  state.vessel.opacity = BASELINE.vessel.opacity;
  state.shadows.opacity = BASELINE.shadows.opacity;
  state.particles.opacity = BASELINE.particles.opacity;

  console.log("♻️ State reset to baseline");
}

// ---- Phase 11.4.2S: stable audio gate -------------------------------
// ---- Phase 11.4.3: Added debug logging for audio gate validation ----
let lastAudioReactiveLog = true; // Track state changes

export function getEffectiveAudio() {
  const { audioReactive, audio } = state;

  // Phase 11.4.3: Debug log when audioReactive changes to OFF
  if (!audioReactive && lastAudioReactiveLog !== false) {
    console.log("🎵 Audio-reactive OFF — returning zero weights");
    lastAudioReactiveLog = false;
  } else if (audioReactive && lastAudioReactiveLog !== true) {
    console.log("🎵 Audio-reactive ON — resuming audio response");
    lastAudioReactiveLog = true;
  }

  if (!audioReactive) {
    return { bass: 0, mid: 0, treble: 0, level: 0 };
  }

  if (!audio || Number.isNaN(audio.bass) || Number.isNaN(audio.mid) || Number.isNaN(audio.treble)) {
    return { bass: 0, mid: 0, treble: 0, level: 0 };
  }

  return {
    bass: audio.bass ?? 0,
    mid: audio.mid ?? 0,
    treble: audio.treble ?? 0,
    level: audio.level ?? ((audio.bass ?? 0) + (audio.mid ?? 0) + (audio.treble ?? 0)) / 3,
  };
}
// ---------------------------------------------------------------------

console.log("🎯 State initialized:", state);
