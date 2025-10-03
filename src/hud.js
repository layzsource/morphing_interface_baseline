import { state } from './state.js';
import * as THREE from 'three'; // Phase 11.6.0: for TextureLoader
import { mountMandalaUploadAfter } from './mandalaUpload.js'; // Phase 11.7.50: PNG upload

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

  // Phase 11.5.0: HUD collapse state
  let hudCollapsed = false;

  // Header container with title + collapse button
  const header = document.createElement('div');
  header.style.cssText = 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;';

  const title = document.createElement('h3');
  title.textContent = '🔺 Geometry Controls';
  title.style.cssText = 'margin: 0; color: #00ff00;';

  // Phase 11.5.0: Collapse/Expand toggle button
  const collapseBtn = document.createElement('button');
  collapseBtn.textContent = '−';
  collapseBtn.style.cssText = `
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
  `;

  // Container for all controls (will be hidden when collapsed)
  const controlsContainer = document.createElement('div');
  controlsContainer.id = 'hud-controls-container';

  collapseBtn.addEventListener('click', () => {
    hudCollapsed = !hudCollapsed;
    if (hudCollapsed) {
      controlsContainer.style.display = 'none';
      collapseBtn.textContent = '+';
      console.log("📟 HUD collapsed (minimal mode)");
    } else {
      controlsContainer.style.display = 'block';
      collapseBtn.textContent = '−';
      console.log("📟 HUD expanded (full mode)");
    }
  });

  header.appendChild(title);
  header.appendChild(collapseBtn);
  panel.appendChild(header);

  // Phase 11.5.0: Tab navigation
  const tabNav = document.createElement('div');
  tabNav.style.cssText = `
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
    border-bottom: 2px solid #333;
    padding-bottom: 5px;
  `;

  const tabs = ['Morph', 'Presets', 'Audio', 'Visual', 'Advanced'];
  let activeTab = 'Morph';
  const tabButtons = {};
  const tabContainers = {};

  tabs.forEach(tabName => {
    const btn = document.createElement('button');
    btn.textContent = tabName;
    btn.style.cssText = `
      background: #222;
      color: #aaa;
      border: 1px solid #444;
      padding: 5px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 11px;
    `;
    btn.addEventListener('click', () => {
      activeTab = tabName;
      tabs.forEach(t => {
        tabButtons[t].style.background = t === tabName ? '#555' : '#222';
        tabButtons[t].style.color = t === tabName ? 'white' : '#aaa';
        tabContainers[t].style.display = t === tabName ? 'block' : 'none';
      });
      console.log(`📟 Tab switched to: ${tabName}`);
    });
    tabNav.appendChild(btn);
    tabButtons[tabName] = btn;

    const container = document.createElement('div');
    container.id = `tab-${tabName.toLowerCase()}`;
    container.style.display = tabName === 'Morph' ? 'block' : 'none';
    controlsContainer.appendChild(container);
    tabContainers[tabName] = container;
  });

  // Set initial active state
  tabButtons['Morph'].style.background = '#555';
  tabButtons['Morph'].style.color = 'white';

  controlsContainer.insertBefore(tabNav, controlsContainer.firstChild);

  const idleSpinControl = createToggleControl('Idle Spin', true, (value) => {
    notifyHUDUpdate({ idleSpin: value });
  });
  tabContainers['Morph'].appendChild(idleSpinControl);

  const xRotControl = createSliderControl('X Rotation', 0, 0, 0.2, 0.001, (value) => {
    notifyHUDUpdate({ rotX: value });
  });
  tabContainers['Morph'].appendChild(xRotControl);

  const yRotControl = createSliderControl('Y Rotation', 0, 0, 0.2, 0.001, (value) => {
    notifyHUDUpdate({ rotY: value });
  });
  tabContainers['Morph'].appendChild(yRotControl);

  const scaleControl = createSliderControl('Scale', 1.0, 0.5, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ scale: value });
  });
  tabContainers['Morph'].appendChild(scaleControl);

  const morphControl = createDropdownControl('Morph Target', 'cube',
    ['cube', 'sphere', 'pyramid', 'torus'], (value) => {
    notifyHUDUpdate({ morphTarget: value });
  });
  tabContainers['Morph'].appendChild(morphControl);

  const morphIntensityControl = createSliderControl('Morph Intensity', 0.0, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ morphBlend: value });
  });
  tabContainers['Morph'].appendChild(morphIntensityControl);

  // Add separator for Phase 4 controls
  const separator = document.createElement('hr');
  separator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Morph'].appendChild(separator);

  const phase4Title = document.createElement('h4');
  phase4Title.textContent = '🌀 Multi-Target Blends';
  phase4Title.style.cssText = 'margin: 0 0 10px 0; color: #ffff00; font-size: 12px;';
  tabContainers['Morph'].appendChild(phase4Title);

  // Per-target weight sliders
  const cubeWeightControl = createSliderControl('Cube Weight', 1.0, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ targetWeight: { target: 'cube', weight: value } });
  });
  tabContainers['Morph'].appendChild(cubeWeightControl);

  const sphereWeightControl = createSliderControl('Sphere Weight', 0.0, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ targetWeight: { target: 'sphere', weight: value } });
  });
  tabContainers['Morph'].appendChild(sphereWeightControl);

  const pyramidWeightControl = createSliderControl('Pyramid Weight', 0.0, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ targetWeight: { target: 'pyramid', weight: value } });
  });
  tabContainers['Morph'].appendChild(pyramidWeightControl);

  const torusWeightControl = createSliderControl('Torus Weight', 0.0, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ targetWeight: { target: 'torus', weight: value } });
  });
  tabContainers['Morph'].appendChild(torusWeightControl);

  // Phase 11.2.4: Enhanced Preset Editor UI
  const presetSeparator = document.createElement('hr');
  presetSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Presets'].appendChild(presetSeparator);

  const presetTitle = document.createElement('h4');
  presetTitle.textContent = '💾 Preset Manager (Phase 11.2.4)';
  presetTitle.style.cssText = 'margin: 0 0 10px 0; color: #00ffff; font-size: 12px;';
  tabContainers['Presets'].appendChild(presetTitle);

  // Preset save controls (new preset)
  const saveContainer = document.createElement('div');
  saveContainer.style.cssText = 'margin-bottom: 10px;';

  const saveInput = document.createElement('input');
  saveInput.type = 'text';
  saveInput.placeholder = 'New preset name...';
  saveInput.style.cssText = 'width: 58%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-right: 2%;';

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save New';
  saveButton.style.cssText = 'width: 38%; padding: 4px; background: #00ff00; color: black; border: none; cursor: pointer; font-weight: bold;';
  saveButton.title = 'Save current state as new preset';

  // Phase 11.2.6: Category and tags inputs
  const categoryInput = document.createElement('input');
  categoryInput.type = 'text';
  categoryInput.placeholder = 'Category (e.g., Live, Test)';
  categoryInput.value = 'Uncategorized';
  categoryInput.style.cssText = 'width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-top: 5px; font-size: 11px;';

  const tagsInput = document.createElement('input');
  tagsInput.type = 'text';
  tagsInput.placeholder = 'Tags (comma-separated, e.g., bright, fast)';
  tagsInput.style.cssText = 'width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-top: 5px; font-size: 11px;';

  saveButton.addEventListener('click', () => {
    const presetName = saveInput.value.trim();
    if (presetName) {
      const category = categoryInput.value.trim() || 'Uncategorized';
      const tags = tagsInput.value.trim() ? tagsInput.value.split(',').map(t => t.trim()).filter(t => t.length > 0) : [];
      console.log("💾 [HUD] Save button clicked:", { presetName, category, tags });
      notifyHUDUpdate({ presetAction: 'save', presetName: presetName, category: category, tags: tags });
      saveInput.value = '';
      categoryInput.value = 'Uncategorized';
      tagsInput.value = '';
    } else {
      console.warn("💾 [HUD] Save button clicked but preset name is empty");
    }
  });

  saveContainer.appendChild(saveInput);
  saveContainer.appendChild(saveButton);
  saveContainer.appendChild(categoryInput);
  saveContainer.appendChild(tagsInput);
  tabContainers['Presets'].appendChild(saveContainer);

  // Phase 11.2.6: Filter controls (category dropdown + tag filter)
  const filterContainer = document.createElement('div');
  filterContainer.style.cssText = 'margin-bottom: 10px;';

  // Phase 11.2.7: Search input
  const searchLabel = document.createElement('div');
  searchLabel.textContent = 'Search Presets:';
  searchLabel.style.cssText = 'margin-bottom: 3px; color: #aaa; font-size: 10px;';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search by name, category, or tags...';
  searchInput.style.cssText = 'width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-bottom: 8px; font-size: 11px;';

  const categoryFilterLabel = document.createElement('div');
  categoryFilterLabel.textContent = 'Filter by Category:';
  categoryFilterLabel.style.cssText = 'margin-bottom: 3px; color: #aaa; font-size: 10px;';

  const categoryFilter = document.createElement('select');
  categoryFilter.style.cssText = 'width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555; margin-bottom: 5px; font-size: 11px;';

  const tagFilterLabel = document.createElement('div');
  tagFilterLabel.textContent = 'Filter by Tags (comma-separated):';
  tagFilterLabel.style.cssText = 'margin-bottom: 3px; color: #aaa; font-size: 10px;';

  const tagFilter = document.createElement('input');
  tagFilter.type = 'text';
  tagFilter.placeholder = 'e.g., bright, fast';
  tagFilter.style.cssText = 'width: 100%; padding: 4px; background: #333; color: white; border: 1px solid #555; font-size: 11px;';

  filterContainer.appendChild(searchLabel);
  filterContainer.appendChild(searchInput);
  filterContainer.appendChild(categoryFilterLabel);
  filterContainer.appendChild(categoryFilter);
  filterContainer.appendChild(tagFilterLabel);
  filterContainer.appendChild(tagFilter);
  tabContainers['Presets'].appendChild(filterContainer);

  // Phase 11.2.4: Preset list view (improved from dropdown)
  const presetListLabel = document.createElement('div');
  presetListLabel.textContent = 'Saved Presets:';
  presetListLabel.style.cssText = 'margin-bottom: 5px; color: #aaa; font-size: 11px;';
  tabContainers['Presets'].appendChild(presetListLabel);

  const presetListContainer = document.createElement('div');
  presetListContainer.id = 'preset-list-container';
  presetListContainer.style.cssText = `
    max-height: 150px;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #555;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 5px;
  `;
  tabContainers['Presets'].appendChild(presetListContainer);

  // Preset action buttons (load/update/delete)
  const actionContainer = document.createElement('div');
  actionContainer.style.cssText = 'display: flex; gap: 5px; margin-bottom: 10px;';

  const loadButton = document.createElement('button');
  loadButton.textContent = 'Load';
  loadButton.style.cssText = 'flex: 1; padding: 6px; background: #0088ff; color: white; border: none; cursor: pointer; border-radius: 3px;';
  loadButton.title = 'Load selected preset';
  loadButton.disabled = true;

  const updateButton = document.createElement('button');
  updateButton.textContent = 'Update';
  updateButton.style.cssText = 'flex: 1; padding: 6px; background: #ff9900; color: white; border: none; cursor: pointer; border-radius: 3px;';
  updateButton.title = 'Overwrite selected preset with current state';
  updateButton.disabled = true;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.style.cssText = 'flex: 1; padding: 6px; background: #ff4444; color: white; border: none; cursor: pointer; border-radius: 3px;';
  deleteButton.title = 'Delete selected preset';
  deleteButton.disabled = true;

  // Track selected preset
  let selectedPresetName = null;

  loadButton.addEventListener('click', () => {
    if (selectedPresetName) {
      notifyHUDUpdate({ presetAction: 'load', presetName: selectedPresetName });
    }
  });

  updateButton.addEventListener('click', () => {
    if (selectedPresetName && confirm(`Overwrite preset "${selectedPresetName}" with current state?`)) {
      notifyHUDUpdate({ presetAction: 'update', presetName: selectedPresetName });
    }
  });

  deleteButton.addEventListener('click', () => {
    if (selectedPresetName && confirm(`Delete preset "${selectedPresetName}"?`)) {
      notifyHUDUpdate({ presetAction: 'delete', presetName: selectedPresetName });
      selectedPresetName = null;
      loadButton.disabled = true;
      updateButton.disabled = true;
      deleteButton.disabled = true;
    }
  });

  actionContainer.appendChild(loadButton);
  actionContainer.appendChild(updateButton);
  actionContainer.appendChild(deleteButton);
  tabContainers['Presets'].appendChild(actionContainer);

  // Phase 11.2.8: Interpolation controls
  const interpolationContainer = document.createElement('div');
  interpolationContainer.style.cssText = 'margin-bottom: 10px; padding: 8px; background: rgba(0, 100, 150, 0.1); border: 1px solid #0066aa; border-radius: 4px;';

  const interpolationTitle = document.createElement('div');
  interpolationTitle.textContent = '🎚️ Preset Interpolation';
  interpolationTitle.style.cssText = 'margin-bottom: 5px; color: #00aaff; font-size: 11px; font-weight: bold;';

  const interpolationToggleLabel = document.createElement('label');
  interpolationToggleLabel.style.cssText = 'display: flex; align-items: center; margin-bottom: 5px; font-size: 11px; cursor: pointer;';

  const interpolationToggle = document.createElement('input');
  interpolationToggle.type = 'checkbox';
  interpolationToggle.checked = state.interpolation.enabled;
  interpolationToggle.style.cssText = 'margin-right: 8px;';

  const interpolationStatus = document.createElement('span');
  interpolationStatus.textContent = state.interpolation.enabled ? 'Enabled' : 'Disabled';
  interpolationStatus.style.cssText = `color: ${state.interpolation.enabled ? '#00ff00' : '#ff6666'};`;

  interpolationToggle.addEventListener('change', () => {
    state.interpolation.enabled = interpolationToggle.checked;
    interpolationStatus.textContent = interpolationToggle.checked ? 'Enabled' : 'Disabled';
    interpolationStatus.style.color = interpolationToggle.checked ? '#00ff00' : '#ff6666';
    console.log(`🎚️ Interpolation ${interpolationToggle.checked ? 'enabled' : 'disabled'}`);
  });

  interpolationToggleLabel.appendChild(interpolationToggle);
  interpolationToggleLabel.appendChild(interpolationStatus);

  const durationLabel = document.createElement('div');
  durationLabel.textContent = `Duration: ${state.interpolation.duration}ms`;
  durationLabel.style.cssText = 'margin-bottom: 3px; color: #aaa; font-size: 10px;';

  const durationSlider = document.createElement('input');
  durationSlider.type = 'range';
  durationSlider.min = '500';
  durationSlider.max = '10000';
  durationSlider.step = '500';
  durationSlider.value = state.interpolation.duration;
  durationSlider.style.cssText = 'width: 100%; margin-bottom: 3px;';

  durationSlider.addEventListener('input', () => {
    const value = parseInt(durationSlider.value);
    state.interpolation.duration = value;
    durationLabel.textContent = `Duration: ${value}ms`;
  });

  interpolationContainer.appendChild(interpolationTitle);
  interpolationContainer.appendChild(interpolationToggleLabel);
  interpolationContainer.appendChild(durationLabel);
  interpolationContainer.appendChild(durationSlider);
  tabContainers['Presets'].appendChild(interpolationContainer);

  // ---- Phase 11.3.0: Morph Chain UI ----
  const chainSeparator = document.createElement('hr');
  chainSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Presets'].appendChild(chainSeparator);

  const chainSection = document.createElement("div");
  chainSection.className = "panel-section";
  chainSection.style.cssText = 'margin-bottom: 10px;';

  const chainHeaderRow = document.createElement("div");
  chainHeaderRow.style.cssText = 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;';

  const chainHeader = document.createElement("div");
  chainHeader.className = "panel-title";
  chainHeader.textContent = "🔗 Morph Chain";
  chainHeader.style.cssText = 'color: #ff9900; font-size: 12px; font-weight: bold;';

  // Phase 11.3.2: Status badge
  const statusBadge = document.createElement("div");
  statusBadge.id = "chainStatusBadge";
  statusBadge.textContent = "⏹ Stopped";
  statusBadge.style.cssText = 'padding: 3px 8px; background: #333; color: #888; border-radius: 3px; font-size: 9px; font-weight: bold;';

  chainHeaderRow.appendChild(chainHeader);
  chainHeaderRow.appendChild(statusBadge);
  chainSection.appendChild(chainHeaderRow);

  // Preset list as checkboxes
  const chainList = document.createElement("div");
  chainList.style.display = "flex";
  chainList.style.flexDirection = "column";
  chainList.style.gap = "6px";
  chainList.style.maxHeight = "150px";
  chainList.style.overflowY = "auto";
  chainList.style.marginBottom = "8px";
  chainList.style.padding = "5px";
  chainList.style.background = "#222";
  chainList.style.border = "1px solid #555";
  chainSection.appendChild(chainList);

  // Duration slider
  const durRow = document.createElement("div");
  durRow.style.display = "flex";
  durRow.style.alignItems = "center";
  durRow.style.gap = "8px";
  durRow.style.marginBottom = "8px";
  const durLabel = document.createElement("span");
  durLabel.textContent = "Duration (ms):";
  durLabel.style.fontSize = "10px";
  durLabel.style.color = "#aaa";
  const durInput = document.createElement("input");
  durInput.type = "range";
  durInput.min = "500";
  durInput.max = "10000";
  durInput.step = "500";
  durInput.value = "2000";
  durInput.style.flex = "1";
  const durVal = document.createElement("span");
  durVal.textContent = "2000";
  durVal.style.fontSize = "10px";
  durVal.style.color = "#fff";
  durVal.style.minWidth = "45px";
  durInput.addEventListener("input", () => durVal.textContent = durInput.value);
  durRow.appendChild(durLabel);
  durRow.appendChild(durInput);
  durRow.appendChild(durVal);
  chainSection.appendChild(durRow);

  // Phase 11.3.1: Loop/Shuffle toggles
  const optionsRow = document.createElement("div");
  optionsRow.style.display = "flex";
  optionsRow.style.gap = "15px";
  optionsRow.style.marginBottom = "8px";
  optionsRow.style.fontSize = "10px";

  const loopLabel = document.createElement("label");
  loopLabel.style.display = "flex";
  loopLabel.style.alignItems = "center";
  loopLabel.style.gap = "5px";
  loopLabel.style.cursor = "pointer";
  const loopCheckbox = document.createElement("input");
  loopCheckbox.type = "checkbox";
  loopCheckbox.id = "chainLoopToggle";
  loopLabel.appendChild(loopCheckbox);
  loopLabel.appendChild(document.createTextNode("🔁 Loop"));

  const shuffleLabel = document.createElement("label");
  shuffleLabel.style.display = "flex";
  shuffleLabel.style.alignItems = "center";
  shuffleLabel.style.gap = "5px";
  shuffleLabel.style.cursor = "pointer";
  const shuffleCheckbox = document.createElement("input");
  shuffleCheckbox.type = "checkbox";
  shuffleCheckbox.id = "chainShuffleToggle";
  shuffleLabel.appendChild(shuffleCheckbox);
  shuffleLabel.appendChild(document.createTextNode("🔀 Shuffle"));

  optionsRow.appendChild(loopLabel);
  optionsRow.appendChild(shuffleLabel);
  chainSection.appendChild(optionsRow);

  // Phase 11.3.1: Progress indicator
  const progressContainer = document.createElement("div");
  progressContainer.style.marginBottom = "8px";
  const progressLabel = document.createElement("div");
  progressLabel.textContent = "Progress: —";
  progressLabel.id = "chainProgressLabel";
  progressLabel.style.fontSize = "10px";
  progressLabel.style.color = "#aaa";
  progressLabel.style.marginBottom = "3px";
  const progressBar = document.createElement("div");
  progressBar.style.width = "100%";
  progressBar.style.height = "8px";
  progressBar.style.background = "#333";
  progressBar.style.border = "1px solid #555";
  progressBar.style.position = "relative";
  const progressFill = document.createElement("div");
  progressFill.id = "chainProgressFill";
  progressFill.style.width = "0%";
  progressFill.style.height = "100%";
  progressFill.style.background = "#00ff00";
  progressFill.style.transition = "width 0.1s linear"; // Phase 11.4.1: Smooth 100ms updates
  progressBar.appendChild(progressFill);
  progressContainer.appendChild(progressLabel);
  progressContainer.appendChild(progressBar);
  progressContainer.id = "chainProgressContainer"; // Phase 11.3.2: For visibility control
  progressContainer.style.display = "none"; // Phase 11.3.2: Hidden by default
  chainSection.appendChild(progressContainer);

  // Start/Stop buttons
  const btnRow = document.createElement("div");
  btnRow.style.display = "flex";
  btnRow.style.gap = "8px";
  btnRow.style.marginBottom = "8px";
  const startBtn = document.createElement("button");
  startBtn.id = "chainStartBtn"; // Phase 11.3.2: For button state management
  startBtn.textContent = "Start Chain";
  startBtn.style.cssText = 'flex: 1; padding: 6px; background: #00ff00; color: black; border: none; cursor: pointer; font-weight: bold; font-size: 11px;';
  const stopBtn = document.createElement("button");
  stopBtn.id = "chainStopBtn"; // Phase 11.3.2: For button state management
  stopBtn.textContent = "Stop";
  stopBtn.style.cssText = 'flex: 1; padding: 6px; background: #ff6666; color: black; border: none; cursor: pointer; font-weight: bold; font-size: 11px;';
  stopBtn.disabled = true; // Phase 11.3.2: Disabled by default
  stopBtn.style.opacity = "0.5";
  stopBtn.style.cursor = "not-allowed";

  // Phase 11.4.1 Prep: Reset Chain button
  const resetChainBtn = document.createElement("button");
  resetChainBtn.id = "chainResetBtn";
  resetChainBtn.textContent = "🔄";
  resetChainBtn.title = "Reset Chain";
  resetChainBtn.style.cssText = 'flex: 0.5; padding: 6px; background: #ffaa00; color: black; border: none; cursor: pointer; font-weight: bold; font-size: 11px;';

  btnRow.appendChild(startBtn);
  btnRow.appendChild(stopBtn);
  btnRow.appendChild(resetChainBtn);
  chainSection.appendChild(btnRow);

  // Phase 11.4.0: Playback controls (pause/resume, skip)
  const playbackRow = document.createElement("div");
  playbackRow.style.cssText = 'display: flex; gap: 5px; margin-bottom: 8px;';

  const pauseResumeBtn = document.createElement("button");
  pauseResumeBtn.id = "chainPauseResumeBtn";
  pauseResumeBtn.textContent = "⏸ Pause";
  pauseResumeBtn.style.cssText = 'flex: 2; padding: 6px; background: #ffaa00; color: black; border: none; cursor: pointer; font-weight: bold; font-size: 11px;';
  pauseResumeBtn.disabled = true;
  pauseResumeBtn.style.opacity = "0.5";
  pauseResumeBtn.style.cursor = "not-allowed";

  const skipPrevBtn = document.createElement("button");
  skipPrevBtn.id = "chainSkipPrevBtn";
  skipPrevBtn.textContent = "⏮";
  skipPrevBtn.style.cssText = 'flex: 1; padding: 6px; background: #6699ff; color: white; border: none; cursor: pointer; font-weight: bold; font-size: 11px;';
  skipPrevBtn.disabled = true;
  skipPrevBtn.style.opacity = "0.5";
  skipPrevBtn.style.cursor = "not-allowed";

  const skipNextBtn = document.createElement("button");
  skipNextBtn.id = "chainSkipNextBtn";
  skipNextBtn.textContent = "⏭";
  skipNextBtn.style.cssText = 'flex: 1; padding: 6px; background: #6699ff; color: white; border: none; cursor: pointer; font-weight: bold; font-size: 11px;';
  skipNextBtn.disabled = true;
  skipNextBtn.style.opacity = "0.5";
  skipNextBtn.style.cursor = "not-allowed";

  playbackRow.appendChild(skipPrevBtn);
  playbackRow.appendChild(pauseResumeBtn);
  playbackRow.appendChild(skipNextBtn);
  chainSection.appendChild(playbackRow);

  // Phase 11.4.0: Time remaining display
  const timeRemainingLabel = document.createElement("div");
  timeRemainingLabel.id = "chainTimeRemaining";
  timeRemainingLabel.textContent = "Remaining: --";
  timeRemainingLabel.style.cssText = 'font-size: 10px; color: #aaa; margin-bottom: 8px; text-align: center;';
  chainSection.appendChild(timeRemainingLabel);

  // Phase 11.3.1: Save chain section
  const saveChainRow = document.createElement("div");
  saveChainRow.style.display = "flex";
  saveChainRow.style.gap = "5px";
  saveChainRow.style.marginBottom = "8px";
  const saveChainInput = document.createElement("input");
  saveChainInput.type = "text";
  saveChainInput.placeholder = "Chain name...";
  saveChainInput.style.cssText = 'flex: 1; padding: 4px; background: #333; color: white; border: 1px solid #555; font-size: 10px;';
  const saveChainBtn = document.createElement("button");
  saveChainBtn.textContent = "💾 Save Chain";
  saveChainBtn.style.cssText = 'padding: 4px 8px; background: #ff9900; color: black; border: none; cursor: pointer; font-weight: bold; font-size: 10px;';
  saveChainRow.appendChild(saveChainInput);
  saveChainRow.appendChild(saveChainBtn);
  chainSection.appendChild(saveChainRow);

  // Phase 11.3.1: Saved chains list
  const savedChainsHeader = document.createElement("div");
  savedChainsHeader.style.cssText = 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;';

  const savedChainsTitle = document.createElement("div");
  savedChainsTitle.textContent = "Saved Chains:";
  savedChainsTitle.style.cssText = 'font-size: 10px; color: #aaa;';

  // Phase 11.4.0: Export/Import buttons
  const chainIORow = document.createElement("div");
  chainIORow.style.cssText = 'display: flex; gap: 5px;';

  const exportChainsBtn = document.createElement("button");
  exportChainsBtn.id = "exportChainsBtn";
  exportChainsBtn.textContent = "💾";
  exportChainsBtn.title = "Export chains";
  exportChainsBtn.style.cssText = 'padding: 2px 6px; background: #4CAF50; color: white; border: none; cursor: pointer; font-size: 10px; border-radius: 3px;';

  const importChainsBtn = document.createElement("button");
  importChainsBtn.id = "importChainsBtn";
  importChainsBtn.textContent = "📂";
  importChainsBtn.title = "Import chains";
  importChainsBtn.style.cssText = 'padding: 2px 6px; background: #2196F3; color: white; border: none; cursor: pointer; font-size: 10px; border-radius: 3px;';

  const importChainsInput = document.createElement("input");
  importChainsInput.type = "file";
  importChainsInput.id = "importChainsInput";
  importChainsInput.accept = ".json";
  importChainsInput.style.display = "none";

  chainIORow.appendChild(exportChainsBtn);
  chainIORow.appendChild(importChainsBtn);
  chainIORow.appendChild(importChainsInput);

  savedChainsHeader.appendChild(savedChainsTitle);
  savedChainsHeader.appendChild(chainIORow);
  chainSection.appendChild(savedChainsHeader);

  const savedChainsList = document.createElement("div");
  savedChainsList.id = "savedChainsList";
  savedChainsList.style.cssText = 'max-height: 100px; overflow-y: auto; background: #222; border: 1px solid #555; padding: 5px; margin-bottom: 8px;';
  chainSection.appendChild(savedChainsList);

  // Phase 11.4.1: Reset button
  const resetBtn = document.createElement('button');
  resetBtn.textContent = '♻️ Reset';
  resetBtn.style.cssText = 'width: 100%; margin-top: 8px; background: #222; color: #fff; border: 1px solid #444; padding: 6px; cursor: pointer; font-size: 11px; font-weight: bold;';
  resetBtn.addEventListener('click', () => {
    console.log("♻️ HUD reset clicked");
    notifyHUDUpdate({ type: 'app:reset' });
  });
  chainSection.appendChild(resetBtn);

  tabContainers['Presets'].appendChild(chainSection);

  // Populate the checkbox list from current presets
  function refreshChainList() {
    chainList.innerHTML = "";
    const names = window.__PRESET_NAMES__ ? window.__PRESET_NAMES__() : [];
    if (names.length === 0) {
      const emptyMsg = document.createElement("div");
      emptyMsg.textContent = "No presets available";
      emptyMsg.style.cssText = 'color: #888; font-size: 10px; padding: 5px;';
      chainList.appendChild(emptyMsg);
      return;
    }
    names.forEach(name => {
      const row = document.createElement("label");
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.gap = "6px";
      row.style.cursor = "pointer";
      row.style.fontSize = "10px";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = name;
      row.appendChild(cb);
      row.appendChild(document.createTextNode(name));
      chainList.appendChild(row);
    });
  }

  // Phase 11.3.1: Refresh saved chains list
  function refreshSavedChainsList() {
    savedChainsList.innerHTML = "";
    // Import listChains dynamically to avoid circular dependency
    import('./presetRouter.js').then(({ listChains, getChainData }) => {
      const chainNames = listChains();
      if (chainNames.length === 0) {
        const emptyMsg = document.createElement("div");
        emptyMsg.textContent = "No saved chains";
        emptyMsg.style.cssText = 'color: #888; font-size: 9px; padding: 3px;';
        savedChainsList.appendChild(emptyMsg);
        return;
      }
      chainNames.forEach(name => {
        const chainData = getChainData(name);
        const row = document.createElement("div");
        row.style.cssText = 'display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; font-size: 9px;';

        const nameSpan = document.createElement("span");
        nameSpan.textContent = `${name} (${chainData.presets.length})`;
        nameSpan.style.cssText = 'flex: 1; color: #ccc;';
        nameSpan.title = `Presets: ${chainData.presets.join(", ")}\nDuration: ${chainData.duration}ms\nLoop: ${chainData.loop}\nShuffle: ${chainData.shuffle}`;

        const loadBtn = document.createElement("button");
        loadBtn.textContent = "Load";
        loadBtn.style.cssText = 'padding: 2px 6px; background: #00aaff; color: white; border: none; cursor: pointer; font-size: 8px; margin-right: 3px;';
        loadBtn.addEventListener("click", () => {
          console.log("🔗 Loading chain:", name);
          notifyHUDUpdate({ presetAction: "chain:load", chainName: name });
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "×";
        deleteBtn.style.cssText = 'padding: 2px 6px; background: #ff6666; color: white; border: none; cursor: pointer; font-size: 8px;';
        deleteBtn.addEventListener("click", () => {
          if (confirm(`Delete chain "${name}"?`)) {
            console.log("🔗 Deleting chain:", name);
            notifyHUDUpdate({ presetAction: "chain:delete", chainName: name });
            refreshSavedChainsList();
          }
        });

        row.appendChild(nameSpan);
        row.appendChild(loadBtn);
        row.appendChild(deleteBtn);
        savedChainsList.appendChild(row);
      });
    });
  }

  // Wire buttons
  startBtn.addEventListener("click", () => {
    const selected = [...chainList.querySelectorAll("input[type=checkbox]:checked")].map(x => x.value);

    // Phase 11.3.2: Validate preset selection
    if (selected.length === 0) {
      alert("⚠️ No presets selected. Please select at least one preset before starting a chain.");
      return;
    }

    const duration = Number(durInput.value) || 2000;
    const loop = loopCheckbox.checked;
    const shuffle = shuffleCheckbox.checked;
    console.log("🔗 HUD start chain:", selected, duration, { loop, shuffle });
    notifyHUDUpdate({
      presetAction: "chain:start",
      chainPresets: selected,
      chainDuration: duration,
      chainLoop: loop,
      chainShuffle: shuffle
    });
  });
  stopBtn.addEventListener("click", () => {
    console.log("🔗 HUD stop chain");
    notifyHUDUpdate({ presetAction: "chain:stop" });
  });

  // Phase 11.4.1 Prep: Reset Chain button
  resetChainBtn.addEventListener("click", () => {
    console.log("🔄 HUD reset chain");
    notifyHUDUpdate({ presetAction: "chain:reset" });
  });

  // Phase 11.4.0: Playback control buttons
  pauseResumeBtn.addEventListener("click", () => {
    const isPaused = pauseResumeBtn.textContent.includes("Resume");
    if (isPaused) {
      console.log("▶️ HUD resume chain");
      notifyHUDUpdate({ presetAction: "chain:resume" });
    } else {
      console.log("⏸ HUD pause chain");
      notifyHUDUpdate({ presetAction: "chain:pause" });
    }
  });

  skipPrevBtn.addEventListener("click", () => {
    console.log("⏮ HUD skip to previous preset");
    notifyHUDUpdate({ presetAction: "chain:skipPrev" });
  });

  skipNextBtn.addEventListener("click", () => {
    console.log("⏭ HUD skip to next preset");
    notifyHUDUpdate({ presetAction: "chain:skipNext" });
  });

  // Phase 11.4.0: Export/Import chains buttons
  exportChainsBtn.addEventListener("click", () => {
    console.log("💾 HUD export chains");
    notifyHUDUpdate({ presetAction: "chain:export" });
  });

  importChainsBtn.addEventListener("click", () => {
    importChainsInput.click();
  });

  importChainsInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("📂 HUD import chains:", file.name);
      notifyHUDUpdate({ presetAction: "chain:import", file });
      // Reset input so same file can be imported again
      importChainsInput.value = "";
    }
  });

  // Phase 11.3.1: Save chain button
  saveChainBtn.addEventListener("click", () => {
    const chainName = saveChainInput.value.trim();
    if (!chainName) {
      console.warn("🔗 Chain name is empty");
      return;
    }
    const selected = [...chainList.querySelectorAll("input[type=checkbox]:checked")].map(x => x.value);
    if (selected.length < 2) {
      console.warn("🔗 Need at least 2 presets to save a chain");
      return;
    }
    const duration = Number(durInput.value) || 2000;
    const loop = loopCheckbox.checked;
    const shuffle = shuffleCheckbox.checked;
    console.log("🔗 HUD save chain:", chainName, selected, { duration, loop, shuffle });
    notifyHUDUpdate({
      presetAction: "chain:save",
      chainName: chainName,
      chainPresets: selected,
      chainDuration: duration,
      chainLoop: loop,
      chainShuffle: shuffle
    });
    saveChainInput.value = "";
    setTimeout(refreshSavedChainsList, 100);
  });

  // Phase 11.3.2: Update progress indicator with continuous interpolation tracking
  // Phase 11.4.3: Added defensive guard for state.morphChain
  function updateChainProgress() {
    const progressContainer = document.getElementById("chainProgressContainer");
    const progressLabel = document.getElementById("chainProgressLabel");
    const progressFill = document.getElementById("chainProgressFill");
    const statusBadge = document.getElementById("chainStatusBadge");

    if (!progressLabel || !progressFill || !progressContainer || !statusBadge) return;

    const chain = state.morphChain;

    // Phase 11.4.3: Defensive guard - bail early if no chain or not active
    if (!chain || !chain.active) {
      // Hide progress container when not running
      progressContainer.style.display = "none";
      progressLabel.textContent = "Step —";
      progressFill.style.width = "0%";

      // Update status badge
      statusBadge.textContent = "⏹ Stopped";
      statusBadge.style.background = "#333";
      statusBadge.style.color = "#888";

      // Phase 11.3.2: Update button states
      const startBtn = document.querySelector('#chainStartBtn');
      const stopBtn = document.querySelector('#chainStopBtn');
      if (startBtn && stopBtn) {
        startBtn.disabled = false;
        startBtn.style.opacity = "1";
        startBtn.style.cursor = "pointer";

        stopBtn.disabled = true;
        stopBtn.style.opacity = "0.5";
        stopBtn.style.cursor = "not-allowed";
      }
      return;
    }

    // Phase 11.4.3: Safe to use chain properties after guard
    const { currentIndex, presets, duration, stepStartTime } = chain;
    const totalSteps = presets.length;

    if (!presets || totalSteps === 0) {
      progressContainer.style.display = "none";
      return;
    }

    // Time since this step began
    const elapsed = performance.now() - (stepStartTime || performance.now());
    const t = Math.min(elapsed / duration, 1.0);

    // Overall progress = finished steps + current interpolation progress
    const progress = (currentIndex + t) / totalSteps;

    const percent = Math.round(progress * 100);
    const step = Math.min(currentIndex + 1, totalSteps);

    // ✅ No variable shadowing — directly modify DOM elements
    progressFill.style.width = `${percent}%`;
    progressLabel.textContent = `Step ${step}/${totalSteps} (${percent}%)`;
    progressContainer.style.display = "block";

    // Update status badge
    statusBadge.textContent = "🟢 Running";
    statusBadge.style.background = "#004400";
    statusBadge.style.color = "#00ff00";

    // Phase 11.3.2: Update button states
    const startBtn = document.querySelector('#chainStartBtn');
    const stopBtn = document.querySelector('#chainStopBtn');
    if (startBtn && stopBtn) {
      startBtn.disabled = true;
      startBtn.style.opacity = "0.5";
      startBtn.style.cursor = "not-allowed";

      stopBtn.disabled = false;
      stopBtn.style.opacity = "1";
      stopBtn.style.cursor = "pointer";
    }
  }

  // Phase 11.3.2: Toast notification system
  const toastContainer = document.createElement("div");
  toastContainer.id = "chainToastContainer";
  toastContainer.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 10000; display: flex; flex-direction: column; gap: 10px; pointer-events: none;';
  document.body.appendChild(toastContainer);

  // Phase 11.5.0: Reduced toast duration to 1.5s
  function showToast(message, duration = 1500) {
    const toast = document.createElement("div");
    toast.style.cssText = 'background: rgba(0, 0, 0, 0.9); color: white; padding: 12px 16px; border-radius: 4px; border-left: 4px solid #ff9900; font-size: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); max-width: 300px; pointer-events: auto; animation: slideInRight 0.3s ease;';
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // Add CSS animation for toast
  const toastStyle = document.createElement('style');
  toastStyle.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(toastStyle);

  // Phase 11.3.2: Listen for chain events and show toasts
  window.addEventListener("chainStarted", (e) => {
    const { presets } = e.detail;
    showToast(`🔗 Chain started: ${presets.join(" → ")}`);
  });

  window.addEventListener("chainStepComplete", (e) => {
    const { next } = e.detail;
    showToast(`✅ Step complete → Next: ${next}`);
  });

  window.addEventListener("chainLoopRestarted", () => {
    showToast("🔁 Loop restarted");
  });

  window.addEventListener("chainFinished", () => {
    showToast("🔗 Chain finished");
  });

  // Phase 11.4.0: Update UI state on chain events
  window.addEventListener("chainStarted", () => {
    // Enable playback controls
    pauseResumeBtn.disabled = false;
    pauseResumeBtn.style.opacity = "1";
    pauseResumeBtn.style.cursor = "pointer";
    pauseResumeBtn.textContent = "⏸ Pause";

    skipPrevBtn.disabled = false;
    skipPrevBtn.style.opacity = "1";
    skipPrevBtn.style.cursor = "pointer";

    skipNextBtn.disabled = false;
    skipNextBtn.style.opacity = "1";
    skipNextBtn.style.cursor = "pointer";

    // Enable stop and reset buttons
    stopBtn.disabled = false;
    stopBtn.style.opacity = "1";
    stopBtn.style.cursor = "pointer";

    resetChainBtn.disabled = false;
    resetChainBtn.style.opacity = "1";
    resetChainBtn.style.cursor = "pointer";

    // Disable start button
    startBtn.disabled = true;
    startBtn.style.opacity = "0.5";
    startBtn.style.cursor = "not-allowed";
  });

  window.addEventListener("chainFinished", () => {
    // Disable playback controls
    pauseResumeBtn.disabled = true;
    pauseResumeBtn.style.opacity = "0.5";
    pauseResumeBtn.style.cursor = "not-allowed";
    pauseResumeBtn.textContent = "⏸ Pause";

    skipPrevBtn.disabled = true;
    skipPrevBtn.style.opacity = "0.5";
    skipPrevBtn.style.cursor = "not-allowed";

    skipNextBtn.disabled = true;
    skipNextBtn.style.opacity = "0.5";
    skipNextBtn.style.cursor = "not-allowed";

    // Disable stop and reset buttons
    stopBtn.disabled = true;
    stopBtn.style.opacity = "0.5";
    stopBtn.style.cursor = "not-allowed";

    resetChainBtn.disabled = true;
    resetChainBtn.style.opacity = "0.5";
    resetChainBtn.style.cursor = "not-allowed";

    // Enable start button
    startBtn.disabled = false;
    startBtn.style.opacity = "1";
    startBtn.style.cursor = "pointer";

    // Clear time remaining
    timeRemainingLabel.textContent = "Remaining: --";
  });

  window.addEventListener("chainPaused", () => {
    pauseResumeBtn.textContent = "▶️ Resume";
    showToast("⏸ Chain paused");
  });

  window.addEventListener("chainResumed", () => {
    pauseResumeBtn.textContent = "⏸ Pause";
    showToast("▶️ Chain resumed");
  });

  window.addEventListener("chainSkipped", (e) => {
    const { direction, preset } = e.detail;
    const emoji = direction === 'next' ? '⏭' : '⏮';
    showToast(`${emoji} Skipped → ${preset}`);
  });

  // Phase 11.4.1: Chain reset and stopped events
  window.addEventListener("chainReset", () => {
    showToast("♻️ Chain reset to start");

    // Disable all playback controls
    pauseResumeBtn.disabled = true;
    pauseResumeBtn.style.opacity = "0.5";
    pauseResumeBtn.style.cursor = "not-allowed";
    pauseResumeBtn.textContent = "⏸ Pause";

    skipPrevBtn.disabled = true;
    skipPrevBtn.style.opacity = "0.5";
    skipPrevBtn.style.cursor = "not-allowed";

    skipNextBtn.disabled = true;
    skipNextBtn.style.opacity = "0.5";
    skipNextBtn.style.cursor = "not-allowed";

    stopBtn.disabled = true;
    stopBtn.style.opacity = "0.5";
    stopBtn.style.cursor = "not-allowed";

    resetChainBtn.disabled = true;
    resetChainBtn.style.opacity = "0.5";
    resetChainBtn.style.cursor = "not-allowed";

    // Enable start button
    startBtn.disabled = false;
    startBtn.style.opacity = "1";
    startBtn.style.cursor = "pointer";
  });

  window.addEventListener("chainStopped", () => {
    showToast("⏹ Chain stopped");

    // Disable all playback controls (same as chainFinished)
    pauseResumeBtn.disabled = true;
    pauseResumeBtn.style.opacity = "0.5";
    pauseResumeBtn.style.cursor = "not-allowed";
    pauseResumeBtn.textContent = "⏸ Pause";

    skipPrevBtn.disabled = true;
    skipPrevBtn.style.opacity = "0.5";
    skipPrevBtn.style.cursor = "not-allowed";

    skipNextBtn.disabled = true;
    skipNextBtn.style.opacity = "0.5";
    skipNextBtn.style.cursor = "not-allowed";

    stopBtn.disabled = true;
    stopBtn.style.opacity = "0.5";
    stopBtn.style.cursor = "not-allowed";

    resetChainBtn.disabled = true;
    resetChainBtn.style.opacity = "0.5";
    resetChainBtn.style.cursor = "not-allowed";

    // Enable start button
    startBtn.disabled = false;
    startBtn.style.opacity = "1";
    startBtn.style.cursor = "pointer";

    // Clear progress and time
    timeRemainingLabel.textContent = "Remaining: --";
  });

  // Phase 11.4.0: Update time remaining display (every 100ms)
  let timeRemainingInterval = null;

  window.addEventListener("chainStarted", () => {
    if (timeRemainingInterval) clearInterval(timeRemainingInterval);

    timeRemainingInterval = setInterval(() => {
      import('./presetRouter.js').then(({ getChainProgress }) => {
        const progress = getChainProgress();
        if (progress) {
          const remainingMs = progress.timeRemaining;
          const minutes = Math.floor(remainingMs / 60000);
          const seconds = Math.floor((remainingMs % 60000) / 1000);
          timeRemainingLabel.textContent = `Remaining: ${minutes}m ${seconds}s`;
        } else {
          timeRemainingLabel.textContent = "Remaining: --";
          if (timeRemainingInterval) {
            clearInterval(timeRemainingInterval);
            timeRemainingInterval = null;
          }
        }
      });
    }, 100);
  });

  window.addEventListener("chainFinished", () => {
    if (timeRemainingInterval) {
      clearInterval(timeRemainingInterval);
      timeRemainingInterval = null;
    }
  });

  // Phase 11.4.1: Listen for smooth progress updates from presetRouter
  window.addEventListener("chainProgress", (e) => {
    const { step, total, percent, remaining } = e.detail;
    const progressFill = document.getElementById("chainProgressFill");
    const progressLabel = document.getElementById("chainProgressLabel");
    const progressContainer = document.getElementById("chainProgressContainer");

    if (progressFill && progressLabel && progressContainer) {
      // Update progress bar width
      progressFill.style.width = `${percent}%`;

      // Update label with step/total, percent, and time remaining
      progressLabel.textContent = `Step ${step}/${total} (${percent}%) — Remaining: ${remaining}s`;

      // Ensure container is visible
      progressContainer.style.display = "block";
    }
  });

  // Update progress every 100ms
  setInterval(updateChainProgress, 100);

  // Initial populate + whenever presets change, call refreshChainList()
  refreshChainList();
  refreshSavedChainsList();
  document.addEventListener("presetsImported", refreshChainList);
  document.addEventListener("presetSaved", refreshChainList);
  document.addEventListener("presetDeleted", refreshChainList);

  // Phase 11.2.5: Import/Export buttons
  const importExportContainer = document.createElement('div');
  importExportContainer.style.cssText = 'display: flex; gap: 5px; margin-bottom: 10px;';

  const exportButton = document.createElement('button');
  exportButton.textContent = '📥 Export';
  exportButton.style.cssText = 'flex: 1; padding: 6px; background: #00aa00; color: white; border: none; cursor: pointer; border-radius: 3px; font-size: 11px;';
  exportButton.title = 'Export all presets as JSON file';

  const importButton = document.createElement('button');
  importButton.textContent = '📤 Import';
  importButton.style.cssText = 'flex: 1; padding: 6px; background: #aa00aa; color: white; border: none; cursor: pointer; border-radius: 3px; font-size: 11px;';
  importButton.title = 'Import presets from JSON file';

  // Hidden file input for import
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.json,application/json';
  fileInput.style.display = 'none';

  exportButton.addEventListener('click', () => {
    notifyHUDUpdate({ presetAction: 'export' });
  });

  importButton.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      notifyHUDUpdate({ presetAction: 'import', file: file });
      fileInput.value = ''; // Reset input
    }
  });

  importExportContainer.appendChild(exportButton);
  importExportContainer.appendChild(importButton);
  tabContainers['Advanced'].appendChild(importExportContainer);
  tabContainers['Advanced'].appendChild(fileInput);

  // Store references for updating preset list
  panel.presetListContainer = presetListContainer;
  panel.presetLoadButton = loadButton;
  panel.presetUpdateButton = updateButton;
  panel.presetDeleteButton = deleteButton;
  panel.categoryFilter = categoryFilter;
  panel.tagFilter = tagFilter;
  panel.searchInput = searchInput; // Phase 11.2.7
  panel.getSelectedPreset = () => selectedPresetName;
  panel.setSelectedPreset = (name) => {
    selectedPresetName = name;
    loadButton.disabled = !name;
    updateButton.disabled = !name;
    deleteButton.disabled = !name;
  };

  // Phase 11.2.6: Filter event listeners
  categoryFilter.addEventListener('change', () => {
    import('./presets.js').then(({ listPresets }) => {
      updatePresetList(listPresets());
    });
  });

  tagFilter.addEventListener('input', () => {
    import('./presets.js').then(({ listPresets }) => {
      updatePresetList(listPresets());
    });
  });

  // Phase 11.2.7: Search event listener
  searchInput.addEventListener('input', () => {
    import('./presets.js').then(({ listPresets }) => {
      updatePresetList(listPresets());
    });
  });

  // Add separator for Phase 6 audio controls
  const audioSeparator = document.createElement('hr');
  audioSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Audio'].appendChild(audioSeparator);

  const audioTitle = document.createElement('h4');
  audioTitle.textContent = '🎶 Audio-Reactive';
  audioTitle.style.cssText = 'margin: 0 0 10px 0; color: #ff9900; font-size: 12px;';
  tabContainers['Audio'].appendChild(audioTitle);

  // Audio enable toggle
  const audioEnableControl = createToggleControl('Audio-Reactive Morphing', false, (value) => {
    notifyHUDUpdate({ audioEnabled: value });
  });
  tabContainers['Audio'].appendChild(audioEnableControl);

  // Audio sensitivity slider
  const audioSensitivityControl = createSliderControl('Audio Sensitivity', 1.0, 0.5, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ audioSensitivity: value });
  });
  tabContainers['Audio'].appendChild(audioSensitivityControl);

  // Add separator for particle controls
  const particleSeparator = document.createElement('hr');
  particleSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Visual'].appendChild(particleSeparator);

  const particleTitle = document.createElement('h4');
  particleTitle.textContent = '✨ Particles';
  particleTitle.style.cssText = 'margin: 0 0 10px 0; color: #00ffff; font-size: 12px;';
  tabContainers['Visual'].appendChild(particleTitle);

  // === Phase 4.8.1: Performance HUD ===
  const perfDiv = document.createElement('div');
  perfDiv.style.cssText = 'margin-bottom: 15px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 5px;';

  const fpsLabel = document.createElement('div');
  fpsLabel.innerHTML = '<span style="color: #888;">FPS:</span> <span id="hud-fps" style="color: #0f0;">--</span>';
  fpsLabel.style.cssText = 'margin-bottom: 5px; font-size: 12px;';
  perfDiv.appendChild(fpsLabel);

  const drawCallsLabel = document.createElement('div');
  drawCallsLabel.innerHTML = '<span style="color: #888;">Draw Calls:</span> <span id="hud-drawcalls" style="color: #0ff;">--</span>';
  drawCallsLabel.style.cssText = 'font-size: 12px;';
  perfDiv.appendChild(drawCallsLabel);

  tabContainers['Visual'].appendChild(perfDiv);

  // Particles enable toggle
  const particlesEnableControl = createToggleControl('Enable Particles', true, (value) => {
    notifyHUDUpdate({ particlesEnabled: value });
  });
  tabContainers['Visual'].appendChild(particlesEnableControl);

  // Particle density slider (Phase 4.4: expanded to 10,000)
  const particleDensityControl = createSliderControl('Particle Density', 5000, 1000, 10000, 100, (value) => {
    notifyHUDUpdate({ particlesCount: value });
  });
  particleDensityControl.title = 'Number of particles (1000-10000, requires reinit)';
  tabContainers['Visual'].appendChild(particleDensityControl);

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

  ['cube', 'sphere', 'torus', 'vesselPlanes'].forEach(option => {
    const optionEl = document.createElement('option');
    optionEl.value = option;
    // Special case for vesselPlanes display name
    if (option === 'vesselPlanes') {
      optionEl.textContent = 'Vessel Planes';
    } else {
      optionEl.textContent = option.charAt(0).toUpperCase() + option.slice(1);
    }
    optionEl.selected = option === 'cube';
    particleLayoutSelect.appendChild(optionEl);
  });

  // Phase 4.3b: Add event listener for layout changes
  particleLayoutSelect.addEventListener('change', () => {
    notifyHUDUpdate({ particlesLayout: particleLayoutSelect.value });
  });

  particleLayoutDiv.appendChild(particleLayoutSelect);
  tabContainers['Visual'].appendChild(particleLayoutDiv);

  // ✨ Particle Polish section
  const particlePolishLabel = document.createElement("h4");
  particlePolishLabel.textContent = "✨ Particle Polish";
  particlePolishLabel.style.cssText = 'margin: 15px 0 10px 0; color: #ffff00; font-size: 12px;';
  tabContainers['Visual'].appendChild(particlePolishLabel);

  // Hue shift slider (0-360)
  const hueShiftControl = createSliderControl('Hue Shift', 0, 0, 360, 5, (value) => {
    notifyHUDUpdate({ particlesHue: value });
  });
  tabContainers['Visual'].appendChild(hueShiftControl);

  // Size slider (Phase 4.8: true world-unit sizing, 0.05-2.0)
  const sizeControl = createSliderControl('Size', 0.5, 0.05, 2.0, 0.05, (value) => {
    notifyHUDUpdate({ particlesSize: value });
  });
  sizeControl.title = 'True 3D world-unit size (0.05 = tiny, 2.0 = large)';
  tabContainers['Visual'].appendChild(sizeControl);

  // Opacity slider (0.0-1.0)
  const opacityControl = createSliderControl('Opacity', 0.5, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ particlesOpacity: value });
  });
  tabContainers['Visual'].appendChild(opacityControl);

  // Organic motion toggle
  const organicMotionControl = createToggleControl('Organic Motion', false, (value) => {
    notifyHUDUpdate({ particlesOrganicMotion: value });
  });
  tabContainers['Visual'].appendChild(organicMotionControl);

  // Organic strength slider (Phase 4.8.1.7)
  const organicStrengthControl = createSliderControl('Organic Strength', 0.2, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ particlesOrganicStrength: value });
  });
  organicStrengthControl.title = 'Controls wander strength (0 = clean orbit, 1 = chaotic swarm)';
  tabContainers['Visual'].appendChild(organicStrengthControl);

  // Audio-reactive hue toggle
  const audioHueControl = createToggleControl('Audio-Reactive Hue', false, (value) => {
    notifyHUDUpdate({ particlesAudioReactiveHue: value });
  });
  tabContainers['Visual'].appendChild(audioHueControl);

  // Audio Gain slider (Phase 4.8)
  const audioGainControl = createSliderControl('Audio Gain', 2.0, 0.5, 5.0, 0.1, (value) => {
    notifyHUDUpdate({ particlesAudioGain: value });
  });
  audioGainControl.title = 'Amplifies per-particle audio hue variation';
  tabContainers['Visual'].appendChild(audioGainControl);

  // Orbital Speed slider (Phase 4.9.0)
  const velocityControl = createSliderControl('Orbital Speed', 0.05, 0.01, 2.0, 0.01, (value) => {
    notifyHUDUpdate({ particlesVelocity: value });
  });
  velocityControl.title = 'Controls particle orbital speed around vessel (min: 0.01)';
  tabContainers['Visual'].appendChild(velocityControl);

  // Motion Smoothness slider
  const motionSmoothnessControl = createSliderControl('Motion Smoothness', 0.5, 0.0, 1.0, 0.1, (value) => {
    notifyHUDUpdate({ particlesMotionSmoothness: value });
  });
  tabContainers['Visual'].appendChild(motionSmoothnessControl);

  // Phase 11.7: Particle Motion Debug Controls (unique naming to avoid collisions)
  const particleDensityDebugControl = createSliderControl('Density (Debug)', 2000, 500, 4000, 100, (value) => {
    state.particleDensity = value;
    console.log(`🎛️ Particle density: ${value}`);
  });
  particleDensityDebugControl.title = 'Particle density (500-4000)';
  tabContainers['Visual'].appendChild(particleDensityDebugControl);

  const particleSizeDebugControl = createSliderControl('Size (Debug)', 0.1, 0.05, 1.0, 0.05, (value) => {
    state.particleSize = value;
    console.log(`🎛️ Particle size: ${value}`);
  });
  particleSizeDebugControl.title = 'Particle size (0.05-1.0)';
  tabContainers['Visual'].appendChild(particleSizeDebugControl);

  const particleMotionStrengthControl = createSliderControl('Motion Strength', 0.5, 0.0, 1.0, 0.1, (value) => {
    state.particleMotionStrength = value;
    console.log(`🎛️ Particle motion strength: ${value}`);
  });
  particleMotionStrengthControl.title = 'Global drift strength multiplier';
  tabContainers['Visual'].appendChild(particleMotionStrengthControl);

  const particleAudioJitterControl = createToggleControl('Audio Jitter', true, (value) => {
    state.useAudioJitter = value;
    console.log(`🎛️ Audio jitter: ${value ? 'ON' : 'OFF'}`);
  });
  particleAudioJitterControl.title = 'Add velocity bursts on FFT peaks';
  tabContainers['Visual'].appendChild(particleAudioJitterControl);

  // === Phase 11.7.1: Emoji Particles ===
  const emojiParticlesLabel = document.createElement("h4");
  emojiParticlesLabel.textContent = "🍕 Emoji Particles";
  emojiParticlesLabel.style.cssText = 'margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;';
  tabContainers['Visual'].appendChild(emojiParticlesLabel);

  // Phase 11.7.2: Emoji picker dropdown
  const emojiPicker = document.createElement("select");
  emojiPicker.id = "emojiPicker";
  emojiPicker.style.cssText = 'margin-left: 8px; padding: 2px 4px; background: #1a1a1a; color: #00ffff; border: 1px solid #333; border-radius: 3px;';
  ["🍕","🌶️","🍄","⭐","🎵","💫"].forEach(emoji => {
    const option = document.createElement("option");
    option.value = emoji;
    option.textContent = emoji;
    emojiPicker.appendChild(option);
  });
  emojiPicker.disabled = true; // disabled until toggle ON

  const emojiParticlesToggle = createToggleControl('Enable Emoji Particles', false, async (value) => {
    state.useEmojiParticles = value;
    if (value) {
      // Phase 11.7.3: Disable default ParticleSystem (hard swap)
      const { getParticleSystemInstance } = await import('./particles.js');
      const { scene } = await import('./geometry.js');
      const particleSystem = getParticleSystemInstance();
      if (particleSystem && particleSystem.points) {
        scene.remove(particleSystem.points);
        console.log("✨ Default ParticleSystem disabled");
      }

      // Enable emoji particles
      if (!window.emojiParticles) {
        const { EmojiParticles } = await import('./particles.js');
        window.emojiParticles = new EmojiParticles(scene, 500, emojiPicker.value);
        console.log(`🍕 EmojiParticles enabled with ${emojiPicker.value}`);
      }
      emojiPicker.disabled = false;

    } else {
      // Phase 11.7.3: Restore default ParticleSystem
      const { getParticleSystemInstance } = await import('./particles.js');
      const { scene } = await import('./geometry.js');
      const particleSystem = getParticleSystemInstance();
      if (particleSystem && particleSystem.points) {
        scene.add(particleSystem.points);
        console.log("✨ Default ParticleSystem restored");
      }

      // Dispose emoji particles
      if (window.emojiParticles) {
        window.emojiParticles.dispose();
        window.emojiParticles = null;
        console.log("🍕 EmojiParticles disabled");
      }
      emojiPicker.disabled = true;
    }
  });
  emojiParticlesToggle.title = 'Toggle audio-reactive emoji particles';

  // Phase 11.7.2: Picker change event → swap emoji
  emojiPicker.addEventListener("change", (e) => {
    if (window.emojiParticles) {
      window.emojiParticles.swapEmoji(e.target.value);
    }
  });

  // Add toggle and picker to same line
  const emojiContainer = document.createElement("div");
  emojiContainer.style.cssText = 'display: flex; align-items: center; margin-bottom: 8px;';
  emojiContainer.appendChild(emojiParticlesToggle);
  emojiContainer.appendChild(emojiPicker);
  tabContainers['Visual'].appendChild(emojiContainer);

  // Phase 11.7.4: Emoji Count Slider
  // Phase 11.7.10: Emoji count slider (up to 2000 with instanced rendering)
  const emojiCountControl = createSliderControl('Emoji Count', 50, 10, 2000, 50, async (value) => {
    if (window.emojiParticles) {
      const currentEmoji = window.emojiParticles.emoji;
      const currentLayout = window.emojiParticles.layout;
      const currentReactivity = window.emojiParticles.audioReactivity;
      const { scene } = await import('./geometry.js');
      window.emojiParticles.dispose();
      const { EmojiParticles } = await import('./particles.js');
      window.emojiParticles = new EmojiParticles(scene, value, currentEmoji);
      window.emojiParticles.setLayout(currentLayout);
      window.emojiParticles.setAudioReactivity(currentReactivity);
      console.log(`🍕 Emoji instanced count set to ${value}`);
    }
  });
  emojiCountControl.title = 'Number of emoji particles (10-2000, instanced rendering)';
  tabContainers['Visual'].appendChild(emojiCountControl);

  // Phase 11.7.5: Emoji Layout Dropdown
  const emojiLayoutLabel = document.createElement("label");
  emojiLayoutLabel.textContent = "Layout";
  emojiLayoutLabel.style.cssText = 'display: block; margin-top: 8px; margin-bottom: 4px; color: #999; font-size: 11px;';
  tabContainers['Visual'].appendChild(emojiLayoutLabel);

  const emojiLayoutDropdown = document.createElement("select");
  emojiLayoutDropdown.id = "emojiLayout";
  emojiLayoutDropdown.style.cssText = 'width: 100%; padding: 4px; background: #1a1a1a; color: #00ffff; border: 1px solid #333; border-radius: 3px;';

  const layoutOptions = [
    { value: "cube", label: "Cube" },
    { value: "sphere", label: "Sphere" },
    { value: "orbit", label: "Orbit" },
    { value: "random", label: "Random" },
    { value: "spiral", label: "Spiral 🌀" },
    { value: "wave", label: "Wave Grid 🌊" },
    { value: "burst", label: "Burst 💥" }
  ];

  layoutOptions.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.label;
    emojiLayoutDropdown.appendChild(option);
  });

  emojiLayoutDropdown.addEventListener("change", (e) => {
    if (window.emojiParticles) {
      window.emojiParticles.setLayout(e.target.value);
    }
  });

  tabContainers['Visual'].appendChild(emojiLayoutDropdown);

  // Phase 11.7.8: Audio Reactivity Slider
  const emojiAudioReactivityControl = createSliderControl('Audio Reactivity', 1.0, 0, 2, 0.1, (value) => {
    if (window.emojiParticles) {
      window.emojiParticles.setAudioReactivity(value);
    }
  });
  emojiAudioReactivityControl.title = 'Multiplier for audio-reactive scale/rotation (0-2x)';
  tabContainers['Visual'].appendChild(emojiAudioReactivityControl);

  // Phase 11.7.11: Signal Linking Toggle
  const emojiSignalLinkingControl = createToggleControl('Link to Morph/Audio', false, (value) => {
    if (window.emojiParticles) {
      window.emojiParticles.setSignalLinking(value);
    }
  });
  emojiSignalLinkingControl.title = 'Link emoji particles to morph weights and audio bands (bass→expansion, mid→rotation, treble→sparkle)';
  tabContainers['Visual'].appendChild(emojiSignalLinkingControl);

  // Phase 11.7.12: Emoji Set Selection
  const emojiSetLabel = document.createElement("label");
  emojiSetLabel.textContent = "Emoji Set";
  emojiSetLabel.style.cssText = 'display: block; margin-top: 8px; margin-bottom: 4px; color: #999; font-size: 11px;';
  tabContainers['Visual'].appendChild(emojiSetLabel);

  const emojiSetDropdown = document.createElement("select");
  emojiSetDropdown.id = "emojiSet";
  emojiSetDropdown.style.cssText = 'width: 100%; padding: 4px; background: #1a1a1a; color: #00ffff; border: 1px solid #333; border-radius: 3px;';

  const emojiSets = [
    { value: "", label: "Single Emoji" },
    { value: "pizza", label: "🍕 Pizza" },
    { value: "cosmos", label: "⭐ Cosmos" },
    { value: "myth", label: "🦁 Myth" },
    { value: "ocean", label: "🌊 Ocean" },
    { value: "nature", label: "🌲 Nature" },
    { value: "tech", label: "💻 Tech" }
  ];

  emojiSets.forEach(set => {
    const option = document.createElement("option");
    option.value = set.value;
    option.textContent = set.label;
    emojiSetDropdown.appendChild(option);
  });

  emojiSetDropdown.addEventListener("change", (e) => {
    if (window.emojiParticles && e.target.value) {
      window.emojiParticles.loadEmojiSet(e.target.value);
    }
  });

  tabContainers['Visual'].appendChild(emojiSetDropdown);

  // Phase 11.7.12: Auto-Cycle Toggle
  const emojiAutoCycleControl = createToggleControl('Auto-Cycle Set', false, (value) => {
    if (window.emojiParticles) {
      window.emojiParticles.setAutoCycle(value, 4000);
    }
  });
  emojiAutoCycleControl.title = 'Automatically cycle through emojis in the selected set (4s interval)';
  tabContainers['Visual'].appendChild(emojiAutoCycleControl);

  // Phase 11.7.12: Story Mode Toggle
  const emojiStoryModeControl = createToggleControl('Story Mode', false, (value) => {
    if (window.emojiParticles) {
      const sequence = ["pizza", "cosmos", "myth"];
      window.emojiParticles.setStoryMode(value, sequence);
    }
  });
  emojiStoryModeControl.title = 'Enable narrative sequence: Pizza → Cosmos → Myth (use CC31 or manual advance)';
  tabContainers['Visual'].appendChild(emojiStoryModeControl);

  // === Phase 11.7.13: Beat Sync & Sequencing ===
  const beatSyncLabel = document.createElement("h4");
  beatSyncLabel.textContent = "🥁 Beat Sync";
  beatSyncLabel.style.cssText = 'margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;';
  tabContainers['Visual'].appendChild(beatSyncLabel);

  // BPM Input
  const bpmControl = createSliderControl('BPM', 120, 60, 200, 1, (value) => {
    if (window.emojiParticles) {
      window.emojiParticles.setBPM(value);
    }
  });
  bpmControl.title = 'Tempo in beats per minute for pulse/sequencer sync';
  tabContainers['Visual'].appendChild(bpmControl);

  // Beat Sync Toggle
  const beatSyncToggle = createToggleControl('Enable Beat Sync', false, (value) => {
    if (window.emojiParticles) {
      window.emojiParticles.setBeatSync(value);
    }
  });
  beatSyncToggle.title = 'Pulse emojis on beat (scale/opacity)';
  tabContainers['Visual'].appendChild(beatSyncToggle);

  // Subdivision Dropdown
  const subdivisionLabel = document.createElement("label");
  subdivisionLabel.textContent = "Subdivision";
  subdivisionLabel.style.cssText = 'display: block; margin-top: 8px; margin-bottom: 4px; color: #999; font-size: 11px;';
  tabContainers['Visual'].appendChild(subdivisionLabel);

  const subdivisionDropdown = document.createElement("select");
  subdivisionDropdown.style.cssText = 'width: 100%; padding: 4px; background: #1a1a1a; color: #00ffff; border: 1px solid #333; border-radius: 3px;';
  [
    { value: 4, label: "Quarter Notes (1/4)" },
    { value: 8, label: "Eighth Notes (1/8)" },
    { value: 16, label: "Sixteenth Notes (1/16)" }
  ].forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.label;
    subdivisionDropdown.appendChild(option);
  });
  subdivisionDropdown.addEventListener("change", (e) => {
    if (window.emojiParticles) {
      window.emojiParticles.setSubdivision(parseInt(e.target.value));
    }
  });
  tabContainers['Visual'].appendChild(subdivisionDropdown);

  // Onset Detection Toggle
  const onsetDetectionToggle = createToggleControl('Onset Detection', false, (value) => {
    if (window.emojiParticles) {
      window.emojiParticles.setOnsetDetection(value);
    }
  });
  onsetDetectionToggle.title = 'Auto-detect beats from audio RMS spikes';
  tabContainers['Visual'].appendChild(onsetDetectionToggle);

  // Sequencer Toggle
  const sequencerToggle = createToggleControl('Sequencer Mode', false, (value) => {
    if (window.emojiParticles) {
      const defaultSequence = ["🍕", "🌶️", "🍄", "🧄"];
      window.emojiParticles.setSequencer(value, defaultSequence);
    }
  });
  sequencerToggle.title = 'Step through emoji sequence on each beat (🍕 → 🌶️ → 🍄 → 🧄)';
  tabContainers['Visual'].appendChild(sequencerToggle);

  // === Phase 11.7.15: Emoji Mixer (Multiple Streams) ===
  const emojiMixerLabel = document.createElement("h4");
  emojiMixerLabel.textContent = "🎨 Emoji Mixer";
  emojiMixerLabel.style.cssText = 'margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;';
  tabContainers['Visual'].appendChild(emojiMixerLabel);

  // Container for all emoji streams
  const emojiStreamsContainer = document.createElement("div");
  emojiStreamsContainer.id = "emojiStreamsContainer";
  emojiStreamsContainer.style.cssText = 'display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px;';
  tabContainers['Visual'].appendChild(emojiStreamsContainer);

  // Function to create a stream row
  function createEmojiStreamRow(emoji = "🍕", count = 100, enabled = true) {
    const row = document.createElement("div");
    row.style.cssText = 'display: flex; align-items: center; gap: 6px; padding: 4px; background: rgba(0,0,0,0.3); border-radius: 4px;';

    // Emoji input
    const emojiInput = document.createElement("input");
    emojiInput.type = "text";
    emojiInput.value = emoji;
    emojiInput.maxLength = 2;
    emojiInput.style.cssText = 'width: 40px; font-size: 20px; text-align: center; background: rgba(255,255,255,0.1); border: 1px solid #00ffff; color: white; padding: 2px;';

    // Count slider
    const countSlider = document.createElement("input");
    countSlider.type = "range";
    countSlider.min = 10;
    countSlider.max = 500;
    countSlider.value = count;
    countSlider.style.cssText = 'flex: 1; min-width: 80px;';

    // Count label
    const countLabel = document.createElement("span");
    countLabel.textContent = count;
    countLabel.style.cssText = 'font-size: 10px; color: #00ffff; min-width: 30px;';

    // Toggle checkbox
    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = enabled;
    toggle.style.cssText = 'width: 16px; height: 16px;';

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✕";
    removeBtn.style.cssText = 'width: 24px; height: 24px; background: rgba(255,0,0,0.3); border: 1px solid red; color: red; cursor: pointer; border-radius: 4px; font-size: 12px;';

    // Event handlers
    emojiInput.addEventListener("input", () => {
      const oldEmoji = row.dataset.emoji;
      const newEmoji = emojiInput.value;
      if (oldEmoji && newEmoji && oldEmoji !== newEmoji && window.emojiStreamManager) {
        // Remove old stream and add new one
        window.emojiStreamManager.removeStream(oldEmoji);
        window.emojiStreamManager.addStream(newEmoji, parseInt(countSlider.value), toggle.checked);
        row.dataset.emoji = newEmoji;
        syncStateFromManager();
      }
    });

    countSlider.addEventListener("input", () => {
      countLabel.textContent = countSlider.value;
      if (window.emojiStreamManager && row.dataset.emoji) {
        window.emojiStreamManager.updateStreamCount(row.dataset.emoji, parseInt(countSlider.value));
        syncStateFromManager();
      }
    });

    toggle.addEventListener("change", () => {
      if (window.emojiStreamManager && row.dataset.emoji) {
        window.emojiStreamManager.toggleStream(row.dataset.emoji, toggle.checked);
        syncStateFromManager();
      }
    });

    removeBtn.addEventListener("click", () => {
      if (window.emojiStreamManager && row.dataset.emoji) {
        window.emojiStreamManager.removeStream(row.dataset.emoji);
        row.remove();
        syncStateFromManager();
        // Phase 11.7.16: Rebuild sequencer grid when streams change
        if (window.rebuildSequencerGrid) {
          window.rebuildSequencerGrid();
        }
      }
    });

    row.dataset.emoji = emoji;
    row.appendChild(emojiInput);
    row.appendChild(countSlider);
    row.appendChild(countLabel);
    row.appendChild(toggle);
    row.appendChild(removeBtn);

    return row;
  }

  // Function to sync state from manager
  function syncStateFromManager() {
    if (window.emojiStreamManager) {
      state.emojiStreams = window.emojiStreamManager.getStreamsArray();
    }
  }

  // Add Stream button
  const addStreamBtn = document.createElement("button");
  addStreamBtn.textContent = "+ Add Emoji Stream";
  addStreamBtn.style.cssText = 'padding: 8px; background: rgba(0,255,255,0.2); border: 1px solid #00ffff; color: #00ffff; cursor: pointer; border-radius: 4px; font-size: 11px; margin-bottom: 10px;';
  addStreamBtn.addEventListener("click", () => {
    const defaultEmojis = ["🍕", "🌶️", "🍄", "⭐", "🌙", "🦁", "🌊", "🌲", "💻", "🔥"];
    const usedEmojis = Array.from(emojiStreamsContainer.querySelectorAll('[data-emoji]')).map(el => el.dataset.emoji);
    const availableEmoji = defaultEmojis.find(e => !usedEmojis.includes(e)) || "🎨";

    const row = createEmojiStreamRow(availableEmoji, 100, true);
    emojiStreamsContainer.appendChild(row);

    // Add to manager
    if (window.emojiStreamManager) {
      window.emojiStreamManager.addStream(availableEmoji, 100, true);
      syncStateFromManager();
      // Phase 11.7.16: Rebuild sequencer grid when streams change
      if (window.rebuildSequencerGrid) {
        window.rebuildSequencerGrid();
      }
    }
  });
  tabContainers['Visual'].appendChild(addStreamBtn);

  // Function to rebuild emoji mixer UI from state
  function rebuildEmojiMixerUI() {
    // Clear existing rows
    emojiStreamsContainer.innerHTML = '';

    // Rebuild from state
    if (state.emojiStreams && state.emojiStreams.length > 0) {
      state.emojiStreams.forEach(({ emoji, count, enabled }) => {
        const row = createEmojiStreamRow(emoji, count, enabled);
        emojiStreamsContainer.appendChild(row);
      });
    }
  }

  // Expose rebuild function globally for preset loading
  window.rebuildEmojiMixerUI = rebuildEmojiMixerUI;

  // Initialize with default stream if state has streams
  rebuildEmojiMixerUI();

  // === Phase 11.7.16: Emoji Sequencer & Timeline ===
  const emojiSequencerLabel = document.createElement("h4");
  emojiSequencerLabel.textContent = "🎶 Emoji Sequencer";
  emojiSequencerLabel.style.cssText = 'margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;';
  tabContainers['Visual'].appendChild(emojiSequencerLabel);

  // Sequencer enable toggle
  const sequencerEnableToggle = createToggleControl('Enable Sequencer', false, (value) => {
    if (window.emojiSequencer) {
      window.emojiSequencer.setEnabled(value);
      state.emojiSequencer.enabled = value;
    }
  });
  sequencerEnableToggle.title = 'Enable beat-based emoji sequencing';
  tabContainers['Visual'].appendChild(sequencerEnableToggle);

  // BPM control
  const sequencerBPMControl = createSliderControl('Sequencer BPM', 120, 60, 200, 1, (value) => {
    if (window.emojiSequencer) {
      window.emojiSequencer.setBPM(value);
      state.emojiSequencer.bpm = value;
    }
  });
  sequencerBPMControl.title = 'Beats per minute for sequencer';
  tabContainers['Visual'].appendChild(sequencerBPMControl);

  // Timeline length control
  const timelineLengthControl = createSliderControl('Timeline Length', 16, 4, 32, 1, (value) => {
    if (window.emojiSequencer) {
      window.emojiSequencer.setTimelineLength(value);
      state.emojiSequencer.timelineLength = value;
      rebuildSequencerGrid();
    }
  });
  timelineLengthControl.title = 'Number of beats in the timeline';
  tabContainers['Visual'].appendChild(timelineLengthControl);

  // Timeline grid container
  const timelineGridContainer = document.createElement("div");
  timelineGridContainer.id = "timelineGridContainer";
  timelineGridContainer.style.cssText = 'margin: 10px 0; padding: 8px; background: rgba(0,0,0,0.4); border-radius: 4px; overflow-x: auto; max-height: 300px; overflow-y: auto;';
  tabContainers['Visual'].appendChild(timelineGridContainer);

  // Function to build timeline grid
  function rebuildSequencerGrid() {
    if (!window.emojiSequencer) return;

    const container = document.getElementById("timelineGridContainer");
    if (!container) return;

    container.innerHTML = '';

    const emojis = Array.from(window.emojiStreamManager.streams.keys());
    if (emojis.length === 0) {
      container.innerHTML = '<div style="color: #888; font-size: 11px; padding: 10px;">Add emoji streams to use sequencer</div>';
      return;
    }

    const timelineLength = window.emojiSequencer.timelineLength;

    // Header row with beat numbers
    const headerRow = document.createElement("div");
    headerRow.style.cssText = 'display: flex; margin-bottom: 4px; padding-left: 40px;';
    for (let beat = 0; beat < timelineLength; beat++) {
      const beatLabel = document.createElement("div");
      beatLabel.textContent = beat + 1;
      beatLabel.style.cssText = 'width: 24px; height: 20px; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #666; margin-right: 2px;';
      headerRow.appendChild(beatLabel);
    }
    container.appendChild(headerRow);

    // Emoji rows
    emojis.forEach(emoji => {
      const row = document.createElement("div");
      row.style.cssText = 'display: flex; align-items: center; margin-bottom: 4px;';

      // Emoji label
      const emojiLabel = document.createElement("div");
      emojiLabel.textContent = emoji;
      emojiLabel.style.cssText = 'width: 30px; font-size: 18px; text-align: center; margin-right: 10px;';
      row.appendChild(emojiLabel);

      // Beat toggles
      const pattern = window.emojiSequencer.getPattern(emoji);
      for (let beat = 0; beat < timelineLength; beat++) {
        const beatBtn = document.createElement("button");
        beatBtn.textContent = "●";
        beatBtn.dataset.emoji = emoji;
        beatBtn.dataset.beat = beat;
        beatBtn.style.cssText = `
          width: 24px;
          height: 24px;
          margin-right: 2px;
          border: 1px solid #00ffff;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.1s;
        `;

        // Set initial state
        const isActive = pattern[beat] === 1;
        beatBtn.style.background = isActive ? 'rgba(0,255,255,0.6)' : 'rgba(0,0,0,0.3)';
        beatBtn.style.color = isActive ? '#000' : '#00ffff';

        beatBtn.addEventListener("click", () => {
          const newState = window.emojiSequencer.toggleBeat(emoji, beat);
          beatBtn.style.background = newState ? 'rgba(0,255,255,0.6)' : 'rgba(0,0,0,0.3)';
          beatBtn.style.color = newState ? '#000' : '#00ffff';

          // Sync to state
          state.emojiSequencer.patterns[emoji] = window.emojiSequencer.getPattern(emoji);
        });

        row.appendChild(beatBtn);
      }

      container.appendChild(row);
    });
  }

  // Expose rebuild function
  window.rebuildSequencerGrid = rebuildSequencerGrid;

  // Build initial grid
  rebuildSequencerGrid();

  // Reset button
  const resetSequencerBtn = document.createElement("button");
  resetSequencerBtn.textContent = "↺ Reset to Beat 1";
  resetSequencerBtn.style.cssText = 'padding: 6px 12px; background: rgba(0,255,255,0.2); border: 1px solid #00ffff; color: #00ffff; cursor: pointer; border-radius: 4px; font-size: 11px; margin-top: 8px;';
  resetSequencerBtn.addEventListener("click", () => {
    if (window.emojiSequencer) {
      window.emojiSequencer.reset();
    }
  });
  tabContainers['Visual'].appendChild(resetSequencerBtn);

  // === Phase 11.7.17: Emoji Pattern Banks ===
  const emojiBanksLabel = document.createElement("h4");
  emojiBanksLabel.textContent = "💾 Pattern Banks";
  emojiBanksLabel.style.cssText = 'margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;';
  tabContainers['Visual'].appendChild(emojiBanksLabel);

  // Bank buttons grid (2 rows of 4)
  const banksGridContainer = document.createElement("div");
  banksGridContainer.style.cssText = 'display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 10px;';

  // Create 8 bank buttons
  const bankButtons = [];
  for (let i = 0; i < 8; i++) {
    const bankBtn = document.createElement("button");
    bankBtn.textContent = `${i + 1}`;
    bankBtn.dataset.bankIndex = i;
    bankBtn.style.cssText = `
      padding: 12px 8px;
      background: rgba(0,0,0,0.4);
      border: 1px solid #666;
      color: #666;
      cursor: pointer;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: all 0.2s;
      position: relative;
    `;

    // Load bank on click
    bankBtn.addEventListener("click", () => {
      if (window.emojiBankManager) {
        const success = window.emojiBankManager.loadBank(i);
        if (success) {
          state.currentBank = i;
          // Rebuild UI
          if (window.rebuildEmojiMixerUI) window.rebuildEmojiMixerUI();
          if (window.rebuildSequencerGrid) window.rebuildSequencerGrid();
          updateBankButtonStates();
        }
      }
    });

    // Right-click to save
    bankBtn.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      if (window.emojiBankManager) {
        window.emojiBankManager.saveBank(i);
        state.emojiBanks = window.emojiBankManager.saveBanksToState();
        updateBankButtonStates();
      }
    });

    bankButtons.push(bankBtn);
    banksGridContainer.appendChild(bankBtn);
  }

  tabContainers['Visual'].appendChild(banksGridContainer);

  // Function to update bank button states
  function updateBankButtonStates() {
    if (!window.emojiBankManager) return;

    bankButtons.forEach((btn, index) => {
      const isEmpty = window.emojiBankManager.isBankEmpty(index);
      const isCurrent = state.currentBank === index;

      if (isEmpty) {
        btn.style.background = 'rgba(0,0,0,0.4)';
        btn.style.borderColor = '#666';
        btn.style.color = '#666';
        btn.title = `Bank ${index + 1}: Empty\nLeft-click to load\nRight-click to save current pattern`;
      } else {
        const bank = window.emojiBankManager.getBank(index);
        const emojiList = bank.streams.map(s => s.emoji).join('');

        btn.style.background = isCurrent ? 'rgba(0,255,255,0.4)' : 'rgba(0,255,0,0.2)';
        btn.style.borderColor = isCurrent ? '#00ffff' : '#00ff00';
        btn.style.color = isCurrent ? '#00ffff' : '#00ff00';
        btn.title = `Bank ${index + 1}: ${bank.name}\n${emojiList}\nLeft-click to load\nRight-click to save current pattern`;
      }
    });
  }

  // Expose update function
  window.updateBankButtonStates = updateBankButtonStates;

  // Initial update
  updateBankButtonStates();

  // Save/Clear controls row
  const bankControlsRow = document.createElement("div");
  bankControlsRow.style.cssText = 'display: flex; gap: 6px; margin-top: 8px;';

  // Save to current bank button
  const saveToBankBtn = document.createElement("button");
  saveToBankBtn.textContent = "💾 Save to Selected";
  saveToBankBtn.style.cssText = 'flex: 1; padding: 6px; background: rgba(0,255,0,0.2); border: 1px solid #00ff00; color: #00ff00; cursor: pointer; border-radius: 4px; font-size: 11px;';
  saveToBankBtn.addEventListener("click", () => {
    if (state.currentBank !== null && window.emojiBankManager) {
      window.emojiBankManager.saveBank(state.currentBank);
      state.emojiBanks = window.emojiBankManager.saveBanksToState();
      updateBankButtonStates();
    } else {
      console.warn("💾 No bank selected");
    }
  });
  saveToBankBtn.title = 'Save current emoji mix + sequencer to selected bank';
  bankControlsRow.appendChild(saveToBankBtn);

  // Clear bank button
  const clearBankBtn = document.createElement("button");
  clearBankBtn.textContent = "✕ Clear Selected";
  clearBankBtn.style.cssText = 'flex: 1; padding: 6px; background: rgba(255,0,0,0.2); border: 1px solid red; color: red; cursor: pointer; border-radius: 4px; font-size: 11px;';
  clearBankBtn.addEventListener("click", () => {
    if (state.currentBank !== null && window.emojiBankManager) {
      window.emojiBankManager.clearBank(state.currentBank);
      state.emojiBanks = window.emojiBankManager.saveBanksToState();
      updateBankButtonStates();
    }
  });
  clearBankBtn.title = 'Clear selected bank';
  bankControlsRow.appendChild(clearBankBtn);

  tabContainers['Visual'].appendChild(bankControlsRow);

  // Info text
  const bankInfoText = document.createElement("div");
  bankInfoText.textContent = "Left-click: Load | Right-click: Quick Save";
  bankInfoText.style.cssText = 'font-size: 10px; color: #888; margin-top: 6px; text-align: center;';
  tabContainers['Visual'].appendChild(bankInfoText);

  // === Phase 11.7.18: Emoji Physics & Interaction ===
  const emojiPhysicsLabel = document.createElement("h4");
  emojiPhysicsLabel.textContent = "🌐 Emoji Physics";
  emojiPhysicsLabel.style.cssText = 'margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;';
  tabContainers['Visual'].appendChild(emojiPhysicsLabel);

  // Physics mode dropdown
  const physicsModeLabel = document.createElement("label");
  physicsModeLabel.textContent = "Physics Mode";
  physicsModeLabel.style.cssText = 'display: block; font-size: 11px; margin-bottom: 4px; color: #00ffff;';
  tabContainers['Visual'].appendChild(physicsModeLabel);

  const physicsModeDropdown = document.createElement("select");
  physicsModeDropdown.style.cssText = 'width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #00ffff; color: #00ffff; border-radius: 4px; margin-bottom: 10px; font-size: 11px;';

  const physicsModes = [
    { value: 'none', label: 'None (Static)' },
    { value: 'gravity', label: 'Gravity (Fall Down)' },
    { value: 'orbit', label: 'Orbit Attraction (Pull to Center)' },
    { value: 'repulsion', label: 'Repulsion (Scatter Away)' }
  ];

  physicsModes.forEach(mode => {
    const option = document.createElement("option");
    option.value = mode.value;
    option.textContent = mode.label;
    physicsModeDropdown.appendChild(option);
  });

  physicsModeDropdown.addEventListener("change", () => {
    const mode = physicsModeDropdown.value;
    state.emojiPhysics.mode = mode;

    // Apply to all streams
    if (window.emojiStreamManager) {
      window.emojiStreamManager.setPhysicsMode(mode);
    }

    // Apply to single emoji particles if active
    if (window.emojiParticles) {
      window.emojiParticles.setPhysicsMode(mode);
    }

    console.log(`🌐 Emoji physics mode: ${mode}`);
  });
  tabContainers['Visual'].appendChild(physicsModeDropdown);

  // Collision toggle
  const collisionToggle = createToggleControl('Enable Collisions', true, (value) => {
    state.emojiPhysics.collisionEnabled = value;
  });
  collisionToggle.title = 'Emojis bounce off each other gently';
  tabContainers['Visual'].appendChild(collisionToggle);

  // Audio modulation toggle
  const audioModToggle = createToggleControl('Audio Modulation', true, (value) => {
    state.emojiPhysics.audioModulation = value;
  });
  audioModToggle.title = 'Gravity affected by bass, repulsion by treble';
  tabContainers['Visual'].appendChild(audioModToggle);

  // Mouse interaction toggle
  const mouseInteractionToggle = createToggleControl('Mouse Swirl', false, (value) => {
    state.emojiPhysics.mouseInteraction = value;
  });
  mouseInteractionToggle.title = 'Drag mouse to create swirl forces';
  tabContainers['Visual'].appendChild(mouseInteractionToggle);

  // Gravity strength slider
  const gravityStrengthControl = createSliderControl('Gravity Strength', 0.01, 0.001, 0.05, 0.001, (value) => {
    state.emojiPhysics.gravityStrength = value;
  });
  gravityStrengthControl.title = 'Downward acceleration force';
  tabContainers['Visual'].appendChild(gravityStrengthControl);

  // Orbit strength slider
  const orbitStrengthControl = createSliderControl('Orbit Strength', 0.005, 0.001, 0.02, 0.001, (value) => {
    state.emojiPhysics.orbitStrength = value;
  });
  orbitStrengthControl.title = 'Attraction force toward center';
  tabContainers['Visual'].appendChild(orbitStrengthControl);

  // Repulsion strength slider
  const repulsionStrengthControl = createSliderControl('Repulsion Strength', 0.02, 0.001, 0.1, 0.001, (value) => {
    state.emojiPhysics.repulsionStrength = value;
  });
  repulsionStrengthControl.title = 'Force pushing emojis away from center';
  tabContainers['Visual'].appendChild(repulsionStrengthControl);

  // === Phase 11.7.19: Emoji Particle Fusion & Clusters ===
  const emojiFusionLabel = document.createElement("h4");
  emojiFusionLabel.textContent = "⚡ Emoji Fusion & Clusters";
  emojiFusionLabel.style.cssText = 'margin: 15px 0 10px 0; color: #ff00ff; font-size: 12px;';
  tabContainers['Visual'].appendChild(emojiFusionLabel);

  // Fusion enabled toggle
  const fusionToggle = createToggleControl('Enable Fusion', false, (value) => {
    state.emojiFusion.enabled = value;
    if (value) {
      console.log(`⚡ Fusion enabled (threshold ${state.emojiFusion.threshold.toFixed(1)})`);
    } else {
      console.log("⚡ Fusion disabled");
    }
  });
  fusionToggle.title = 'Particles merge into clusters when overlapping';
  tabContainers['Visual'].appendChild(fusionToggle);

  // Fusion threshold slider
  const fusionThresholdControl = createSliderControl('Fusion Threshold', 1.0, 0.1, 2.0, 0.1, (value) => {
    state.emojiFusion.threshold = value;
    console.log(`⚡ Fusion threshold = ${value.toFixed(1)}`);
  });
  fusionThresholdControl.title = 'Distance threshold for fusion (smaller = more fusions)';
  tabContainers['Visual'].appendChild(fusionThresholdControl);

  // === Phase 11.7.20: Emoji Constellations & Symbolic Geometry ===
  const emojiConstellationLabel = document.createElement("h4");
  emojiConstellationLabel.textContent = "🌌 Emoji Constellations";
  emojiConstellationLabel.style.cssText = 'margin: 15px 0 10px 0; color: #ffaa00; font-size: 12px;';
  tabContainers['Visual'].appendChild(emojiConstellationLabel);

  // Constellation type dropdown
  const constellationTypeLabel = document.createElement("label");
  constellationTypeLabel.textContent = "Constellation Pattern";
  constellationTypeLabel.style.cssText = 'display: block; font-size: 11px; margin-bottom: 4px; color: #ffaa00;';
  tabContainers['Visual'].appendChild(constellationTypeLabel);

  const constellationTypeDropdown = document.createElement("select");
  constellationTypeDropdown.style.cssText = 'width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #ffaa00; color: #ffaa00; border-radius: 4px; margin-bottom: 10px; font-size: 11px;';

  const constellationTypes = [
    { value: 'None', label: 'None (Free Motion)' },
    { value: 'Line', label: 'Line' },
    { value: 'Triangle', label: 'Triangle' },
    { value: 'Star', label: '5-Point Star ⭐' },
    { value: 'Spiral', label: 'Golden Spiral 🌀' },
    { value: 'CircleOf5ths', label: 'Circle of 5ths 🎵' },
    { value: 'Platonic', label: 'Platonic Solid (Icosahedron)' },
    { value: 'Custom', label: 'Custom Pattern (JSON)' }
  ];

  constellationTypes.forEach(type => {
    const option = document.createElement("option");
    option.value = type.value;
    option.textContent = type.label;
    constellationTypeDropdown.appendChild(option);
  });

  constellationTypeDropdown.addEventListener("change", () => {
    const type = constellationTypeDropdown.value;
    state.emojiConstellations.type = type;
    state.emojiConstellations.rotation = 0; // Reset rotation

    console.log(`🌌 Emoji constellation set: ${type}`);
  });
  tabContainers['Visual'].appendChild(constellationTypeDropdown);

  // Constellation scale slider
  const constellationScaleControl = createSliderControl('Constellation Scale', 5.0, 1.0, 15.0, 0.5, (value) => {
    state.emojiConstellations.scale = value;
    console.log(`🌌 Constellation scale: ${value.toFixed(1)}`);
  });
  constellationScaleControl.title = 'Size of the constellation pattern';
  tabContainers['Visual'].appendChild(constellationScaleControl);

  // Rotation speed slider
  const rotationSpeedControl = createSliderControl('Rotation Speed', 0.01, 0, 0.1, 0.005, (value) => {
    state.emojiConstellations.rotationSpeed = value;
    console.log(`🌌 Rotation speed: ${value.toFixed(3)}`);
  });
  rotationSpeedControl.title = 'Speed of constellation rotation';
  tabContainers['Visual'].appendChild(rotationSpeedControl);

  // Audio sync toggle
  const audioSyncToggle = createToggleControl('Audio Sync Rotation', true, (value) => {
    state.emojiConstellations.audioSync = value;
    console.log(`🌌 Audio sync: ${value ? 'ON' : 'OFF'}`);
  });
  audioSyncToggle.title = 'Rotation modulated by audio level';
  tabContainers['Visual'].appendChild(audioSyncToggle);

  // Beat sync toggle for constellations
  const constellationBeatSyncToggle = createToggleControl('Beat Sync Pulse', false, (value) => {
    state.emojiConstellations.beatSync = value;
    console.log(`🌌 Beat sync pulse: ${value ? 'ON' : 'OFF'}`);
  });
  constellationBeatSyncToggle.title = 'Constellation pulses with sequencer beats';
  tabContainers['Visual'].appendChild(constellationBeatSyncToggle);

  // Custom pattern JSON upload
  const customPatternLabel = document.createElement("label");
  customPatternLabel.textContent = "Upload Custom Pattern (JSON)";
  customPatternLabel.style.cssText = 'display: block; font-size: 11px; margin-top: 10px; margin-bottom: 4px; color: #ffaa00;';
  tabContainers['Visual'].appendChild(customPatternLabel);

  const customPatternInput = document.createElement("input");
  customPatternInput.type = "file";
  customPatternInput.accept = ".json";
  customPatternInput.style.cssText = 'width: 100%; padding: 4px; background: rgba(0,0,0,0.5); border: 1px solid #ffaa00; color: #ffaa00; border-radius: 4px; margin-bottom: 10px; font-size: 11px;';

  customPatternInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const text = await file.text();
      const pattern = JSON.parse(text);

      if (!pattern.positions || !Array.isArray(pattern.positions)) {
        console.error("❌ Invalid pattern format. Expected { positions: [{x, y, z?}, ...] }");
        return;
      }

      state.emojiConstellations.customPattern = pattern;
      state.emojiConstellations.type = 'Custom';
      constellationTypeDropdown.value = 'Custom';

      console.log(`🌌 Loaded custom constellation → ${file.name}`);
      console.log(`   ${pattern.positions.length} positions loaded`);
    } catch (error) {
      console.error("❌ Failed to load pattern JSON:", error.message);
    }
  });
  tabContainers['Visual'].appendChild(customPatternInput);

  // === Phase 11.7.21: Emoji Mandalas & Layered Symmetry ===
  const emojiMandalaLabel = document.createElement("h4");
  emojiMandalaLabel.textContent = "🌀 Emoji Mandalas";
  emojiMandalaLabel.style.cssText = 'margin: 15px 0 10px 0; color: #ff66ff; font-size: 12px;';
  tabContainers['Visual'].appendChild(emojiMandalaLabel);

  // Mandala mode toggle
  // Phase 11.7.31: Sync to both state.mandala and state.emojiMandala
  const mandalaToggle = createToggleControl('Enable Mandala Mode', false, (value) => {
    state.mandala.enabled = value;
    state.emojiMandala.enabled = value;
    notifyHUDUpdate({ mandalaEnabled: value });
    console.log(`🎛️ Mandala: ${value ? 'ON' : 'OFF'}`);
  });
  mandalaToggle.title = 'Radial symmetry mandala pattern';
  tabContainers['Visual'].appendChild(mandalaToggle);

  // Ring count slider
  // Phase 11.7.29: Updated range to 3-12
  // Phase 11.7.31: Sync to state.mandala and use mandalaRings event
  const ringCountControl = createSliderControl('Rings', 6, 3, 12, 1, (value) => {
    state.mandala.ringCount = value;
    state.emojiMandala.rings = value;
    notifyHUDUpdate({ mandalaRings: value });
    console.log(`🎛️ Mandala rings: ${value}`);
  });
  ringCountControl.title = 'Number of concentric rings (3-12)';
  tabContainers['Visual'].appendChild(ringCountControl);

  // Phase 11.7.26: Layout mode dropdown
  const layoutModeLabel = document.createElement("label");
  layoutModeLabel.textContent = "Layout Mode";
  layoutModeLabel.style.cssText = 'display: block; font-size: 11px; margin-bottom: 4px; color: #ff66ff;';
  tabContainers['Visual'].appendChild(layoutModeLabel);

  const layoutModeDropdown = document.createElement("select");
  layoutModeDropdown.style.cssText = 'width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #ff66ff; color: #ff66ff; border-radius: 4px; margin-bottom: 10px; font-size: 11px;';

  const layoutModes = [
    { value: 'radial', label: '⭕ Radial (Concentric)' },
    { value: 'spiral', label: '🌀 Spiral (Fibonacci)' },
    { value: 'grid', label: '🔲 Grid (Lattice)' }
  ];

  layoutModes.forEach(mode => {
    const option = document.createElement("option");
    option.value = mode.value;
    option.textContent = mode.label;
    if (mode.value === 'radial') option.selected = true;
    layoutModeDropdown.appendChild(option);
  });

  layoutModeDropdown.addEventListener("change", () => {
    const mode = layoutModeDropdown.value;
    // Phase 11.7.26: Route through HUD update system to MandalaController
    notifyHUDUpdate({ mandala: { layoutMode: mode } });
    // Phase 11.7.29: Add console log
    const emoji = mode === 'spiral' ? '🌀' : mode === 'grid' ? '🔲' : '⭕';
    console.log(`📟 HUD → Mandala layout set to ${mode.charAt(0).toUpperCase() + mode.slice(1)} ${emoji}`);
  });
  layoutModeDropdown.title = 'Mandala geometry layout pattern';
  tabContainers['Visual'].appendChild(layoutModeDropdown);

  // Symmetry slider
  // Phase 11.7.29: Changed from dropdown to slider (2-12 range for HUD simplicity)
  // Phase 11.7.31: Sync to state.mandala and use mandalaSymmetry event
  const symmetryControl = createSliderControl('Symmetry', 6, 2, 12, 1, (value) => {
    state.mandala.symmetry = value;
    state.emojiMandala.symmetry = value;
    notifyHUDUpdate({ mandalaSymmetry: value });
    console.log(`🎛️ Mandala symmetry: ${value}`);
  });
  symmetryControl.title = 'Symmetry fold count (2-12 spokes)';
  tabContainers['Visual'].appendChild(symmetryControl);

  // Rotation speed slider
  const mandalaRotSpeedControl = createSliderControl('Rotation Speed', 0.02, 0, 0.1, 0.005, (value) => {
    // Phase 11.7.25: Route through HUD update system to MandalaController
    notifyHUDUpdate({ mandala: { rotationSpeed: value } });
  });
  mandalaRotSpeedControl.title = 'Base rotation speed';
  tabContainers['Visual'].appendChild(mandalaRotSpeedControl);

  // Audio modulation toggle
  const mandalaAudioModToggle = createToggleControl('Audio Speed Boost', true, (value) => {
    // Phase 11.7.25: Route through HUD update system to MandalaController
    notifyHUDUpdate({ mandala: { audioModulation: value } });
  });
  mandalaAudioModToggle.title = 'Audio increases rotation speed';
  tabContainers['Visual'].appendChild(mandalaAudioModToggle);

  // Layered audio toggle
  const layeredAudioToggle = createToggleControl('Layered Audio (Bass/Mid/Treble)', true, (value) => {
    // Phase 11.7.25: Route through HUD update system to MandalaController
    notifyHUDUpdate({ mandala: { layeredAudio: value } });
  });
  layeredAudioToggle.title = 'Inner rings→bass, middle→mids, outer→treble';
  tabContainers['Visual'].appendChild(layeredAudioToggle);

  // Phase 11.7.27/11.7.29: Mandala audio-reactive toggle
  const mandalaAudioReactiveToggle = createToggleControl('Audio-Reactive Mandala', true, (value) => {
    notifyHUDUpdate({ mandala: { mandalaAudioReactive: value } });
    console.log(`📟 HUD → Mandala audioReactive = ${value ? 'ON' : 'OFF'}`);
  });
  mandalaAudioReactiveToggle.title = 'Mandala pulses and expands with audio';
  tabContainers['Visual'].appendChild(mandalaAudioReactiveToggle);

  // Phase 11.7.27/11.7.29: Mandala sensitivity slider
  const mandalaSensitivityControl = createSliderControl('Mandala Sensitivity', 1.0, 0, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ mandala: { mandalaSensitivity: value } });
    console.log(`📟 HUD → Mandala sensitivity = ${value.toFixed(1)}`);
  });
  mandalaSensitivityControl.title = 'Audio reactivity strength (0-200%)';
  tabContainers['Visual'].appendChild(mandalaSensitivityControl);

  // Phase 11.7.34: Mandala Layout Preset Dropdown
  const layoutPresetLabel = document.createElement("label");
  layoutPresetLabel.textContent = "Mandala Layout Preset";
  layoutPresetLabel.style.cssText = 'display: block; font-size: 11px; margin-top: 10px; margin-bottom: 4px; color: #ff66ff;';
  tabContainers['Visual'].appendChild(layoutPresetLabel);

  const layoutPresetDropdown = document.createElement("select");
  layoutPresetDropdown.style.cssText = 'width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #ff66ff; color: #ff66ff; border-radius: 4px; margin-bottom: 10px; font-size: 11px;';

  const layoutPresets = [
    { value: 'Classic', label: '🎨 Classic (evenly spaced, symmetry=6)' },
    { value: 'Flower', label: '🌸 Flower (alternating radii, symmetry=8)' },
    { value: 'Spiral', label: '🌀 Spiral (golden angle rotation)' },
    { value: 'Dense', label: '🔷 Dense (doubled rings, symmetry=12)' }
  ];

  layoutPresets.forEach(preset => {
    const option = document.createElement("option");
    option.value = preset.value;
    option.textContent = preset.label;
    if (preset.value === 'Classic') option.selected = true;
    layoutPresetDropdown.appendChild(option);
  });

  layoutPresetDropdown.addEventListener("change", () => {
    const preset = layoutPresetDropdown.value;
    notifyHUDUpdate({ mandala: { layoutPreset: preset } });
    console.log(`📟 HUD → Mandala layout preset: ${preset}`);
  });
  layoutPresetDropdown.title = 'Apply predefined mandala layout configuration';
  tabContainers['Visual'].appendChild(layoutPresetDropdown);

  // Phase 11.7.34: Ring Spacing slider
  const ringSpacingControl = createSliderControl('Ring Spacing', 1.0, 0.2, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ mandala: { ringSpacing: value } });
    console.log(`📟 HUD → Ring spacing = ${value.toFixed(1)}`);
  });
  ringSpacingControl.title = 'Distance multiplier between rings (0.2-2.0)';
  tabContainers['Visual'].appendChild(ringSpacingControl);

  // Phase 11.7.34: Base Radius slider
  const baseRadiusControl = createSliderControl('Base Radius', 1.0, 0.5, 3.0, 0.1, (value) => {
    notifyHUDUpdate({ mandala: { baseRadius: value } });
    console.log(`📟 HUD → Base radius = ${value.toFixed(1)}`);
  });
  baseRadiusControl.title = 'Base radius multiplier (0.5-3.0)';
  tabContainers['Visual'].appendChild(baseRadiusControl);

  // Phase 11.7.34: Global Scale slider
  const globalScaleControl = createSliderControl('Global Scale', 1.0, 0.5, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ mandala: { globalScale: value } });
    console.log(`📟 HUD → Global scale = ${value.toFixed(1)}`);
  });
  globalScaleControl.title = 'Overall mandala scale (0.5-2.0)';
  tabContainers['Visual'].appendChild(globalScaleControl);

  // Phase 11.7.34: Rainbow Mode toggle
  const rainbowModeToggle = createToggleControl('Rainbow Mode', false, (value) => {
    notifyHUDUpdate({ mandala: { rainbowMode: value } });
    console.log(`📟 HUD → Rainbow mode: ${value ? 'ON' : 'OFF'}`);
  });
  rainbowModeToggle.title = 'Apply rainbow hue shift per ring';
  tabContainers['Visual'].appendChild(rainbowModeToggle);

  // Phase 11.7.29: Emoji Picker (radio buttons)
  const emojiPickerLabel = document.createElement("label");
  emojiPickerLabel.textContent = "Mandala Emoji";
  emojiPickerLabel.style.cssText = 'display: block; font-size: 11px; margin-top: 10px; margin-bottom: 6px; color: #ff66ff;';
  tabContainers['Visual'].appendChild(emojiPickerLabel);

  const emojiPickerContainer = document.createElement("div");
  emojiPickerContainer.style.cssText = 'display: flex; gap: 8px; margin-bottom: 10px; padding: 8px; background: rgba(0,0,0,0.3); border-radius: 4px;';

  const emojiOptions = ['🍕', '🌶️', '🍄', '⭐'];
  emojiOptions.forEach((emoji, index) => {
    const radioLabel = document.createElement("label");
    radioLabel.style.cssText = 'display: flex; align-items: center; gap: 4px; cursor: pointer; padding: 4px 8px; border-radius: 4px; background: rgba(255,255,255,0.1); transition: background 0.2s;';

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "mandalaEmoji";
    radio.value = emoji;
    radio.checked = index === 0; // Default to 🍕
    radio.style.cssText = 'cursor: pointer;';

    const emojiSpan = document.createElement("span");
    emojiSpan.textContent = emoji;
    emojiSpan.style.cssText = 'font-size: 20px;';

    radio.addEventListener("change", () => {
      if (radio.checked) {
        notifyHUDUpdate({ mandala: { emoji: emoji } });
        console.log(`📟 HUD → Mandala emoji set to ${emoji}`);
      }
    });

    radioLabel.appendChild(radio);
    radioLabel.appendChild(emojiSpan);
    emojiPickerContainer.appendChild(radioLabel);
  });

  tabContainers['Visual'].appendChild(emojiPickerContainer);

  // Phase 11.7.50: Mount PNG upload UI after emoji picker
  mountMandalaUploadAfter(emojiPickerContainer);

  // Per-ring emoji layout editor
  const ringLayoutLabel = document.createElement("label");
  ringLayoutLabel.textContent = "Ring Emoji Layout (center → outer)";
  ringLayoutLabel.style.cssText = 'display: block; font-size: 11px; margin-top: 10px; margin-bottom: 4px; color: #ff66ff;';
  tabContainers['Visual'].appendChild(ringLayoutLabel);

  const ringLayoutInput = document.createElement("input");
  ringLayoutInput.type = "text";
  ringLayoutInput.value = state.emojiMandala.layout.join(' ');
  ringLayoutInput.placeholder = "🍕 🌶️ 🍄";
  ringLayoutInput.style.cssText = 'width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #ff66ff; color: #ff66ff; border-radius: 4px; margin-bottom: 10px; font-size: 14px;';

  ringLayoutInput.addEventListener("input", (e) => {
    const emojis = e.target.value.split(/\s+/).filter(s => s.length > 0);
    state.emojiMandala.layout = emojis;
    console.log(`🌀 Mandala layout updated: ${emojis.join(' → ')}`);
  });
  ringLayoutInput.title = 'Space-separated emojis for each ring';
  tabContainers['Visual'].appendChild(ringLayoutInput);

  // Phase 11.7.22: Musical Scale Mode
  const musicalModeLabel = document.createElement("h4");
  musicalModeLabel.textContent = "🎼 Musical Scale Mode";
  musicalModeLabel.style.cssText = 'margin: 15px 0 10px 0; color: #ffdd66; font-size: 12px;';
  tabContainers['Visual'].appendChild(musicalModeLabel);

  // Musical mode toggle
  const musicalModeToggle = createToggleControl('Enable Musical Mode', false, (value) => {
    // Phase 11.7.25: Route through HUD update system to MandalaController
    notifyHUDUpdate({ mandala: { musicalMode: value } });
  });
  musicalModeToggle.title = 'Emojis arranged by musical scale intervals';
  tabContainers['Visual'].appendChild(musicalModeToggle);

  // Scale selector
  const scaleLabel = document.createElement("label");
  scaleLabel.textContent = "Scale/Mode";
  scaleLabel.style.cssText = 'display: block; font-size: 11px; margin-bottom: 4px; color: #ffdd66;';
  tabContainers['Visual'].appendChild(scaleLabel);

  const scaleDropdown = document.createElement("select");
  scaleDropdown.style.cssText = 'width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #ffdd66; color: #ffdd66; border-radius: 4px; margin-bottom: 10px; font-size: 11px;';

  const scales = ['Major', 'Minor', 'Pentatonic', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Chromatic'];
  scales.forEach(scale => {
    const option = document.createElement("option");
    option.value = scale;
    option.textContent = scale;
    if (scale === 'Major') option.selected = true;
    scaleDropdown.appendChild(option);
  });

  scaleDropdown.addEventListener("change", () => {
    // Phase 11.7.25: Route through HUD update system to MandalaController
    const scale = scaleDropdown.value;
    notifyHUDUpdate({ mandala: { scale, mode: scale } }); // Mode defaults to scale name
  });
  tabContainers['Visual'].appendChild(scaleDropdown);

  // Root note slider (MIDI 48-72 = C3-C5)
  const rootNoteControl = createSliderControl('Root Note (MIDI)', 60, 48, 72, 1, (value) => {
    state.emojiMandala.rootNote = value;
    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const noteName = noteNames[value % 12];
    const octave = Math.floor(value / 12) - 1;
    console.log(`🎼 Root note: ${noteName}${octave} (MIDI ${value})`);
  });
  rootNoteControl.title = 'MIDI root note for scale (C4=60)';
  tabContainers['Visual'].appendChild(rootNoteControl);

  // Phase 11.7.23: Interactive Performance Controls
  const performanceLabel = document.createElement("h4");
  performanceLabel.textContent = "🎛️ Performance Controls";
  performanceLabel.style.cssText = 'margin: 15px 0 10px 0; color: #ff9944; font-size: 12px;';
  tabContainers['Visual'].appendChild(performanceLabel);

  // Performance mode toggle
  const performanceModeToggle = createToggleControl('Enable Performance Mode', false, (value) => {
    // Phase 11.7.25: Route through HUD update system to MandalaController
    notifyHUDUpdate({ mandala: { performanceMode: value } });
  });
  performanceModeToggle.title = 'Live manipulation controls enabled';
  tabContainers['Visual'].appendChild(performanceModeToggle);

  // Differential rotation toggle
  const diffRotationToggle = createToggleControl('Differential Ring Rotation', true, (value) => {
    state.emojiMandala.differentialRotation = value;
    console.log(`🎛️ Differential rotation: ${value ? 'ON (each ring independent)' : 'OFF (unified)'}`);
  });
  diffRotationToggle.title = 'Each ring rotates at different speed';
  tabContainers['Visual'].appendChild(diffRotationToggle);

  // Extended ring count slider (up to 8 for performance mode)
  const extendedRingCountControl = createSliderControl('Ring Count (Performance)', 3, 1, 8, 1, (value) => {
    state.emojiMandala.rings = value;
    console.log(`🎛️ Mandala rings: ${value}`);
  });
  extendedRingCountControl.title = 'Number of rings (1-8 in performance mode)';
  tabContainers['Visual'].appendChild(extendedRingCountControl);

  // Extended symmetry slider (up to 12)
  const extendedSymmetryControl = createSliderControl('Symmetry (Performance)', 6, 2, 12, 1, (value) => {
    state.emojiMandala.symmetry = value;
    console.log(`🎛️ Mandala symmetry: ${value}-fold`);
  });
  extendedSymmetryControl.title = 'Radial symmetry spokes (2-12)';
  tabContainers['Visual'].appendChild(extendedSymmetryControl);

  // Scale sequence toggle
  const scaleSequenceToggle = createToggleControl('Auto Scale Sequence', false, (value) => {
    state.emojiMandala.scaleSequenceEnabled = value;
    if (value) {
      state.emojiMandala.lastScaleChange = performance.now();
      console.log(`🎛️ Scale sequencing ON: ${state.emojiMandala.scaleSequence.join(' → ')}`);
    } else {
      console.log("🎛️ Scale sequencing OFF");
    }
  });
  scaleSequenceToggle.title = 'Auto-advance through scale progression';
  tabContainers['Visual'].appendChild(scaleSequenceToggle);

  // Scale sequence interval slider
  const scaleIntervalControl = createSliderControl('Scale Change Interval (s)', 4, 1, 10, 0.5, (value) => {
    state.emojiMandala.scaleSequenceInterval = value * 1000;
    console.log(`🎛️ Scale interval: ${value}s`);
  });
  scaleIntervalControl.title = 'Seconds between scale changes';
  tabContainers['Visual'].appendChild(scaleIntervalControl);

  // Scale sequence editor (text input)
  const scaleSeqLabel = document.createElement("label");
  scaleSeqLabel.textContent = "Scale Sequence";
  scaleSeqLabel.style.cssText = 'display: block; font-size: 11px; margin-top: 10px; margin-bottom: 4px; color: #ff9944;';
  tabContainers['Visual'].appendChild(scaleSeqLabel);

  const scaleSeqInput = document.createElement("input");
  scaleSeqInput.type = "text";
  scaleSeqInput.value = state.emojiMandala.scaleSequence.join(' ');
  scaleSeqInput.placeholder = "Major Dorian Mixolydian";
  scaleSeqInput.style.cssText = 'width: 100%; padding: 6px; background: rgba(0,0,0,0.5); border: 1px solid #ff9944; color: #ff9944; border-radius: 4px; margin-bottom: 10px; font-size: 11px;';

  scaleSeqInput.addEventListener("input", (e) => {
    const scales = e.target.value.split(/\s+/).filter(s => s.length > 0);
    state.emojiMandala.scaleSequence = scales;
    console.log(`🎛️ Scale sequence updated: ${scales.join(' → ')}`);
  });
  scaleSeqInput.title = 'Space-separated scale names';
  tabContainers['Visual'].appendChild(scaleSeqInput);

  // === Phase 2.3.2A: Particle Trails ===
  const trailsLabel = document.createElement("h4");
  trailsLabel.textContent = "🌊 Particle Trails (Line Segments)";
  trailsLabel.style.cssText = 'margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;';
  tabContainers['Visual'].appendChild(trailsLabel);

  // Trail enabled toggle (line trails)
  const trailEnabledControl = createToggleControl('Enable Line Trails', false, (value) => {
    notifyHUDUpdate({ particlesTrailEnabled: value });
  });
  tabContainers['Visual'].appendChild(trailEnabledControl);

  // Trail length slider
  const trailLengthControl = createSliderControl('Trail Length', 0, 0, 10, 1, (value) => {
    notifyHUDUpdate({ particlesTrailLength: value });
  });
  trailLengthControl.title = 'Number of frames to persist (0-10)';
  tabContainers['Visual'].appendChild(trailLengthControl);

  // Trail opacity slider
  const trailOpacityControl = createSliderControl('Trail Opacity', 0.3, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ particlesTrailOpacity: value });
  });
  trailOpacityControl.title = 'Transparency of trail lines (0.0-1.0)';
  tabContainers['Visual'].appendChild(trailOpacityControl);

  // Trail fade slider (Phase 2.3.2C)
  const trailFadeControl = createSliderControl('Trail Fade', 1.0, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ particlesTrailFade: value });
  });
  trailFadeControl.title = 'Strength of fading (0=no fade, 1=full taper)';
  tabContainers['Visual'].appendChild(trailFadeControl);

  // Phase 2.3.2D: Audio-reactive trail length controls
  const trailAudioReactiveControl = createToggleControl('Audio Reactive Length', false, (value) => {
    notifyHUDUpdate({ particlesTrailAudioReactive: value });
  });
  trailAudioReactiveControl.title = 'Trail length follows audio level';
  tabContainers['Visual'].appendChild(trailAudioReactiveControl);

  const trailLengthMinControl = createSliderControl('Min Length', 2, 1, 10, 1, (value) => {
    notifyHUDUpdate({ particlesTrailLengthMin: value });
  });
  trailLengthMinControl.title = 'Shortest trail when audio is quiet';
  tabContainers['Visual'].appendChild(trailLengthMinControl);

  const trailLengthMaxControl = createSliderControl('Max Length', 10, 1, 20, 1, (value) => {
    notifyHUDUpdate({ particlesTrailLengthMax: value });
  });
  trailLengthMaxControl.title = 'Longest trail when audio is loud';
  tabContainers['Visual'].appendChild(trailLengthMaxControl);

  // === Dual Trail System: Motion Trails (postprocessing blur) ===
  const motionTrailsLabel = document.createElement("h4");
  motionTrailsLabel.textContent = "🎞️ Motion Trails (Postprocessing)";
  motionTrailsLabel.style.cssText = 'margin: 15px 0 10px 0; color: #ffcc00; font-size: 12px;';
  tabContainers['Visual'].appendChild(motionTrailsLabel);

  // Motion trails toggle
  const motionTrailsControl = createToggleControl('Enable Motion Trails', false, (value) => {
    notifyHUDUpdate({ motionTrailsEnabled: value });
  });
  motionTrailsControl.title = 'AfterimagePass blur effect (works independently of line trails)';
  tabContainers['Visual'].appendChild(motionTrailsControl);

  // Motion trail intensity slider
  const motionTrailIntensityControl = createSliderControl('Trail Intensity', 0.96, 0.85, 0.99, 0.01, (value) => {
    notifyHUDUpdate({ motionTrailIntensity: value });
  });
  motionTrailIntensityControl.title = 'Blur damp value (higher = longer trails)';
  tabContainers['Visual'].appendChild(motionTrailIntensityControl);

  // === Phase 4.8.1: Reset to Defaults Button ===
  const resetButton = document.createElement('button');
  resetButton.textContent = '🔄 Reset to Defaults';
  resetButton.style.cssText = 'width: 100%; padding: 10px; background: #ff9900; color: black; border: none; cursor: pointer; font-weight: bold; border-radius: 5px; margin-top: 15px; margin-bottom: 15px;';
  resetButton.addEventListener('click', () => {
    notifyHUDUpdate({ particlesResetDefaults: true });
  });
  tabContainers['Visual'].appendChild(resetButton);

  // Add separator for Phase 7 visual controls
  const visualSeparator = document.createElement('hr');
  visualSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Visual'].appendChild(visualSeparator);

  const visualTitle = document.createElement('h4');
  visualTitle.textContent = '🎨 Visual Polish';
  visualTitle.style.cssText = 'margin: 0 0 10px 0; color: #ff66ff; font-size: 12px;';
  tabContainers['Visual'].appendChild(visualTitle);

  // Phase 11.6.0: Image Upload + Texture Toggle
  const uploadInput = document.createElement("input");
  uploadInput.type = "file";
  uploadInput.accept = "image/*";
  uploadInput.style.display = "none";

  const uploadButton = document.createElement("button");
  uploadButton.innerText = "Upload Image";
  uploadButton.style.cssText = 'margin: 10px 0; padding: 8px 12px; background: #444; color: white; border: 1px solid #666; border-radius: 4px; cursor: pointer;';
  uploadButton.onclick = () => uploadInput.click();

  uploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (texture) => {
        state.texture = texture;
        console.log("🖼️ Image loaded →", file.name);
      },
      undefined,
      (err) => console.error("❌ Texture load failed:", err)
    );
  });

  const morphToggle = document.createElement("input");
  morphToggle.type = "checkbox";
  morphToggle.checked = state.useTextureOnMorph;
  morphToggle.onchange = (e) => {
    state.useTextureOnMorph = e.target.checked;
    console.log("🎛️ Morph texture:", state.useTextureOnMorph ? "ON" : "OFF");
  };

  const morphLabel = document.createElement("label");
  morphLabel.innerText = "Apply texture to morph shape";
  morphLabel.style.cssText = 'display: block; margin: 10px 0; cursor: pointer;';
  morphLabel.prepend(morphToggle);

  // Phase 11.6.1: Background image toggle
  const bgToggle = document.createElement('input');
  bgToggle.type = 'checkbox';
  bgToggle.id = 'useBackgroundImage';
  bgToggle.checked = state.useBackgroundImage;
  bgToggle.onchange = () => {
    state.useBackgroundImage = bgToggle.checked;
    console.log(`🎛️ Background image: ${state.useBackgroundImage ? 'ON' : 'OFF'}`);
  };

  const bgLabel = document.createElement('label');
  bgLabel.htmlFor = 'useBackgroundImage';
  bgLabel.innerText = 'Show as background';
  bgLabel.style.cssText = 'display: block; margin: 10px 0; cursor: pointer;';
  bgLabel.prepend(bgToggle);

  tabContainers['Visual'].appendChild(uploadButton);
  tabContainers['Visual'].appendChild(uploadInput);
  tabContainers['Visual'].appendChild(morphLabel);
  tabContainers['Visual'].appendChild(bgLabel);

  // Ambient light intensity
  const ambientLightControl = createSliderControl('Ambient Intensity', 0.4, 0.0, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ ambientIntensity: value });
  });
  tabContainers['Visual'].appendChild(ambientLightControl);

  // Directional light intensity
  const directionalLightControl = createSliderControl('Directional Intensity', 1.0, 0.0, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ directionalIntensity: value });
  });
  tabContainers['Visual'].appendChild(directionalLightControl);

  // Directional light angle X
  const directionalAngleXControl = createSliderControl('Light Angle X', -45, -90, 90, 5, (value) => {
    notifyHUDUpdate({ directionalAngleX: value });
  });
  tabContainers['Visual'].appendChild(directionalAngleXControl);

  // Directional light angle Y
  const directionalAngleYControl = createSliderControl('Light Angle Y', 45, -90, 90, 5, (value) => {
    notifyHUDUpdate({ directionalAngleY: value });
  });
  tabContainers['Visual'].appendChild(directionalAngleYControl);

  // Color picker
  const colorPickerControl = createColorPickerControl('Geometry Color', '#00ff00', (value) => {
    notifyHUDUpdate({ color: value });
  });
  tabContainers['Visual'].appendChild(colorPickerControl);

  // Phase 11.2.2: Per-Layer Color System
  const colorLayersSeparator = document.createElement('hr');
  colorLayersSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Visual'].appendChild(colorLayersSeparator);

  const colorLayersTitle = document.createElement('h4');
  colorLayersTitle.textContent = '🎨 Color Layers (Phase 11.2.2)';
  colorLayersTitle.style.cssText = 'margin: 0 0 10px 0; color: #ff00ff; font-size: 12px;';
  tabContainers['Visual'].appendChild(colorLayersTitle);

  // Geometry Layer
  const geometryLayerLabel = document.createElement('h5');
  geometryLayerLabel.textContent = '🔺 Geometry';
  geometryLayerLabel.style.cssText = 'margin: 10px 0 5px 0; color: #00ff00; font-size: 11px;';
  tabContainers['Visual'].appendChild(geometryLayerLabel);

  const geometryBaseColorControl = createColorPickerControl('Base Color', '#00ff00', (value) => {
    notifyHUDUpdate({ colorLayer: 'geometry', property: 'baseColor', value });
  });
  tabContainers['Visual'].appendChild(geometryBaseColorControl);

  const geometryAudioColorControl = createColorPickerControl('Audio Color', '#ff0000', (value) => {
    notifyHUDUpdate({ colorLayer: 'geometry', property: 'audioColor', value });
  });
  tabContainers['Visual'].appendChild(geometryAudioColorControl);

  const geometryIntensityControl = createSliderControl('Audio Intensity', 0.5, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ colorLayer: 'geometry', property: 'audioIntensity', value });
  });
  geometryIntensityControl.title = 'Controls audio color contribution (0 = none, 1 = full)';
  tabContainers['Visual'].appendChild(geometryIntensityControl);

  // Vessel Layer
  const vesselLayerLabel = document.createElement('h5');
  vesselLayerLabel.textContent = '🚢 Vessel';
  vesselLayerLabel.style.cssText = 'margin: 10px 0 5px 0; color: #00ffff; font-size: 11px;';
  tabContainers['Visual'].appendChild(vesselLayerLabel);

  const vesselBaseColorControl = createColorPickerControl('Base Color', '#00ff00', (value) => {
    notifyHUDUpdate({ colorLayer: 'vessel', property: 'baseColor', value });
  });
  tabContainers['Visual'].appendChild(vesselBaseColorControl);

  const vesselAudioColorControl = createColorPickerControl('Audio Color', '#00ffff', (value) => {
    notifyHUDUpdate({ colorLayer: 'vessel', property: 'audioColor', value });
  });
  tabContainers['Visual'].appendChild(vesselAudioColorControl);

  const vesselIntensityControl = createSliderControl('Audio Intensity', 0.3, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ colorLayer: 'vessel', property: 'audioIntensity', value });
  });
  vesselIntensityControl.title = 'Controls audio color contribution (0 = none, 1 = full)';
  tabContainers['Visual'].appendChild(vesselIntensityControl);

  // Shadows Layer
  const shadowsLayerLabel = document.createElement('h5');
  shadowsLayerLabel.textContent = '🌑 Shadows';
  shadowsLayerLabel.style.cssText = 'margin: 10px 0 5px 0; color: #888; font-size: 11px;';
  tabContainers['Visual'].appendChild(shadowsLayerLabel);

  const shadowsBaseColorControl = createColorPickerControl('Base Color', '#000000', (value) => {
    notifyHUDUpdate({ colorLayer: 'shadows', property: 'baseColor', value });
  });
  tabContainers['Visual'].appendChild(shadowsBaseColorControl);

  const shadowsAudioColorControl = createColorPickerControl('Audio Color', '#333333', (value) => {
    notifyHUDUpdate({ colorLayer: 'shadows', property: 'audioColor', value });
  });
  tabContainers['Visual'].appendChild(shadowsAudioColorControl);

  const shadowsIntensityControl = createSliderControl('Audio Intensity', 0.2, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ colorLayer: 'shadows', property: 'audioIntensity', value });
  });
  shadowsIntensityControl.title = 'Controls audio color contribution (0 = none, 1 = full)';
  tabContainers['Visual'].appendChild(shadowsIntensityControl);

  // Particles Layer
  const particlesLayerLabel = document.createElement('h5');
  particlesLayerLabel.textContent = '✨ Particles (Shader - Infra Only)';
  particlesLayerLabel.style.cssText = 'margin: 10px 0 5px 0; color: #ffff00; font-size: 11px;';
  tabContainers['Visual'].appendChild(particlesLayerLabel);

  const particlesBaseColorControl = createColorPickerControl('Base Color', '#ffff00', (value) => {
    notifyHUDUpdate({ colorLayer: 'particles', property: 'baseColor', value });
  });
  particlesBaseColorControl.title = 'Ready but requires shader update (future phase)';
  tabContainers['Visual'].appendChild(particlesBaseColorControl);

  const particlesAudioColorControl = createColorPickerControl('Audio Color', '#ff00ff', (value) => {
    notifyHUDUpdate({ colorLayer: 'particles', property: 'audioColor', value });
  });
  particlesAudioColorControl.title = 'Ready but requires shader update (future phase)';
  tabContainers['Visual'].appendChild(particlesAudioColorControl);

  const particlesIntensityControl = createSliderControl('Audio Intensity', 0.7, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ colorLayer: 'particles', property: 'audioIntensity', value });
  });
  particlesIntensityControl.title = 'Ready but requires shader update (future phase)';
  tabContainers['Visual'].appendChild(particlesIntensityControl);

  // Add separator for Vessel controls
  const vesselSeparator = document.createElement('hr');
  vesselSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Visual'].appendChild(vesselSeparator);

  const vesselTitle = document.createElement('h4');
  vesselTitle.textContent = '🚢 Vessel';
  vesselTitle.style.cssText = 'margin: 0 0 10px 0; color: #00ff00; font-size: 12px;';
  tabContainers['Visual'].appendChild(vesselTitle);

  // Vessel enable toggle
  const vesselEnableControl = createToggleControl('Enable Vessel', true, (value) => {
    notifyHUDUpdate({ vesselEnabled: value });
  });
  tabContainers['Visual'].appendChild(vesselEnableControl);

  // Vessel mode dropdown (Phase 2.x)
  const vesselModeControl = createDropdownControl('Vessel Mode', 'gyre',
    ['gyre', 'conflat6'], (value) => {
    notifyHUDUpdate({ vesselMode: value });
  });
  vesselModeControl.title = 'Switch between Gyre (torus rings) and Conflat 6 (cube-sphere circles)';
  tabContainers['Visual'].appendChild(vesselModeControl);

  // Vessel opacity slider
  const vesselOpacityControl = createSliderControl('Vessel Opacity', 0.5, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ vesselOpacity: value });
  });
  tabContainers['Visual'].appendChild(vesselOpacityControl);

  // Vessel scale slider
  const vesselScaleControl = createSliderControl('Vessel Scale', 1.0, 0.5, 2.0, 0.1, (value) => {
    notifyHUDUpdate({ vesselScale: value });
  });
  tabContainers['Visual'].appendChild(vesselScaleControl);

  // Vessel color picker
  const vesselColorPickerControl = createColorPickerControl('Vessel Color', '#00ff00', (value) => {
    notifyHUDUpdate({ vesselColor: value });
  });
  tabContainers['Visual'].appendChild(vesselColorPickerControl);

  // Vessel spin toggle
  const vesselSpinControl = createToggleControl('Vessel Spin', false, (value) => {
    notifyHUDUpdate({ vesselSpinEnabled: value });
  });
  tabContainers['Visual'].appendChild(vesselSpinControl);

  // Vessel spin speed slider
  const vesselSpinSpeedControl = createSliderControl('Spin Speed', 0.0035, 0, 0.02, 0.0005, (value) => {
    notifyHUDUpdate({ vesselSpinSpeed: value });
  });
  tabContainers['Visual'].appendChild(vesselSpinSpeedControl);

  // Vessel layout dropdown
  const vesselLayoutControl = createDropdownControl('Vessel Layout', 'lattice',
    ['lattice', 'hoops', 'shells'], (value) => {
    notifyHUDUpdate({ vesselLayout: value });
  });
  tabContainers['Visual'].appendChild(vesselLayoutControl);

  // Audio smoothing slider
  const vesselAudioSmoothingControl = createSliderControl('Audio Smoothing', 0.7, 0.1, 0.9, 0.05, (value) => {
    notifyHUDUpdate({ vesselAudioSmoothing: value });
  });
  tabContainers['Visual'].appendChild(vesselAudioSmoothingControl);

  // Hue shift range slider
  const vesselHueShiftControl = createSliderControl('Hue Shift Range', 20, 0, 60, 5, (value) => {
    notifyHUDUpdate({ vesselHueShiftRange: value });
  });
  tabContainers['Visual'].appendChild(vesselHueShiftControl);

  // Vessel debug display
  const vesselDebugDiv = document.createElement('div');
  vesselDebugDiv.style.cssText = 'margin-top: 15px; font-size: 12px; color: #888;';
  vesselDebugDiv.innerHTML = '<p id="vessel-debug">Radius: --</p>';
  tabContainers['Visual'].appendChild(vesselDebugDiv);

  // Add separator for Shadow Box controls
  const shadowBoxSeparator = document.createElement('hr');
  shadowBoxSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Visual'].appendChild(shadowBoxSeparator);

  const shadowBoxTitle = document.createElement('h4');
  shadowBoxTitle.textContent = '📦 Shadow Box';
  shadowBoxTitle.style.cssText = 'margin: 0 0 10px 0; color: #888; font-size: 12px;';
  tabContainers['Visual'].appendChild(shadowBoxTitle);

  // Phase 2.3.3: Shadow Box controls
  const projectParticlesToShadowControl = createToggleControl('Project Particles', false, (value) => {
    notifyHUDUpdate({ shadowBoxProjectParticles: value });
  });
  tabContainers['Visual'].appendChild(projectParticlesToShadowControl);

  // Phase 2.3.6: Shadow Box palette selector
  const shadowPaletteControl = createDropdownControl('Palette', 'Manual',
    ['Manual', 'Alchemy Gold', 'Blake Indigo', 'Cosmic White'], (value) => {
    notifyHUDUpdate({ shadowBoxPalette: value });
  });
  shadowPaletteControl.title = 'Quick palette presets or manual color selection';
  tabContainers['Visual'].appendChild(shadowPaletteControl);

  // Phase 2.3.4: Shadow Box shader controls
  const shadowThresholdControl = createSliderControl('Threshold', 0.5, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ shadowBoxThreshold: value });
  });
  shadowThresholdControl.title = 'Cutoff point: below = background, above = foreground';
  tabContainers['Visual'].appendChild(shadowThresholdControl);

  const shadowBleachGainControl = createSliderControl('Bleach Gain', 1.0, 0.5, 3.0, 0.1, (value) => {
    notifyHUDUpdate({ shadowBoxBleachGain: value });
  });
  shadowBleachGainControl.title = 'Luminance amplification before threshold';
  tabContainers['Visual'].appendChild(shadowBleachGainControl);

  // Phase 2.3.5: Two-tone color controls
  const shadowBgColorControl = createColorPickerControl('Background Color', '#000000', (value) => {
    notifyHUDUpdate({ shadowBoxBgColor: value });
  });
  shadowBgColorControl.title = 'Color for pixels below threshold';
  tabContainers['Visual'].appendChild(shadowBgColorControl);

  const shadowFgColorControl = createColorPickerControl('Foreground Color', '#ffffff', (value) => {
    notifyHUDUpdate({ shadowBoxFgColor: value });
  });
  shadowFgColorControl.title = 'Color for pixels above threshold';
  tabContainers['Visual'].appendChild(shadowFgColorControl);

  // Add separator for Shadows controls
  const shadowsSeparator = document.createElement('hr');
  shadowsSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Visual'].appendChild(shadowsSeparator);

  const shadowsTitle = document.createElement('h4');
  shadowsTitle.textContent = '🌑 Shadows';
  shadowsTitle.style.cssText = 'margin: 0 0 10px 0; color: #555; font-size: 12px;';
  tabContainers['Visual'].appendChild(shadowsTitle);

  // Shadows enable toggle
  const shadowsEnableControl = createToggleControl('Enable Shadows', true, (value) => {
    notifyHUDUpdate({ shadowsEnabled: value });
  });
  tabContainers['Visual'].appendChild(shadowsEnableControl);

  // Ground shadow checkbox
  const groundShadowControl = createToggleControl('Ground Shadow', true, (value) => {
    notifyHUDUpdate({ shadowsGround: value });
  });
  tabContainers['Visual'].appendChild(groundShadowControl);

  // Backdrop shadow checkbox
  const backdropShadowControl = createToggleControl('Backdrop Shadow', true, (value) => {
    notifyHUDUpdate({ shadowsBackdrop: value });
  });
  tabContainers['Visual'].appendChild(backdropShadowControl);

  // Shadow opacity slider
  const shadowOpacityControl = createSliderControl('Shadow Opacity', 0.25, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ shadowsOpacity: value });
  });
  tabContainers['Visual'].appendChild(shadowOpacityControl);

  // Shadow color picker
  const shadowColorControl = createColorPickerControl('Shadow Color', '#000000', (value) => {
    notifyHUDUpdate({ shadowsColor: value });
  });
  tabContainers['Visual'].appendChild(shadowColorControl);

  // Add separator for Sprites controls
  const spritesSeparator = document.createElement('hr');
  spritesSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Visual'].appendChild(spritesSeparator);

  const spritesTitle = document.createElement('h4');
  spritesTitle.textContent = '✨ Sprites';
  spritesTitle.style.cssText = 'margin: 0 0 10px 0; color: #ffff00; font-size: 12px;';
  tabContainers['Visual'].appendChild(spritesTitle);

  // Sprites enable toggle
  const spritesEnableControl = createToggleControl('Enable Sprites', true, (value) => {
    notifyHUDUpdate({ spritesEnabled: value });
  });
  tabContainers['Visual'].appendChild(spritesEnableControl);

  // Sprites count slider
  const spritesCountControl = createSliderControl('Sprite Count', 200, 50, 500, 10, (value) => {
    notifyHUDUpdate({ spritesCount: value });
  });
  tabContainers['Visual'].appendChild(spritesCountControl);

  // Add separator for Debug controls
  const debugSeparator = document.createElement('hr');
  debugSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  tabContainers['Advanced'].appendChild(debugSeparator);

  const debugTitle = document.createElement('h4');
  debugTitle.textContent = '📐 Debug';
  debugTitle.style.cssText = 'margin: 0 0 10px 0; color: #ff9900; font-size: 12px;';
  tabContainers['Advanced'].appendChild(debugTitle);

  // Phase 11.5.0: Attach controls container to panel
  panel.appendChild(controlsContainer);

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
  if (hudPanel && hudPanel.presetListContainer) {
    const listContainer = hudPanel.presetListContainer;
    const setSelectedPreset = hudPanel.setSelectedPreset;
    const categoryFilter = hudPanel.categoryFilter;
    const tagFilter = hudPanel.tagFilter;
    const searchInput = hudPanel.searchInput; // Phase 11.2.7

    // Clear current list
    listContainer.innerHTML = '';

    // Phase 11.2.6: Get filter values
    const selectedCategory = categoryFilter ? categoryFilter.value : 'All';
    const filterTagsInput = tagFilter ? tagFilter.value.trim() : '';
    const filterTags = filterTagsInput ? filterTagsInput.split(',').map(t => t.trim().toLowerCase()).filter(t => t.length > 0) : [];

    // Phase 11.2.7: Get search query
    const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (searchQuery) {
      console.log(`🔍 Search: ${searchQuery}`);
    }

    // Phase 11.2.6: Collect all categories and update category filter dropdown
    if (categoryFilter) {
      const allCategories = new Set(['All']);
      import('./presets.js').then(({ getPresetData }) => {
        presets.forEach(name => {
          const preset = getPresetData(name);
          if (preset && preset.category) {
            allCategories.add(preset.category);
          }
        });

        // Update category filter options
        const currentValue = categoryFilter.value;
        categoryFilter.innerHTML = '';
        Array.from(allCategories).sort().forEach(cat => {
          const option = document.createElement('option');
          option.value = cat;
          option.textContent = cat;
          if (cat === currentValue) option.selected = true;
          categoryFilter.appendChild(option);
        });
      });
    }

    if (presets.length === 0) {
      // Show empty state
      const emptyMessage = document.createElement('div');
      emptyMessage.textContent = 'No presets saved yet';
      emptyMessage.style.cssText = 'color: #666; font-size: 11px; text-align: center; padding: 10px;';
      listContainer.appendChild(emptyMessage);
      return;
    }

    // Phase 11.2.6: Filter and display presets
    import('./presets.js').then(({ getPresetData }) => {
      let filteredCount = 0;
      presets.forEach(presetName => {
        const presetData = getPresetData(presetName);
        const presetCategory = presetData?.category || 'Uncategorized';
        const presetTags = presetData?.tags || [];

        // Phase 11.2.7: Apply search filter (checks name, category, tags)
        if (searchQuery) {
          const nameMatch = presetName.toLowerCase().includes(searchQuery);
          const categoryMatch = presetCategory.toLowerCase().includes(searchQuery);
          const tagsMatch = presetTags.some(tag => tag.toLowerCase().includes(searchQuery));

          if (!nameMatch && !categoryMatch && !tagsMatch) {
            return; // Skip this preset
          }
        }

        // Apply category filter
        if (selectedCategory !== 'All' && presetCategory !== selectedCategory) {
          return; // Skip this preset
        }

        // Apply tag filter (all filter tags must be present)
        if (filterTags.length > 0) {
          const presetTagsLower = presetTags.map(t => t.toLowerCase());
          const hasAllTags = filterTags.every(ft => presetTagsLower.includes(ft));
          if (!hasAllTags) {
            return; // Skip this preset
          }
        }

        filteredCount++;

        const presetItem = document.createElement('div');
        presetItem.className = 'preset-item';
        presetItem.style.cssText = `
          padding: 6px 8px;
          margin-bottom: 3px;
          background: #2a2a2a;
          border: 1px solid #444;
          border-radius: 3px;
          cursor: pointer;
          font-size: 11px;
          transition: background 0.2s, border-color 0.2s;
        `;

        // Phase 11.2.6: Preset name
        const nameSpan = document.createElement('div');
        nameSpan.textContent = presetName;
        nameSpan.style.cssText = 'font-weight: bold; margin-bottom: 3px;';
        presetItem.appendChild(nameSpan);

        // Phase 11.2.6: Category and tags display
        const metaSpan = document.createElement('div');
        metaSpan.style.cssText = 'font-size: 9px; color: #888;';
        metaSpan.textContent = `[${presetCategory}]`;
        if (presetTags.length > 0) {
          metaSpan.textContent += ` ${presetTags.map(t => `#${t}`).join(' ')}`;
        }
        presetItem.appendChild(metaSpan);

        // Hover effect
        presetItem.addEventListener('mouseenter', () => {
          presetItem.style.background = '#3a3a3a';
          presetItem.style.borderColor = '#666';
        });

        presetItem.addEventListener('mouseleave', () => {
          if (!presetItem.classList.contains('selected')) {
            presetItem.style.background = '#2a2a2a';
            presetItem.style.borderColor = '#444';
          }
        });

        // Click to select
        presetItem.addEventListener('click', () => {
          // Deselect all
          listContainer.querySelectorAll('.preset-item').forEach(item => {
            item.classList.remove('selected');
            item.style.background = '#2a2a2a';
            item.style.borderColor = '#444';
          });

          // Select this item
          presetItem.classList.add('selected');
          presetItem.style.background = '#0088ff';
          presetItem.style.borderColor = '#00aaff';
          setSelectedPreset(presetName);
        });

        listContainer.appendChild(presetItem);
      });

      // Show "no results" message if all presets were filtered out
      if (filteredCount === 0) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.textContent = 'No presets match filters';
        noResultsMessage.style.cssText = 'color: #666; font-size: 11px; text-align: center; padding: 10px;';
        listContainer.appendChild(noResultsMessage);
      }
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

// Phase 4.8.1: Performance HUD update
export function updatePerformanceHUD(fps, drawCalls) {
  const fpsEl = document.getElementById('hud-fps');
  const drawCallsEl = document.getElementById('hud-drawcalls');
  if (fpsEl) fpsEl.textContent = fps;
  if (drawCallsEl) drawCallsEl.textContent = drawCalls;
}
