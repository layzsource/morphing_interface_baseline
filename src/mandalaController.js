// src/mandalaController.js
// Phase 11.7.24 — MandalaController Starter Class
// Centralized mandala logic with clean update hooks for HUD and MIDI

import * as THREE from 'three';
import { state } from './state.js';

console.log("🎛️ mandalaController.js loaded");

// Musical scale definitions (intervals from root)
const MUSICAL_SCALES = {
  Major: [0, 2, 4, 5, 7, 9, 11], // Ionian
  Minor: [0, 2, 3, 5, 7, 8, 10], // Natural minor (Aeolian)
  Pentatonic: [0, 2, 4, 7, 9], // Major pentatonic
  Dorian: [0, 2, 3, 5, 7, 9, 10],
  Phrygian: [0, 1, 3, 5, 7, 8, 10],
  Lydian: [0, 2, 4, 6, 7, 9, 11],
  Mixolydian: [0, 2, 4, 5, 7, 9, 10],
  Aeolian: [0, 2, 3, 5, 7, 8, 10], // Natural minor
  Locrian: [0, 1, 3, 5, 6, 8, 10],
  Chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
};

// Circle of Fifths ordering (chromatic positions)
const CIRCLE_OF_FIFTHS = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];

export class MandalaController {
  constructor(scene, options = {}) {
    this.scene = scene;

    // Core mandala parameters with defaults
    this.rings = options.rings ?? 3;
    this.symmetry = options.symmetry ?? 6;
    this.scale = options.scale ?? "Major";
    this.mode = options.mode ?? "Ionian"; // Mode is same as scale for now
    this.emoji = options.emoji ?? "🍕";

    // Phase 11.7.26: Layout mode
    this.layoutMode = options.layoutMode ?? "radial"; // 'radial' | 'spiral' | 'grid'
    this.spiralOffset = options.spiralOffset ?? (Math.PI / 6); // Spiral rotation per ring (30 degrees)

    // Phase 11.7.27: Audio-reactive mandala
    this.mandalaAudioReactive = options.mandalaAudioReactive ?? true; // Mandala-specific audio reactivity
    this.mandalaSensitivity = options.mandalaSensitivity ?? 1.0; // Audio sensitivity (0-2.0)
    this.radiusPulse = 0; // Current radius pulse amount
    this.anglePulse = 0; // Current angle twist amount

    // Ring-specific settings
    this.ringRadii = options.ringRadii ?? [0, 2, 4, 6, 8, 10, 12, 14]; // Up to 8 rings
    this.ringRotationSpeeds = options.ringRotationSpeeds ?? [0, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04];
    this.ringRotations = Array(8).fill(0); // Track current rotation per ring

    // Audio reactivity settings
    this.audioModulation = options.audioModulation ?? true;
    this.layeredAudio = options.layeredAudio ?? true;
    this.differentialRotation = options.differentialRotation ?? true;

    // Global rotation
    this.rotation = 0;
    this.rotationSpeed = options.rotationSpeed ?? 0.02;

    // Musical mode settings
    this.musicalMode = options.musicalMode ?? false;
    this.rootNote = options.rootNote ?? 60; // C4

    // Scale sequencing
    this.scaleSequenceEnabled = options.scaleSequenceEnabled ?? false;
    this.scaleSequence = options.scaleSequence ?? ['Major', 'Dorian', 'Mixolydian', 'Phrygian'];
    this.scaleSequenceIndex = 0;
    this.scaleSequenceInterval = options.scaleSequenceInterval ?? 4000; // ms
    this.lastScaleChange = performance.now();

    // Performance mode
    this.performanceMode = options.performanceMode ?? false;

    // Emoji layout (per ring)
    this.emojiLayout = options.emojiLayout ?? ['🍕', '🌶️', '🍄'];

    // Sync with state.emojiMandala
    this.syncToState();

    console.log(`🎛️ MandalaController initialized → rings=${this.rings} | symmetry=${this.symmetry} | scale=${this.scale} (${this.mode}) | layout=${this.layoutMode} | emoji=${this.emoji}`);
  }

