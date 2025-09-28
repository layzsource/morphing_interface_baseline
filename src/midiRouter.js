import { onCC } from './midi.js';
import { state, setMorphWeight, setHue } from './state.js';

console.log("🎹 midiRouter.js loaded");

// MIDI CC to state routing
onCC(({ cc, value, device }) => {
  console.log(`🎹 CC${cc} from ${device}: ${value}`);

  if (cc === 1) {
    // CC1 → X rotation speed
    state.rotationX = (value / 127) * 0.1;
  } else if (cc === 2) {
    // CC2 → Morph blend (legacy support)
    // For now, we'll implement this as setting the dominant target weight
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
  } else if (cc === 3) {
    // CC3 → Morph target selection
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
  } else if (cc === 4) {
    // CC4 → Y rotation speed
    state.rotationY = (value / 127) * 0.1;
  } else if (cc === 10) {
    // CC10 → Sphere weight (individual target control)
    const sphereWeight = value / 127;
    setMorphWeight('sphere', sphereWeight);
  } else if (cc === 21) {
    // CC21 → Hue shift (0-127 → 0-360°) for MPK Mini compatibility
    const newHue = (value / 127) * 360;
    setHue(newHue);
  } else if (cc === 22) {
    // CC22 → Pyramid weight (individual target control)
    const pyramidWeight = value / 127;
    setMorphWeight('pyramid', pyramidWeight);
  } else if (cc === 23) {
    // CC23 → Torus weight (individual target control)
    const torusWeight = value / 127;
    setMorphWeight('torus', torusWeight);
  } else if (cc === 24) {
    // CC24 → Scale (0.5-2.0)
    state.scale = 0.5 + (value / 127) * 1.5;
  }
});

console.log("🎹 MIDI routing configured");