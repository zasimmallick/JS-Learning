for (let i = 55; i <= 85; i++) {
    if (i % 2 !== 0) { // Check if the number is odd
      if (i % 5 === 0) {
        continue; // Skip numbers divisible by 5
      }
      console.log(i); // Print odd numbers not divisible by 5
    }
  }
  