// src/sprites.js
import * as THREE from 'three';
import { getEffectiveAudio, state } from './state.js';

let spriteGroup;
let spriteScene;
// Phase 11.4.3: One-time audio gate logging flag
let spritesAudioGateLogged = false;

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

  // Phase 11.4.3: Use stable audio gate
  const { bass, mid, treble, level } = getEffectiveAudio();
  const audioLevel = (bass + mid + treble) / 3;

  // Phase 11.4.3B: Freeze check - log once when clamped
  if (!state.audioReactive && !spritesAudioGateLogged) {
    console.log("🎵 Sprites update clamped to base (audio OFF)");
    spritesAudioGateLogged = true;
  } else if (state.audioReactive && spritesAudioGateLogged) {
    // Reset flag when audio reactive is turned back on
    spritesAudioGateLogged = false;
  }

  spriteGroup.children.forEach((sprite, i) => {
    const angle = Date.now() * 0.001 + i;

    // Phase 11.5.1: Use morphBaseWeights (stable) + audio deltas when ON, base only when OFF
    let sphereWeight = 0;
    let cubeWeight = 0;
    let pyramidWeight = 0;

    if (state.audioReactive && state.morphAudioWeights) {
      // Audio ON: use base + audio deltas (matches geometry.js additive system)
      sphereWeight = (state.morphBaseWeights?.[0] || 0) + (state.morphAudioWeights[0] || 0);
      cubeWeight = (state.morphBaseWeights?.[1] || 0) + (state.morphAudioWeights[1] || 0);
      pyramidWeight = (state.morphBaseWeights?.[2] || 0) + (state.morphAudioWeights[2] || 0);
    } else {
      // Audio OFF: use base only (no audio modulation)
      sphereWeight = state.morphBaseWeights?.[0] || 0;
      cubeWeight = state.morphBaseWeights?.[1] || 0;
      pyramidWeight = state.morphBaseWeights?.[2] || 0;
    }

    sprite.position.x = Math.sin(angle) * (2 + sphereWeight * 3);
    sprite.position.y = Math.cos(angle) * (2 + cubeWeight * 3);
    sprite.position.z = Math.sin(angle * 0.5) * (2 + pyramidWeight * 3);

    sprite.material.color.set(state.color);
    // Phase 11.4.3B: Base opacity when audio off, modulated when on
    sprite.material.opacity = state.audioReactive ? (0.2 + audioLevel * 0.8) : 0.2;
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