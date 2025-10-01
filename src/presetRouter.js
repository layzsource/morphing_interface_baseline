import { onHUDUpdate } from './hud.js';
import { state, setMorphWeights, setColor, setHue, lerp, lerpColor, lerpArray, easeInOutCubic, morphChain } from './state.js';
import { savePreset, loadPreset, deletePreset, listPresets, getPresetData } from './presets.js';
import { applyDirectUpdate } from './controlBindings.js'; // Phase 11.2.3+

console.log("💾 presetRouter.js loaded");

// Handle preset actions from HUD
onHUDUpdate((update) => {
  if (update.presetAction !== undefined) {
    // Phase 11.3.0/11.3.1: Handle chain actions separately (they don't use presetName)
    if (update.presetAction === 'chain:start') {
      const chainPresets = update.chainPresets || [];
      const chainDuration = update.chainDuration ?? 2000;
      if (!Array.isArray(chainPresets) || chainPresets.length === 0) {
        console.warn("💾 [PresetRouter] Missing preset list for chain, aborting");
        return;
      }
      // Phase 11.3.1: Pass loop/shuffle options
      const options = {
        loop: update.chainLoop ?? false,
        shuffle: update.chainShuffle ?? false
      };
      startChain(chainPresets, chainDuration, options);
      return;
    }
    if (update.presetAction === 'chain:stop') {
      stopChain();
      return;
    }
    // Phase 11.3.1: Saved chain management
    if (update.presetAction === 'chain:save') {
      const chainName = update.chainName;
      const chainPresets = update.chainPresets || [];
      const chainDuration = update.chainDuration ?? 2000;
      const chainLoop = update.chainLoop ?? false;
      const chainShuffle = update.chainShuffle ?? false;
      saveChain(chainName, chainPresets, chainDuration, chainLoop, chainShuffle);
      return;
    }
    if (update.presetAction === 'chain:load') {
      loadChain(update.chainName);
      return;
    }
    if (update.presetAction === 'chain:delete') {
      deleteChain(update.chainName);
      return;
    }
    // Regular preset actions
    handlePresetAction(update.presetAction, update.presetName, update.category, update.tags);
  }
});

