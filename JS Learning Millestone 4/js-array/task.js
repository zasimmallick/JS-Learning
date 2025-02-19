// task 1

// Step 1: Declare an array with 5 elements containing fruits
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// Step 2: Console log the 3rd index element
console.log("Element at index 3:", fruits[3]); // Output: Orange

// Step 3: Change the value of the 2nd index element to "Jambura"
fruits[2] = "Jambura";

// Step 4: Console log the final array
console.log("Final array:", fruits);
// Output: ["Apple", "Banana", "Jambura", "Orange", "Pineapple"]



// task 2

// Step 1: Declare an array of 3 tourist destinations
let touristDestinations = ["Cox's Bazar", "Sundarbans", "Bandarban"];

// Step 2: Add a new tourist destination to your array
touristDestinations.push("Sylhet");

// Step 3: Add two more destinations to your array
touristDestinations.push("Chittagong", "Rangamati");

// Step 4: Remove the last tourist destination you have added
touristDestinations.pop();

// Step 5: Display the final array as output
console.log("Final array:", touristDestinations);
// Output: ["Cox's Bazar", "Sundarbans", "Bandarban", "Sylhet", "Chittagong"]


// task 3

// Step 1: Create an array of books
let books = ["Python Programming", "JavaScript Essentials", "HTML & CSS Design", "React Guide", "Node.js Basics"];

// Step 2: Use the includes method to check if the array contains a JavaScript book
let hasJavaScriptBook = books.includes("JavaScript Essentials");

// Step 3: Print a message based on the result
if (hasJavaScriptBook) {
  console.log("The array contains a JavaScript book.");
} else {
  console.log("The array does not contain a JavaScript book.");
}

// Output: The array contains a JavaScript book.


