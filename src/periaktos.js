console.log("🌀 periaktos.js loaded");

let morphState = "cube";
let morphProgress = 0;
let morphCallbacks = [];
let isTransitioning = false;

export function initPeriaktos() {
  console.log("🌀 Periaktos initialized, state:", morphState);
}

export function toggleMorph() {
  if (isTransitioning) return;

  const newState = morphState === "cube" ? "sphere" : "cube";
  console.log(`🌀 Morphing from ${morphState} to ${newState}`);

  isTransitioning = true;
  morphState = newState;

  startMorphTransition();
}

export function onMorphUpdate(callback) {
  morphCallbacks.push(callback);
}

export function getMorphState() {
  return {
    state: morphState,
    progress: morphProgress,
    isTransitioning: isTransitioning
  };
}

function startMorphTransition() {
  const duration = 1000;
  const startTime = performance.now();
  const startProgress = morphProgress;
  const targetProgress = morphState === "sphere" ? 1 : 0;

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const t = Math.min(elapsed / duration, 1);

    const easeInOut = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    morphProgress = startProgress + (targetProgress - startProgress) * easeInOut;

    notifyMorphUpdate();

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      isTransitioning = false;
      console.log(`🌀 Morph to ${morphState} complete`);
    }
  }

  requestAnimationFrame(animate);
}

function notifyMorphUpdate() {
  const morphData = {
    state: morphState,
    progress: morphProgress,
    isTransitioning: isTransitioning
  };

  morphCallbacks.forEach(callback => {
    try {
      callback(morphData);
    } catch (error) {
      console.error('🌀 Error in morph callback:', error);
    }
  });
}