function handlePresetAction(action, presetName, category, tags) {
  console.log("💾 [PresetRouter] handlePresetAction called:", { action, presetName, category, tags });

  if (!presetName && action !== 'export' && action !== 'import') {
    console.warn("💾 [PresetRouter] Missing preset name, aborting");
    return;
  }

  switch (action) {
    case 'save':
      const currentState = {
        // Morph system
        morphWeights: { ...state.morphWeights },
        morphState: { ...state.morphState },

        // Geometry transforms
        rotationX: state.rotationX,
        rotationY: state.rotationY,
        scale: state.scale,
        idleSpin: state.idleSpin,

        // Visual settings
        color: state.color,
        hue: state.hue,
        lighting: { ...state.lighting },

        // Audio settings
        audio: { ...state.audio },

        // Phase 11.2.1+: Color layers
        colorLayers: JSON.parse(JSON.stringify(state.colorLayers))
      };

      console.log("💾 [PresetRouter] Calling savePreset with:", { presetName, category, tags, stateKeys: Object.keys(currentState) });

      // Phase 11.2.6: Include category and tags
      if (savePreset(presetName, currentState, category, tags)) {
        console.log(`💾 Saved preset: ${presetName} [${category}] ${tags ? tags.join(', ') : ''}`);
        state.presets.currentPresetName = presetName;
        // Refresh the preset dropdown
        import('./hud.js').then(({ updatePresetList }) => {
          import('./presets.js').then(({ listPresets }) => {
            updatePresetList(listPresets());
          });
        });
      }
      break;

    case 'load':
      // Phase 11.2.8: Use interpolation if enabled, otherwise direct load
      if (state.interpolation.enabled) {
        startInterpolation(presetName);
        break;
      }

      const preset = loadPreset(presetName);
      if (preset && preset.state) {
        console.log(`💾 Loading preset: ${presetName} (Phase 11.2.3+ unified routing, interpolation disabled)`);

        // Phase 11.2.3+: Route all preset updates through unified binding system
        // This ensures consistent logging, event emission, and state flow

        // Apply morph weights (uses existing utility)
        if (preset.state.morphWeights) {
          setMorphWeights(preset.state.morphWeights);
          console.log(`🎛️ [ControlUpdate] Preset → morphWeights (via setMorphWeights)`);
        }

        // Apply morph state (complex object, direct assignment)
        if (preset.state.morphState) {
          Object.assign(state.morphState, preset.state.morphState);
          console.log(`🎛️ [ControlUpdate] Preset → morphState (direct)`);
        }

        // Apply geometry transforms via unified binding
        if (preset.state.rotationX !== undefined) {
          applyDirectUpdate('rotationX', preset.state.rotationX, 'Preset');
        }
        if (preset.state.rotationY !== undefined) {
          applyDirectUpdate('rotationY', preset.state.rotationY, 'Preset');
        }
        if (preset.state.scale !== undefined) {
          applyDirectUpdate('scale', preset.state.scale, 'Preset');
        }
        if (preset.state.idleSpin !== undefined) {
          applyDirectUpdate('idleSpin', preset.state.idleSpin, 'Preset');
        }

        // Apply visual settings via unified binding
        if (preset.state.color !== undefined) {
          setColor(preset.state.color);
          console.log(`🎛️ [ControlUpdate] Preset → color = ${preset.state.color} (via setColor)`);
        }
        if (preset.state.hue !== undefined) {
          setHue(preset.state.hue);
          console.log(`🎛️ [ControlUpdate] Preset → hue = ${preset.state.hue} (via setHue)`);
        }
        if (preset.state.lighting) {
          // Apply each lighting property via unified binding
          Object.keys(preset.state.lighting).forEach(key => {
            applyDirectUpdate(`lighting.${key}`, preset.state.lighting[key], 'Preset');
          });
        }

        // Apply audio settings via unified binding
        if (preset.state.audio) {
          Object.keys(preset.state.audio).forEach(key => {
            applyDirectUpdate(`audio.${key}`, preset.state.audio[key], 'Preset');
          });
        }

        // Phase 11.2.4: Apply color layers via unified binding
        if (preset.state.colorLayers) {
          Object.keys(preset.state.colorLayers).forEach(layer => {
            Object.keys(preset.state.colorLayers[layer]).forEach(property => {
              applyDirectUpdate(`colorLayers.${layer}.${property}`, preset.state.colorLayers[layer][property], 'Preset');
            });
          });
        }

        state.presets.currentPresetName = presetName;
        console.log(`✅ Preset "${presetName}" loaded via unified binding system`);
      }
      break;

    case 'update':
      // Phase 11.2.4: Update/overwrite existing preset with current state
      // Phase 11.2.6: Preserve existing category/tags if not provided
      const existingPreset = getPresetData(presetName);
      const updateCategory = category || (existingPreset ? existingPreset.category : 'Uncategorized');
      const updateTags = tags || (existingPreset ? existingPreset.tags : []);

      const currentStateUpdate = {
        // Morph system
        morphWeights: { ...state.morphWeights },
        morphState: { ...state.morphState },

        // Geometry transforms
        rotationX: state.rotationX,
        rotationY: state.rotationY,
        scale: state.scale,
        idleSpin: state.idleSpin,

        // Visual settings
        color: state.color,
        hue: state.hue,
        lighting: { ...state.lighting },

        // Audio settings
        audio: { ...state.audio },

        // Phase 11.2.1+: Color layers
        colorLayers: JSON.parse(JSON.stringify(state.colorLayers))
      };

      if (savePreset(presetName, currentStateUpdate, updateCategory, updateTags)) {
        console.log(`💾 Updated preset: ${presetName} [${updateCategory}] ${updateTags.join(', ')}`);
        state.presets.currentPresetName = presetName;
        // Refresh the preset list
        import('./hud.js').then(({ updatePresetList }) => {
          import('./presets.js').then(({ listPresets }) => {
            updatePresetList(listPresets());
          });
        });
      }
      break;

    case 'delete':
      if (deletePreset(presetName)) {
        console.log(`💾 Deleted preset: ${presetName}`);
        if (state.presets.currentPresetName === presetName) {
          state.presets.currentPresetName = null;
        }
        // Refresh the preset list
        import('./hud.js').then(({ updatePresetList }) => {
          import('./presets.js').then(({ listPresets }) => {
            updatePresetList(listPresets());
          });
        });
      }
      break;

    case 'export':
      // Phase 11.2.5: Export all presets as JSON file
      exportPresets();
      break;

    case 'import':
      // Phase 11.2.5: Import presets from JSON file
      if (update.file) {
        importPresets(update.file);
      } else {
        console.warn(`💾 Import action missing file`);
      }
      break;

    default:
      console.warn(`💾 Unknown preset action: ${action}`);
  }
}

