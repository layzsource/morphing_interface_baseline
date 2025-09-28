import * as THREE from 'three';
import { onCC } from './midi.js';

console.log("🔺 geometry.js loaded");

// MIDI influence variables
let midiRotX = 0;
let midiRotY = 0;
let midiScale = 1;

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

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01 + midiRotX;
  cube.rotation.y += 0.01 + midiRotY;
  cube.scale.set(midiScale, midiScale, midiScale);
  renderer.render(scene, camera);
}
animate();
