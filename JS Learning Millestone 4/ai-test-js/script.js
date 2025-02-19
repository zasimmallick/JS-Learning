const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const boxSize = 20; // Size of each box in the grid
let score = 0;

// Initialize the snake
let snake = [];
snake[0] = { x: 9 * boxSize, y: 10 * boxSize };

// Initialize the food
let food = {
    x: Math.floor(Math.random() * 20) * boxSize,
    y: Math.floor(Math.random() * 20) * boxSize
};

// Initialize the direction
let direction = "RIGHT";

// Handle keyboard input
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    if (event.keyCode === 37 && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (event.keyCode === 38 && direction !== "DOWN") {
        direction = "UP";
    } else if (event.keyCode === 39 && direction !== "LEFT") {
        direction = "RIGHT";
    } else if (event.keyCode === 40 && direction !== "UP") {
        direction = "DOWN";
    }
}

// Draw the snake and food on the canvas
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "green" : "white";
        ctx.strokeStyle = "black";
        ctx.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);
        ctx.strokeRect(snake[i].x, snake[i].y, boxSize, boxSize);
    }

    // Draw the food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, boxSize, boxSize);

    // Get the head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Move the snake
    if (direction === "LEFT") snakeX -= boxSize;
    if (direction === "UP") snakeY -= boxSize;
    if (direction === "RIGHT") snakeX += boxSize;
    if (direction === "DOWN") snakeY += boxSize;

    // Check if the snake eats the food
    if (snakeX === food.x && snakeY === food.y) {
        score++;
        document.getElementById('score').innerText = score;
        food = {
            x: Math.floor(Math.random() * 20) * boxSize,
            y: Math.floor(Math.random() * 20) * boxSize
        };
    } else {
        // Remove the tail
        snake.pop();
    }

    // Add new head
    let newHead = {
        x: snakeX,
        y: snakeY
    };

    // Check for collisions
    if (
        snakeX < 0 || 
        snakeY < 0 || 
        snakeX >= canvas.width || 
        snakeY >= canvas.height || 
        collision(newHead, snake)
    ) {
        clearInterval(gameLoop);
        alert("Game Over! Your score: " + score);
    }

    snake.unshift(newHead);
}

// Collision detection function
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

// Start the game loop
let gameLoop = setInterval(draw, 100);