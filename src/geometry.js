import * as THREE from 'three';
import { onCC } from './midi.js';
import { onHUDUpdate } from './hud.js';
import { onMorphUpdate } from './periaktos.js';

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
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

const cube = new THREE.Mesh(cubeGeometry, material);
const sphere = new THREE.Mesh(sphereGeometry, material);

// Ensure geometry is centered at origin
cube.position.set(0, 0, 0);
sphere.position.set(0, 0, 0);

scene.add(cube);
scene.add(sphere);

sphere.visible = false;
let currentMorphProgress = 0;

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
  } else if (cc === 2 || cc === 3) {
    console.log(`⚠️ CC${cc} received but not mapped (reserved for future use)`);
  } else if (cc === 4) {
    midiRotY = (value / 127) * 0.1;   // map to rotation speed
  } else if (cc === 22) {
    midiScale = 0.5 + (value / 127) * 1.5; // clamp between 0.5–2.0
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
});

onMorphUpdate((morphData) => {
  currentMorphProgress = morphData.progress;
  updateMorphVisibility();
});

function updateMorphVisibility() {
  cube.material.opacity = 1 - currentMorphProgress;
  sphere.material.opacity = currentMorphProgress;

  cube.visible = cube.material.opacity > 0.01;
  sphere.visible = sphere.material.opacity > 0.01;

  cube.material.transparent = true;
  sphere.material.transparent = true;
}

function animate() {
  requestAnimationFrame(animate);

  const rotX = (hudIdleSpin ? 0.01 : 0) + midiRotX + hudRotX;
  const rotY = (hudIdleSpin ? 0.01 : 0) + midiRotY + hudRotY;
  const scale = midiScale * hudScale;

  cube.rotation.x += rotX;
  cube.rotation.y += rotY;
  cube.scale.set(scale, scale, scale);

  sphere.rotation.x += rotX;
  sphere.rotation.y += rotY;
  sphere.scale.set(scale, scale, scale);

  renderer.render(scene, camera);
}
animate();
