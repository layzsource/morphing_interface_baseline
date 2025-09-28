console.log("🌀 periaktos.js loaded");

const MORPH_TARGETS = ["cube", "sphere", "pyramid", "torus"];
let currentTarget = "cube";
let previousTarget = "cube";
let morphProgress = 0;
let morphCallbacks = [];
let isTransitioning = false;

export function initPeriaktos() {
  console.log("🌀 Periaktos initialized, state:", currentTarget);
}

export function toggleMorph() {
  if (isTransitioning) return;

  const currentIndex = MORPH_TARGETS.indexOf(currentTarget);
  const nextIndex = (currentIndex + 1) % MORPH_TARGETS.length;
  const newTarget = MORPH_TARGETS[nextIndex];

  setMorphTarget(newTarget);
}

export function setMorphTarget(target) {
  if (isTransitioning) return;
  if (!MORPH_TARGETS.includes(target)) {
    console.warn(`🌀 Invalid morph target: ${target}`);
    return;
  }
  if (target === currentTarget) return;

  console.log(`🌀 Morphing from ${currentTarget} to ${target}`);

  previousTarget = currentTarget;
  currentTarget = target;
  isTransitioning = true;

  startMorphTransition();
}

export function onMorphUpdate(callback) {
  morphCallbacks.push(callback);
}

export function getMorphState() {
  return {
    current: currentTarget,
    previous: previousTarget,
    progress: morphProgress,
    isTransitioning: isTransitioning,
    targets: MORPH_TARGETS
  };
}

function startMorphTransition() {
  const duration = 1000;
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const t = Math.min(elapsed / duration, 1);

    const easeInOut = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    morphProgress = easeInOut;

    notifyMorphUpdate();

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      isTransitioning = false;
      morphProgress = 0;
      previousTarget = currentTarget;
      console.log(`🌀 Morph to ${currentTarget} complete`);
    }
  }

  requestAnimationFrame(animate);
}

function notifyMorphUpdate() {
  const morphData = {
    current: currentTarget,
    previous: previousTarget,
    progress: morphProgress,
    isTransitioning: isTransitioning,
    targets: MORPH_TARGETS
  };

  morphCallbacks.forEach(callback => {
    try {
      callback(morphData);
    } catch (error) {
      console.error('🌀 Error in morph callback:', error);
    }
  });
}
