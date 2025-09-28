// src/sprites.js
import * as THREE from 'three';
import { state } from './state.js';

let spriteGroup;

export function initSprites(scene) {
  spriteGroup = new THREE.Group();

  const spriteMaterial = new THREE.SpriteMaterial({
    color: state.color,
    transparent: true,
    opacity: 0.4,
  });

  // Generate ~200 sprites
  for (let i = 0; i < 200; i++) {
    const sprite = new THREE.Sprite(spriteMaterial.clone());
    sprite.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );
    sprite.scale.set(0.1, 0.1, 0.1);
    spriteGroup.add(sprite);
  }

  scene.add(spriteGroup);
  console.log("✨ Sprites initialized");
}

export function updateSprites() {
  if (!spriteGroup) return;

  // Audio-reactive opacity (only when audio reactive enabled)
  const audioBoost = state.audioReactive
    ? (state.audio.bass + state.audio.mid + state.audio.treble) / 3
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