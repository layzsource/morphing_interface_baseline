console.log("🎶 hudAudio.js loaded");

/**
 * Phase 11.7.50: Modular Audio HUD Section
 * Extracted from hud.js to reduce monolithic HUD file
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

function createSliderControl(labelText, defaultValue, min, max, step, onChange) {
  const { container, label } = createControl(labelText);

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = min;
  slider.max = max;
  slider.step = step;
  slider.value = defaultValue;
  slider.style.cssText = 'width: 100%; margin-top: 5px;';

  const valueDisplay = document.createElement('span');
  valueDisplay.textContent = defaultValue;
  valueDisplay.style.cssText = 'margin-left: 10px; color: #00ff00;';

  slider.addEventListener('input', (e) => {
    const value = parseFloat(e.target.value);
    valueDisplay.textContent = value.toFixed(step >= 1 ? 0 : (step < 0.01 ? 4 : (step < 0.1 ? 2 : 1)));
    onChange(value);
  });

  container.appendChild(label);
  label.appendChild(valueDisplay);
  container.appendChild(slider);

  return container;
}

/**
 * Creates the Audio HUD section with all controls
 * @param {HTMLElement} parentContainer - The parent container to append to
 * @param {Function} notifyHUDUpdate - Callback to notify HUD changes
 */
export function createAudioHudSection(parentContainer, notifyHUDUpdate) {
  console.log("🎶 Creating Audio HUD section");

  // Section separator
  const separator = document.createElement('hr');
  separator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  parentContainer.appendChild(separator);

  // Section title
  const title = document.createElement('h4');
  title.textContent = '🎶 Audio-Reactive';
  title.style.cssText = 'margin: 0 0 10px 0; color: #ff9900; font-size: 12px;';
  parentContainer.appendChild(title);

  // Audio enable toggle
  const enableControl = createToggleControl('Audio-Reactive Morphing', false, (value) => {
    notifyHUDUpdate({ audioEnabled: value });
  });
  parentContainer.appendChild(enableControl);

  // Audio sensitivity slider
  const sensitivityControl = createSliderControl('Audio Sensitivity', 1.0, 0.5, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ audioSensitivity: value });
  });
  parentContainer.appendChild(sensitivityControl);

  console.log("🎶 Audio HUD section created");
}
