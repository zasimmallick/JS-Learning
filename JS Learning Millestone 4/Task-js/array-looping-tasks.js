// task-1

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// Initialize an empty array to store the reversed colors
let reversedColors = [];

// Loop through the colors array from the end to the beginning
for (let i = colors.length - 1; i >= 0; i--) {
  // Push each element into the reversedColors array
  reversedColors.push(colors[i]);
}

console.log(reversedColors); // Output: ['orange', 'yellow', 'green', 'blue', 'red']
