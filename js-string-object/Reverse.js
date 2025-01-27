// Using a Loop

function reverseWithLoop(str) {
    let reversed = ""; // Start with an empty string
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]; // Add characters one by one from the end
    }
    return reversed;
  }
  
  console.log(reverseWithLoop("Zasim Mallick")); // 
  

//   Using split(), reverse(), and join()

  function reverseWithMethods(str) {
    return str.split("").reverse().join("");
  }
  
  console.log(reverseWithMethods("Zasim Mallick")); // 
  
//   Using Recursion

  function reverseWithRecursion(str) {
    // Base case: If the string is empty or has one character, return it as is
    if (str.length <= 1) return str;
    // Recursive step: Take the last character and call the function for the rest
    return str[str.length - 1] + reverseWithRecursion(str.slice(0, -1));
  }
  
  console.log(reverseWithRecursion("Zasim Mallick")); // 
  