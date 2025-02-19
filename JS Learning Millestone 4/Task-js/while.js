for (let i = 1; i <= 60; i++) {
    console.log(`Day ${i}: I will invest at least 6 hrs every single day for the next 60 days!`);
  }
  
console.log("Odd numbers from 61 to 100:");
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


console.log("Even numbers from 78 to 98:");
for (let i = 78; i <= 98; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


let sumOdd = 0;

for (let i = 81; i <= 131; i++) {
  if (i % 2 !== 0) {
    sumOdd += i; // Add odd numbers to sumOdd
  }
}

console.log("Sum of all odd numbers from 81 to 131:", sumOdd);


let sumEven = 0;

for (let i = 206; i <= 311; i++) {
  if (i % 2 === 0) {
    sumEven += i; // Add even numbers to sumEven
  }
}

console.log("Sum of all even numbers from 206 to 311:", sumEven);

let countdown = 21; // Start from 21

let timer = setInterval(() => {
  console.log(countdown); // Display the current number

  if (countdown === 15) { // Stop when countdown reaches 15
    clearInterval(timer);
    console.log("Countdown complete!");
  }

  countdown--; // Decrement the countdown
}, 1000); // 1000 milliseconds = 1 second
