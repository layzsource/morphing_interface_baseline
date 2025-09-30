// src/sprites.js
import * as THREE from 'three';
import { state } from './state.js';
import { getEffectiveAudio } from './audio.js'; // Audio Gating Fix

let spriteGroup;
let spriteScene;

export function initSprites(scene) {
  spriteScene = scene;
  spriteGroup = new THREE.Group();

  const spriteMaterial = new THREE.SpriteMaterial({
    color: state.color,
    transparent: true,
    opacity: 0.4,
  });

  // Generate sprites based on state.sprites.count
  const count = state.sprites.count || 200;
  for (let i = 0; i < count; i++) {
    const sprite = new THREE.Sprite(spriteMaterial.clone());
    sprite.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );
    sprite.scale.set(0.1, 0.1, 0.1);
    spriteGroup.add(sprite);
  }

  spriteGroup.visible = state.sprites.enabled;
  scene.add(spriteGroup);
  console.log(`✨ Sprites initialized (count: ${count}, enabled: ${state.sprites.enabled})`);
}

export function updateSprites() {
  if (!spriteGroup) return;

  // Update visibility based on state
  spriteGroup.visible = state.sprites.enabled;

  if (!state.sprites.enabled) return;

  // Audio Gating Fix: Get audio data through centralized gating
  const audioData = getEffectiveAudio();

  // Audio-reactive opacity (only when audio reactive enabled)
  const audioBoost = state.audioReactive
    ? (audioData.bass + audioData.mid + audioData.treble) / 3
    : 0;

  spriteGroup.children.forEach((sprite, i) => {
    const angle = Date.now() * 0.001 + i;
    sprite.position.x = Math.sin(angle) * (2 + state.morphWeights.sphere * 3);
    sprite.position.y = Math.cos(angle) * (2 + state.morphWeights.cube * 3);
    sprite.position.z = Math.sin(angle * 0.5) * (2 + state.morphWeights.pyramid * 3);

    sprite.material.color.set(state.color);
    sprite.material.opacity = 0.2 + audioBoost * 0.8;
  });
}

export function destroySprites() {
  if (!spriteGroup || !spriteScene) return;

  // Remove from scene
  spriteScene.remove(spriteGroup);

  // Dispose of all sprite materials and clear group
  spriteGroup.children.forEach(sprite => {
    if (sprite.material) {
      sprite.material.dispose();
    }
  });

  spriteGroup.clear();
  spriteGroup = null;
  console.log("✨ Sprites destroyed");
}

export function reinitSprites(scene) {
  destroySprites();
  initSprites(scene);
}