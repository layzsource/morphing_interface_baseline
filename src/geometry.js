import * as THREE from 'three';
import { state } from './state.js';

console.log("🔺 geometry.js loaded");

// Scene lighting references
let ambientLight = null;
let directionalLight = null;

export function getHUDIdleSpin() {
  return state.idleSpin;
}

const canvas = document.querySelector('#app');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create consistent vertex correspondence system for morph targets
function createMorphGeometry() {
  // Use icosahedron as base for consistent vertex distribution
  const detail = 4; // Balance between quality and performance
  const baseGeometry = new THREE.IcosahedronGeometry(1, detail).toNonIndexed();
  const basePositions = baseGeometry.attributes.position.array;

  // Helper functions to map unit vectors to target shapes
  function toSphere(v) {
    return v.clone().normalize().multiplyScalar(0.8);
  }

  function toCube(v) {
    const x = v.x, y = v.y, z = v.z;
    const maxComponent = Math.max(Math.abs(x), Math.abs(y), Math.abs(z)) || 1e-6;
    return new THREE.Vector3(x / maxComponent, y / maxComponent, z / maxComponent).multiplyScalar(0.8);
  }

  function toPyramid(v) {
    // Square pyramid with apex at (0, 1, 0)
    const absY = Math.abs(v.y);
    const height = 0.75;

    if (absY > 0.7) {
      // Near the apex
      const signY = Math.sign(v.y) || 1;
      return new THREE.Vector3(0, signY * height, 0);
    } else {
      // Project to pyramid faces
      const baseScale = (1 - absY) * 0.8;
      const px = THREE.MathUtils.clamp(v.x, -1, 1) * baseScale;
      const pz = THREE.MathUtils.clamp(v.z, -1, 1) * baseScale;
      const py = v.y * height;
      return new THREE.Vector3(px, py, pz);
    }
  }

  function toTorus(v) {
    // Convert spherical coordinates to torus
    const R = 0.7, r = 0.3;
    const theta = Math.atan2(v.z, v.x);
    const phi = Math.acos(THREE.MathUtils.clamp(v.y, -1, 1));

    const cx = (R + r * Math.cos(phi)) * Math.cos(theta);
    const cy = r * Math.sin(phi);
    const cz = (R + r * Math.cos(phi)) * Math.sin(theta);
    return new THREE.Vector3(cx, cy, cz);
  }

  // Build morph target position arrays
  function buildTargetPositions(mapper) {
    const positions = new Float32Array(basePositions.length);
    for (let i = 0; i < basePositions.length; i += 3) {
      const v = new THREE.Vector3(basePositions[i], basePositions[i + 1], basePositions[i + 2]).normalize();
      const mapped = mapper(v);
      positions[i] = mapped.x;
      positions[i + 1] = mapped.y;
      positions[i + 2] = mapped.z;
    }
    return positions;
  }

  // Create morph targets
  const spherePositions = buildTargetPositions(toSphere);
  const cubePositions = buildTargetPositions(toCube);
  const pyramidPositions = buildTargetPositions(toPyramid);
  const torusPositions = buildTargetPositions(toTorus);

  // Set up geometry with morph targets
  const geometry = baseGeometry.clone();
  geometry.morphAttributes.position = [
    new THREE.Float32BufferAttribute(spherePositions, 3),   // Index 0: sphere
    new THREE.Float32BufferAttribute(cubePositions, 3),     // Index 1: cube
    new THREE.Float32BufferAttribute(pyramidPositions, 3),  // Index 2: pyramid
    new THREE.Float32BufferAttribute(torusPositions, 3)     // Index 3: torus
  ];

  return geometry;
}

// Use MeshStandardMaterial for better lighting
const material = new THREE.MeshStandardMaterial({
  color: state.color,
  wireframe: true,
  roughness: 0.7,
  metalness: 0.3
});

// Create single mesh with morph targets
const morphGeometry = createMorphGeometry();
const morphMesh = new THREE.Mesh(morphGeometry, material);
morphMesh.position.set(0, 0, 0);
scene.add(morphMesh);

// Initialize morph target influences (start with cube)
morphMesh.morphTargetInfluences = [0, 1, 0, 0]; // [sphere, cube, pyramid, torus]

// Keep reference for backward compatibility
const morphObjects = {
  mesh: morphMesh // Single mesh reference
};

// Setup lighting
setupLighting();

// Position camera for centered view
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

// Handle window resize to maintain centering
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Function to update geometry from state
function updateGeometryFromState() {
  // Update morph target influences from state
  morphMesh.morphTargetInfluences[0] = state.morphWeights.sphere;  // sphere
  morphMesh.morphTargetInfluences[1] = state.morphWeights.cube;    // cube
  morphMesh.morphTargetInfluences[2] = state.morphWeights.pyramid; // pyramid
  morphMesh.morphTargetInfluences[3] = state.morphWeights.torus;   // torus

  // Update material color from state
  material.color.set(state.color);

  // Update lighting from state
  if (ambientLight) {
    ambientLight.intensity = state.lighting.ambientIntensity;
  }
  if (directionalLight) {
    directionalLight.intensity = state.lighting.directionalIntensity;
    updateDirectionalLightPosition();
  }
}

function setupLighting() {
  // Add ambient light
  ambientLight = new THREE.AmbientLight(0xffffff, state.lighting.ambientIntensity);
  scene.add(ambientLight);

  // Add directional light
  directionalLight = new THREE.DirectionalLight(0xffffff, state.lighting.directionalIntensity);
  updateDirectionalLightPosition();
  scene.add(directionalLight);

  console.log("🎨 Lighting system initialized");
}

function updateDirectionalLightPosition() {
  if (!directionalLight) return;

  // Convert angles to radians and position the light
  const radX = (state.lighting.directionalAngleX * Math.PI) / 180;
  const radY = (state.lighting.directionalAngleY * Math.PI) / 180;

  directionalLight.position.set(
    Math.sin(radY) * Math.cos(radX) * 10,
    Math.sin(radX) * 10,
    Math.cos(radY) * Math.cos(radX) * 10
  );
}

// Export functions for telemetry and other modules
export function getVisualData() {
  return {
    ambientIntensity: state.lighting.ambientIntensity,
    directionalIntensity: state.lighting.directionalIntensity,
    color: state.color,
    hue: state.hue
  };
}

export function getMorphState() {
  return {
    current: state.morphState.current,
    previous: state.morphState.previous,
    progress: state.morphState.progress,
    weights: { ...state.morphWeights },
    isTransitioning: state.morphState.isTransitioning,
    targets: state.morphState.targets
  };
}

// Main animation loop
function animate() {
  requestAnimationFrame(animate);

  // Calculate rotation speeds from state
  const rotX = (state.idleSpin ? 0.01 : 0) + state.rotationX;
  const rotY = (state.idleSpin ? 0.01 : 0) + state.rotationY;
  const scale = state.scale;

  // Apply transformations to single morph mesh
  morphMesh.rotation.x += rotX;
  morphMesh.rotation.y += rotY;
  morphMesh.scale.set(scale, scale, scale);

  // Update geometry from current state
  updateGeometryFromState();

  renderer.render(scene, camera);
}

animate();

console.log("🔺 Geometry module initialized with state-based architecture");