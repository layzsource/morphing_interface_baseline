import { onAudioUpdate } from './audio.js';
import { state, setMorphWeights } from './state.js';

console.log("🎶 audioRouter.js loaded");

// Audio-reactive weights that get combined with base weights
let audioMorphWeights = { cube: 0.0, sphere: 0.0, pyramid: 0.0, torus: 0.0 };

// Audio updates to state routing
onAudioUpdate((audioData) => {
  // Update audio state values
  state.audio.bass = audioData.bass || 0.0;
  state.audio.mid = audioData.mid || 0.0;
  state.audio.treble = audioData.treble || 0.0;
  state.audio.enabled = audioData.isEnabled || false;
  state.audio.sensitivity = audioData.sensitivity || 1.0;

  if (audioData.isEnabled) {
    // Map audio frequencies to morph targets
    // Bass → Cube weight
    // Mid → Sphere weight
    // Treble → Pyramid weight
    // Torus unaffected for Phase 6
    audioMorphWeights.cube = audioData.bass || 0.0;
    audioMorphWeights.sphere = audioData.mid || 0.0;
    audioMorphWeights.pyramid = audioData.treble || 0.0;
    audioMorphWeights.torus = 0.0;

    // Apply audio-reactive morphing by combining with existing weights
    applyAudioReactiveMorphing();
  } else {
    // Reset audio weights when disabled
    audioMorphWeights = { cube: 0.0, sphere: 0.0, pyramid: 0.0, torus: 0.0 };
  }
});

function applyAudioReactiveMorphing() {
  if (!state.audio.enabled) return;

  // Get current base morph weights (from HUD/MIDI/Presets)
  const baseWeights = { ...state.morphWeights };

  // Combine audio weights with existing weights additively
  const combinedWeights = {};

  // Apply audio influence additively to existing weights
  Object.keys(baseWeights).forEach(target => {
    combinedWeights[target] = baseWeights[target] + (audioMorphWeights[target] || 0);
  });

  // Set the combined weights (this will auto-normalize in state.js)
  setMorphWeights(combinedWeights);
}

console.log("🎶 Audio routing configured");