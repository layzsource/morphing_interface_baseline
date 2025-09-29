import { state } from './state.js';

console.log("🎶 audio.js loaded");

let audioContext = null;
let analyser = null;
let microphone = null;
let frequencyData = null;
let isAudioEnabled = false;
let audioSensitivity = 1.0;
let audioCallbacks = [];

// Frequency ranges for bass, mid, treble
const SAMPLE_RATE = 44100; // Standard sample rate
const FFT_SIZE = 1024;
const FREQUENCY_BIN_COUNT = FFT_SIZE / 2;

// Frequency ranges in Hz
const BASS_RANGE = { min: 20, max: 250 };
const MID_RANGE = { min: 250, max: 2000 };
const TREBLE_RANGE = { min: 2000, max: 8000 };

// Current audio analysis values
let audioValues = {
  bass: 0.0,
  mid: 0.0,
  treble: 0.0,
  isEnabled: false,
  sensitivity: 1.0
};

export function initAudio() {
  console.log("🎶 Audio system initialized");
}

export function enableAudio() {
  if (isAudioEnabled) {
    console.log("🎶 Audio already enabled");
    return Promise.resolve();
  }

  return navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      console.log("🎤 Microphone initialized");

      // Create audio context
      audioContext = new (window.AudioContext || window.webkitAudioContext)();

      // Create analyser node
      analyser = audioContext.createAnalyser();
      analyser.fftSize = FFT_SIZE;
      analyser.smoothingTimeConstant = 0.8;

      // Create microphone source
      microphone = audioContext.createMediaStreamSource(stream);
      microphone.connect(analyser);

      // Initialize frequency data array
      frequencyData = new Uint8Array(analyser.frequencyBinCount);

      isAudioEnabled = true;
      audioValues.isEnabled = true;

      // Start analysis loop
      startAudioAnalysis();

      notifyAudioUpdate();
      return true;
    })
    .catch(error => {
      console.warn("🎶 Microphone access denied or failed:", error.message);
      isAudioEnabled = false;
      audioValues.isEnabled = false;
      notifyAudioUpdate();
      return false;
    });
}

export function disableAudio() {
  if (!isAudioEnabled) return;

  console.log("🎶 Disabling audio");

  if (microphone) {
    microphone.disconnect();
    microphone = null;
  }

  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }

  analyser = null;
  frequencyData = null;
  isAudioEnabled = false;
  audioValues.isEnabled = false;

  // Reset audio values
  audioValues.bass = 0.0;
  audioValues.mid = 0.0;
  audioValues.treble = 0.0;

  notifyAudioUpdate();
}

export function setAudioSensitivity(sensitivity) {
  audioSensitivity = Math.max(0.1, Math.min(3.0, sensitivity));
  audioValues.sensitivity = audioSensitivity;
  console.log(`🎶 Audio sensitivity set to ${audioSensitivity.toFixed(2)}`);
  notifyAudioUpdate();
}

export function getAudioValues() {
  return { ...audioValues };
}

export function isAudioActive() {
  return isAudioEnabled;
}

export function onAudioUpdate(callback) {
  audioCallbacks.push(callback);
}

function startAudioAnalysis() {
  function analyze() {
    if (!isAudioEnabled || !analyser || !frequencyData) return;

    // Get frequency data
    analyser.getByteFrequencyData(frequencyData);

    // Calculate frequency ranges
    const bassLevel = getFrequencyRangeAverage(BASS_RANGE);
    const midLevel = getFrequencyRangeAverage(MID_RANGE);
    const trebleLevel = getFrequencyRangeAverage(TREBLE_RANGE);

    // Apply sensitivity and normalize (0-1)
    audioValues.bass = Math.min(1.0, (bassLevel / 255) * audioSensitivity);
    audioValues.mid = Math.min(1.0, (midLevel / 255) * audioSensitivity);
    audioValues.treble = Math.min(1.0, (trebleLevel / 255) * audioSensitivity);

    // Notify listeners
    notifyAudioUpdate();

    // Continue analysis
    requestAnimationFrame(analyze);
  }

  analyze();
}

function getFrequencyRangeAverage(range) {
  if (!frequencyData || !audioContext) return 0;

  const nyquist = SAMPLE_RATE / 2;
  const minBin = Math.floor((range.min / nyquist) * FREQUENCY_BIN_COUNT);
  const maxBin = Math.floor((range.max / nyquist) * FREQUENCY_BIN_COUNT);

  let sum = 0;
  let count = 0;

  for (let i = minBin; i <= maxBin && i < frequencyData.length; i++) {
    sum += frequencyData[i];
    count++;
  }

  return count > 0 ? sum / count : 0;
}

function notifyAudioUpdate() {
  const audioData = {
    bass: audioValues.bass,
    mid: audioValues.mid,
    treble: audioValues.treble,
    isEnabled: audioValues.isEnabled,
    sensitivity: audioValues.sensitivity
  };

  audioCallbacks.forEach(callback => {
    try {
      callback(audioData);
    } catch (error) {
      console.error('🎶 Error in audio callback:', error);
    }
  });
}

// Export audio state for presets
export function getAudioState() {
  return {
    enabled: isAudioEnabled,
    sensitivity: audioSensitivity
  };
}

export function setAudioState(state) {
  if (state.sensitivity !== undefined) {
    setAudioSensitivity(state.sensitivity);
  }

  if (state.enabled && !isAudioEnabled) {
    enableAudio();
  } else if (!state.enabled && isAudioEnabled) {
    disableAudio();
  }
}

// Simple update function for direct state updates
export function updateAudio() {
  if (!analyser || !frequencyData) return;

  analyser.getByteFrequencyData(frequencyData);

  // Simple frequency band averaging
  const bass = avg(frequencyData.slice(0, 10)) / 255;
  const mid = avg(frequencyData.slice(10, 40)) / 255;
  const treble = avg(frequencyData.slice(40, 80)) / 255;

  // Update state directly
  state.audio.bass = bass;
  state.audio.mid = mid;
  state.audio.treble = treble;

  // Audio smoothing for vessel
  const alpha = state.vessel.audioSmoothing;
  if (!state.audio.smooth) {
    state.audio.smooth = { bass, mid, treble };
  } else {
    state.audio.smooth = {
      bass: alpha * state.audio.smooth.bass + (1 - alpha) * bass,
      mid: alpha * state.audio.smooth.mid + (1 - alpha) * mid,
      treble: alpha * state.audio.smooth.treble + (1 - alpha) * treble,
    };
  }
}

function avg(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}