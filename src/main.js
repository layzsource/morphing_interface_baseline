import { initHUD, updatePresetList } from './hud.js';
import { initMIDI, onCC, getMIDIDeviceCount } from './midi.js';
import { getHUDIdleSpin } from './geometry.js';
import { initPeriaktos, toggleMorph, getMorphState } from './periaktos.js';
import { initTelemetry } from './telemetry.js';
import { initPresets, createDefaultPresets, listPresets, getCurrentPresetName } from './presets.js';

console.log("🔄 Build timestamp:", new Date().toISOString());

initHUD();

initMIDI(() => {
  console.log("🎹 MIDI ready");
});

onCC(({ cc, value, device }) => {
  console.log(`CC${cc} from ${device}: ${value}`);
});

initPeriaktos();

initPresets();
createDefaultPresets();

initTelemetry(() => ({
  midiDevices: getMIDIDeviceCount(),
  hudIdle: getHUDIdleSpin(),
  morphState: getMorphState(),
  currentPreset: getCurrentPresetName()
}));

// Update preset list in HUD after initialization
setTimeout(() => {
  updatePresetList(listPresets());
}, 100);

window.addEventListener('keydown', (e) => {
  if (e.key === 'p' || e.key === 'P') {
    toggleMorph();
  }
});

console.log("✅ main.js loaded – all modules imported");
