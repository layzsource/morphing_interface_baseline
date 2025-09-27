# Morphing Interface Baseline

This is the **official baseline** for your project, built under #baseline-rules.

## 🚀 Usage

1. Install dependencies:
   ```sh
   npm install
   ```

2. Run dev server:
   ```sh
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Structure

- `index.html` – Entry point with `<canvas>` for Three.js
- `src/main.js` – Imports all modules
- `src/hud.js` – HUD toggle logic (stub)
- `src/midi.js` – MIDI WebSocket + CC mapping stub
- `src/geometry.js` – Working spinning cube (Three.js)
- `src/periaktos.js` – Fallback P() stub
- `src/telemetry.js` – Performance telemetry stub

## ✅ Baseline Guarantee
- Clean flat `src/` structure (no double nesting)
- Drop-in ready under `morphing_interface_baseline/`
- Tested Three.js cube render for sanity check
