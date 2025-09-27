const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const rows = 40;
const cols = 40;
const cellSize = 15;

canvas.width = cols * cellSize;
canvas.height = rows * cellSize;

// Create 2D grid
let grid = Array.from({ length: rows }, () =>
  Array(cols).fill(0)
);

let running = false;
let interval;

// Draw the grid
function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        ctx.fillStyle = "lime";
        ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
      }
      ctx.strokeStyle = "#333";
      ctx.strokeRect(c * cellSize, r * cellSize, cellSize, cellSize);
    }
  }
}

// Compute next generation
function nextGen() {
  const newGrid = grid.map(arr => [...arr]);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let neighbors = countNeighbors(r, c);
      if (grid[r][c] === 1) {
        if (neighbors < 2 || neighbors > 3) {
          newGrid[r][c] = 0;
        }
      } else {
        if (neighbors === 3) {
          newGrid[r][c] = 1;
        }
      }
    }
  }
  grid = newGrid;
  drawGrid();
}

// Count neighbors
function countNeighbors(r, c) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      let row = r + i;
      let col = c + j;
      if (row >= 0 && row < rows && col >= 0 && col < cols) {
        count += grid[row][col];
      }
    }
  }
  return count;
}

// Controls
document.getElementById("startBtn").onclick = () => {
  if (!running) {
    running = true;
    interval = setInterval(nextGen, 200);
  }
};
document.getElementById("stopBtn").onclick = () => {
  running = false;
  clearInterval(interval);
};
document.getElementById("randomBtn").onclick = () => {
  grid = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.round(Math.random()))
  );
  drawGrid();
};
document.getElementById("clearBtn").onclick = () => {
  grid = Array.from({ length: rows }, () => Array(cols).fill(0));
  drawGrid();
};

// Click on canvas to toggle cells
canvas.addEventListener("click", e => {
  const x = Math.floor(e.offsetX / cellSize);
  const y = Math.floor(e.offsetY / cellSize);
  grid[y][x] = grid[y][x] ? 0 : 1;
  drawGrid();
});

drawGrid();
