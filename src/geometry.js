import * as THREE from 'three';
import { onCC } from './midi.js';
import { onHUDUpdate, updatePresetList } from './hud.js';
import { onMorphUpdate, setMorphTarget, setMorphBlend, setTargetWeight, setMorphWeights, getMorphWeights } from './periaktos.js';
import { savePreset, loadPreset, deletePreset, listPresets } from './presets.js';
import { onAudioUpdate, enableAudio, disableAudio, setAudioSensitivity, getAudioValues, getAudioState, setAudioState } from './audio.js';

console.log("🔺 geometry.js loaded");

// MIDI influence variables
let midiRotX = 0;
let midiRotY = 0;
let midiScale = 1;

// HUD influence variables
let hudRotX = 0;
let hudRotY = 0;
let hudScale = 1.0;
let hudIdleSpin = true;

// Audio influence variables
let audioMorphWeights = { cube: 0.0, sphere: 0.0, pyramid: 0.0, torus: 0.0 };
let currentAudioData = null;

// Visual polish variables
let ambientLight = null;
let directionalLight = null;
let ambientIntensity = 0.4;
let directionalIntensity = 1.0;
let directionalAngleX = -45; // degrees
let directionalAngleY = 45; // degrees
let currentColor = '#00ff00'; // Default green
let currentHue = 120; // Green hue in degrees

export function getHUDIdleSpin() {
  return hudIdleSpin;
}

const canvas = document.querySelector('#app');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeGeometry = new THREE.BoxGeometry();
const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
const pyramidGeometry = new THREE.ConeGeometry(0.8, 1.5, 8);
const torusGeometry = new THREE.TorusGeometry(0.7, 0.3, 16, 100);

// Use MeshStandardMaterial for better lighting
const material = new THREE.MeshStandardMaterial({
  color: currentColor,
  wireframe: true,
  roughness: 0.7,
  metalness: 0.3
});

const morphObjects = {
  cube: new THREE.Mesh(cubeGeometry, material.clone()),
  sphere: new THREE.Mesh(sphereGeometry, material.clone()),
  pyramid: new THREE.Mesh(pyramidGeometry, material.clone()),
  torus: new THREE.Mesh(torusGeometry, material.clone())
};

// Ensure all geometries are centered at origin
Object.values(morphObjects).forEach(obj => {
  obj.position.set(0, 0, 0);
  obj.material.transparent = true;
  obj.visible = false;
  scene.add(obj);
});

// Start with cube visible
morphObjects.cube.visible = true;
morphObjects.cube.material.opacity = 1;

// Setup lighting
setupLighting();

let currentMorphState = null;

// Position camera for centered view
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

// Handle window resize to maintain centering
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

onCC(({ cc, value }) => {
  if (cc === 1) {
    midiRotX = (value / 127) * 0.1;   // map to rotation speed
  } else if (cc === 2) {
    // Map CC2 to morph intensity (0.0-1.0)
    const morphIntensity = value / 127; // Scale 0-127 to 0.0-1.0
    setMorphBlend(morphIntensity);
  } else if (cc === 3) {
    // Map CC3 to morph target selection
    const targets = ["cube", "sphere", "pyramid", "torus"];
    let targetIndex;
    if (value < 32) targetIndex = 0;      // 0-31 → Cube
    else if (value < 64) targetIndex = 1; // 32-63 → Sphere
    else if (value < 96) targetIndex = 2; // 64-95 → Pyramid
    else targetIndex = 3;                 // 96-127 → Torus

    setMorphTarget(targets[targetIndex]);
  } else if (cc === 4) {
    midiRotY = (value / 127) * 0.1;   // map to rotation speed
  } else if (cc === 10) {
    // Map CC10 to hue shift (0-127 → 0-360°)
    const newHue = (value / 127) * 360;
    setHue(newHue);
  } else if (cc === 21) {
    // Map CC21 to Sphere weight (0.0-1.0)
    const sphereWeight = value / 127; // Scale 0-127 to 0.0-1.0
    setTargetWeight('sphere', sphereWeight);
  } else if (cc === 22) {
    // Map CC22 to Pyramid weight (0.0-1.0)
    const pyramidWeight = value / 127; // Scale 0-127 to 0.0-1.0
    setTargetWeight('pyramid', pyramidWeight);
  } else if (cc === 23) {
    // Map CC23 to Torus weight (0.0-1.0)
    const torusWeight = value / 127; // Scale 0-127 to 0.0-1.0
    setTargetWeight('torus', torusWeight);
  } else if (cc === 24) {
    midiScale = 0.5 + (value / 127) * 1.5; // clamp between 0.5–2.0 (moved from CC22)
  }
});

