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

  const xRotControl = createSliderControl('X Rotation', 0.01, 0, 0.2, 0.001, (value) => {
    notifyHUDUpdate({ rotX: value });
  });
  panel.appendChild(xRotControl);

  const yRotControl = createSliderControl('Y Rotation', 0.01, 0, 0.2, 0.001, (value) => {
    notifyHUDUpdate({ rotY: value });
  });
  panel.appendChild(yRotControl);

  const scaleControl = createSliderControl('Scale', 1.0, 0.5, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ scale: value });
  });
  panel.appendChild(scaleControl);

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

function notifyHUDUpdate(update) {
  hudCallbacks.forEach(callback => {
    try {
      callback(update);
    } catch (error) {
      console.error('📟 Error in HUD callback:', error);
    }
  });
}
