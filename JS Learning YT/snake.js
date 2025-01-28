// Select the canvas element and get its context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Define game variables
const boxSize = 20; // Size of each grid box
let snake = [{ x: 8 * boxSize, y: 8 * boxSize }]; // Initial snake position
let direction = 'RIGHT'; // Initial direction
let food = { x: getRandomPosition(), y: getRandomPosition() }; // Initial food position
let score = 0;

// Generate random position for food
function getRandomPosition() {
  return Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize;
}

// Draw the game elements
function draw() {
  // Clear the canvas
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the snake
  ctx.fillStyle = 'lime';
  for (let segment of snake) {
    ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
  }

  // Draw the food
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, boxSize, boxSize);

  // Draw the score
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 10, 20);
}

// Update the game state
function update() {
  // Get the head of the snake
  let head = { ...snake[0] };

  // Update the head position based on the direction
  if (direction === 'UP') head.y -= boxSize;
  if (direction === 'DOWN') head.y += boxSize;
  if (direction === 'LEFT') head.x -= boxSize;
  if (direction === 'RIGHT') head.x += boxSize;

  // Check for collision with the food
  if (head.x === food.x && head.y === food.y) {
    score += 1;
    food = { x: getRandomPosition(), y: getRandomPosition() }; // Generate new food position
  } else {
    snake.pop(); // Remove the last segment if no food is eaten
  }

  // Add the new head to the snake
  snake.unshift(head);

  // Check for collisions with the wall or itself
  if (
    head.x < 0 ||
    head.x >= canvas.width ||
    head.y < 0 ||
    head.y >= canvas.height ||
    snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    alert('Game Over!');
    document.location.reload();
  }
}

// Handle keyboard input
window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
  if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
  if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
  if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
});

// Main game loop
function gameLoop() {
  update();
  draw();
  setTimeout(gameLoop, 100);
}

// Start the game
gameLoop();
