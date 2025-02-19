for (let i = 1; i <= 200; i++) {
    if (i === 100) {
      console.log("Found 100, exiting the loop.");
      break; // Exit the loop when 100 is found
    }
    console.log(i); // Print numbers before 100
  }
  
let sum = 0;
let number = 1;

while (true) {
  sum += number; // Add the current number to sum
  if (sum >= 100) {
    break; // Exit the loop if sum reaches or exceeds 100
  }
  number++; // Move to the next number
}

console.log("Final sum:", sum);

for (let i = 1; i <= 100; i++) {
    if (Math.sqrt(i) % 1 === 0) { // Check if the number is a square number
      console.log("First square number found:", i);
      break; // Exit the loop once the first square number is found
    }
  }
  