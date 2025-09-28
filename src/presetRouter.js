import { onHUDUpdate } from './hud.js';
import { state, setMorphWeights, setColor, setHue } from './state.js';
import { savePreset, loadPreset, deletePreset } from './presets.js';

console.log("💾 presetRouter.js loaded");

// Handle preset actions from HUD
onHUDUpdate((update) => {
  if (update.presetAction !== undefined && update.presetName) {
    handlePresetAction(update.presetAction, update.presetName);
  }
});

function handlePresetAction(action, presetName) {
  if (!presetName) return;

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
        audio: { ...state.audio }
      };

      if (savePreset(presetName, currentState)) {
        console.log(`💾 Saved preset: ${presetName}`);
        state.presets.currentPresetName = presetName;
        // Note: updatePresetList will be called by the HUD system
      }
      break;

    case 'load':
      const preset = loadPreset(presetName);
      if (preset && preset.state) {
        console.log(`💾 Loading preset: ${presetName}`);

        // Apply morph weights
        if (preset.state.morphWeights) {
          setMorphWeights(preset.state.morphWeights);
        }

        // Apply morph state
        if (preset.state.morphState) {
          Object.assign(state.morphState, preset.state.morphState);
        }

        // Apply geometry transforms
        if (preset.state.rotationX !== undefined) {
          state.rotationX = preset.state.rotationX;
        }
        if (preset.state.rotationY !== undefined) {
          state.rotationY = preset.state.rotationY;
        }
        if (preset.state.scale !== undefined) {
          state.scale = preset.state.scale;
        }
        if (preset.state.idleSpin !== undefined) {
          state.idleSpin = preset.state.idleSpin;
        }

        // Apply visual settings
        if (preset.state.color !== undefined) {
          setColor(preset.state.color);
        }
        if (preset.state.hue !== undefined) {
          setHue(preset.state.hue);
        }
        if (preset.state.lighting) {
          Object.assign(state.lighting, preset.state.lighting);
        }

        // Apply audio settings
        if (preset.state.audio) {
          Object.assign(state.audio, preset.state.audio);
        }

        state.presets.currentPresetName = presetName;
      }
      break;

    case 'delete':
      if (deletePreset(presetName)) {
        console.log(`💾 Deleted preset: ${presetName}`);
        if (state.presets.currentPresetName === presetName) {
          state.presets.currentPresetName = null;
        }
        // Note: updatePresetList will be called by the HUD system
      }
      break;

    default:
      console.warn(`💾 Unknown preset action: ${action}`);
  }
}

console.log("💾 Preset routing configured");