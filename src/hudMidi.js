console.log("🎹 hudMidi.js loaded");

/**
 * Phase 11.7.50: Modular MIDI HUD Section
 * Extracted from hud.js to reduce monolithic HUD file
 *
 * Note: Currently no MIDI UI exists in hud.js, but this module provides
 * infrastructure for future MIDI controls (port selection, CC mappings, etc.)
 */

import { getMIDIDeviceCount } from './midi.js';

// Helper to create a control with consistent styling
function createControl(labelText) {
  const container = document.createElement('div');
  container.style.cssText = 'margin-bottom: 12px;';

  const label = document.createElement('label');
  label.textContent = labelText;
  label.style.cssText = 'display: block; margin-bottom: 5px;';

  return { container, label };
}

function createToggleControl(labelText, defaultValue, onChange) {
  const { container, label } = createControl(labelText);

  const toggle = document.createElement('input');
  toggle.type = 'checkbox';
  toggle.checked = defaultValue;
  toggle.style.cssText = 'margin-left: 10px;';
  toggle.addEventListener('change', (e) => onChange(e.target.checked));

  container.appendChild(label);
  label.appendChild(toggle);

  return container;
}

/**
 * Creates the MIDI HUD section with all controls
 * @param {HTMLElement} parentContainer - The parent container to append to
 * @param {Function} notifyHUDUpdate - Callback to notify HUD changes
 */
export function createMidiHudSection(parentContainer, notifyHUDUpdate) {
  console.log("🎹 Creating MIDI HUD section");

  // Section separator
  const separator = document.createElement('hr');
  separator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  parentContainer.appendChild(separator);

  // Section title
  const title = document.createElement('h4');
  title.textContent = '🎹 MIDI';
  title.style.cssText = 'margin: 0 0 10px 0; color: #ff00ff; font-size: 12px;';
  parentContainer.appendChild(title);

  // MIDI device count display
  const deviceCountDiv = document.createElement('div');
  deviceCountDiv.style.cssText = 'margin-bottom: 15px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 5px;';

  const deviceCountLabel = document.createElement('div');
  const deviceCount = getMIDIDeviceCount();
  deviceCountLabel.innerHTML = `<span style="color: #888;">MIDI Devices:</span> <span id="hud-midi-devices" style="color: #ff00ff;">${deviceCount}</span>`;
  deviceCountLabel.style.cssText = 'font-size: 12px;';
  deviceCountDiv.appendChild(deviceCountLabel);

  parentContainer.appendChild(deviceCountDiv);

  // MIDI logging toggle (for debugging)
  const logToggle = createToggleControl('Enable MIDI Logging', false, (value) => {
    notifyHUDUpdate({ midiLogging: value });
  });
  logToggle.title = 'Log all incoming MIDI messages to console';
  parentContainer.appendChild(logToggle);

  // Info text about MIDI mappings
  const infoDiv = document.createElement('div');
  infoDiv.style.cssText = 'margin-top: 10px; padding: 8px; background: rgba(255,255,0,0.1); border-radius: 5px; font-size: 11px; color: #ffff00;';
  infoDiv.innerHTML = `
    <strong>Active MIDI Mappings:</strong><br>
    • Mandala: CC20-23 (symmetry, rings, rotation, scale)<br>
    • Vessel: CC24-26 (layout, opacity, scale)<br>
    • Emoji: CC27-31 (physics, story mode)<br>
    • Global: CC1 (mod wheel) for master control
  `;
  parentContainer.appendChild(infoDiv);

  console.log("🎹 MIDI HUD section created");
}
