import { onHUDUpdate } from './hud.js';
import { state, setMorphWeight, setMorphWeights, setColor, setHue } from './state.js';
import { scene } from './geometry.js';
import { initParticles, destroyParticles } from './particles.js';

console.log("📟 hudRouter.js loaded");

// HUD updates to state routing
onHUDUpdate((update) => {
  if (update.idleSpin !== undefined) {
    state.idleSpin = update.idleSpin;
  }
  if (update.rotX !== undefined) {
    state.rotationX = update.rotX;
  }
  if (update.rotY !== undefined) {
    state.rotationY = update.rotY;
  }
  if (update.scale !== undefined) {
    state.scale = update.scale;
  }
  if (update.morphTarget !== undefined) {
    // Update morph state and reset weights to show only selected target
    state.morphState.previous = state.morphState.current;
    state.morphState.current = update.morphTarget;

    // Reset all weights and set current target to 1.0
    state.morphState.targets.forEach(target => {
      state.morphWeights[target] = 0;
    });
    state.morphWeights[update.morphTarget] = 1.0;
  }
  if (update.morphBlend !== undefined) {
    // Legacy morph blend support - blend between current and next target
    const targets = state.morphState.targets;
    const currentIndex = targets.indexOf(state.morphState.current);
    const nextIndex = (currentIndex + 1) % targets.length;
    const currentTarget = targets[currentIndex];
    const nextTarget = targets[nextIndex];

    // Reset all weights and blend between current and next
    targets.forEach(target => {
      state.morphWeights[target] = 0;
    });
    state.morphWeights[currentTarget] = 1 - update.morphBlend;
    state.morphWeights[nextTarget] = update.morphBlend;
  }
  if (update.targetWeight !== undefined) {
    // Individual target weight control
    const { target, weight } = update.targetWeight;
    setMorphWeight(target, weight);
  }
  if (update.audioEnabled !== undefined) {
    state.audio.enabled = update.audioEnabled;
    state.audioReactive = update.audioEnabled;
    console.log(`🎵 Audio Reactive: ${update.audioEnabled}`);

    // Initialize microphone when first enabled
    if (update.audioEnabled) {
      import('./audio.js').then(({ enableAudio }) => {
        enableAudio();
      });
    }
  }
  if (update.audioSensitivity !== undefined) {
    state.audio.sensitivity = update.audioSensitivity;
  }
  if (update.ambientIntensity !== undefined) {
    state.lighting.ambientIntensity = update.ambientIntensity;
  }
  if (update.directionalIntensity !== undefined) {
    state.lighting.directionalIntensity = update.directionalIntensity;
  }
  if (update.directionalAngleX !== undefined) {
    state.lighting.directionalAngleX = update.directionalAngleX;
  }
  if (update.directionalAngleY !== undefined) {
    state.lighting.directionalAngleY = update.directionalAngleY;
  }
  if (update.color !== undefined) {
    setColor(update.color);
  }
  if (update.particlesEnabled !== undefined) {
    state.particlesEnabled = update.particlesEnabled;
    if (update.particlesEnabled) {
      initParticles(scene, state.particlesCount);
      console.log(`✨ Particles enabled (count: ${state.particlesCount})`);
    } else {
      destroyParticles(scene);
      console.log("✨ Particles disabled");
    }
  }
  if (update.particlesCount !== undefined) {
    state.particlesCount = update.particlesCount;
    // If particles are currently enabled, recreate them with new count
    if (state.particlesEnabled) {
      destroyParticles(scene);
      initParticles(scene, state.particlesCount);
      console.log(`✨ Particles recreated with count: ${state.particlesCount}`);
    }
  }

  // Handle preset actions - these will need to be routed to the preset system
  if (update.presetAction !== undefined) {
    // This will be handled by the preset router
    console.log("📟 Preset action:", update.presetAction, update.presetName);
  }
});

console.log("📟 HUD routing configured");