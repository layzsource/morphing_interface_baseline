import { onHUDUpdate } from './hud.js';
import { state, setMorphWeights, setColor, setHue } from './state.js';
import { savePreset, loadPreset, deletePreset, listPresets, getPresetData } from './presets.js';
import { applyDirectUpdate } from './controlBindings.js'; // Phase 11.2.3+

console.log("💾 presetRouter.js loaded");

// Handle preset actions from HUD
onHUDUpdate((update) => {
  if (update.presetAction !== undefined) {
    handlePresetAction(update.presetAction, update.presetName, update.category, update.tags);
  }
});

function handlePresetAction(action, presetName, category, tags) {
  if (!presetName && action !== 'export' && action !== 'import') return;

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
      const preset = loadPreset(presetName);
      if (preset && preset.state) {
        console.log(`💾 Loading preset: ${presetName} (Phase 11.2.3+ unified routing)`);

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

console.log("💾 Preset routing configured");