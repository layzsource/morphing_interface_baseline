import * as THREE from 'three';
import { onCC } from './midi.js';
import { onHUDUpdate } from './hud.js';
import { onMorphUpdate, setMorphTarget, setMorphBlend, setTargetWeight } from './periaktos.js';

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
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

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
});

onMorphUpdate((morphData) => {
  currentMorphState = morphData;
  updateMorphVisibility();
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
