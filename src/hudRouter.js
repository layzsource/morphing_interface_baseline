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

    if (update.audioEnabled) {
      // Initialize microphone when first enabled
      import('./audio.js').then(({ enableAudio }) => {
        enableAudio();
      });
    } else {
      // Reset audio values immediately when disabled
      state.audio.bass = 0;
      state.audio.mid = 0;
      state.audio.treble = 0;
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
  if (update.particlesLayout !== undefined) {
    state.particles.layout = update.particlesLayout;
    console.log(`✨ Particles layout: ${update.particlesLayout}`);
    // If particles are currently enabled, reinitialize with new layout
    if (state.particles.enabled) {
      import('./particles.js').then(({ reinitParticles }) => {
        reinitParticles(scene);
      });
    }
  }
  if (update.vesselEnabled !== undefined) {
    state.vessel.enabled = update.vesselEnabled;
    console.log(`🚢 Vessel enabled: ${update.vesselEnabled}`);
  }
  if (update.vesselOpacity !== undefined) {
    state.vessel.opacity = update.vesselOpacity;
    console.log(`🚢 Vessel opacity: ${update.vesselOpacity}`);
  }
  if (update.vesselScale !== undefined) {
    state.vessel.scale = update.vesselScale;
    console.log(`🚢 Vessel scale: ${update.vesselScale}`);
  }
  if (update.vesselColor !== undefined) {
    state.vessel.color = update.vesselColor;
    console.log(`🚢 Vessel color: ${update.vesselColor}`);
  }
  if (update.vesselSpinEnabled !== undefined) {
    state.vessel.spinEnabled = update.vesselSpinEnabled;
    console.log(`🚢 Vessel spin enabled: ${update.vesselSpinEnabled}`);
  }
  if (update.vesselSpinSpeed !== undefined) {
    state.vessel.spinSpeed = update.vesselSpinSpeed;
    console.log(`🚢 Vessel spin speed: ${update.vesselSpinSpeed}`);
  }
  if (update.vesselLayout !== undefined) {
    state.vessel.layout = update.vesselLayout;
    // Update layoutIndex to match
    const layouts = ["lattice", "hoops", "shells"];
    state.vessel.layoutIndex = layouts.indexOf(update.vesselLayout);
    console.log(`🚢 Vessel layout: ${update.vesselLayout} (index: ${state.vessel.layoutIndex})`);
    // Reinitialize vessel with new layout
    import('./vessel.js').then(({ reinitVessel }) => {
      reinitVessel(scene);
    });
  }
  if (update.vesselAudioSmoothing !== undefined) {
    state.vessel.audioSmoothing = update.vesselAudioSmoothing;
    console.log(`🚢 Vessel audio smoothing: ${update.vesselAudioSmoothing}`);
  }
  if (update.vesselHueShiftRange !== undefined) {
    state.vessel.hueShiftRange = update.vesselHueShiftRange;
    console.log(`🚢 Vessel hue shift range: ${update.vesselHueShiftRange}°`);
  }
  if (update.shadowsEnabled !== undefined) {
    state.shadows.enabled = update.shadowsEnabled;
    console.log(`🌑 Shadows enabled: ${update.shadowsEnabled}`);
  }
  if (update.shadowsGround !== undefined) {
    state.shadows.ground = update.shadowsGround;
    console.log(`🌑 Ground shadow: ${update.shadowsGround}`);
  }
  if (update.shadowsBackdrop !== undefined) {
    state.shadows.backdrop = update.shadowsBackdrop;
    console.log(`🌑 Backdrop shadow: ${update.shadowsBackdrop}`);
  }
  if (update.shadowsOpacity !== undefined) {
    state.shadows.opacity = update.shadowsOpacity;
    console.log(`🌑 Shadow opacity: ${update.shadowsOpacity}`);
  }
  if (update.shadowsColor !== undefined) {
    state.shadows.color = update.shadowsColor;
    console.log(`🌑 Shadow color: ${update.shadowsColor}`);
  }

  // Handle preset actions - these will need to be routed to the preset system
  if (update.presetAction !== undefined) {
    // This will be handled by the preset router
    console.log("📟 Preset action:", update.presetAction, update.presetName);
  }
});

// Wire dropdown to state + reinit directly
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById("particle-layout-dropdown");
  if (dropdown) {
    dropdown.addEventListener("change", (e) => {
      state.particles.layout = e.target.value;
      import('./particles.js').then(({ reinitParticles }) => {
        reinitParticles(scene);
        console.log(`✨ Particle layout switched to: ${state.particles.layout}`);
      });
    });
  }

  // Velocity slider → state.particlesMotion.velocity
  const velocityInput = document.getElementById("particles-velocity");
  if (velocityInput) {
    velocityInput.addEventListener("input", (e) => {
      const value = parseFloat(e.target.value);
      state.particlesMotion.velocity = value;
      console.log(`✨ Particles velocity set to ${value}`);
    });
  }

  // Spread slider → state.particlesMotion.spread
  const spreadInput = document.getElementById("particles-spread");
  if (spreadInput) {
    spreadInput.addEventListener("input", (e) => {
      const value = parseFloat(e.target.value);
      state.particlesMotion.spread = value;
      console.log(`✨ Particles spread set to ${value}`);
    });
  }
});

console.log("📟 HUD routing configured");