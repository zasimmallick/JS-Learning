// Function

function greet() {
    console.log("Hello, Zasim!");
}
greet(); // Output: Hello, Zasim!



// Function Parameters and Arguments

function addNumbers(a, b) { // a and b are parameters
    console.log(a + b);
}
addNumbers(5, 10); // 5 and 10 are arguments; Output: 15


function introduce(name, age, country) {
    console.log(`My name is ${name}, I am ${age} years old, and I am from ${country}.`);
}
introduce("Zasim", 21, "Bangladesh");
// Output: My name is Zasim, I am 21 years old, and I am from Bangladesh.


// How Functions Work

let globalMessage = "I am learning JavaScript!";

function showMessage() {
    let localMessage = "Functions are powerful!";
    console.log(globalMessage); // Accessing global variable
    console.log(localMessage); // Accessing local variable
}
showMessage();
// Output:
// I am learning JavaScript!
// Functions are powerful!


// Return Statements

function multiply(a, b) {
    return a * b; // Returns the product
}
let result = multiply(4, 5); // Store the returned value
console.log(result); // Output: 20


// Conditional Return

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEvenOrOdd(7)); // Output: Odd
console.log(isEvenOrOdd(10)); // Output: Even


// Different Types of Parameters

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet("Zasim"); // Output: Hello, Zasim!


function sumAll(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// Functions vs Arguments

function greet(name) { // 'name' is a parameter
    console.log(`Hello, ${name}!`);
}
greet("Zasim"); // 'Zasim' is the argument


// Sum of Numbers in an Array (Using Functions)

function sumArray(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
let myArray = [10, 20, 30];
console.log(sumArray(myArray)); // Output: 60
