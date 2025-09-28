import * as THREE from 'three';
import { onCC } from './midi.js';
import { onHUDUpdate } from './hud.js';

console.log("🔺 geometry.js loaded");

// MIDI influence variables
let midiRotX = 0;
let midiRotY = 0;
let midiScale = 1;

// HUD influence variables
let hudRotX = 0.01;
let hudRotY = 0.01;
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

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

onCC(({ cc, value }) => {
  if (cc === 1) {
    midiRotX = (value / 127) * 0.1;   // map to rotation speed
  } else if (cc === 21) {
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

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += (hudIdleSpin ? 0.01 : 0) + midiRotX + hudRotX;
  cube.rotation.y += (hudIdleSpin ? 0.01 : 0) + midiRotY + hudRotY;
  cube.scale.set(midiScale * hudScale, midiScale * hudScale, midiScale * hudScale);
  renderer.render(scene, camera);
}
animate();
