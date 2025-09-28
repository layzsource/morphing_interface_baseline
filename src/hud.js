console.log("📟 hud.js loaded");

let hudCallbacks = [];

export function initHUD() {
  const hudPanel = createHUDPanel();
  document.body.appendChild(hudPanel);
  console.log("📟 HUD initialized");
}

export function onHUDUpdate(callback) {
  hudCallbacks.push(callback);
}

function createHUDPanel() {
  const panel = document.createElement('div');
  panel.id = 'hud-panel';
  panel.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 8px;
    font-family: monospace;
    font-size: 14px;
    z-index: 1000;
    min-width: 200px;
  `;

  const title = document.createElement('h3');
  title.textContent = '🔺 Geometry Controls';
  title.style.cssText = 'margin: 0 0 15px 0; color: #00ff00;';
  panel.appendChild(title);

  const idleSpinControl = createToggleControl('Idle Spin', true, (value) => {
    notifyHUDUpdate({ idleSpin: value });
  });
  panel.appendChild(idleSpinControl);

  const xRotControl = createSliderControl('X Rotation', 0, 0, 0.2, 0.001, (value) => {
    notifyHUDUpdate({ rotX: value });
  });
  panel.appendChild(xRotControl);

  const yRotControl = createSliderControl('Y Rotation', 0, 0, 0.2, 0.001, (value) => {
    notifyHUDUpdate({ rotY: value });
  });
  panel.appendChild(yRotControl);

  const scaleControl = createSliderControl('Scale', 1.0, 0.5, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ scale: value });
  });
  panel.appendChild(scaleControl);

  const morphControl = createDropdownControl('Morph Target', 'cube',
    ['cube', 'sphere', 'pyramid', 'torus'], (value) => {
    notifyHUDUpdate({ morphTarget: value });
  });
  panel.appendChild(morphControl);

  const morphIntensityControl = createSliderControl('Morph Intensity', 0.0, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ morphBlend: value });
  });
  panel.appendChild(morphIntensityControl);

  // Add separator for Phase 4 controls
  const separator = document.createElement('hr');
  separator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(separator);

  const phase4Title = document.createElement('h4');
  phase4Title.textContent = '🌀 Multi-Target Blends';
  phase4Title.style.cssText = 'margin: 0 0 10px 0; color: #ffff00; font-size: 12px;';
  panel.appendChild(phase4Title);

  // Per-target weight sliders
  const cubeWeightControl = createSliderControl('Cube Weight', 1.0, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ targetWeight: { target: 'cube', weight: value } });
  });
  panel.appendChild(cubeWeightControl);

  const sphereWeightControl = createSliderControl('Sphere Weight', 0.0, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ targetWeight: { target: 'sphere', weight: value } });
  });
  panel.appendChild(sphereWeightControl);

  const pyramidWeightControl = createSliderControl('Pyramid Weight', 0.0, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ targetWeight: { target: 'pyramid', weight: value } });
  });
  panel.appendChild(pyramidWeightControl);

  const torusWeightControl = createSliderControl('Torus Weight', 0.0, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ targetWeight: { target: 'torus', weight: value } });
  });
  panel.appendChild(torusWeightControl);

  // Add separator for Phase 5 preset controls
  const presetSeparator = document.createElement('hr');
  presetSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(presetSeparator);

  const presetTitle = document.createElement('h4');
  presetTitle.textContent = '💾 Presets';
  presetTitle.style.cssText = 'margin: 0 0 10px 0; color: #00ffff; font-size: 12px;';
  panel.appendChild(presetTitle);

  // Preset save controls
  const saveContainer = document.createElement('div');
  saveContainer.style.cssText = 'margin-bottom: 10px;';

  const saveInput = document.createElement('input');
  saveInput.type = 'text';
  saveInput.placeholder = 'Preset name...';
  saveInput.style.cssText = 'width: 60%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-right: 5px;';

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.style.cssText = 'width: 35%; padding: 4px; background: #00ff00; color: black; border: none; cursor: pointer;';

  saveButton.addEventListener('click', () => {
    const presetName = saveInput.value.trim();
    if (presetName) {
      notifyHUDUpdate({ presetAction: 'save', presetName: presetName });
      saveInput.value = '';
    }
  });

  saveContainer.appendChild(saveInput);
  saveContainer.appendChild(saveButton);
  panel.appendChild(saveContainer);

  // Preset load/delete controls
  const loadContainer = document.createElement('div');
  loadContainer.style.cssText = 'margin-bottom: 10px;';

  const presetSelect = document.createElement('select');
  presetSelect.style.cssText = 'width: 60%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-right: 5px;';

  const loadButton = document.createElement('button');
  loadButton.textContent = 'Load';
  loadButton.style.cssText = 'width: 18%; padding: 4px; background: #0088ff; color: white; border: none; cursor: pointer; margin-right: 2%;';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Del';
  deleteButton.style.cssText = 'width: 15%; padding: 4px; background: #ff4444; color: white; border: none; cursor: pointer;';

  loadButton.addEventListener('click', () => {
    const selectedPreset = presetSelect.value;
    if (selectedPreset) {
      notifyHUDUpdate({ presetAction: 'load', presetName: selectedPreset });
    }
  });

  deleteButton.addEventListener('click', () => {
    const selectedPreset = presetSelect.value;
    if (selectedPreset && confirm(`Delete preset "${selectedPreset}"?`)) {
      notifyHUDUpdate({ presetAction: 'delete', presetName: selectedPreset });
    }
  });

  loadContainer.appendChild(presetSelect);
  loadContainer.appendChild(loadButton);
  loadContainer.appendChild(deleteButton);
  panel.appendChild(loadContainer);

  // Store references for updating preset list
  panel.presetSelect = presetSelect;

  return panel;
}

function createToggleControl(label, defaultValue, onChange) {
  const container = document.createElement('div');
  container.style.cssText = 'margin-bottom: 15px;';

  const labelEl = document.createElement('label');
  labelEl.textContent = label + ': ';
  labelEl.style.cssText = 'display: block; margin-bottom: 5px;';

  const toggle = document.createElement('input');
  toggle.type = 'checkbox';
  toggle.checked = defaultValue;
  toggle.style.cssText = 'margin-right: 5px;';

  toggle.addEventListener('change', () => {
    onChange(toggle.checked);
  });

  const status = document.createElement('span');
  status.textContent = defaultValue ? 'ON' : 'OFF';
  status.style.cssText = `color: ${defaultValue ? '#00ff00' : '#ff6666'};`;

  toggle.addEventListener('change', () => {
    status.textContent = toggle.checked ? 'ON' : 'OFF';
    status.style.color = toggle.checked ? '#00ff00' : '#ff6666';
  });

  labelEl.appendChild(toggle);
  labelEl.appendChild(status);
  container.appendChild(labelEl);

  return container;
}

function createSliderControl(label, defaultValue, min, max, step, onChange) {
  const container = document.createElement('div');
  container.style.cssText = 'margin-bottom: 15px;';

  const labelEl = document.createElement('label');
  labelEl.textContent = label + ': ';
  labelEl.style.cssText = 'display: block; margin-bottom: 5px;';

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = min;
  slider.max = max;
  slider.step = step;
  slider.value = defaultValue;
  slider.style.cssText = 'width: 100%; margin-bottom: 5px;';

  const valueDisplay = document.createElement('span');
  valueDisplay.textContent = defaultValue.toFixed(3);
  valueDisplay.style.cssText = 'color: #00ff00; font-size: 12px;';

  slider.addEventListener('input', () => {
    const value = parseFloat(slider.value);
    valueDisplay.textContent = value.toFixed(3);
    onChange(value);
  });

  container.appendChild(labelEl);
  container.appendChild(slider);
  container.appendChild(valueDisplay);

  return container;
}

function createDropdownControl(label, defaultValue, options, onChange) {
  const container = document.createElement('div');
  container.style.cssText = 'margin-bottom: 15px;';

  const labelEl = document.createElement('label');
  labelEl.textContent = label + ': ';
  labelEl.style.cssText = 'display: block; margin-bottom: 5px;';

  const select = document.createElement('select');
  select.style.cssText = 'width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555;';

  options.forEach(option => {
    const optionEl = document.createElement('option');
    optionEl.value = option;
    optionEl.textContent = option.charAt(0).toUpperCase() + option.slice(1);
    if (option === defaultValue) {
      optionEl.selected = true;
    }
    select.appendChild(optionEl);
  });

  select.addEventListener('change', () => {
    onChange(select.value);
  });

  container.appendChild(labelEl);
  container.appendChild(select);

  return container;
}

export function updatePresetList(presets) {
  const hudPanel = document.getElementById('hud-panel');
  if (hudPanel && hudPanel.presetSelect) {
    const presetSelect = hudPanel.presetSelect;

    // Clear current options
    presetSelect.innerHTML = '';

    // Add empty option
    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.textContent = 'Select preset...';
    presetSelect.appendChild(emptyOption);

    // Add preset options
    presets.forEach(presetName => {
      const option = document.createElement('option');
      option.value = presetName;
      option.textContent = presetName;
      presetSelect.appendChild(option);
    });
  }
}

function notifyHUDUpdate(update) {
  hudCallbacks.forEach(callback => {
    try {
      callback(update);
    } catch (error) {
      console.error('📟 Error in HUD callback:', error);
    }
  });
}
