import { initHUD } from './hud.js';
import { initMIDI, onCC, getMIDIDeviceCount } from './midi.js';
import { getHUDIdleSpin } from './geometry.js';
import './periaktos.js';
import { initTelemetry } from './telemetry.js';

initHUD();

initMIDI(() => {
  console.log("🎹 MIDI ready");
});

onCC(({ cc, value, device }) => {
  console.log(`CC${cc} from ${device}: ${value}`);
});

initTelemetry(() => ({
  midiDevices: getMIDIDeviceCount(),
  hudIdle: getHUDIdleSpin()
}));

console.log("✅ main.js loaded – all modules imported");
