# Changelog

## [1.1.0] - 2025-09-28
### Added
- Preset system with save/load/delete/list functionality:
  - `savePreset(name, state)` - Save current morph state to named preset
  - `loadPreset(name)` - Load preset and apply all morph settings
  - `deletePreset(name)` - Remove preset from storage
  - `listPresets()` - Get array of all saved preset names
- HUD: Added preset controls section with save/load/delete interface:
  - Text input field for preset names
  - Save button to store current state
  - Dropdown to select existing presets
  - Load button to apply selected preset
  - Delete button to remove selected preset
- LocalStorage persistence for presets across browser reloads
- Telemetry: Shows currently loaded preset name with 💾 icon
- Default presets: "Cube Default", "Sphere Focus", "Mixed Blend" created automatically
- Full state capture including morph weights, blend values, HUD settings
- Auto-updating preset dropdown when presets are added/removed

## [1.0.0] - 2025-09-28
### Added
- Periaktos Phase 4: Multi-target morph blending system:
  - `setMorphWeights` and `getMorphWeights` API for weighted blending across all targets
  - `setTargetWeight` and `getTargetWeight` for individual target control
  - HUD: Added per-target blend sliders (Cube/Sphere/Pyramid/Torus) with auto-normalization
  - MIDI: Added CC21 (Sphere), CC22 (Pyramid), CC23 (Torus) for per-target morph blending
  - MIDI: Moved scale control from CC22 to CC24 to accommodate new morphing CCs
  - Geometry: Weighted blending across multiple shapes simultaneously (e.g., Cube 30% + Sphere 20% + Torus 50%)
  - Telemetry: Displays all active morph target percentages in real-time (e.g., "C30% | S20% | T50%")
- Enhanced normalization system ensures total blend weights = 100%
- Full backwards compatibility with Phase 3 `setMorphBlend`/`getMorphBlend` API
### Milestone
- First major release (v1.0.0) of the morphing interface baseline
- Complete multi-target morphing system with HUD + MIDI integration

## [0.9.0] - 2025-09-28
### Added
- Periaktos Phase 3: Morph blending intensity system:
  - `setMorphBlend` and `getMorphBlend` API for blend control (0.0-1.0)
  - HUD: added "Morph Intensity" slider for real-time blend control
  - MIDI: CC2 mapped to morph intensity (0-127 → 0.0-1.0)
  - Geometry: partial morph states between current and next targets
  - Telemetry: displays current morph target and blend value with status icons
- Enhanced morphing system supports smooth transitions between any geometry pair
- Independent morph blending from morph transitions

## [0.8.0] - 2025-09-28
### Added
- Expanded Periaktos system with multiple morph targets:
  - Cube, Sphere, Pyramid, Torus
- Added `setMorphTarget`, `getMorphState`, and enhanced `onMorphUpdate` API
- HUD: added morph selection dropdown control
- MIDI: CC3 mapped to morph state selection (Cube/Sphere/Pyramid/Torus)
- Geometry: smooth morph transitions between all targets

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
