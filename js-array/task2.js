
// task 4

// Step 1: Create variables containing arrays and non-array values
let numbers = [1, 2, 3, 4]; // Array
let name = "John";           // Non-array (string)
let mixed = [true, "hello", 42]; // Array
let age = 25;                // Non-array (number)
let fruits = ["Apple", "Banana", "Mango"]; // Array

// Step 2: Use Array.isArray() to check if each variable is an array
console.log("Is 'numbers' an array?", Array.isArray(numbers)); // true
console.log("Is 'name' an array?", Array.isArray(name)); // false
console.log("Is 'mixed' an array?", Array.isArray(mixed)); // true
console.log("Is 'age' an array?", Array.isArray(age)); // false
console.log("Is 'fruits' an array?", Array.isArray(fruits)); // true


// task 5

// Step 1: Create two arrays of your choice
let animals = ["Lion", "Tiger", "Elephant"];
let birds = ["Eagle", "Parrot", "Peacock"];

// Step 2: Use the concat method to combine the two arrays into a new array
let combinedArray = animals.concat(birds);

// Step 3: Print the original arrays and the combined array
console.log("Animals array:", animals); // ["Lion", "Tiger", "Elephant"]
console.log("Birds array:", birds);     // ["Eagle", "Parrot", "Peacock"]
console.log("Combined array:", combinedArray); 
// ["Lion", "Tiger", "Elephant", "Eagle", "Parrot", "Peacock"]
