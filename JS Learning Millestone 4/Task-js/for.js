for (let day = 1; day <= 60; day++) {
    console.log(`Day ${day}: I will invest at least 6 hrs every single day for next 60 days!`);
  }
  

//   console.log("Odd numbers from 61 to 100:");
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i); // Print odd number
  }
}


console.log("Even numbers from 78 to 98:");
for (let i = 78; i <= 98; i++) {
  if (i % 2 === 0) {
    console.log(i); // Print even number
  }
}

console.log("Multiplication Table for 9:");
for (let i = 1; i <= 10; i++) {
  console.log(`9 × ${i} = ${9 * i}`);
}


let countdown = 81; // Start from 81

let timer = setInterval(() => {
  console.log(countdown); // Display the current countdown value

  if (countdown === 65) { // Stop the countdown when it reaches 65
    clearInterval(timer);
    console.log("Countdown complete!");
  }

  countdown--; // Decrement the countdown
}, 1000); // 1000 milliseconds = 1 second


for (let i = 1; i <= 40; i++) {
    if (i % 2 !== 0) {
      continue; // Skip odd numbers
    }
    console.log(i); // Print even numbers
  }
  


  