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

  // Phase 11.2.4: Enhanced Preset Editor UI
  const presetSeparator = document.createElement('hr');
  presetSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(presetSeparator);

  const presetTitle = document.createElement('h4');
  presetTitle.textContent = '💾 Preset Manager (Phase 11.2.4)';
  presetTitle.style.cssText = 'margin: 0 0 10px 0; color: #00ffff; font-size: 12px;';
  panel.appendChild(presetTitle);

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
      notifyHUDUpdate({ presetAction: 'save', presetName: presetName, category: category, tags: tags });
      saveInput.value = '';
      categoryInput.value = 'Uncategorized';
      tagsInput.value = '';
    }
  });

  saveContainer.appendChild(saveInput);
  saveContainer.appendChild(saveButton);
  saveContainer.appendChild(categoryInput);
  saveContainer.appendChild(tagsInput);
  panel.appendChild(saveContainer);

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
  panel.appendChild(filterContainer);

  // Phase 11.2.4: Preset list view (improved from dropdown)
  const presetListLabel = document.createElement('div');
  presetListLabel.textContent = 'Saved Presets:';
  presetListLabel.style.cssText = 'margin-bottom: 5px; color: #aaa; font-size: 11px;';
  panel.appendChild(presetListLabel);

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
  panel.appendChild(presetListContainer);

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
  panel.appendChild(actionContainer);

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
  panel.appendChild(importExportContainer);
  panel.appendChild(fileInput);

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

  panel.appendChild(perfDiv);

  // Particles enable toggle
  const particlesEnableControl = createToggleControl('Enable Particles', true, (value) => {
    notifyHUDUpdate({ particlesEnabled: value });
  });
  panel.appendChild(particlesEnableControl);

  // Particle density slider (Phase 4.4: expanded to 10,000)
  const particleDensityControl = createSliderControl('Particle Density', 5000, 1000, 10000, 100, (value) => {
    notifyHUDUpdate({ particlesCount: value });
  });
  particleDensityControl.title = 'Number of particles (1000-10000, requires reinit)';
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
  panel.appendChild(particleLayoutDiv);

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

  // Size slider (Phase 4.8: true world-unit sizing, 0.05-2.0)
  const sizeControl = createSliderControl('Size', 0.5, 0.05, 2.0, 0.05, (value) => {
    notifyHUDUpdate({ particlesSize: value });
  });
  sizeControl.title = 'True 3D world-unit size (0.05 = tiny, 2.0 = large)';
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

  // Organic strength slider (Phase 4.8.1.7)
  const organicStrengthControl = createSliderControl('Organic Strength', 0.2, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ particlesOrganicStrength: value });
  });
  organicStrengthControl.title = 'Controls wander strength (0 = clean orbit, 1 = chaotic swarm)';
  panel.appendChild(organicStrengthControl);

  // Audio-reactive hue toggle
  const audioHueControl = createToggleControl('Audio-Reactive Hue', false, (value) => {
    notifyHUDUpdate({ particlesAudioReactiveHue: value });
  });
  panel.appendChild(audioHueControl);

  // Audio Gain slider (Phase 4.8)
  const audioGainControl = createSliderControl('Audio Gain', 2.0, 0.5, 5.0, 0.1, (value) => {
    notifyHUDUpdate({ particlesAudioGain: value });
  });
  audioGainControl.title = 'Amplifies per-particle audio hue variation';
  panel.appendChild(audioGainControl);

  // Orbital Speed slider (Phase 4.9.0)
  const velocityControl = createSliderControl('Orbital Speed', 0.05, 0.01, 2.0, 0.01, (value) => {
    notifyHUDUpdate({ particlesVelocity: value });
  });
  velocityControl.title = 'Controls particle orbital speed around vessel (min: 0.01)';
  panel.appendChild(velocityControl);

  // Motion Smoothness slider
  const motionSmoothnessControl = createSliderControl('Motion Smoothness', 0.5, 0.0, 1.0, 0.1, (value) => {
    notifyHUDUpdate({ particlesMotionSmoothness: value });
  });
  panel.appendChild(motionSmoothnessControl);

  // === Phase 2.3.2A: Particle Trails ===
  const trailsLabel = document.createElement("h4");
  trailsLabel.textContent = "🌊 Particle Trails (Line Segments)";
  trailsLabel.style.cssText = 'margin: 15px 0 10px 0; color: #00ffff; font-size: 12px;';
  panel.appendChild(trailsLabel);

  // Trail enabled toggle (line trails)
  const trailEnabledControl = createToggleControl('Enable Line Trails', false, (value) => {
    notifyHUDUpdate({ particlesTrailEnabled: value });
  });
  panel.appendChild(trailEnabledControl);

  // Trail length slider
  const trailLengthControl = createSliderControl('Trail Length', 0, 0, 10, 1, (value) => {
    notifyHUDUpdate({ particlesTrailLength: value });
  });
  trailLengthControl.title = 'Number of frames to persist (0-10)';
  panel.appendChild(trailLengthControl);

  // Trail opacity slider
  const trailOpacityControl = createSliderControl('Trail Opacity', 0.3, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ particlesTrailOpacity: value });
  });
  trailOpacityControl.title = 'Transparency of trail lines (0.0-1.0)';
  panel.appendChild(trailOpacityControl);

  // Trail fade slider (Phase 2.3.2C)
  const trailFadeControl = createSliderControl('Trail Fade', 1.0, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ particlesTrailFade: value });
  });
  trailFadeControl.title = 'Strength of fading (0=no fade, 1=full taper)';
  panel.appendChild(trailFadeControl);

  // Phase 2.3.2D: Audio-reactive trail length controls
  const trailAudioReactiveControl = createToggleControl('Audio Reactive Length', false, (value) => {
    notifyHUDUpdate({ particlesTrailAudioReactive: value });
  });
  trailAudioReactiveControl.title = 'Trail length follows audio level';
  panel.appendChild(trailAudioReactiveControl);

  const trailLengthMinControl = createSliderControl('Min Length', 2, 1, 10, 1, (value) => {
    notifyHUDUpdate({ particlesTrailLengthMin: value });
  });
  trailLengthMinControl.title = 'Shortest trail when audio is quiet';
  panel.appendChild(trailLengthMinControl);

  const trailLengthMaxControl = createSliderControl('Max Length', 10, 1, 20, 1, (value) => {
    notifyHUDUpdate({ particlesTrailLengthMax: value });
  });
  trailLengthMaxControl.title = 'Longest trail when audio is loud';
  panel.appendChild(trailLengthMaxControl);

  // === Dual Trail System: Motion Trails (postprocessing blur) ===
  const motionTrailsLabel = document.createElement("h4");
  motionTrailsLabel.textContent = "🎞️ Motion Trails (Postprocessing)";
  motionTrailsLabel.style.cssText = 'margin: 15px 0 10px 0; color: #ffcc00; font-size: 12px;';
  panel.appendChild(motionTrailsLabel);

  // Motion trails toggle
  const motionTrailsControl = createToggleControl('Enable Motion Trails', false, (value) => {
    notifyHUDUpdate({ motionTrailsEnabled: value });
  });
  motionTrailsControl.title = 'AfterimagePass blur effect (works independently of line trails)';
  panel.appendChild(motionTrailsControl);

  // Motion trail intensity slider
  const motionTrailIntensityControl = createSliderControl('Trail Intensity', 0.96, 0.85, 0.99, 0.01, (value) => {
    notifyHUDUpdate({ motionTrailIntensity: value });
  });
  motionTrailIntensityControl.title = 'Blur damp value (higher = longer trails)';
  panel.appendChild(motionTrailIntensityControl);

  // === Phase 4.8.1: Reset to Defaults Button ===
  const resetButton = document.createElement('button');
  resetButton.textContent = '🔄 Reset to Defaults';
  resetButton.style.cssText = 'width: 100%; padding: 10px; background: #ff9900; color: black; border: none; cursor: pointer; font-weight: bold; border-radius: 5px; margin-top: 15px; margin-bottom: 15px;';
  resetButton.addEventListener('click', () => {
    notifyHUDUpdate({ particlesResetDefaults: true });
  });
  panel.appendChild(resetButton);

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

  // Phase 11.2.2: Per-Layer Color System
  const colorLayersSeparator = document.createElement('hr');
  colorLayersSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(colorLayersSeparator);

  const colorLayersTitle = document.createElement('h4');
  colorLayersTitle.textContent = '🎨 Color Layers (Phase 11.2.2)';
  colorLayersTitle.style.cssText = 'margin: 0 0 10px 0; color: #ff00ff; font-size: 12px;';
  panel.appendChild(colorLayersTitle);

  // Geometry Layer
  const geometryLayerLabel = document.createElement('h5');
  geometryLayerLabel.textContent = '🔺 Geometry';
  geometryLayerLabel.style.cssText = 'margin: 10px 0 5px 0; color: #00ff00; font-size: 11px;';
  panel.appendChild(geometryLayerLabel);

  const geometryBaseColorControl = createColorPickerControl('Base Color', '#00ff00', (value) => {
    notifyHUDUpdate({ colorLayer: 'geometry', property: 'baseColor', value });
  });
  panel.appendChild(geometryBaseColorControl);

  const geometryAudioColorControl = createColorPickerControl('Audio Color', '#ff0000', (value) => {
    notifyHUDUpdate({ colorLayer: 'geometry', property: 'audioColor', value });
  });
  panel.appendChild(geometryAudioColorControl);

  const geometryIntensityControl = createSliderControl('Audio Intensity', 0.5, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ colorLayer: 'geometry', property: 'audioIntensity', value });
  });
  geometryIntensityControl.title = 'Controls audio color contribution (0 = none, 1 = full)';
  panel.appendChild(geometryIntensityControl);

  // Vessel Layer
  const vesselLayerLabel = document.createElement('h5');
  vesselLayerLabel.textContent = '🚢 Vessel';
  vesselLayerLabel.style.cssText = 'margin: 10px 0 5px 0; color: #00ffff; font-size: 11px;';
  panel.appendChild(vesselLayerLabel);

  const vesselBaseColorControl = createColorPickerControl('Base Color', '#00ff00', (value) => {
    notifyHUDUpdate({ colorLayer: 'vessel', property: 'baseColor', value });
  });
  panel.appendChild(vesselBaseColorControl);

  const vesselAudioColorControl = createColorPickerControl('Audio Color', '#00ffff', (value) => {
    notifyHUDUpdate({ colorLayer: 'vessel', property: 'audioColor', value });
  });
  panel.appendChild(vesselAudioColorControl);

  const vesselIntensityControl = createSliderControl('Audio Intensity', 0.3, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ colorLayer: 'vessel', property: 'audioIntensity', value });
  });
  vesselIntensityControl.title = 'Controls audio color contribution (0 = none, 1 = full)';
  panel.appendChild(vesselIntensityControl);

  // Shadows Layer
  const shadowsLayerLabel = document.createElement('h5');
  shadowsLayerLabel.textContent = '🌑 Shadows';
  shadowsLayerLabel.style.cssText = 'margin: 10px 0 5px 0; color: #888; font-size: 11px;';
  panel.appendChild(shadowsLayerLabel);

  const shadowsBaseColorControl = createColorPickerControl('Base Color', '#000000', (value) => {
    notifyHUDUpdate({ colorLayer: 'shadows', property: 'baseColor', value });
  });
  panel.appendChild(shadowsBaseColorControl);

  const shadowsAudioColorControl = createColorPickerControl('Audio Color', '#333333', (value) => {
    notifyHUDUpdate({ colorLayer: 'shadows', property: 'audioColor', value });
  });
  panel.appendChild(shadowsAudioColorControl);

  const shadowsIntensityControl = createSliderControl('Audio Intensity', 0.2, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ colorLayer: 'shadows', property: 'audioIntensity', value });
  });
  shadowsIntensityControl.title = 'Controls audio color contribution (0 = none, 1 = full)';
  panel.appendChild(shadowsIntensityControl);

  // Particles Layer
  const particlesLayerLabel = document.createElement('h5');
  particlesLayerLabel.textContent = '✨ Particles (Shader - Infra Only)';
  particlesLayerLabel.style.cssText = 'margin: 10px 0 5px 0; color: #ffff00; font-size: 11px;';
  panel.appendChild(particlesLayerLabel);

  const particlesBaseColorControl = createColorPickerControl('Base Color', '#ffff00', (value) => {
    notifyHUDUpdate({ colorLayer: 'particles', property: 'baseColor', value });
  });
  particlesBaseColorControl.title = 'Ready but requires shader update (future phase)';
  panel.appendChild(particlesBaseColorControl);

  const particlesAudioColorControl = createColorPickerControl('Audio Color', '#ff00ff', (value) => {
    notifyHUDUpdate({ colorLayer: 'particles', property: 'audioColor', value });
  });
  particlesAudioColorControl.title = 'Ready but requires shader update (future phase)';
  panel.appendChild(particlesAudioColorControl);

  const particlesIntensityControl = createSliderControl('Audio Intensity', 0.7, 0.0, 1.0, 0.05, (value) => {
    notifyHUDUpdate({ colorLayer: 'particles', property: 'audioIntensity', value });
  });
  particlesIntensityControl.title = 'Ready but requires shader update (future phase)';
  panel.appendChild(particlesIntensityControl);

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

  // Vessel mode dropdown (Phase 2.x)
  const vesselModeControl = createDropdownControl('Vessel Mode', 'gyre',
    ['gyre', 'conflat6'], (value) => {
    notifyHUDUpdate({ vesselMode: value });
  });
  vesselModeControl.title = 'Switch between Gyre (torus rings) and Conflat 6 (cube-sphere circles)';
  panel.appendChild(vesselModeControl);

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

  // Add separator for Shadow Box controls
  const shadowBoxSeparator = document.createElement('hr');
  shadowBoxSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(shadowBoxSeparator);

  const shadowBoxTitle = document.createElement('h4');
  shadowBoxTitle.textContent = '📦 Shadow Box';
  shadowBoxTitle.style.cssText = 'margin: 0 0 10px 0; color: #888; font-size: 12px;';
  panel.appendChild(shadowBoxTitle);

  // Phase 2.3.3: Shadow Box controls
  const projectParticlesToShadowControl = createToggleControl('Project Particles', false, (value) => {
    notifyHUDUpdate({ shadowBoxProjectParticles: value });
  });
  panel.appendChild(projectParticlesToShadowControl);

  // Phase 2.3.6: Shadow Box palette selector
  const shadowPaletteControl = createDropdownControl('Palette', 'Manual',
    ['Manual', 'Alchemy Gold', 'Blake Indigo', 'Cosmic White'], (value) => {
    notifyHUDUpdate({ shadowBoxPalette: value });
  });
  shadowPaletteControl.title = 'Quick palette presets or manual color selection';
  panel.appendChild(shadowPaletteControl);

  // Phase 2.3.4: Shadow Box shader controls
  const shadowThresholdControl = createSliderControl('Threshold', 0.5, 0.0, 1.0, 0.01, (value) => {
    notifyHUDUpdate({ shadowBoxThreshold: value });
  });
  shadowThresholdControl.title = 'Cutoff point: below = background, above = foreground';
  panel.appendChild(shadowThresholdControl);

  const shadowBleachGainControl = createSliderControl('Bleach Gain', 1.0, 0.5, 3.0, 0.1, (value) => {
    notifyHUDUpdate({ shadowBoxBleachGain: value });
  });
  shadowBleachGainControl.title = 'Luminance amplification before threshold';
  panel.appendChild(shadowBleachGainControl);

  // Phase 2.3.5: Two-tone color controls
  const shadowBgColorControl = createColorPickerControl('Background Color', '#000000', (value) => {
    notifyHUDUpdate({ shadowBoxBgColor: value });
  });
  shadowBgColorControl.title = 'Color for pixels below threshold';
  panel.appendChild(shadowBgColorControl);

  const shadowFgColorControl = createColorPickerControl('Foreground Color', '#ffffff', (value) => {
    notifyHUDUpdate({ shadowBoxFgColor: value });
  });
  shadowFgColorControl.title = 'Color for pixels above threshold';
  panel.appendChild(shadowFgColorControl);

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

  // Add separator for Sprites controls
  const spritesSeparator = document.createElement('hr');
  spritesSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(spritesSeparator);

  const spritesTitle = document.createElement('h4');
  spritesTitle.textContent = '✨ Sprites';
  spritesTitle.style.cssText = 'margin: 0 0 10px 0; color: #ffff00; font-size: 12px;';
  panel.appendChild(spritesTitle);

  // Sprites enable toggle
  const spritesEnableControl = createToggleControl('Enable Sprites', true, (value) => {
    notifyHUDUpdate({ spritesEnabled: value });
  });
  panel.appendChild(spritesEnableControl);

  // Sprites count slider
  const spritesCountControl = createSliderControl('Sprite Count', 200, 50, 500, 10, (value) => {
    notifyHUDUpdate({ spritesCount: value });
  });
  panel.appendChild(spritesCountControl);

  // Add separator for Debug controls
  const debugSeparator = document.createElement('hr');
  debugSeparator.style.cssText = 'border: 1px solid #555; margin: 15px 0;';
  panel.appendChild(debugSeparator);

  const debugTitle = document.createElement('h4');
  debugTitle.textContent = '📐 Debug';
  debugTitle.style.cssText = 'margin: 0 0 10px 0; color: #ff9900; font-size: 12px;';
  panel.appendChild(debugTitle);

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
