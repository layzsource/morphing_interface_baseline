console.log("📡 hudTelemetry.js loaded");

/**
 * Phase 11.7.50: Modular Telemetry HUD Section
 * Extracted from hud.js to reduce monolithic HUD file
 *
 * Note: Performance HUD (FPS/Draw Calls) lives in hudParticles.js
 * This module provides telemetry overlay toggle and debug controls
 */

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
 * Creates the Telemetry/Debug HUD section
 * @param {HTMLElement} parentContainer - The parent container to append to
 * @param {Function} notifyHUDUpdate - Callback to notify HUD changes
 */
export function createTelemetryHudSection(parentContainer, notifyHUDUpdate) {
  console.log("📡 Creating Telemetry HUD section");

  // Section separator
  const separator = document.createElement('hr');
  separator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  parentContainer.appendChild(separator);

  // Section title
  const title = document.createElement('h4');
  title.textContent = '📡 Telemetry & Debug';
  title.style.cssText = 'margin: 0 0 10px 0; color: #ff9900; font-size: 12px;';
  parentContainer.appendChild(title);

  // Telemetry overlay toggle
  const telemetryToggle = createToggleControl('Show Telemetry Overlay', false, (value) => {
    notifyHUDUpdate({ telemetryOverlay: value });

    // Toggle telemetry overlay visibility
    const overlay = document.getElementById('telemetry-overlay');
    if (overlay) {
      overlay.style.display = value ? 'block' : 'none';
    }
  });
  telemetryToggle.title = 'Show/hide telemetry overlay with FPS, MIDI, morph weights, etc.';
  parentContainer.appendChild(telemetryToggle);

  // Info about Performance HUD location
  const infoDiv = document.createElement('div');
  infoDiv.style.cssText = 'margin-top: 10px; padding: 8px; background: rgba(255,255,0,0.1); border-radius: 5px; font-size: 11px; color: #ffff00;';
  infoDiv.innerHTML = `
    <strong>Performance Metrics:</strong><br>
    FPS and Draw Calls are displayed in the Particles section on the Visual tab.
  `;
  parentContainer.appendChild(infoDiv);

  console.log("📡 Telemetry HUD section created");
}