  // Sync controller state to global state.emojiMandala
  syncToState() {
    state.emojiMandala.rings = this.rings;
    state.emojiMandala.symmetry = this.symmetry;
    state.emojiMandala.scale = this.scale;
    state.emojiMandala.rotationSpeed = this.rotationSpeed;
    state.emojiMandala.rotation = this.rotation;
    state.emojiMandala.audioModulation = this.audioModulation;
    state.emojiMandala.layeredAudio = this.layeredAudio;
    state.emojiMandala.differentialRotation = this.differentialRotation;
    state.emojiMandala.ringRotationSpeeds = this.ringRotationSpeeds;
    state.emojiMandala.musicalMode = this.musicalMode;
    state.emojiMandala.rootNote = this.rootNote;
    state.emojiMandala.layout = this.emojiLayout;
    state.emojiMandala.scaleSequenceEnabled = this.scaleSequenceEnabled;
    state.emojiMandala.scaleSequence = this.scaleSequence;
    state.emojiMandala.scaleSequenceIndex = this.scaleSequenceIndex;
    state.emojiMandala.scaleSequenceInterval = this.scaleSequenceInterval;
    state.emojiMandala.lastScaleChange = this.lastScaleChange;
    state.emojiMandala.performanceMode = this.performanceMode;
    // Phase 11.7.26: Layout mode
    state.emojiMandala.layoutMode = this.layoutMode;
    // Phase 11.7.27: Audio-reactive mandala
    state.emojiMandala.mandalaAudioReactive = this.mandalaAudioReactive;
    state.emojiMandala.mandalaSensitivity = this.mandalaSensitivity;
    state.emojiMandala.radiusPulse = this.radiusPulse;
    state.emojiMandala.anglePulse = this.anglePulse;
  }

  // Update mandala (called every frame from particle system or main loop)
  // Phase 11.7.30: Enhanced audio reactivity for ring expansion, symmetry pulse, emoji size
  update(audioLevel = 0) {
    const audioData = state?.audio || { bass: 0, mid: 0, treble: 0, level: 0 };
    const bass = audioData.bass ?? 0;
    const mid = audioData.mid ?? 0;
    const treble = audioData.treble ?? 0;
    const level = audioLevel || audioData.level || 0;

    // Phase 11.7.30: Calculate audio-reactive pulses
    if (this.mandalaAudioReactive && state.audioReactive) {
      const sensitivity = this.mandalaSensitivity;

      // Ring Expansion: radius = baseRadius * (1 + audioLevel * 0.5)
      this.radiusPulse = level * sensitivity * 0.5; // 0-50% radius expansion

      // Symmetry Pulse: modulate rotation by audio
      this.anglePulse = level * sensitivity * 0.02; // Subtle angular pulse

      // Emoji Size: scale = 0.5 + audioLevel * sensitivity
      const emojiScale = 0.5 + (level * sensitivity);

      // Phase 11.7.30: Log audio reactivity state (2% sample rate)
      if (Math.random() < 0.02) {
        console.log(`🔊 AudioLevel=${level.toFixed(2)} → rings expanded x${(1 + this.radiusPulse).toFixed(2)}, symmetry pulse ${this.anglePulse.toFixed(3)}, emoji scale x${emojiScale.toFixed(2)}`);
      }

      // Store emoji scale for particle system to read
      state.emojiMandala.emojiScale = emojiScale;
    } else {
      // Reset pulses when audio off
      this.radiusPulse = 0;
      this.anglePulse = 0;
      state.emojiMandala.emojiScale = 1.0; // Default scale
    }

    // Scale sequencing
    if (this.scaleSequenceEnabled && this.scaleSequence && this.scaleSequence.length > 0) {
      const now = performance.now();
      if (now - this.lastScaleChange >= this.scaleSequenceInterval) {
        const nextIndex = (this.scaleSequenceIndex + 1) % this.scaleSequence.length;
        this.scaleSequenceIndex = nextIndex;
        this.scale = this.scaleSequence[nextIndex];
        this.lastScaleChange = now;
        console.log(`🎛️ Scale sequence → ${this.scale}`);
        this.syncToState();
      }
    }

    // Update ring rotations (differential rotation)
    if (this.differentialRotation) {
      for (let ringIndex = 0; ringIndex < this.rings; ringIndex++) {
        const ringSpeed = this.ringRotationSpeeds[ringIndex] || 0.01;

        // Audio-reactive: outer rings (treble) spin faster
        const audioBoost = this.audioModulation ? (
          ringIndex === 0 ? bass * 0.2 :
          ringIndex <= 2 ? mid * 0.3 :
          treble * 0.5
        ) : 0;

        const effectiveSpeed = ringSpeed * (1 + audioBoost);
        this.ringRotations[ringIndex] += effectiveSpeed;
      }
    }

    // Update global rotation
    const baseRotSpeed = this.rotationSpeed ?? 0.02;
    const finalRotSpeed = this.audioModulation ? baseRotSpeed * (1 + level * 2) : baseRotSpeed;
    this.rotation += finalRotSpeed;

    // Sync rotation back to state
    state.emojiMandala.rotation = this.rotation;
  }

