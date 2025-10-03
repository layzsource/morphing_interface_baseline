// hudBackground.js - Phase 11.7.50: Modular Background HUD Section
// Extracted from hud.js for better organization

import * as THREE from 'three';
import { state } from './state.js';
import { setBackgroundScale } from './visual.js';

console.log("🖼️ hudBackground.js loaded");

/**
 * Create Background HUD section with all controls
 * @param {HTMLElement} container - Parent container to append controls to
 */
export function createBackgroundHudSection(container) {
  // Phase 11.6.0: Image Upload + Texture Toggle
  const uploadInput = document.createElement("input");
  uploadInput.type = "file";
  uploadInput.accept = "image/*";
  uploadInput.style.display = "none";

  const uploadButton = document.createElement("button");
  uploadButton.innerText = "Upload Image";
  uploadButton.style.cssText = 'margin: 10px 0; padding: 8px 12px; background: #444; color: white; border: 1px solid #666; border-radius: 4px; cursor: pointer;';
  uploadButton.onclick = () => uploadInput.click();

  uploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (texture) => {
        state.texture = texture;
        console.log("🖼️ Image loaded →", file.name);
      },
      undefined,
      (err) => console.error("❌ Texture load failed:", err)
    );
  });

  const morphToggle = document.createElement("input");
  morphToggle.type = "checkbox";
  morphToggle.checked = state.useTextureOnMorph;
  morphToggle.onchange = (e) => {
    state.useTextureOnMorph = e.target.checked;
    console.log("🎛️ Morph texture:", state.useTextureOnMorph ? "ON" : "OFF");
  };

  const morphLabel = document.createElement("label");
  morphLabel.innerText = "Apply texture to morph shape";
  morphLabel.style.cssText = 'display: block; margin: 10px 0; cursor: pointer;';
  morphLabel.prepend(morphToggle);

  // Phase 11.6.1: Background image toggle
  const bgToggle = document.createElement('input');
  bgToggle.type = 'checkbox';
  bgToggle.id = 'useBackgroundImage';
  bgToggle.checked = state.useBackgroundImage;
  bgToggle.onchange = () => {
    state.useBackgroundImage = bgToggle.checked;
    console.log(`🎛️ Background image: ${state.useBackgroundImage ? 'ON' : 'OFF'}`);
  };

  const bgLabel = document.createElement('label');
  bgLabel.htmlFor = 'useBackgroundImage';
  bgLabel.innerText = 'Show as background';
  bgLabel.style.cssText = 'display: block; margin: 10px 0; cursor: pointer;';
  bgLabel.prepend(bgToggle);

  // Phase 11.7.50: Background Scale slider
  const bgScaleContainer = document.createElement('div');
  bgScaleContainer.style.cssText = 'margin: 10px 0;';

  const bgScaleLabel = document.createElement('label');
  bgScaleLabel.textContent = 'Background Scale:';
  bgScaleLabel.style.cssText = 'display: block; margin-bottom: 4px; font-size: 12px;';

  const bgScaleSlider = document.createElement('input');
  bgScaleSlider.type = 'range';
  bgScaleSlider.min = '0.5';   // zoomed out
  bgScaleSlider.max = '2.0';   // zoomed in
  bgScaleSlider.step = '0.01';
  bgScaleSlider.value = state.backgroundScale || '1.0';
  bgScaleSlider.style.cssText = 'width: 100%;';

  const bgScaleValue = document.createElement('span');
  bgScaleValue.textContent = (state.backgroundScale || 1.0).toFixed(2);
  bgScaleValue.style.cssText = 'margin-left: 8px; font-size: 11px; color: #aaa;';

  bgScaleSlider.addEventListener('input', (e) => {
    const scale = parseFloat(e.target.value);
    bgScaleValue.textContent = scale.toFixed(2);
    setBackgroundScale(scale);
    console.log(`🖼️ Background scale: ${scale.toFixed(2)}`);
  });

  bgScaleContainer.appendChild(bgScaleLabel);
  bgScaleContainer.appendChild(bgScaleSlider);
  bgScaleContainer.appendChild(bgScaleValue);

  container.appendChild(uploadButton);
  container.appendChild(uploadInput);
  container.appendChild(morphLabel);
  container.appendChild(bgLabel);
  container.appendChild(bgScaleContainer);

  console.log("🖼️ Background HUD section created");
}
