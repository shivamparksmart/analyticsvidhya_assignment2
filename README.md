# Carousel Image Viewer - README

## Overview

This project implements a responsive image carousel that displays random dog breed images fetched from the Dog CEO API. The carousel supports navigation via buttons, keyboard arrow keys, and swipe gestures on mobile devices. Images are loaded lazily to improve performance, and the carousel transitions smoothly as users navigate between images.

## Features

1. **Image Loading:**
   - Images are fetched asynchronously from the Dog CEO API.
   - The images are displayed in a carousel format.
   - **Lazy loading** is used to improve performance, ensuring images are only loaded when they are about to be shown.

2. **Carousel Navigation:**
   - **Next Button**: Moves the carousel to the next image.
   - **Previous Button**: Moves the carousel to the previous image.
   - **Keyboard Navigation**: Allows users to navigate the carousel using the left (`ArrowLeft`) and right (`ArrowRight`) arrow keys.

3. **Mobile Touch Support:**
   - The carousel supports swipe gestures on mobile devices, allowing users to swipe left or right to navigate between images.

4. **Responsive Layout:**
   - The carousel adjusts automatically to fit different screen sizes, making it mobile-friendly.

## Code Explanation

### HTML Structure:
The carousel relies on the following HTML structure:
```html
<div class="carousel-container">
  <div class="carousel"></div>
  <button class="prev">Previous</button>
  <button class="next">Next</button>
</div>