  // Set number of rings (1-8)
  setRings(n) {
    const oldRings = this.rings;
    this.rings = Math.max(1, Math.min(8, Math.floor(n)));

    // Extend emoji layout if needed
    while (this.emojiLayout.length < this.rings) {
      const defaultEmojis = ['🍕', '🌶️', '🍄', '🌟', '💎', '🔥', '💧', '🌈'];
      this.emojiLayout.push(defaultEmojis[this.emojiLayout.length % defaultEmojis.length]);
    }

    this.syncToState();
    console.log(`🎛️ Mandala update → rings=${this.rings} (was ${oldRings}) | symmetry=${this.symmetry} | scale=${this.scale} (${this.mode}) | emoji=${this.emoji}`);
  }

  // Set symmetry (2-12)
  setSymmetry(n) {
    const oldSymmetry = this.symmetry;
    this.symmetry = Math.max(2, Math.min(12, Math.floor(n)));
    this.syncToState();
    console.log(`🎛️ Mandala update → rings=${this.rings} | symmetry=${this.symmetry} (was ${oldSymmetry}) | scale=${this.scale} (${this.mode}) | emoji=${this.emoji}`);
  }

  // Set scale and mode (remaps notes for musical mode)
  setScale(scale, mode = null) {
    const oldScale = this.scale;
    const oldMode = this.mode;

    // Validate scale
    if (MUSICAL_SCALES[scale]) {
      this.scale = scale;
      this.mode = mode || scale; // Mode defaults to scale name
    } else {
      console.warn(`🎛️ Invalid scale: ${scale}, keeping current scale ${this.scale}`);
      return;
    }

    // If musical mode is enabled, remap notes
    if (this.musicalMode) {
      this.remapNotes();
    }

    this.syncToState();
    console.log(`🎛️ Mandala update → rings=${this.rings} | symmetry=${this.symmetry} | scale=${this.scale} (${this.mode}) [was ${oldScale} (${oldMode})] | emoji=${this.emoji}`);
  }

  // Remap notes for musical mode (circle of fifths progression)
  remapNotes() {
    const scaleIntervals = MUSICAL_SCALES[this.scale] || MUSICAL_SCALES.Major;

    // Generate note-to-emoji mapping based on circle of fifths
    const noteToEmoji = {};
    scaleIntervals.forEach((interval, index) => {
      const midiNote = this.rootNote + interval;
      const emojiIndex = index % this.emojiLayout.length;
      noteToEmoji[midiNote] = this.emojiLayout[emojiIndex];
    });

    state.emojiMandala.noteToEmoji = noteToEmoji;
    console.log(`🎼 Notes remapped for ${this.scale} scale (root=${this.rootNote}):`, noteToEmoji);
  }

  // Swap emoji (updates default emoji or specific ring)
  swapEmoji(emoji, ringIndex = null) {
    const oldEmoji = this.emoji;

    if (ringIndex !== null && ringIndex >= 0 && ringIndex < this.rings) {
      // Swap emoji for specific ring
      const oldRingEmoji = this.emojiLayout[ringIndex];
      this.emojiLayout[ringIndex] = emoji;
      state.emojiMandala.layout = [...this.emojiLayout];
      console.log(`🎛️ Mandala update → Ring ${ringIndex} emoji: ${oldRingEmoji} → ${emoji} | rings=${this.rings} | symmetry=${this.symmetry} | scale=${this.scale} (${this.mode})`);
    } else {
      // Swap default emoji
      this.emoji = emoji;
      console.log(`🎛️ Mandala update → rings=${this.rings} | symmetry=${this.symmetry} | scale=${this.scale} (${this.mode}) | emoji=${emoji} (was ${oldEmoji})`);
    }

    this.syncToState();
  }

  // Set rotation speed
  setRotationSpeed(speed) {
    const oldSpeed = this.rotationSpeed;
    this.rotationSpeed = Math.max(0, Math.min(0.2, speed));
    this.syncToState();
    console.log(`🎛️ Mandala rotation speed: ${this.rotationSpeed.toFixed(3)} (was ${oldSpeed.toFixed(3)})`);
  }

  // Phase 11.7.26: Set layout mode
  setLayout(mode) {
    const validModes = ['radial', 'spiral', 'grid'];
    if (!validModes.includes(mode)) {
      console.warn(`🎛️ Invalid layout mode: ${mode}, keeping current mode ${this.layoutMode}`);
      return;
    }

    const oldMode = this.layoutMode;
    this.layoutMode = mode;
    this.syncToState();

    // Log with appropriate emoji
    const emoji = mode === 'spiral' ? '🌀' : mode === 'grid' ? '🔲' : '⭕';
    console.log(`${emoji} Mandala layout set to ${mode.charAt(0).toUpperCase() + mode.slice(1)} (was ${oldMode}) | rings=${this.rings} | symmetry=${this.symmetry}`);
  }

