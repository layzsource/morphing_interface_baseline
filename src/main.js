import { initHUD } from './hud.js';
import { initMIDI, onCC } from './midi.js';
import './geometry.js';
import './periaktos.js';
import './telemetry.js';

initHUD();

initMIDI(() => {
  console.log("🎹 MIDI ready");
});

onCC(({ cc, value, device }) => {
  console.log(`CC${cc} from ${device}: ${value}`);
});

console.log("✅ main.js loaded – all modules imported");
