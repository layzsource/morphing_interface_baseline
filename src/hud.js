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
    max-height: 90vh;
    overflow-y: auto;
    scrollbar-width: thin;
  `;

  // Add webkit scrollbar styling
  const style = document.createElement('style');
  style.textContent = `
    #hud-panel::-webkit-scrollbar {
      width: 6px;
    }
    #hud-panel::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
    #hud-panel::-webkit-scrollbar-track {
      background: transparent;
    }
  `;
  document.head.appendChild(style);

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

  // Add separator for Phase 6 audio controls
  const audioSeparator = document.createElement('hr');
  audioSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(audioSeparator);

  const audioTitle = document.createElement('h4');
  audioTitle.textContent = '🎶 Audio-Reactive';
  audioTitle.style.cssText = 'margin: 0 0 10px 0; color: #ff9900; font-size: 12px;';
  panel.appendChild(audioTitle);

  // Audio enable toggle
  const audioEnableControl = createToggleControl('Audio-Reactive Morphing', false, (value) => {
    notifyHUDUpdate({ audioEnabled: value });
  });
  panel.appendChild(audioEnableControl);

  // Audio sensitivity slider
  const audioSensitivityControl = createSliderControl('Audio Sensitivity', 1.0, 0.5, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ audioSensitivity: value });
  });
  panel.appendChild(audioSensitivityControl);

  // Add separator for particle controls
  const particleSeparator = document.createElement('hr');
  particleSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(particleSeparator);

  const particleTitle = document.createElement('h4');
  particleTitle.textContent = '✨ Particles';
  particleTitle.style.cssText = 'margin: 0 0 10px 0; color: #00ffff; font-size: 12px;';
  panel.appendChild(particleTitle);

  // Particles enable toggle
  const particlesEnableControl = createToggleControl('Enable Particles', true, (value) => {
    notifyHUDUpdate({ particlesEnabled: value });
  });
  panel.appendChild(particlesEnableControl);

  // Particle density slider
  const particleDensityControl = createSliderControl('Particle Density', 1000, 500, 2000, 50, (value) => {
    notifyHUDUpdate({ particlesCount: value });
  });
  panel.appendChild(particleDensityControl);

  // Particle layout dropdown
  const particleLayoutDiv = document.createElement('div');
  particleLayoutDiv.style.cssText = 'margin-bottom: 10px;';

  const particleLayoutLabel = document.createElement('label');
  particleLayoutLabel.textContent = 'Layout';
  particleLayoutLabel.style.cssText = 'display: block; margin-bottom: 5px; color: #ccc; font-size: 12px;';
  particleLayoutDiv.appendChild(particleLayoutLabel);

  const particleLayoutSelect = document.createElement('select');
  particleLayoutSelect.id = 'particle-layout-dropdown';
  particleLayoutSelect.style.cssText = 'width: 100%; padding: 5px; background: #333; color: white; border: 1px solid #555; border-radius: 3px;';

  ['cube', 'sphere', 'torus'].forEach(option => {
    const optionEl = document.createElement('option');
    optionEl.value = option;
    optionEl.textContent = option.charAt(0).toUpperCase() + option.slice(1);
    optionEl.selected = option === 'cube';
    particleLayoutSelect.appendChild(optionEl);
  });

  particleLayoutDiv.appendChild(particleLayoutSelect);
  panel.appendChild(particleLayoutDiv);

  // Motion Controls
  const particlesMotionLabel = document.createElement("h4");
  particlesMotionLabel.textContent = "Motion Controls";
  particlesMotionLabel.style.cssText = 'margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;';
  panel.appendChild(particlesMotionLabel);

  // Velocity slider
  const velocityDiv = document.createElement('div');
  velocityDiv.style.cssText = 'margin-bottom: 10px;';

  const velocityLabel = document.createElement("label");
  velocityLabel.textContent = "Velocity";
  velocityLabel.style.cssText = 'display: block; margin-bottom: 5px; color: #ccc; font-size: 12px;';
  velocityDiv.appendChild(velocityLabel);

  const velocityInput = document.createElement("input");
  velocityInput.type = "range";
  velocityInput.min = 0.1;
  velocityInput.max = 2.0;
  velocityInput.step = 0.1;
  velocityInput.value = 0.5; // Default value, will be synced later
  velocityInput.id = "particles-velocity";
  velocityInput.style.cssText = 'width: 100%;';
  velocityDiv.appendChild(velocityInput);

  panel.appendChild(velocityDiv);

  // Spread slider
  const spreadDiv = document.createElement('div');
  spreadDiv.style.cssText = 'margin-bottom: 10px;';

  const spreadLabel = document.createElement("label");
  spreadLabel.textContent = "Spread";
  spreadLabel.style.cssText = 'display: block; margin-bottom: 5px; color: #ccc; font-size: 12px;';
  spreadDiv.appendChild(spreadLabel);

  const spreadInput = document.createElement("input");
  spreadInput.type = "range";
  spreadInput.min = 0.1;
  spreadInput.max = 2.0;
  spreadInput.step = 0.1;
  spreadInput.value = 1.0; // Default value, will be synced later
  spreadInput.id = "particles-spread";
  spreadInput.style.cssText = 'width: 100%;';
  spreadDiv.appendChild(spreadInput);

  panel.appendChild(spreadDiv);

  // ✨ Particle Polish section
  const particlePolishLabel = document.createElement("h4");
  particlePolishLabel.textContent = "✨ Particle Polish";
  particlePolishLabel.style.cssText = 'margin: 15px 0 10px 0; color: #ffff00; font-size: 12px;';
  panel.appendChild(particlePolishLabel);

  // Hue shift slider (0-360)
  const hueShiftControl = createSliderControl('Hue Shift', 0, 0, 360, 5, (value) => {
    notifyHUDUpdate({ particlesHue: value });
  });
  panel.appendChild(hueShiftControl);

  // Size slider (0.1-3.0)
  const sizeControl = createSliderControl('Size', 0.15, 0.1, 3.0, 0.05, (value) => {
    notifyHUDUpdate({ particlesSize: value });
  });
  panel.appendChild(sizeControl);

  // Opacity slider (0.0-1.0)
  const opacityControl = createSliderControl('Opacity', 0.5, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ particlesOpacity: value });
  });
  panel.appendChild(opacityControl);

  // Organic motion toggle
  const organicMotionControl = createToggleControl('Organic Motion', false, (value) => {
    notifyHUDUpdate({ particlesOrganicMotion: value });
  });
  panel.appendChild(organicMotionControl);

  // Audio-reactive hue toggle
  const audioHueControl = createToggleControl('Audio-Reactive Hue', false, (value) => {
    notifyHUDUpdate({ particlesAudioReactiveHue: value });
  });
  panel.appendChild(audioHueControl);

  // Add separator for Phase 7 visual controls
  const visualSeparator = document.createElement('hr');
  visualSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(visualSeparator);

  const visualTitle = document.createElement('h4');
  visualTitle.textContent = '🎨 Visual Polish';
  visualTitle.style.cssText = 'margin: 0 0 10px 0; color: #ff66ff; font-size: 12px;';
  panel.appendChild(visualTitle);

  // Ambient light intensity
  const ambientLightControl = createSliderControl('Ambient Intensity', 0.4, 0.0, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ ambientIntensity: value });
  });
  panel.appendChild(ambientLightControl);

  // Directional light intensity
  const directionalLightControl = createSliderControl('Directional Intensity', 1.0, 0.0, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ directionalIntensity: value });
  });
  panel.appendChild(directionalLightControl);

  // Directional light angle X
  const directionalAngleXControl = createSliderControl('Light Angle X', -45, -90, 90, 5, (value) => {
    notifyHUDUpdate({ directionalAngleX: value });
  });
  panel.appendChild(directionalAngleXControl);

  // Directional light angle Y
  const directionalAngleYControl = createSliderControl('Light Angle Y', 45, -90, 90, 5, (value) => {
    notifyHUDUpdate({ directionalAngleY: value });
  });
  panel.appendChild(directionalAngleYControl);

  // Color picker
  const colorPickerControl = createColorPickerControl('Geometry Color', '#00ff00', (value) => {
    notifyHUDUpdate({ color: value });
  });
  panel.appendChild(colorPickerControl);

  // Add separator for Vessel controls
  const vesselSeparator = document.createElement('hr');
  vesselSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(vesselSeparator);

  const vesselTitle = document.createElement('h4');
  vesselTitle.textContent = '🚢 Vessel';
  vesselTitle.style.cssText = 'margin: 0 0 10px 0; color: #00ff00; font-size: 12px;';
  panel.appendChild(vesselTitle);

  // Vessel enable toggle
  const vesselEnableControl = createToggleControl('Enable Vessel', true, (value) => {
    notifyHUDUpdate({ vesselEnabled: value });
  });
  panel.appendChild(vesselEnableControl);

  // Vessel opacity slider
  const vesselOpacityControl = createSliderControl('Vessel Opacity', 0.5, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ vesselOpacity: value });
  });
  panel.appendChild(vesselOpacityControl);

  // Vessel scale slider
  const vesselScaleControl = createSliderControl('Vessel Scale', 1.0, 0.5, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ vesselScale: value });
  });
  panel.appendChild(vesselScaleControl);

  // Vessel color picker
  const vesselColorPickerControl = createColorPickerControl('Vessel Color', '#00ff00', (value) => {
    notifyHUDUpdate({ vesselColor: value });
  });
  panel.appendChild(vesselColorPickerControl);

  // Vessel spin toggle
  const vesselSpinControl = createToggleControl('Vessel Spin', false, (value) => {
    notifyHUDUpdate({ vesselSpinEnabled: value });
  });
  panel.appendChild(vesselSpinControl);

  // Vessel spin speed slider
  const vesselSpinSpeedControl = createSliderControl('Spin Speed', 0.0035, 0, 0.02, 0.0005, (value) => {
    notifyHUDUpdate({ vesselSpinSpeed: value });
  });
  panel.appendChild(vesselSpinSpeedControl);

  // Vessel layout dropdown
  const vesselLayoutControl = createDropdownControl('Vessel Layout', 'lattice',
    ['lattice', 'hoops', 'shells'], (value) => {
    notifyHUDUpdate({ vesselLayout: value });
  });
  panel.appendChild(vesselLayoutControl);

  // Audio smoothing slider
  const vesselAudioSmoothingControl = createSliderControl('Audio Smoothing', 0.7, 0.1, 0.9, 0.05, (value) => {
    notifyHUDUpdate({ vesselAudioSmoothing: value });
  });
  panel.appendChild(vesselAudioSmoothingControl);

  // Hue shift range slider
  const vesselHueShiftControl = createSliderControl('Hue Shift Range', 20, 0, 60, 5, (value) => {
    notifyHUDUpdate({ vesselHueShiftRange: value });
  });
  panel.appendChild(vesselHueShiftControl);

  // Vessel debug display
  const vesselDebugDiv = document.createElement('div');
  vesselDebugDiv.style.cssText = 'margin-top: 15px; font-size: 12px; color: #888;';
  vesselDebugDiv.innerHTML = '<p id="vessel-debug">Radius: --</p>';
  panel.appendChild(vesselDebugDiv);

  // Add separator for Shadows controls
  const shadowsSeparator = document.createElement('hr');
  shadowsSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(shadowsSeparator);

  const shadowsTitle = document.createElement('h4');
  shadowsTitle.textContent = '🌑 Shadows';
  shadowsTitle.style.cssText = 'margin: 0 0 10px 0; color: #555; font-size: 12px;';
  panel.appendChild(shadowsTitle);

  // Shadows enable toggle
  const shadowsEnableControl = createToggleControl('Enable Shadows', true, (value) => {
    notifyHUDUpdate({ shadowsEnabled: value });
  });
  panel.appendChild(shadowsEnableControl);

  // Ground shadow checkbox
  const groundShadowControl = createToggleControl('Ground Shadow', true, (value) => {
    notifyHUDUpdate({ shadowsGround: value });
  });
  panel.appendChild(groundShadowControl);

  // Backdrop shadow checkbox
  const backdropShadowControl = createToggleControl('Backdrop Shadow', true, (value) => {
    notifyHUDUpdate({ shadowsBackdrop: value });
  });
  panel.appendChild(backdropShadowControl);

  // Shadow opacity slider
  const shadowOpacityControl = createSliderControl('Shadow Opacity', 0.25, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ shadowsOpacity: value });
  });
  panel.appendChild(shadowOpacityControl);

  // Shadow color picker
  const shadowColorControl = createColorPickerControl('Shadow Color', '#000000', (value) => {
    notifyHUDUpdate({ shadowsColor: value });
  });
  panel.appendChild(shadowColorControl);

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

  // Add ID for vessel layout dropdown
  if (label === 'Vessel Layout') {
    select.id = 'vessel-layout-dropdown';
  }

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

function createColorPickerControl(label, defaultValue, onChange) {
  const container = document.createElement('div');
  container.style.cssText = 'margin-bottom: 15px;';

  const labelEl = document.createElement('label');
  labelEl.textContent = label + ': ';
  labelEl.style.cssText = 'display: block; margin-bottom: 5px;';

  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.value = defaultValue;
  colorPicker.style.cssText = 'width: 60%; height: 32px; padding: 2px; background: #333; border: 1px solid #555; cursor: pointer; margin-right: 10px;';

  const colorDisplay = document.createElement('span');
  colorDisplay.textContent = defaultValue.toUpperCase();
  colorDisplay.style.cssText = 'color: #00ff00; font-size: 12px; font-family: monospace;';

  colorPicker.addEventListener('change', () => {
    const value = colorPicker.value;
    colorDisplay.textContent = value.toUpperCase();
    onChange(value);
  });

  container.appendChild(labelEl);
  container.appendChild(colorPicker);
  container.appendChild(colorDisplay);

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
