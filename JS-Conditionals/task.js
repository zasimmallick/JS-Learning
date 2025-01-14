let burgerPrice = 600;

if (burgerPrice > 500) {
    console.log("You get a free Coke!");
  } else {
    console.log("Coke costs 30tk.");
  }


//   BMI Calculator and Health Category

let weight = 63;
let height = 1.70;

let bmi = weight / (height * height);

let category;

if (bmi < 18.5) {
  category = "Underweight";
} else {
  if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else {
    if (bmi >= 25 && bmi <= 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  }
}


console.log("Your BMI is: " + bmi.toFixed(2));
console.log("Health Category: " + category);


// Grade Calculator

let score = 85;

let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score < 90) {
  grade = "B";
} else if (score >= 70 && score < 80) {
  grade = "C";
} else if (score >= 60 && score < 70) {
  grade = "D";
} else if (score >= 0 && score < 60) {
  grade = "F";
} else {
  grade = "Invalid score";
}

console.log("Score: " + score);
console.log("Grade: " + grade);


// Decision Based on Scores

let yourScore = 85;
let friendScore = 75;

if (yourScore > 80) {
    // Check your friend's score
    if (friendScore > 80) {
      console.log("Go for a lunch with your friend!");
    } else if (friendScore >= 60 && friendScore <= 80) {
      console.log("Tell your friend, good luck next time.");
    } else if (friendScore >= 40 && friendScore < 60) {
      console.log("Keep your friend's message unseen.");
    } else {
      console.log("Block your friend.");
    }
  } else {
    // If your score is less than or equal to 80
    console.log("Go home, sleep, and act sad.");
  }


//   Using if-else

//   let num1 = 10;
// let num2 = 5;

// let result;

// if (num1 > num2) {
//     result = num1 * 2; 
//   } else {
//     result = num1 + num2; 
//   }
  
//   console.log("Result using if-else:", result);

  // Input: Two numbers

//   Using Ternary Operator

let num1 = 10;
let num2 = 5;

// Determine the result using ternary operator
let result = num1 > num2 ? num1 * 2 : num1 + num2;

console.log("Result using ternary operator:", result);



// Ticket Fare Calculator