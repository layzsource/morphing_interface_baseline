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

// Phase 11.7.36: Color palettes for mandala rings
const COLOR_PALETTES = {
  Classic: ['#ff66ff', '#ff99ff', '#ffccff', '#ffddff', '#ffeeff', '#fff0ff', '#fff5ff', '#fffaff'],
  Warm: ['#ff4500', '#ff6347', '#ff7f50', '#ffa07a', '#ffb347', '#ffc966', '#ffd700', '#ffe066'],
  Cool: ['#00ffff', '#00e5ff', '#00ccff', '#00b3ff', '#0099ff', '#0080ff', '#0066ff', '#004dff'],
  Neon: ['#ff00ff', '#ff00cc', '#ff0099', '#ff0066', '#00ffff', '#00ff99', '#00ff00', '#ccff00'],
  Earth: ['#8b4513', '#a0522d', '#cd853f', '#daa520', '#d2b48c', '#f4a460', '#deb887', '#ffe4b5'],
  Rainbow: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3', '#ff00ff']
};

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

    // Phase 11.7.34: Visual polish parameters
    this.ringSpacing = options.ringSpacing ?? 1.0; // Ring spacing multiplier (0.2-2.0)
    this.baseRadius = options.baseRadius ?? 1.0; // Base radius multiplier (0.5-3.0)
    this.globalScale = options.globalScale ?? 1.0; // Global scale multiplier (0.5-2.0)
    this.layout = options.layout ?? 'Classic'; // Layout preset: 'Classic' | 'Flower' | 'Spiral' | 'Dense'
    this.rainbowMode = options.rainbowMode ?? false; // Rainbow hue shift per ring

    // Phase 11.7.35: Interactive controls
    this.selectedRing = -1; // Currently selected ring index (-1 = none)
    this.highlightRing = -1; // Ring to highlight on hover (-1 = none)
    this.interactiveMode = options.interactiveMode ?? false; // Enable click/drag interaction
    this.manualRotation = 0; // Manual rotation offset (radians)
    this.liveSymmetryUpdate = options.liveSymmetryUpdate ?? true; // Update symmetry without reset

    // Phase 11.7.36: Color palette system
    this.palette = options.palette ?? 'Classic'; // Color palette name
    this.ringColors = [...COLOR_PALETTES.Classic]; // Current ring colors (up to 8)

    // Phase 11.7.37: Palette blending
    this.paletteBlend = options.paletteBlend ?? 0.0; // Blend factor (0-1)
    this.targetPalette = options.targetPalette ?? 'Classic'; // Target palette for blending
    this.blendActive = options.blendActive ?? false; // Blend animation active
    this.sourcePalette = this.palette; // Source palette for blend

    // Phase 11.7.38: Animation modes
    this.animationMode = options.animationMode ?? 'None'; // None | Pulse | Rotate | Wave | Orbit
    this.animationSpeed = options.animationSpeed ?? 1.0; // 0.1-3.0 multiplier
    this.animationPhase = 0.0; // Animation phase accumulator

    // Phase 11.7.39: Animation preset tracking
    this.animationPreset = options.animationPreset ?? null; // Track current preset name

    // Phase 11.7.40: Depth & 3D Extrusion
    this.depth = options.depth ?? 0.0; // Extrusion depth (0 = flat, 0-3.0)
    this.thickness = options.thickness ?? 0.1; // Thickness of each ring (0.05-1.0)
    this.zSpacing = options.zSpacing ?? 0.2; // Distance between extruded layers (0-1.0)
    this.extrusionMode = options.extrusionMode ?? 'Flat'; // Flat | Stack | Spiral

    // Phase 11.7.41: Particle Fusion
    this.particleFusion = options.particleFusion ?? false; // Enable/disable emoji fusion
    this.particleEmoji = options.particleEmoji ?? '🍕'; // Default emoji
    this.particleCount = options.particleCount ?? 200; // Per-ring particle count
    this.particleSize = options.particleSize ?? 0.4; // Scale multiplier
    this.particleSystem = null; // Handle to EmojiParticles

    // Phase 11.7.44: Advanced Audio Reactivity
    this.audioReactiveMode = options.audioReactiveMode ?? 'Global'; // Global | PerRing
    this.audioBands = ['bass', 'mid', 'treble', 'presence'];
    this.bandIntensity = options.bandIntensity ?? 1.0; // 0.1-3.0 multiplier
    // Auto-assign bands to rings in sequence
    this.bandAssignments = options.bandAssignments ?? [];
    if (this.bandAssignments.length === 0) {
      for (let i = 0; i < this.rings; i++) {
        this.bandAssignments[i] = this.audioBands[i % this.audioBands.length];
      }
    }

    // Phase 11.7.45: Morph Fusion
    this.morphFusion = options.morphFusion ?? false; // Toggle morph fusion
    this.morphInfluence = options.morphInfluence ?? 0.5; // 0-1 strength
    this.morphMap = options.morphMap ?? ['sphere', 'cube', 'pyramid', 'torus']; // Per ring
    // Auto-assign morph targets if needed
    if (this.morphMap.length < this.rings) {
      const targets = ['sphere', 'cube', 'pyramid', 'torus'];
      for (let i = this.morphMap.length; i < this.rings; i++) {
        this.morphMap[i] = targets[i % targets.length];
      }
    }

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
    // Phase 11.7.34: Visual polish
    state.emojiMandala.ringSpacing = this.ringSpacing;
    state.emojiMandala.baseRadius = this.baseRadius;
    state.emojiMandala.globalScale = this.globalScale;
    state.emojiMandala.layout = this.layout;
    state.emojiMandala.rainbowMode = this.rainbowMode;
    // Phase 11.7.35: Interactive controls
    state.emojiMandala.selectedRing = this.selectedRing;
    state.emojiMandala.highlightRing = this.highlightRing;
    state.emojiMandala.interactiveMode = this.interactiveMode;
    state.emojiMandala.manualRotation = this.manualRotation;
    // Phase 11.7.36: Color palette
    state.emojiMandala.palette = this.palette;
    state.emojiMandala.ringColors = this.ringColors;
    // Phase 11.7.37: Palette blending
    state.emojiMandala.paletteBlend = this.paletteBlend;
    state.emojiMandala.targetPalette = this.targetPalette;
    state.emojiMandala.blendActive = this.blendActive;
    // Phase 11.7.38: Animation modes
    state.emojiMandala.animationMode = this.animationMode;
    state.emojiMandala.animationSpeed = this.animationSpeed;
    state.emojiMandala.animationPhase = this.animationPhase;
    // Phase 11.7.39: Animation preset
    state.emojiMandala.animationPreset = this.animationPreset;
    // Phase 11.7.40: Depth & 3D Extrusion
    state.emojiMandala.depth = this.depth;
    state.emojiMandala.thickness = this.thickness;
    state.emojiMandala.zSpacing = this.zSpacing;
    state.emojiMandala.extrusionMode = this.extrusionMode;
    // Phase 11.7.41: Particle Fusion
    state.emojiMandala.particleFusion = this.particleFusion;
    state.emojiMandala.particleEmoji = this.particleEmoji;
    state.emojiMandala.particleCount = this.particleCount;
    state.emojiMandala.particleSize = this.particleSize;
    // Phase 11.7.44: Advanced Audio Reactivity
    state.emojiMandala.audioReactiveMode = this.audioReactiveMode;
    state.emojiMandala.bandIntensity = this.bandIntensity;
    state.emojiMandala.bandAssignments = this.bandAssignments;
    // Phase 11.7.45: Morph Fusion
    state.emojiMandala.morphFusion = this.morphFusion;
    state.emojiMandala.morphInfluence = this.morphInfluence;
    state.emojiMandala.morphMap = this.morphMap;
  }

  // Update mandala (called every frame from particle system or main loop)
  // Phase 11.7.30: Enhanced audio reactivity for ring expansion, symmetry pulse, emoji size
  // Phase 11.7.34: Add gradient opacity, rainbow mode, audio glow
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

      // Phase 11.7.34: Audio-reactive glow (outermost ring opacity pulse)
      const glowIntensity = 0.5 + (level * sensitivity * 0.5); // 0.5-1.0 opacity

      // Phase 11.7.30: Log audio reactivity state (2% sample rate)
      if (Math.random() < 0.02) {
        console.log(`🔊 AudioLevel=${level.toFixed(2)} → rings expanded x${(1 + this.radiusPulse).toFixed(2)}, symmetry pulse ${this.anglePulse.toFixed(3)}, emoji scale x${emojiScale.toFixed(2)}, glow=${glowIntensity.toFixed(2)}`);
      }

      // Store emoji scale and glow for particle system to read
      state.emojiMandala.emojiScale = emojiScale;
      state.emojiMandala.glowIntensity = glowIntensity;
    } else {
      // Reset pulses when audio off
      this.radiusPulse = 0;
      this.anglePulse = 0;
      state.emojiMandala.emojiScale = 1.0; // Default scale
      state.emojiMandala.glowIntensity = 1.0; // Default opacity
    }

    // Phase 11.7.34: Calculate gradient opacity per ring (outer rings = lower alpha)
    const ringOpacities = [];
    for (let i = 0; i < this.rings; i++) {
      const opacityFactor = 1.0 - (i / this.rings) * 0.5; // 1.0 → 0.5 gradient
      ringOpacities.push(opacityFactor);
    }
    state.emojiMandala.ringOpacities = ringOpacities;

    // Phase 11.7.34: Rainbow mode - calculate hue shift per ring
    if (this.rainbowMode) {
      const ringHues = [];
      for (let i = 0; i < this.rings; i++) {
        const hue = (i / this.rings) * 360; // 0-360° spread across rings
        ringHues.push(hue);
      }
      state.emojiMandala.ringHues = ringHues;
    } else {
      state.emojiMandala.ringHues = null; // Disable rainbow
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

    // Phase 11.7.44: Advanced Audio Reactivity
    if (this.mandalaAudioReactive && state.audioReactive) {
      const audioBands = {
        bass: bass,
        mid: mid,
        treble: treble,
        presence: audioData.presence ?? treble // Use treble as fallback for presence
      };

      if (this.audioReactiveMode === 'PerRing') {
        // Per-ring audio reactivity
        const ringScales = [];
        for (let i = 0; i < this.rings; i++) {
          const band = this.bandAssignments[i % this.audioBands.length];
          const value = audioBands[band] ?? 0;
          const scale = 1 + value * this.bandIntensity;
          ringScales.push(scale);
        }
        state.emojiMandala.ringScales = ringScales;
      } else if (this.audioReactiveMode === 'Global') {
        // Global audio reactivity
        const avgLevel = (audioBands.bass + audioBands.mid + audioBands.treble) / 3;
        const globalScale = 1 + avgLevel * 0.5 * this.bandIntensity;
        this.globalScale = globalScale;
        state.emojiMandala.globalScale = globalScale;
      }
    }

    // Phase 11.7.45: Morph Fusion
    if (this.morphFusion && state?.morphWeights) {
      const morphScales = [];
      for (let i = 0; i < this.rings; i++) {
        const target = this.morphMap[i % this.morphMap.length];
        const weight = state.morphWeights[target] ?? 0;
        const factor = 1 + weight * this.morphInfluence;
        morphScales.push(factor);

        // Optional: Log per-ring morph influence (sampling)
        if (Math.random() < 0.01 && weight > 0.01) {
          console.log(`🔗 Ring ${i} → ${target.charAt(0).toUpperCase() + target.slice(1)} weight (${weight.toFixed(2)}) | factor=${factor.toFixed(2)}`);
        }
      }
      state.emojiMandala.morphScales = morphScales;
    }

    // Phase 11.7.41: Update particle system if fusion is enabled
    if (this.particleFusion && this.particleSystem) {
      this.particleSystem.update(level);
    }
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
  // Phase 11.7.35: Live update without reset if liveSymmetryUpdate enabled
  setSymmetry(n) {
    const oldSymmetry = this.symmetry;
    this.symmetry = Math.max(2, Math.min(12, Math.floor(n)));

    // Phase 11.7.35: Live update flag
    if (this.liveSymmetryUpdate) {
      console.log(`🔄 Live symmetry update: ${oldSymmetry} → ${this.symmetry} (no reset)`);
    }

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

  // Phase 11.7.34: Layout preset functions
  applyClassic() {
    this.layout = 'Classic';
    this.ringSpacing = 1.0;
    this.baseRadius = 1.0;
    this.symmetry = 6;
    this.syncToState();
    console.log(`🎨 Mandala layout set → Classic (rings=${this.rings} | symmetry=${this.symmetry})`);
  }

  applyFlower() {
    this.layout = 'Flower';
    this.ringSpacing = 0.8;
    this.baseRadius = 1.2;
    this.symmetry = 8;
    // Alternating radii for flower effect
    this.ringRadii = [0, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5];
    this.syncToState();
    console.log(`🎨 Mandala layout set → Flower (rings=${this.rings} | symmetry=${this.symmetry})`);
  }

  applySpiral() {
    this.layout = 'Spiral';
    this.ringSpacing = 1.0;
    this.baseRadius = 1.0;
    this.spiralOffset = Math.PI * 137.5 / 180; // Golden angle (137.5°)
    this.syncToState();
    console.log(`🎨 Mandala layout set → Spiral (rings=${this.rings} | symmetry=${this.symmetry})`);
  }

  applyDense() {
    this.layout = 'Dense';
    this.ringSpacing = 0.5;
    this.baseRadius = 0.8;
    this.rings = Math.min(this.rings * 2, 8); // Double ring count, max 8
    this.symmetry = 12;
    this.syncToState();
    console.log(`🎨 Mandala layout set → Dense (rings=${this.rings} | symmetry=${this.symmetry})`);
  }

  // Phase 11.7.34: Set ring spacing
  setRingSpacing(spacing) {
    const oldSpacing = this.ringSpacing;
    this.ringSpacing = Math.max(0.2, Math.min(2.0, spacing));
    this.syncToState();
    console.log(`🎨 Ring spacing: ${this.ringSpacing.toFixed(2)} (was ${oldSpacing.toFixed(2)})`);
  }

  // Phase 11.7.34: Set base radius
  setBaseRadius(radius) {
    const oldRadius = this.baseRadius;
    this.baseRadius = Math.max(0.5, Math.min(3.0, radius));
    this.syncToState();
    console.log(`🎨 Base radius: ${this.baseRadius.toFixed(2)} (was ${oldRadius.toFixed(2)})`);
  }

  // Phase 11.7.34: Set global scale
  setGlobalScale(scale) {
    const oldScale = this.globalScale;
    this.globalScale = Math.max(0.5, Math.min(2.0, scale));
    this.syncToState();
    console.log(`🎨 Global scale: ${this.globalScale.toFixed(2)} (was ${oldScale.toFixed(2)})`);
  }

  // Phase 11.7.34: Toggle rainbow mode
  setRainbowMode(enabled) {
    this.rainbowMode = enabled;
    this.syncToState();
    console.log(`🌈 Mandala rainbow mode: ${enabled ? 'ON' : 'OFF'}`);
  }

  // Phase 11.7.35: Interactive ring selection
  selectRing(ringIndex) {
    const oldRing = this.selectedRing;
    this.selectedRing = ringIndex;
    this.syncToState();
    if (ringIndex >= 0 && ringIndex < this.rings) {
      console.log(`👆 Ring ${ringIndex} selected (was ${oldRing})`);
    } else if (ringIndex === -1) {
      console.log(`👆 Ring deselected (was ${oldRing})`);
    }
  }

  // Phase 11.7.35: Highlight ring on hover
  setHighlightRing(ringIndex) {
    this.highlightRing = ringIndex;
    this.syncToState();
  }

  // Phase 11.7.35: Toggle interactive mode
  setInteractiveMode(enabled) {
    this.interactiveMode = enabled;
    this.syncToState();
    console.log(`🖱️ Interactive mode: ${enabled ? 'ON' : 'OFF'}`);
  }

  // Phase 11.7.35: Set manual rotation (additive to auto rotation)
  setManualRotation(radians) {
    this.manualRotation = radians;
    this.syncToState();
  }

  // Phase 11.7.35: Adjust manual rotation (drag interaction)
  adjustManualRotation(delta) {
    this.manualRotation += delta;
    this.syncToState();
    if (Math.abs(delta) > 0.01) {
      console.log(`🔄 Manual rotation: ${(this.manualRotation * 180 / Math.PI).toFixed(1)}°`);
    }
  }

  // Phase 11.7.36: Apply color palette
  applyPalette(paletteName) {
    if (!COLOR_PALETTES[paletteName]) {
      console.warn(`🎨 Unknown palette: ${paletteName}, keeping current palette ${this.palette}`);
      return;
    }

    const oldPalette = this.palette;
    this.palette = paletteName;
    this.ringColors = [...COLOR_PALETTES[paletteName]];
    this.blendActive = false; // Stop any active blend
    this.paletteBlend = 0.0;
    this.syncToState();

    console.log(`🎨 Mandala palette applied → ${paletteName} (was ${oldPalette})`);
  }

  // Phase 11.7.37: Set target palette for blending
  setTargetPalette(paletteName) {
    if (!COLOR_PALETTES[paletteName]) {
      console.warn(`🎨 Unknown target palette: ${paletteName}`);
      return;
    }

    this.targetPalette = paletteName;
    this.sourcePalette = this.palette;
    this.blendActive = true;
    this.paletteBlend = 0.0;
    this.syncToState();

    console.log(`🎨 Mandala palette blending → ${this.sourcePalette} → ${this.targetPalette} (started)`);
  }

  // Phase 11.7.37: Update blend progress (call from animation loop)
  updateBlend(delta = 0.01) {
    if (!this.blendActive) return;

    this.paletteBlend = Math.min(this.paletteBlend + delta, 1.0);

    // Lerp colors using THREE.Color
    const sourceColors = COLOR_PALETTES[this.sourcePalette];
    const targetColors = COLOR_PALETTES[this.targetPalette];

    for (let i = 0; i < 8; i++) {
      const sourceColor = new THREE.Color(sourceColors[i]);
      const targetColor = new THREE.Color(targetColors[i]);
      sourceColor.lerp(targetColor, this.paletteBlend);
      this.ringColors[i] = '#' + sourceColor.getHexString();
    }

    // Log progress every 20%
    const progressPercent = Math.floor(this.paletteBlend * 100);
    if (progressPercent % 20 === 0 && progressPercent > 0) {
      console.log(`🎨 Mandala palette blending → ${this.targetPalette} (progress ${(this.paletteBlend).toFixed(2)})`);
    }

    // Complete blend
    if (this.paletteBlend >= 1.0) {
      this.completeBlend();
    }

    this.syncToState();
  }

  // Phase 11.7.37: Complete blend and snap to target
  completeBlend() {
    if (!this.blendActive) return;

    this.palette = this.targetPalette;
    this.ringColors = [...COLOR_PALETTES[this.targetPalette]];
    this.blendActive = false;
    this.paletteBlend = 0.0;
    this.syncToState();

    console.log(`🎨 Mandala palette applied → ${this.palette} (blend complete)`);
  }

  // Phase 11.7.37: Set blend progress manually (for HUD slider)
  setBlendProgress(progress) {
    this.paletteBlend = Math.max(0, Math.min(1.0, progress));

    if (this.targetPalette !== this.palette) {
      const sourceColors = COLOR_PALETTES[this.sourcePalette || this.palette];
      const targetColors = COLOR_PALETTES[this.targetPalette];

      for (let i = 0; i < 8; i++) {
        const sourceColor = new THREE.Color(sourceColors[i]);
        const targetColor = new THREE.Color(targetColors[i]);
        sourceColor.lerp(targetColor, this.paletteBlend);
        this.ringColors[i] = '#' + sourceColor.getHexString();
      }
    }

    this.syncToState();
  }

  // Phase 11.7.37: Cycle to next palette in sequence
  cyclePalette() {
    const paletteNames = Object.keys(COLOR_PALETTES);
    const currentIndex = paletteNames.indexOf(this.palette);
    const nextIndex = (currentIndex + 1) % paletteNames.length;
    const nextPalette = paletteNames[nextIndex];

    this.setTargetPalette(nextPalette);
    console.log(`🎨 Mandala palette cycle → ${nextPalette}`);
  }

  // Phase 11.7.38/11.7.43: Set animation mode
  setAnimationMode(mode) {
    const validModes = ['None', 'Pulse', 'Rotate', 'Oscillate'];
    if (!validModes.includes(mode)) {
      console.warn(`🎞️ Invalid animation mode: ${mode}, keeping current mode ${this.animationMode}`);
      return;
    }

    const oldMode = this.animationMode;
    this.animationMode = mode;
    this.animationPhase = 0.0; // Reset phase on mode change
    this.syncToState();

    console.log(`🎞️ Mandala animation mode: ${mode}${mode !== 'None' ? ` | speed=${this.animationSpeed.toFixed(1)}` : ''}`);
  }

  // Phase 11.7.38: Set animation speed
  setAnimationSpeed(speed) {
    const oldSpeed = this.animationSpeed;
    this.animationSpeed = Math.max(0.1, Math.min(3.0, speed));
    this.syncToState();
    console.log(`🔄 Mandala animation speed: ${this.animationSpeed.toFixed(2)} (was ${oldSpeed.toFixed(2)})`);
  }

  // Phase 11.7.38/11.7.43: Update animation (called every frame with delta time)
  updateAnimation(delta = 0.016, audioLevel = 0) {
    if (this.animationMode === 'None') return;

    // Update phase (frame rate independent)
    this.animationPhase += delta * this.animationSpeed;

    switch (this.animationMode) {
      case 'Pulse':
        // Scale rings with sine wave
        const scale = 1 + Math.sin(this.animationPhase) * 0.2;
        this.globalScale = scale;
        state.emojiMandala.globalScale = scale;
        break;

      case 'Rotate':
        // Continuous rotation
        this.adjustManualRotation(0.01 * this.animationSpeed);
        break;

      case 'Oscillate':
        // Oscillate rotation back and forth
        const offset = Math.sin(this.animationPhase) * Math.PI / 6;
        this.setManualRotation(offset);
        break;
    }

    this.syncToState();
  }

  // Phase 11.7.39/11.7.43: Apply animation preset
  applyAnimationPreset(presetName) {
    switch (presetName) {
      case 'Calm':
        this.setAnimationMode('Oscillate');
        this.animationSpeed = 0.5;
        break;
      case 'Energetic':
        this.setAnimationMode('Pulse');
        this.animationSpeed = 2.0;
        break;
      case 'Spin':
        this.setAnimationMode('Rotate');
        this.animationSpeed = 1.2;
        break;
      default:
        console.warn(`🎬 Unknown animation preset: ${presetName}`);
        return;
    }
    this.animationPreset = presetName; // Track which preset is active
    this.syncToState();
    console.log(`🎬 Mandala animation preset applied → ${presetName}`);
  }

  // Phase 11.7.39/11.7.43: Randomize animation
  randomizeAnimation() {
    const modes = ['Pulse', 'Rotate', 'Oscillate'];
    const randMode = modes[Math.floor(Math.random() * modes.length)];
    const randSpeed = parseFloat((Math.random() * 2.9 + 0.1).toFixed(1)); // 0.1–3.0

    this.setAnimationMode(randMode);
    this.animationSpeed = randSpeed;
    this.animationPreset = null; // Clear preset name since it's randomized
    this.syncToState();

    console.log(`🎲 Mandala animation randomized → ${randMode} @ ${randSpeed}`);
  }

  // Phase 11.7.40: Set depth
  setDepth(value) {
    const oldDepth = this.depth;
    this.depth = Math.max(0.0, Math.min(3.0, value));
    this.updateExtrusion();
    console.log(`🌀 Mandala depth: ${this.depth.toFixed(2)} (was ${oldDepth.toFixed(2)})`);
  }

  // Phase 11.7.40: Set thickness
  setThickness(value) {
    const oldThickness = this.thickness;
    this.thickness = Math.max(0.05, Math.min(1.0, value));
    this.updateExtrusion();
    console.log(`🌀 Mandala thickness: ${this.thickness.toFixed(2)} (was ${oldThickness.toFixed(2)})`);
  }

  // Phase 11.7.40: Set z-spacing
  setZSpacing(value) {
    const oldSpacing = this.zSpacing;
    this.zSpacing = Math.max(0.0, Math.min(1.0, value));
    this.updateExtrusion();
    console.log(`🌀 Mandala z-spacing: ${this.zSpacing.toFixed(2)} (was ${oldSpacing.toFixed(2)})`);
  }

  // Phase 11.7.40: Set extrusion mode
  setExtrusionMode(mode) {
    const validModes = ['Flat', 'Stack', 'Spiral'];
    if (!validModes.includes(mode)) {
      console.warn(`🌀 Invalid extrusion mode: ${mode}, keeping current mode ${this.extrusionMode}`);
      return;
    }

    const oldMode = this.extrusionMode;
    this.extrusionMode = mode;
    this.updateExtrusion();
    console.log(`🌀 Mandala extrusion mode: ${mode} (was ${oldMode})`);
  }

  // Phase 11.7.40: Update extrusion (compute Z offsets per ring)
  updateExtrusion() {
    // Store Z offsets in state for rendering system to use
    const zOffsets = [];

    for (let i = 0; i < this.rings; i++) {
      let zOffset = 0;

      switch (this.extrusionMode) {
        case 'Flat':
          zOffset = 0;
          break;
        case 'Stack':
          zOffset = i * this.zSpacing;
          break;
        case 'Spiral':
          zOffset = i * this.zSpacing + (i * 0.1 * this.depth);
          break;
      }

      zOffsets.push(zOffset * this.depth);
    }

    state.emojiMandala.ringZOffsets = zOffsets;
    state.emojiMandala.ringThickness = this.thickness;

    this.syncToState();
    console.log(`🌀 Mandala extrusion updated → mode=${this.extrusionMode}, depth=${this.depth.toFixed(2)}`);
  }

  // Phase 11.7.41: Enable/disable particle fusion
  enableParticleFusion(enabled) {
    this.particleFusion = enabled;

    if (enabled) {
      // Dynamically import EmojiParticles
      import('./particles.js').then(({ EmojiParticles }) => {
        this.particleSystem = new EmojiParticles(this.scene, this.particleCount, this.particleEmoji);
        console.log(`✨ Mandala particle fusion: ON (${this.particleCount} x ${this.particleEmoji})`);
      }).catch(err => {
        console.error('Failed to load EmojiParticles:', err);
        this.particleFusion = false;
      });
    } else {
      if (this.particleSystem) {
        this.particleSystem.dispose();
        this.particleSystem = null;
      }
      console.log('✨ Mandala particle fusion: OFF');
    }

    this.syncToState();
  }

  // Phase 11.7.41: Set particle emoji
  setParticleEmoji(emoji) {
    this.particleEmoji = emoji;
    if (this.particleSystem) {
      this.particleSystem.swapEmoji(emoji);
      console.log(`🍕 Emoji swapped to: ${emoji}`);
    }
    this.syncToState();
  }

  // Phase 11.7.41: Set particle count
  setParticleCount(count) {
    const oldCount = this.particleCount;
    this.particleCount = Math.max(50, Math.min(1000, Math.floor(count)));

    if (this.particleSystem) {
      // Recreate particle system with new count
      this.particleSystem.dispose();
      import('./particles.js').then(({ EmojiParticles }) => {
        this.particleSystem = new EmojiParticles(this.scene, this.particleCount, this.particleEmoji);
        console.log(`✨ Particle count: ${this.particleCount} (was ${oldCount})`);
      });
    }

    this.syncToState();
  }

  // Phase 11.7.41: Set particle size
  setParticleSize(size) {
    const oldSize = this.particleSize;
    this.particleSize = Math.max(0.1, Math.min(1.0, size));

    if (this.particleSystem && this.particleSystem.sprites) {
      this.particleSystem.sprites.forEach(sprite => {
        sprite.scale.set(this.particleSize, this.particleSize, this.particleSize);
      });
      console.log(`✨ Particle size: ${this.particleSize.toFixed(2)} (was ${oldSize.toFixed(2)})`);
    }

    this.syncToState();
  }

  // Phase 11.7.44: Set audio reactive mode
  setAudioReactiveMode(mode) {
    const validModes = ['Global', 'PerRing'];
    if (!validModes.includes(mode)) {
      console.warn(`🎵 Invalid audio reactive mode: ${mode}, keeping current mode ${this.audioReactiveMode}`);
      return;
    }

    const oldMode = this.audioReactiveMode;
    this.audioReactiveMode = mode;
    this.syncToState();

    console.log(`🎵 Mandala audio mode: ${mode} (was ${oldMode})`);
  }

  // Phase 11.7.44: Set band intensity
  setBandIntensity(intensity) {
    const oldIntensity = this.bandIntensity;
    this.bandIntensity = Math.max(0.1, Math.min(3.0, intensity));
    this.syncToState();

    console.log(`🎵 Band intensity: ${this.bandIntensity.toFixed(2)} (was ${oldIntensity.toFixed(2)})`);
  }

  // Phase 11.7.44: Set band assignment for a specific ring
  setBandAssignment(ringIndex, band) {
    if (ringIndex < 0 || ringIndex >= this.rings) {
      console.warn(`🎵 Invalid ring index: ${ringIndex}`);
      return;
    }

    if (!this.audioBands.includes(band)) {
      console.warn(`🎵 Invalid band: ${band}`);
      return;
    }

    this.bandAssignments[ringIndex] = band;
    this.syncToState();

    console.log(`🎵 Ring ${ringIndex} → ${band.charAt(0).toUpperCase() + band.slice(1)}`);
  }

  // Phase 11.7.45: Enable/disable morph fusion
  enableMorphFusion(enabled) {
    this.morphFusion = enabled;
    this.syncToState();

    console.log(`🔗 Mandala morph fusion: ${enabled ? 'ON' : 'OFF'}`);
  }

  // Phase 11.7.45: Set morph influence
  setMorphInfluence(influence) {
    const oldInfluence = this.morphInfluence;
    this.morphInfluence = Math.max(0.0, Math.min(1.0, influence));
    this.syncToState();

    console.log(`🔗 Morph influence: ${this.morphInfluence.toFixed(2)} (was ${oldInfluence.toFixed(2)})`);
  }

  // Phase 11.7.45: Set morph target for a specific ring
  setMorphTarget(ringIndex, target) {
    const validTargets = ['sphere', 'cube', 'pyramid', 'torus'];

    if (ringIndex < 0 || ringIndex >= this.rings) {
      console.warn(`🔗 Invalid ring index: ${ringIndex}`);
      return;
    }

    if (!validTargets.includes(target)) {
      console.warn(`🔗 Invalid morph target: ${target}`);
      return;
    }

    this.morphMap[ringIndex] = target;
    this.syncToState();

    console.log(`🔗 Ring ${ringIndex} → ${target.charAt(0).toUpperCase() + target.slice(1)}`);
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
