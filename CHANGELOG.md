# Changelog

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
