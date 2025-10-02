# MIDI Mappings for Emoji Mandala Performance

## Phase 11.7.23: Interactive Performance Controls

### MIDI CC Mappings

| CC Number | Control | Range | Description |
|-----------|---------|-------|-------------|
| **CC20** | Symmetry | 2-12 | Radial symmetry fold (2-12 spokes) |
| **CC21** | Ring Count | 1-8 | Number of concentric rings |
| **CC22** | Rotation Speed | 0-0.1 | Global mandala rotation speed |
| **CC23** | Scale Sequence | 0-127 | Advance to next scale in sequence (trigger) |

### MIDI Implementation

To enable MIDI control:

1. Enable **Performance Mode** in HUD
2. Connect MIDI controller
3. Map CC knobs to the numbers above
4. Adjust in real-time during performance

### Example MIDI Setup

```javascript
// In midiRouter.js or MIDI handler:
function handleMIDICC(cc, value) {
  const { midiMappings } = state.emojiMandala;

  if (cc === midiMappings.symmetry) {
    // Map 0-127 → 2-12
    state.emojiMandala.symmetry = Math.floor(2 + (value / 127) * 10);
  }
  else if (cc === midiMappings.ringCount) {
    // Map 0-127 → 1-8
    state.emojiMandala.rings = Math.floor(1 + (value / 127) * 7);
  }
  else if (cc === midiMappings.rotationSpeed) {
    // Map 0-127 → 0-0.1
    state.emojiMandala.rotationSpeed = (value / 127) * 0.1;
  }
  else if (cc === midiMappings.scaleSequence && value > 64) {
    // Trigger scale advance (when value crosses threshold)
    const { scaleSequence, scaleSequenceIndex } = state.emojiMandala;
    const nextIndex = (scaleSequenceIndex + 1) % scaleSequence.length;
    state.emojiMandala.scaleSequenceIndex = nextIndex;
    state.emojiMandala.scale = scaleSequence[nextIndex];
    console.log(`🎛️ MIDI → Scale: ${scaleSequence[nextIndex]}`);
  }
}
```

### Performance Workflow

1. **Setup**
   - Enable Mandala Mode
   - Enable Musical Mode
   - Enable Performance Mode
   - Set initial scale sequence (e.g., "Major Dorian Mixolydian Phrygian")

2. **Live Control**
   - **CC20** (Symmetry): Morph between 2-12 fold patterns
   - **CC21** (Rings): Add/remove rings dynamically
   - **CC22** (Rotation): Speed up/slow down mandala spin
   - **CC23** (Scale): Manually advance through scale sequence

3. **Audio Reactivity**
   - Bass → Inner rings scale
   - Mids → Middle rings scale
   - Treble → Outer rings rotation speed
   - MIDI notes → Individual emoji pulse

### Visual Feedback

Console logs all parameter changes:
```
🎛️ Mandala rings: 5
🎛️ Mandala symmetry: 8-fold
🎛️ Scale sequence → Dorian
🎛️ Performance mode: ON
```

### Future Extensions

- **CC24-27**: Per-ring rotation speed multipliers
- **CC28**: Mandala scale/size
- **CC29**: Fusion threshold
- **Note Pads**: Swap emojis per ring (0-11 chromatic)
- **Pitch Bend**: Continuous scale interpolation