onHUDUpdate((update) => {
  if (update.idleSpin !== undefined) {
    hudIdleSpin = update.idleSpin;
  }
  if (update.rotX !== undefined) {
    hudRotX = update.rotX;
  }
  if (update.rotY !== undefined) {
    hudRotY = update.rotY;
  }
  if (update.scale !== undefined) {
    hudScale = update.scale;
  }
  if (update.morphTarget !== undefined) {
    setMorphTarget(update.morphTarget);
  }
  if (update.morphBlend !== undefined) {
    setMorphBlend(update.morphBlend);
  }
  if (update.targetWeight !== undefined) {
    const { target, weight } = update.targetWeight;
    setTargetWeight(target, weight);
  }
  if (update.presetAction !== undefined) {
    handlePresetAction(update.presetAction, update.presetName);
  }
  if (update.audioEnabled !== undefined) {
    if (update.audioEnabled) {
      enableAudio();
    } else {
      disableAudio();
    }
  }
  if (update.audioSensitivity !== undefined) {
    setAudioSensitivity(update.audioSensitivity);
  }
  if (update.ambientIntensity !== undefined) {
    setAmbientIntensity(update.ambientIntensity);
  }
  if (update.directionalIntensity !== undefined) {
    setDirectionalIntensity(update.directionalIntensity);
  }
  if (update.directionalAngleX !== undefined) {
    setDirectionalAngleX(update.directionalAngleX);
  }
  if (update.directionalAngleY !== undefined) {
    setDirectionalAngleY(update.directionalAngleY);
  }
  if (update.color !== undefined) {
    setColor(update.color);
  }
});

onMorphUpdate((morphData) => {
  currentMorphState = morphData;
  updateMorphVisibility();
});

onAudioUpdate((audioData) => {
  currentAudioData = audioData;

  if (audioData.isEnabled) {
    // Map audio frequencies to morph targets
    // Bass → Cube weight
    // Mid → Sphere weight
    // Treble → Pyramid weight
    // Torus unaffected for Phase 6
    audioMorphWeights.cube = audioData.bass;
    audioMorphWeights.sphere = audioData.mid;
    audioMorphWeights.pyramid = audioData.treble;
    audioMorphWeights.torus = 0.0;

    // Apply audio-reactive morphing by combining with existing weights
    applyAudioReactiveMorphing();
  } else {
    // Reset audio weights when disabled
    audioMorphWeights = { cube: 0.0, sphere: 0.0, pyramid: 0.0, torus: 0.0 };
  }
});

function updateMorphVisibility() {
  if (!currentMorphState) return;

  const { current, previous, progress, weights } = currentMorphState;

  // Hide all objects first
  Object.values(morphObjects).forEach(obj => {
    obj.visible = false;
    obj.material.opacity = 0;
  });

  if (!currentMorphState.isTransitioning) {
    // Phase 4: Use multi-target weighted blending
    if (weights) {
      Object.entries(weights).forEach(([target, weight]) => {
        if (weight > 0 && morphObjects[target]) {
          morphObjects[target].visible = true;
          morphObjects[target].material.opacity = weight;
        }
      });
    } else {
      // Fallback: show current target only
      if (morphObjects[current]) {
        morphObjects[current].visible = true;
        morphObjects[current].material.opacity = 1;
      }
    }
  } else {
    // Transitioning - crossfade between previous and current
    if (morphObjects[previous]) {
      morphObjects[previous].visible = true;
      morphObjects[previous].material.opacity = 1 - progress;
    }
    if (morphObjects[current]) {
      morphObjects[current].visible = true;
      morphObjects[current].material.opacity = progress;
    }
  }
}

function handlePresetAction(action, presetName) {
  if (!presetName) return;

  switch (action) {
    case 'save':
      const currentState = {
        morphWeights: getMorphWeights(),
        morphBlend: currentMorphState?.blend || 0.0,
        currentTarget: currentMorphState?.current || 'cube',
        hudIdleSpin: hudIdleSpin,
        hudRotX: hudRotX,
        hudRotY: hudRotY,
        hudScale: hudScale,
        audioSettings: getAudioState(),
        visualSettings: getVisualState()
      };

      if (savePreset(presetName, currentState)) {
        console.log(`💾 Saved preset: ${presetName}`);
        updatePresetList(listPresets());
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

        // Apply morph blend
        if (preset.state.morphBlend !== undefined) {
          setMorphBlend(preset.state.morphBlend);
        }

        // Apply current target
        if (preset.state.currentTarget) {
          setMorphTarget(preset.state.currentTarget);
        }

        // Apply HUD settings (note: these will be overridden by HUD controls immediately)
        if (preset.state.hudSettings) {
          const settings = preset.state.hudSettings;
          if (settings.idleSpin !== undefined) hudIdleSpin = settings.idleSpin;
          if (settings.rotX !== undefined) hudRotX = settings.rotX;
          if (settings.rotY !== undefined) hudRotY = settings.rotY;
          if (settings.scale !== undefined) hudScale = settings.scale;
        }

        // Apply audio settings
        if (preset.state.audioSettings) {
          setAudioState(preset.state.audioSettings);
        }

        // Apply visual settings
        if (preset.state.visualSettings) {
          setVisualState(preset.state.visualSettings);
        }
      }
      break;

    case 'delete':
      if (deletePreset(presetName)) {
        console.log(`💾 Deleted preset: ${presetName}`);
        updatePresetList(listPresets());
      }
      break;

    default:
      console.warn(`💾 Unknown preset action: ${action}`);
  }
}

