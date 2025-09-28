import { initHUD, updatePresetList } from './hud.js';
import { initMIDI, getMIDIDeviceCount } from './midi.js';
import { getHUDIdleSpin, getVisualData, getMorphState } from './geometry.js';
import { initTelemetry } from './telemetry.js';
import { initPresets, createDefaultPresets, listPresets, getCurrentPresetName } from './presets.js';
import { initAudio, getAudioValues } from './audio.js';
import { state } from './state.js';

// Import the new router modules to set up the signal routing
import './midiRouter.js';
import './hudRouter.js';
import './audioRouter.js';
import './presetRouter.js';

console.log("🔄 Build timestamp:", new Date().toISOString());

initHUD();

initMIDI(() => {
  console.log("🎹 MIDI ready");
});

initPresets();
createDefaultPresets();

initAudio();

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
