# Changelog

## [0.6.2] - 2025-09-28
### Fixed
- Corrected cube alignment — now consistently centered in viewport
- Added window resize handler to maintain proper aspect ratio and centering
### Noted
- CC2 and CC3 (mod wheels) detected but not yet mapped
- Added console warnings when CC2/CC3 events are received

## [0.6.1] - 2025-09-28
### Fixed
- Corrected MIDI CC mapping for MPK mini:
  - CC1 → X rotation
  - CC4 → Y rotation
  - CC22 → scale (0.5–2.0)
- Idle Spin toggle now fully stops baseline spin when OFF
- HUD rotation sliders now start at 0 instead of 0.01
- Preserved MIDI + HUD additive system
- Locked Vite dev server to port 3000 with `strictPort: true`
- Added build timestamp log in `main.js` to verify fresh builds in browser

## [0.6.0] - 2025-09-28
### Added
- Implemented Periaktos morphing system (Phase 1)
- Cube ↔ Sphere morph with smooth transition
- Added `initPeriaktos`, `toggleMorph`, and `onMorphUpdate` API
- Bound "P" key to trigger morph toggle
- Geometry retains MIDI + HUD influences during morphs

## [0.5.0] - 2025-09-28
### Added
- Implemented telemetry overlay (bottom-left corner)
- Displays:
  - FPS (frames per second) with color-coded performance indicators
  - Connected MIDI devices
  - HUD idle-spin state
- Lightweight, real-time updates without performance hit

## [0.4.0] - 2025-09-28
### Added
- Implemented HUD overlay with interactive controls:
  - Toggle idle spin
  - X rotation slider
  - Y rotation slider
  - Scale slider
- HUD values combine with MIDI inputs for geometry control

## [0.3.0] - 2025-09-28
### Added
- Linked MIDI CC values to geometry:
  - CC1 → X-axis rotation
  - CC21 → Y-axis rotation
  - CC22 → Cube scaling (0.5–2.0)
- Idle spin preserved as fallback

## [0.2.0] - 2025-09-28
### Added
- Full MIDI module with Web MIDI API integration
- Device detection and Control Change message handling
- Event subscription system for CC messages
- Graceful fallback when MIDI unavailable
- Integration example in main.js

## [0.1.0] - 2025-09-27
### Added
- Initial **morphing_interface_baseline** release
- Clean Vite scaffold with port locked to 3000
- Flat `src/` structure with six modular files
- ✅ All modules log on boot
- ✅ Working spinning cube in `geometry.js`
- README.md with usage instructions
- favicon.ico (green cube) to remove 404s

### Notes
- This baseline is built under **#baseline-rules**
- Every future step must branch from this state, never overwrite