function applyAudioReactiveMorphing() {
  if (!currentAudioData || !currentAudioData.isEnabled) return;

  // Combine audio weights with existing morph weights additively
  const currentWeights = getMorphWeights();
  const combinedWeights = {};

  // Apply audio influence additively to existing weights
  Object.keys(currentWeights).forEach(target => {
    combinedWeights[target] = currentWeights[target] + (audioMorphWeights[target] || 0);
  });

  // Set the combined weights (this will auto-normalize in periaktos.js)
  setMorphWeights(combinedWeights);
}

function setupLighting() {
  // Add ambient light
  ambientLight = new THREE.AmbientLight(0xffffff, ambientIntensity);
  scene.add(ambientLight);

  // Add directional light
  directionalLight = new THREE.DirectionalLight(0xffffff, directionalIntensity);
  updateDirectionalLightPosition();
  scene.add(directionalLight);

  console.log("🎨 Lighting system initialized");
}

function updateDirectionalLightPosition() {
  if (!directionalLight) return;

  // Convert angles to radians and position the light
  const radX = (directionalAngleX * Math.PI) / 180;
  const radY = (directionalAngleY * Math.PI) / 180;

  directionalLight.position.set(
    Math.sin(radY) * Math.cos(radX) * 10,
    Math.sin(radX) * 10,
    Math.cos(radY) * Math.cos(radX) * 10
  );
}

function setAmbientIntensity(intensity) {
  ambientIntensity = Math.max(0, Math.min(2, intensity));
  if (ambientLight) {
    ambientLight.intensity = ambientIntensity;
  }
  console.log(`🎨 Ambient intensity: ${ambientIntensity.toFixed(2)}`);
}

function setDirectionalIntensity(intensity) {
  directionalIntensity = Math.max(0, Math.min(2, intensity));
  if (directionalLight) {
    directionalLight.intensity = directionalIntensity;
  }
  console.log(`🎨 Directional intensity: ${directionalIntensity.toFixed(2)}`);
}

function setDirectionalAngleX(angle) {
  directionalAngleX = angle;
  updateDirectionalLightPosition();
  console.log(`🎨 Directional angle X: ${directionalAngleX}°`);
}

function setDirectionalAngleY(angle) {
  directionalAngleY = angle;
  updateDirectionalLightPosition();
  console.log(`🎨 Directional angle Y: ${directionalAngleY}°`);
}

function setColor(color) {
  currentColor = color;

  // Update all morph object materials
  Object.values(morphObjects).forEach(obj => {
    obj.material.color.setHex(color.replace('#', '0x'));
  });

  console.log(`🎨 Color set to: ${color}`);
}

function setHue(hue) {
  currentHue = hue % 360;

  // Convert HSL to hex (saturation 100%, lightness 50%)
  const hslColor = new THREE.Color().setHSL(currentHue / 360, 1.0, 0.5);
  currentColor = '#' + hslColor.getHexString();

  // Update all morph object materials
  Object.values(morphObjects).forEach(obj => {
    obj.material.color.copy(hslColor);
  });

  console.log(`🎨 Hue set to: ${currentHue}° (${currentColor})`);
}

function getVisualState() {
  return {
    ambientIntensity: ambientIntensity,
    directionalIntensity: directionalIntensity,
    directionalAngleX: directionalAngleX,
    directionalAngleY: directionalAngleY,
    color: currentColor,
    hue: currentHue
  };
}

function setVisualState(state) {
  if (state.ambientIntensity !== undefined) {
    setAmbientIntensity(state.ambientIntensity);
  }
  if (state.directionalIntensity !== undefined) {
    setDirectionalIntensity(state.directionalIntensity);
  }
  if (state.directionalAngleX !== undefined) {
    setDirectionalAngleX(state.directionalAngleX);
  }
  if (state.directionalAngleY !== undefined) {
    setDirectionalAngleY(state.directionalAngleY);
  }
  if (state.color !== undefined) {
    setColor(state.color);
  }
  if (state.hue !== undefined) {
    setHue(state.hue);
  }
}

export function getVisualData() {
  return {
    ambientIntensity: ambientIntensity,
    directionalIntensity: directionalIntensity,
    color: currentColor,
    hue: currentHue
  };
}

function animate() {
  requestAnimationFrame(animate);

  const rotX = (hudIdleSpin ? 0.01 : 0) + midiRotX + hudRotX;
  const rotY = (hudIdleSpin ? 0.01 : 0) + midiRotY + hudRotY;
  const scale = midiScale * hudScale;

  // Apply transformations to all morph objects
  Object.values(morphObjects).forEach(obj => {
    obj.rotation.x += rotX;
    obj.rotation.y += rotY;
    obj.scale.set(scale, scale, scale);
  });

  renderer.render(scene, camera);
}
animate();