  // Enable/disable musical mode
  setMusicalMode(enabled) {
    this.musicalMode = enabled;
    if (enabled) {
      this.remapNotes();
    }
    this.syncToState();
    console.log(`🎼 Musical mode: ${enabled ? 'ON' : 'OFF'} (scale=${this.scale}, root=${this.rootNote})`);
  }

  // Set root note (MIDI note number)
  setRootNote(midiNote) {
    this.rootNote = Math.max(0, Math.min(127, Math.floor(midiNote)));
    if (this.musicalMode) {
      this.remapNotes();
    }
    this.syncToState();

    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const noteName = noteNames[this.rootNote % 12];
    const octave = Math.floor(this.rootNote / 12) - 1;
    console.log(`🎼 Root note: ${noteName}${octave} (MIDI ${this.rootNote})`);
  }

  // Enable/disable audio modulation
  setAudioModulation(enabled) {
    this.audioModulation = enabled;
    this.syncToState();
    console.log(`🎛️ Audio modulation: ${enabled ? 'ON' : 'OFF'}`);
  }

  // Enable/disable layered audio
  setLayeredAudio(enabled) {
    this.layeredAudio = enabled;
    this.syncToState();
    console.log(`🎛️ Layered audio: ${enabled ? 'ON (rings react to different bands)' : 'OFF'}`);
  }

  // Enable/disable differential rotation
  setDifferentialRotation(enabled) {
    this.differentialRotation = enabled;
    this.syncToState();
    console.log(`🎛️ Differential rotation: ${enabled ? 'ON (each ring independent)' : 'OFF (unified)'}`);
  }

  // Enable/disable scale sequencing
  setScaleSequencing(enabled) {
    this.scaleSequenceEnabled = enabled;
    if (enabled) {
      this.lastScaleChange = performance.now();
    }
    this.syncToState();
    console.log(`🎛️ Scale sequencing: ${enabled ? 'ON' : 'OFF'} (${this.scaleSequence.join(' → ')})`);
  }

  // Set scale sequence
  setScaleSequence(scales) {
    this.scaleSequence = scales.filter(s => MUSICAL_SCALES[s]);
    this.syncToState();
    console.log(`🎛️ Scale sequence updated: ${this.scaleSequence.join(' → ')}`);
  }

  // Enable/disable performance mode
  setPerformanceMode(enabled) {
    this.performanceMode = enabled;
    this.syncToState();
    console.log(`🎛️ Performance mode: ${enabled ? 'ON' : 'OFF'}`);
  }

  // Phase 11.7.27: Enable/disable mandala audio reactivity
  setMandalaAudioReactive(enabled) {
    this.mandalaAudioReactive = enabled;
    this.syncToState();
    console.log(`🎵 Mandala audio-reactive ${enabled ? 'ON' : 'OFF'} (sensitivity=${this.mandalaSensitivity.toFixed(2)})`);
  }

  // Phase 11.7.27: Set mandala audio sensitivity (0-2.0)
  setMandalaSensitivity(sensitivity) {
    const oldSensitivity = this.mandalaSensitivity;
    this.mandalaSensitivity = Math.max(0, Math.min(2.0, sensitivity));
    this.syncToState();
    console.log(`🎵 Mandala sensitivity: ${(this.mandalaSensitivity * 100).toFixed(0)}% (was ${(oldSensitivity * 100).toFixed(0)}%)`);
  }

  // Get current state snapshot
  getState() {
    return {
      rings: this.rings,
      symmetry: this.symmetry,
      scale: this.scale,
      mode: this.mode,
      emoji: this.emoji,
      emojiLayout: [...this.emojiLayout],
      rotation: this.rotation,
      rotationSpeed: this.rotationSpeed,
      audioModulation: this.audioModulation,
      layeredAudio: this.layeredAudio,
      differentialRotation: this.differentialRotation,
      musicalMode: this.musicalMode,
      rootNote: this.rootNote,
      scaleSequenceEnabled: this.scaleSequenceEnabled,
      scaleSequence: [...this.scaleSequence],
      performanceMode: this.performanceMode,
      layoutMode: this.layoutMode, // Phase 11.7.26
      spiralOffset: this.spiralOffset // Phase 11.7.26
    };
  }

  // Destroy/cleanup
  destroy() {
    // Cleanup if needed
    console.log("🎛️ MandalaController destroyed");
  }
}

console.log("🎛️ MandalaController class ready");
