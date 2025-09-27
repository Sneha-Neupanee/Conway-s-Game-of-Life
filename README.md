# Conway’s Game of Life — HTML/CSS

A lightweight, front-end implementation of Conway’s Game of Life.  
Markup for the grid, CSS for layout/visuals, and a small JavaScript snippet for the simulation loop.

## Why this repo exists
- **Simple to run**: open `index.html` in a browser.
- **Easy to tweak**: change colors, cell size, and speed in one place.
- **No build tools**: pure HTML/CSS + vanilla JS (no frameworks).

## The rules (quick recap)
For each generation:
1. Any live cell with fewer than two live neighbors dies (underpopulation).
2. Any live cell with two or three live neighbors lives on.
3. Any live cell with more than three live neighbors dies (overpopulation).
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction).

## Demo (local)
1. Clone or download the folder.
2. Open `index.html` in Chrome/Firefox/Edge.
3. Click **Play** to start. **Pause** to stop. **Step** to advance one generation.

## Controls
- **Play / Pause**: start/stop the simulation.
- **Step**: advance one generation while paused.
- **Clear**: wipe the grid.
- **Random**: seed the board with random live cells.
- **Click cells**: toggle alive/dead.
- **Speed**: slider (ms per generation).
- **Size**: dropdown (e.g., 30×30, 50×50, 80×80).

> Tip: While paused, paint patterns by clicking cells, then press **Play**.

