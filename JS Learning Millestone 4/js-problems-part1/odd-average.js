// function takes an array as parameter give me the average of the odd numbers in the array

function oddAverage(numbers) {
    for (const number of numbers) {
    if (number % 2 === 1) {   
    console.log(number);
}
    }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const avg = oddAverage(numbers);
console.log('average of the odd numbers',avg);  