import { onCC } from './midi.js';
import { state, setMorphWeight, setHue } from './state.js';
import { applyMIDIBinding } from './controlBindings.js';

console.log("🎹 midiRouter.js loaded");

// Phase 11.2.3: Unified Control Binding System
// Most MIDI CCs now route through applyMIDIBinding() for centralized control flow.
// Exception: CC2/CC3 have complex blend logic that updates multiple state paths,
// so they remain as special cases with direct state manipulation + morphBaseWeights sync.

// MIDI CC to state routing
onCC(({ cc, value, device }) => {
  console.log(`🎹 CC${cc} from ${device}: ${value}`);

  // Phase 11.2.3: Try unified binding system first
  // This handles: CC10 (sphere weight), CC20-23 (color intensities, morph weights, hue)
  if (applyMIDIBinding(cc, value)) {
    // Binding found and applied via controlBindings.js
    return;
  }

  // Phase 11.2.3: Special cases below (complex logic not suitable for simple binding)
  // CC2 (morph blend), CC3 (morph target), CC1/CC4 (rotation), CC7/CC8 (vessel), CC24 (scale)

  if (cc === 1) {
    // CC1 → X rotation speed
    state.rotationX = (value / 127) * 0.1;
  } else if (cc === 2) {
    // CC2 → Morph blend (legacy support)
    // Phase 11.2.2: Updated to sync with morphBaseWeights array
    const intensity = value / 127;
    // Simple blend: reduce current weights and blend toward next target
    const targets = state.morphState.targets;
    const currentIndex = targets.indexOf(state.morphState.current);
    const nextIndex = (currentIndex + 1) % targets.length;
    const currentTarget = targets[currentIndex];
    const nextTarget = targets[nextIndex];

    // Reset all weights and blend between current and next
    targets.forEach(target => {
      state.morphWeights[target] = 0;
    });
    state.morphWeights[currentTarget] = 1 - intensity;
    state.morphWeights[nextTarget] = intensity;

    // Phase 11.2.2: Sync to morphBaseWeights array [sphere, cube, pyramid, torus]
    state.morphBaseWeights = [0, 0, 0, 0];
    state.morphBaseWeights[currentIndex] = 1 - intensity;
    state.morphBaseWeights[nextIndex] = intensity;

    console.log(`🎹 CC2: Morph blend ${currentTarget}→${nextTarget} (${(intensity * 100).toFixed(0)}%)`);
  } else if (cc === 3) {
    // CC3 → Morph target selection
    // Phase 11.2.2: Updated to sync with morphBaseWeights array
    const targets = ["cube", "sphere", "pyramid", "torus"];
    let targetIndex;
    if (value < 32) targetIndex = 0;      // 0-31 → Cube
    else if (value < 64) targetIndex = 1; // 32-63 → Sphere
    else if (value < 96) targetIndex = 2; // 64-95 → Pyramid
    else targetIndex = 3;                 // 96-127 → Torus

    const newTarget = targets[targetIndex];

    // Update morph state and set weights
    state.morphState.previous = state.morphState.current;
    state.morphState.current = newTarget;

    // Reset all weights and set current target to 1.0
    targets.forEach(target => {
      state.morphWeights[target] = 0;
    });
    state.morphWeights[newTarget] = 1.0;

    // Phase 11.2.2: Sync to morphBaseWeights array [sphere, cube, pyramid, torus]
    const morphTargetIndex = ['sphere', 'cube', 'pyramid', 'torus'].indexOf(newTarget);
    state.morphBaseWeights = [0, 0, 0, 0];
    if (morphTargetIndex >= 0) {
      state.morphBaseWeights[morphTargetIndex] = 1.0;
    }

    console.log(`🎹 CC3: Morph target → ${newTarget}`);
  } else if (cc === 4) {
    // CC4 → Y rotation speed
    state.rotationY = (value / 127) * 0.1;
  } else if (cc === 7) {
    // CC7 → Vessel opacity (volume fader on MPK Mini)
    state.vessel.opacity = value / 127;
  } else if (cc === 8) {
    // CC8 → Vessel layout cycling (knob #2 on MPK Mini)
    if (value > 64) { // Detect knob turn or button press
      import('./vessel.js').then(({ cycleLayout }) => {
        import('./geometry.js').then(({ scene }) => {
          cycleLayout(scene);
        });
      });
    }
  } else if (cc === 10) {
    // Phase 11.2.3: CC10 now handled by unified binding system (morph.sphereWeight)
    // Keeping this as fallback in case binding system doesn't handle it
    console.log(`🎹 CC10 fallback: sphere weight (should be handled by binding system)`);
  } else if (cc === 21) {
    // Phase 11.2.3: CC21 mapped to both vessel.audioIntensity and particles.hueShift in binding system
    // Keeping legacy hue shift behavior as fallback
    const newHue = (value / 127) * 360;
    setHue(newHue);
    console.log(`🎹 CC21 fallback: hue shift (binding system also active)`);
  } else if (cc === 22) {
    // Phase 11.2.3: CC22 now handled by unified binding system (morph.pyramidWeight / shadows.audioIntensity)
    // Note: CC22 has dual mapping conflict - will use binding system priority
    console.log(`🎹 CC22 fallback: pyramid weight (should be handled by binding system)`);
  } else if (cc === 23) {
    // Phase 11.2.3: CC23 now handled by unified binding system (morph.torusWeight / particles.audioIntensity)
    // Note: CC23 has dual mapping conflict - will use binding system priority
    console.log(`🎹 CC23 fallback: torus weight (should be handled by binding system)`);
  } else if (cc === 24) {
    // CC24 → Scale (0.5-2.0)
    state.scale = 0.5 + (value / 127) * 1.5;
  }
});

console.log("🎹 MIDI routing configured");