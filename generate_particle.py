#!/usr/bin/env python3
# Generate 32x32 particle texture with feathered alpha edge

from PIL import Image, ImageDraw
import numpy as np

# Create 32x32 RGBA image
size = 32
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
pixels = np.zeros((size, size, 4), dtype=np.uint8)

center = size / 2
max_radius = 14

for y in range(size):
    for x in range(size):
        dx = x - center + 0.5
        dy = y - center + 0.5
        dist = np.sqrt(dx*dx + dy*dy)

        if dist <= max_radius:
            # Soft falloff from center to edge
            alpha = int(255 * (1 - (dist / max_radius) ** 2))
            pixels[y, x] = [255, 255, 255, alpha]

img = Image.fromarray(pixels, 'RGBA')
img.save('textures/particle.png', 'PNG')
print('✅ Generated textures/particle.png (32×32 px)')