// Phase 11.2.5: Export presets as JSON file
function exportPresets() {
  const presets = {};
  const presetNames = listPresets();

  // Gather all presets from localStorage (using getPresetData to avoid state mutation)
  presetNames.forEach(name => {
    const presetData = getPresetData(name);
    if (presetData) {
      presets[name] = presetData;
    }
  });

  const json = JSON.stringify(presets, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  // Create download link
  const a = document.createElement('a');
  a.href = url;
  a.download = `presets_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log(`💾 ✅ Exported ${presetNames.length} presets to ${a.download}`);

  // Phase 11.2.5: Emit CustomEvent for external hooks
  try {
    document.dispatchEvent(new CustomEvent('presetsExported', {
      detail: { presetCount: presetNames.length, filename: a.download }
    }));
  } catch (e) {
    // Silently fail if document not available
  }
}

// Phase 11.2.5: Import presets from JSON file
function importPresets(file) {
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const importedPresets = JSON.parse(e.target.result);
      let importCount = 0;
      let overwriteCount = 0;

      Object.keys(importedPresets).forEach(name => {
        const presetData = importedPresets[name];
        const existingPreset = getPresetData(name);

        if (existingPreset) {
          overwriteCount++;
        } else {
          importCount++;
        }

        // Convert preset format to state object for savePreset()
        // presetData from presets.js contains: {name, timestamp, visualSettings, morphWeights, etc.}
        // savePreset() expects: state object with properties to save
        const stateToSave = {
          morphWeights: presetData.morphWeights || {},
          morphState: presetData.morphState || {},
          rotationX: presetData.rotationX || 0,
          rotationY: presetData.rotationY || 0,
          scale: presetData.scale || 1.0,
          idleSpin: presetData.idleSpin !== undefined ? presetData.idleSpin : true,
          color: presetData.color || '#00ff00',
          hue: presetData.hue || 0,
          lighting: presetData.visualSettings || presetData.lighting || {},
          audio: presetData.audio || {},
          colorLayers: presetData.colorLayers || {},
          vessel: presetData.vessel || {},
          shadows: presetData.shadows || {},
          sprites: presetData.sprites || {},
          particles: presetData.particles || {}
        };

        // Phase 11.2.6: Extract category and tags from imported preset
        const importCategory = presetData.category || 'Uncategorized';
        const importTags = Array.isArray(presetData.tags) ? presetData.tags : [];

        savePreset(name, stateToSave, importCategory, importTags);
      });

      console.log(`💾 ✅ Imported ${importCount + overwriteCount} presets (${importCount} new, ${overwriteCount} overwritten) from ${file.name}`);

      // Refresh preset list in HUD
      import('./hud.js').then(({ updatePresetList }) => {
        updatePresetList(listPresets());
      });

      // Phase 11.2.5: Emit CustomEvent for external hooks
      try {
        document.dispatchEvent(new CustomEvent('presetsImported', {
          detail: {
            filename: file.name,
            totalCount: importCount + overwriteCount,
            newCount: importCount,
            overwriteCount: overwriteCount
          }
        }));
      } catch (e) {
        // Silently fail if document not available
      }

    } catch (error) {
      console.error(`💾 ❌ Failed to import presets from ${file.name}:`, error);
      alert(`Failed to import presets: ${error.message}`);
    }
  };

  reader.onerror = () => {
    console.error(`💾 ❌ Failed to read file: ${file.name}`);
    alert(`Failed to read file: ${file.name}`);
  };

  reader.readAsText(file);
}

// Phase 11.2.8: Start preset interpolation
export function startInterpolation(targetPresetName) {
  if (!state.interpolation.enabled) {
    // Interpolation disabled, load directly
    const preset = loadPreset(targetPresetName);
    if (preset) {
      console.log(`💾 Loaded preset immediately (interpolation disabled): ${targetPresetName}`);
    }
    return;
  }

  const targetPresetData = getPresetData(targetPresetName);
  if (!targetPresetData) {
    console.warn(`💾 Cannot interpolate: preset "${targetPresetName}" not found`);
    return;
  }

  // Capture current base state as starting point
  state.interpolation.startState = {
    morphBaseWeights: [...state.morphBaseWeights],
    rotationX: state.rotationX,
    rotationY: state.rotationY,
    scale: state.scale,
    idleSpin: state.idleSpin,
    colorLayers: {
      geometry: { baseColor: state.colorLayers.geometry.baseColor },
      vessel: { baseColor: state.colorLayers.vessel.baseColor },
      shadows: { baseColor: state.colorLayers.shadows.baseColor },
      particles: { baseColor: state.colorLayers.particles.baseColor }
    },
    lighting: { ...state.lighting }
  };

  // Store target preset state
  state.interpolation.targetState = {
    morphWeights: targetPresetData.morphWeights || {},
    rotationX: targetPresetData.rotationX || 0,
    rotationY: targetPresetData.rotationY || 0,
    scale: targetPresetData.scale || 1.0,
    idleSpin: targetPresetData.idleSpin !== undefined ? targetPresetData.idleSpin : true,
    colorLayers: targetPresetData.colorLayers || {},
    lighting: targetPresetData.visualSettings || targetPresetData.lighting || {}
  };

  // Start interpolation
  state.interpolation.active = true;
  state.interpolation.startTime = performance.now();

  console.log(`🎚️ Interpolation started → ${targetPresetName} (duration: ${state.interpolation.duration}ms)`);
}

// Phase 11.2.8: Update interpolation (called from animation loop)
export function updateInterpolation() {
  if (!state.interpolation.active) return;

  const elapsed = performance.now() - state.interpolation.startTime;
  const rawT = Math.min(elapsed / state.interpolation.duration, 1.0);
  const t = easeInOutCubic(rawT);

  const start = state.interpolation.startState;
  const target = state.interpolation.targetState;

  // Interpolate morphBaseWeights
  if (start.morphBaseWeights && target.morphWeights) {
    const targetWeights = [
      target.morphWeights.sphere || 0,
      target.morphWeights.cube || 0,
      target.morphWeights.pyramid || 0,
      target.morphWeights.torus || 0
    ];
    state.morphBaseWeights = lerpArray(start.morphBaseWeights, targetWeights, t);
  }

  // Interpolate geometry transforms
  if (start.rotationX !== undefined && target.rotationX !== undefined) {
    state.rotationX = lerp(start.rotationX, target.rotationX, t);
  }
  if (start.rotationY !== undefined && target.rotationY !== undefined) {
    state.rotationY = lerp(start.rotationY, target.rotationY, t);
  }
  if (start.scale !== undefined && target.scale !== undefined) {
    state.scale = lerp(start.scale, target.scale, t);
  }

  // Interpolate colorLayers baseColors only (audio colors continue independently)
  ['geometry', 'vessel', 'shadows', 'particles'].forEach(layer => {
    if (start.colorLayers?.[layer]?.baseColor && target.colorLayers?.[layer]?.baseColor) {
      state.colorLayers[layer].baseColor = lerpColor(
        start.colorLayers[layer].baseColor,
        target.colorLayers[layer].baseColor,
        t
      );
    }
  });

  // Interpolate lighting
  if (start.lighting && target.lighting) {
    if (start.lighting.ambientIntensity !== undefined && target.lighting.ambientIntensity !== undefined) {
      state.lighting.ambientIntensity = lerp(start.lighting.ambientIntensity, target.lighting.ambientIntensity, t);
    }
    if (start.lighting.directionalIntensity !== undefined && target.lighting.directionalIntensity !== undefined) {
      state.lighting.directionalIntensity = lerp(start.lighting.directionalIntensity, target.lighting.directionalIntensity, t);
    }
  }

  // Debug logging (every 10% progress)
  if (Math.floor(rawT * 10) !== Math.floor((rawT - 0.01) * 10)) {
    console.log(`🎚️ Interpolation progress: t=${rawT.toFixed(2)} (eased: ${t.toFixed(2)})`);
  }

  // Complete interpolation
  if (rawT >= 1.0) {
    state.interpolation.active = false;
    state.interpolation.startState = null;
    state.interpolation.targetState = null;
    console.log(`✅ Interpolation complete`);
  }
}

// Phase 11.3.0: Check if interpolation is currently active
export function isInterpolating() {
  return state.interpolation.active;
}

// --- Phase 11.3.0: Morph Chain API ---

export function startChain(presetNames = [], durationMs = 2000, options = {}) {
  if (!Array.isArray(presetNames) || presetNames.length < 2) {
    console.warn("🔗 [Chain] Need at least 2 presets to start a chain.", presetNames);
    return;
  }

  // Phase 11.3.1: Apply shuffle if enabled
  let orderedPresets = presetNames.slice();
  if (options.shuffle || morphChain.shuffle) {
    orderedPresets = shuffleArray(orderedPresets);
    console.log(`🔀 Shuffle enabled → randomized order: [${orderedPresets.join(", ")}]`);
  }

  morphChain.presets = orderedPresets;
  morphChain.currentIndex = 0;
  morphChain.active = true;
  morphChain.duration = durationMs;

  // Phase 11.3.1: Store loop/shuffle settings
  if (options.loop !== undefined) morphChain.loop = options.loop;
  if (options.shuffle !== undefined) morphChain.shuffle = options.shuffle;
  if (options.chainName !== undefined) morphChain.currentChainName = options.chainName;

  // Kick the very first hop: current base → first target
  const firstTarget = morphChain.presets[0];
  const loopMsg = morphChain.loop ? ' [LOOP ENABLED]' : '';
  console.log(`🔗 Chain started: ${morphChain.presets.join(" → ")} (duration: ${durationMs}ms)${loopMsg}`);

  // Phase 11.3.2: Emit chainStarted event
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent("chainStarted", {
      detail: {
        presets: morphChain.presets,
        duration: durationMs,
        loop: morphChain.loop,
        shuffle: morphChain.shuffle
      }
    }));
  }

  // Use existing interpolation with the chain duration, not the global duration
  startInterpolationToPresetName(firstTarget, durationMs);
}

// Phase 11.3.1: Shuffle helper
function shuffleArray(array) {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function stopChain() {
  morphChain.active = false;
  morphChain.currentChainName = null;
  console.log("🔗 Chain stopped.");
}

// wrapper that leverages existing interpolation capture using a preset name
function startInterpolationToPresetName(presetName, stepDurationMs) {
  const preset = getPresetData(presetName);
  if (!preset) {
    console.warn("🔗 [Chain] Missing preset:", presetName);
    return stopChain();
  }

  // Phase 11.3.2: Mark step start time for smooth progress tracking
  morphChain.stepStartTime = performance.now();

  // Reuse existing startInterpolation capture → target logic
  // but with a custom duration for this step.
  // Temporarily overwrite duration, then restore after scheduling.
  const prev = state.interpolation.duration;
  state.interpolation.duration = stepDurationMs;
  startInterpolation(presetName);
  state.interpolation.duration = prev;
}

// Called every frame (from geometry/main loop) alongside updateInterpolation()
export function updateChain() {
  if (!morphChain.active) return;

  // If interpolation still running, nothing to do
  if (isInterpolating()) return;

  // If we just finished a hop, advance to next
  if (morphChain.currentIndex < morphChain.presets.length - 1) {
    morphChain.currentIndex += 1;
    const nextTarget = morphChain.presets[morphChain.currentIndex];
    const progress = Math.round((morphChain.currentIndex / morphChain.presets.length) * 100);
    console.log(`✅ Step complete. Next → ${nextTarget}`);
    console.log(`📊 Chain progress: Step ${morphChain.currentIndex + 1}/${morphChain.presets.length} (${progress}%)`);

    // Phase 11.3.2: Emit chainStepComplete event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent("chainStepComplete", {
        detail: {
          currentStep: morphChain.currentIndex + 1,
          totalSteps: morphChain.presets.length,
          next: nextTarget,
          progress: progress
        }
      }));
    }

    startInterpolationToPresetName(nextTarget, morphChain.duration);
  } else {
    // Completed final step
    // Phase 11.3.1: Check for loop mode
    if (morphChain.loop) {
      console.log("🔁 Loop enabled → restarting chain");
      morphChain.currentIndex = 0;

      // Re-shuffle if shuffle mode is on
      if (morphChain.shuffle) {
        const originalPresets = morphChain.presets.slice();
        morphChain.presets = shuffleArray(originalPresets);
        console.log(`🔀 Reshuffled → new order: [${morphChain.presets.join(", ")}]`);
      }

      // Phase 11.3.2: Emit chainLoopRestarted event
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent("chainLoopRestarted", {
          detail: {
            presets: morphChain.presets,
            loop: morphChain.loop,
            shuffle: morphChain.shuffle
          }
        }));
      }

      const firstTarget = morphChain.presets[0];
      console.log(`📊 Chain progress: Step 1/${morphChain.presets.length} (0%)`);
      startInterpolationToPresetName(firstTarget, morphChain.duration);
    } else {
      // No loop, finish normally
      morphChain.active = false;
      morphChain.currentChainName = null;
      console.log("🔗 Chain finished.");

      // Phase 11.3.2: Emit chainFinished event
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent("chainFinished", {
          detail: {
            completed: true
          }
        }));
      }
    }
  }
}

// Phase 11.3.1: Saved Chain Management

const CHAIN_STORAGE_KEY = 'morphing_interface_chains';

export function saveChain(name, presets, duration, loop, shuffle) {
  if (!name || typeof name !== 'string') {
    console.warn('🔗 Invalid chain name:', name);
    return false;
  }
  if (!Array.isArray(presets) || presets.length < 2) {
    console.warn('🔗 Chain must have at least 2 presets:', presets);
    return false;
  }

  const chainData = {
    name,
    presets: presets.slice(),
    duration: duration || 2000,
    loop: loop || false,
    shuffle: shuffle || false,
    timestamp: new Date().toISOString()
  };

  // Load existing chains
  const chains = getChainsFromStorage();
  chains[name] = chainData;
  saveChainsToStorage(chains);

  // Update in-memory state
  const existingIndex = morphChain.savedChains.findIndex(c => c.name === name);
  if (existingIndex >= 0) {
    morphChain.savedChains[existingIndex] = chainData;
  } else {
    morphChain.savedChains.push(chainData);
  }

  console.log(`💾 Chain saved: ${name} (${presets.length} presets, ${duration}ms, loop: ${loop}, shuffle: ${shuffle})`);
  return true;
}

export function loadChain(name) {
  const chains = getChainsFromStorage();
  const chainData = chains[name];

  if (!chainData) {
    console.warn(`🔗 Chain not found: ${name}`);
    return null;
  }

  console.log(`💾 Loading chain: ${name}`);
  startChain(chainData.presets, chainData.duration, {
    loop: chainData.loop,
    shuffle: chainData.shuffle,
    chainName: name
  });

  return chainData;
}

export function deleteChain(name) {
  if (!name || typeof name !== 'string') {
    console.warn('🔗 Invalid chain name:', name);
    return false;
  }

  const chains = getChainsFromStorage();
  if (!chains[name]) {
    console.warn(`🔗 Chain not found: ${name}`);
    return false;
  }

  delete chains[name];
  saveChainsToStorage(chains);

  // Update in-memory state
  morphChain.savedChains = morphChain.savedChains.filter(c => c.name !== name);

  console.log(`🔗 Chain deleted: ${name}`);
  return true;
}

export function listChains() {
  const chains = getChainsFromStorage();
  return Object.keys(chains).sort();
}

export function getChainData(name) {
  const chains = getChainsFromStorage();
  return chains[name] || null;
}

function getChainsFromStorage() {
  try {
    const stored = localStorage.getItem(CHAIN_STORAGE_KEY);
    if (stored) {
      const chains = JSON.parse(stored);
      // Sync to in-memory state
      morphChain.savedChains = Object.values(chains);
      return chains;
    }
    return {};
  } catch (error) {
    console.error('🔗 Error reading chains from localStorage:', error);
    return {};
  }
}

function saveChainsToStorage(chains) {
  try {
    localStorage.setItem(CHAIN_STORAGE_KEY, JSON.stringify(chains));
  } catch (error) {
    console.error('🔗 Error saving chains to localStorage:', error);
  }
}

// Phase 11.3.1: Initialize saved chains on load
getChainsFromStorage();

console.log("💾 Preset routing configured");