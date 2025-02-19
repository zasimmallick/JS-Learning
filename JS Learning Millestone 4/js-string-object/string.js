const country = ` Bangladesh `;
console.log(country)
console.log(country.toLowerCase())
console.log(country.toUpperCase())
console.log(country.trim())



// let str1 = "Hello";
// let str2 = "hello";

// // Convert both to lowercase
// console.log(str1.toLowerCase() === str2.toLowerCase()); // Output: true

// // Convert both to uppercase
// console.log(str1.toUpperCase() === str2.toUpperCase()); // Output: true


let str1 = "  hello  ";
let str2 = "hello";

console.log(str1 === str2); // Output: false (extra spaces make them different)
console.log(str1.trim() === str2); // Output: true (after trimming, they are identical)
