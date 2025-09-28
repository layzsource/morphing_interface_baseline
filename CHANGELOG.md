# Changelog

## [1.6.2] - 2025-09-28
### Fixed
- Corrected Torus morph target to use full 360° arc (`Math.atan2` for complete range).
### Benefits
- Torus now renders as a complete ring rather than a sliced bagel.
- Smooth interpolation with other morph targets preserved.

## [1.6.1] - 2025-09-28
### Fixed
- Scaled shadow plane relative to vessel size (2× state.scale).
- Reduced base opacity to 0.1, audio-reactivity modulates up to ~0.3.
- Repositioned shadow plane farther back (z = -20).
- Forced shadow color to black for proper projection (no green overlays).
### Benefits
- Shadows now appear as subtle background projections.
- Visual regression (large green block) fully resolved.

## [1.6.0] - 2025-09-28
### Added
- Shadows module (src/shadows.js) as first consumer of state.js.
- Shadows scale + color linked to Vessel state.
- Shadows opacity modulated by audio bands when audio enabled.
### Benefits
- Demonstrates state.js modular expansion.
- Adds second visual layer to engine (Vessel + Shadows).
- Validates extensibility for future Sprites/Particles.

## [1.5.0] - 2025-09-28
### Added
- New `src/state.js` for centralized modular state management.
- Signal routing modules: `midiRouter.js`, `hudRouter.js`, `audioRouter.js`, `presetRouter.js`.
- True modular signal-to-form pipeline architecture.
### Changed
- MIDI, HUD, and Audio modules now update centralized state instead of geometry directly.
- Geometry module reads from state each frame (rotation, scale, morph weights, color, lighting).
- Telemetry updated to reflect values directly from centralized state.
- Preset system redesigned to save/load complete application state.
### Benefits
- Decoupled architecture prevents regressions when adding new features.
- Clean separation between signal input (MIDI/HUD/Audio) and form output (Geometry).
- Foundation for adding new consumers like Vessel, Shadows, or Sprites.
- Restored Signal-to-Form Engine vision with centralized state management.

## [1.4.0] - 2025-09-28
### Added
- Restored **true vertex morphing** using BufferGeometry morph targets (single mesh).
- Consistent vertex correspondence across Cube/Sphere/Pyramid/Torus targets.
- Icosahedron-based geometry with detail level 4 for optimal performance/quality balance.
- Smooth interpolation between all morph targets using morphTargetInfluences.
### Fixed
- Eliminated mesh-jump behavior; removed any overlapping-geometry artifacts.
- Single mesh approach eliminates all ghosting and rendering artifacts.
- Improved performance with unified geometry system.
### Preserved
- Existing HUD, MIDI, Audio, Telemetry, and Preset integrations.
- Color and lighting system continues to work with shared material.
- All weight-based blending and transition logic maintained.

## [1.3.2] - 2025-09-28
### Fixed
- Hue shift remapped from CC10 → CC21 for MPK Mini compatibility.
- Morph blending corrected: only one geometry is rendered during transitions.
- Removed ghosting/opacity artifacts caused by overlapping meshes.
- Shared material consistently applied to active geometry only.
- Preset system updated for new hue mapping (CC21).

## [1.3.1] - 2025-09-28
### Fixed
- All morph targets now share a single MeshStandardMaterial for consistent color updates.
- HUD color picker and MIDI hue shift apply color changes across Cube, Sphere, Pyramid, and Torus.
- Presets reliably store and reload color values.
- Telemetry overlay shows the correct active color hex.

## [1.3.0] - 2025-09-28
### Added
- Visual polish system with advanced lighting and color control:
  - Ambient lighting with adjustable intensity (0-2.0) for soft overall illumination
  - Directional lighting with adjustable intensity (0-2.0) and angle controls (X/Y rotation)
  - MeshStandardMaterial with wireframe rendering for professional lighting response
  - Material properties: 70% roughness, 30% metalness for optimal visual appeal
- HUD: Added visual polish controls section:
  - Ambient intensity slider for soft lighting control
  - Directional intensity slider for primary light source
  - Light angle X/Y sliders (-90° to +90°) for precise lighting direction
  - Color picker for real-time geometry color adjustment with hex display
  - Magenta-themed styling (🎨) to distinguish visual controls
- MIDI: CC10 mapped to hue shift for real-time color modulation (0-127 → 0-360°)
- Telemetry: Visual status display showing ambient/directional intensities and current color
- Presets: Visual settings now saved/loaded with lighting and color parameters
- HSL color system integration for smooth hue transitions via MIDI control
- Automatic material updates across all morph targets when colors change

## [1.2.0] - 2025-09-28
### Added
- Audio-reactive morphing system using Web Audio API and FFT analysis:
  - Real-time microphone input with 1024-point FFT spectrum analysis
  - Bass (20-250Hz) → Cube weight mapping
  - Mid (250-2000Hz) → Sphere weight mapping
  - Treble (2000-8000Hz) → Pyramid weight mapping
  - Torus remains unaffected (reserved for future visual enhancements)
- HUD: Added audio-reactive controls section:
  - Toggle checkbox for enabling/disabling audio-reactive morphing
  - Sensitivity slider (0.5-2.0) for adjusting audio influence intensity
  - Orange-themed styling to distinguish from other control sections
- Telemetry: Real-time audio frequency display showing Bass/Mid/Treble percentages
- Presets: Audio reactivity state and sensitivity now saved/loaded with presets
- Additive blending: Audio weights combine with existing MIDI/HUD/preset weights
- Graceful fallback: Console warning if microphone access denied, system continues normally
- Safe integration: Audio system does not interfere with existing morph controls

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
