console.log("📡 telemetry.js loaded");

let telemetryOverlay = null;
let fpsDisplay = null;
let midiDisplay = null;
let hudDisplay = null;
let morphDisplay = null;

let lastTime = performance.now();
let frameCount = 0;
let fps = 0;
let fpsUpdateCounter = 0;

export function initTelemetry(getState) {
  createTelemetryOverlay();
  startUpdateLoop(getState);
  console.log("📡 Telemetry initialized");
}

function createTelemetryOverlay() {
  telemetryOverlay = document.createElement('div');
  telemetryOverlay.id = 'telemetry-overlay';
  telemetryOverlay.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px;
    border-radius: 6px;
    font-family: monospace;
    font-size: 12px;
    z-index: 1000;
    min-width: 140px;
    line-height: 1.4;
  `;

  const title = document.createElement('div');
  title.textContent = '📡 Telemetry';
  title.style.cssText = 'color: #00ff00; margin-bottom: 8px; font-weight: bold;';
  telemetryOverlay.appendChild(title);

  fpsDisplay = document.createElement('div');
  fpsDisplay.textContent = 'FPS: --';
  telemetryOverlay.appendChild(fpsDisplay);

  midiDisplay = document.createElement('div');
  midiDisplay.textContent = 'MIDI: -- devices';
  telemetryOverlay.appendChild(midiDisplay);

  hudDisplay = document.createElement('div');
  hudDisplay.textContent = 'Idle: --';
  telemetryOverlay.appendChild(hudDisplay);

  morphDisplay = document.createElement('div');
  morphDisplay.textContent = 'Morph: -- (0.0)';
  telemetryOverlay.appendChild(morphDisplay);

  document.body.appendChild(telemetryOverlay);
}

function startUpdateLoop(getState) {
  function update() {
    const now = performance.now();
    const deltaTime = now - lastTime;

    frameCount++;
    fpsUpdateCounter++;

    if (fpsUpdateCounter >= 30) {
      fps = Math.round(1000 / (deltaTime / fpsUpdateCounter));
      fpsUpdateCounter = 0;
    }

    if (getState) {
      try {
        const state = getState();
        updateDisplays(state);
      } catch (error) {
        console.warn('📡 Telemetry getState error:', error);
      }
    }

    lastTime = now;
    requestAnimationFrame(update);
  }

  update();
}

function updateDisplays(state) {
  if (fpsDisplay) {
    fpsDisplay.textContent = `FPS: ${fps}`;
    fpsDisplay.style.color = fps >= 60 ? '#00ff00' : fps >= 30 ? '#ffff00' : '#ff6666';
  }

  if (midiDisplay && state.midiDevices !== undefined) {
    midiDisplay.textContent = `MIDI: ${state.midiDevices} devices`;
    midiDisplay.style.color = state.midiDevices > 0 ? '#00ff00' : '#888888';
  }

  if (hudDisplay && state.hudIdle !== undefined) {
    hudDisplay.textContent = `Idle: ${state.hudIdle ? 'ON' : 'OFF'}`;
    hudDisplay.style.color = state.hudIdle ? '#00ff00' : '#ff6666';
  }

  if (morphDisplay && state.morphState !== undefined) {
    const { weights, isTransitioning } = state.morphState;
    const statusIcon = isTransitioning ? '⚡' : '🌀';

    if (weights) {
      // Phase 4: Show all active weights as percentages
      const activeWeights = Object.entries(weights)
        .filter(([_, weight]) => weight > 0.01) // Only show weights > 1%
        .map(([target, weight]) => `${target.charAt(0).toUpperCase()}${(weight * 100).toFixed(0)}%`)
        .join(' | ');

      morphDisplay.textContent = `${statusIcon} ${activeWeights || 'None'}`;
      morphDisplay.style.color = activeWeights ? '#ffff00' : '#888888';
    } else {
      // Fallback display
      morphDisplay.textContent = `${statusIcon} Legacy mode`;
      morphDisplay.style.color = '#888888';
    }
  }
}
