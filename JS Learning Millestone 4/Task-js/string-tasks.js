// Task-1

function countAInString(inputString) {
    let count = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === 'a' || inputString[i] === 'A') {
        count++; // Increment count if the letter is 'a' or 'A'
      }
    }
  
    return count;
  }
  
  // Example Input
//   const input = "Ariana Grande is an amazing artist";
//   const result = countAInString(input);
//   console.log("The letter 'a' appears:", result, "times.");
  
    // Task-2

    function countAorAInString(inputString) {
        let count = 0;
      
        for (let i = 0; i < inputString.length; i++) {
          if (inputString[i] === 'a' || inputString[i] === 'A') {
            count++; // Increment the count for each 'a' or 'A'
          }
        }
      
        return count;
      }
      
    //   // Example Input
    //   const input = "Ariana Grande is an amazing Artist";
    //   const result = countAorAInString(input);
    //   console.log("The letter 'a' or 'A' appears:", result, "times.");
      
        // Task-3

        
        function containsAllVowels(inputString) {
            // Convert the string to lowercase to handle case insensitivity
            inputString = inputString.toLowerCase();
            
            // Define the vowels we're looking for
            const vowels = ['a', 'e', 'i', 'o', 'u'];
          
            // Check if all vowels are present in the string
            return vowels.every(vowel => inputString.includes(vowel));
          }
          
        //   // Example Input
        //   const input = "Ariana Grande is amazing";
        //   const result = containsAllVowels(input);
        //   console.log("Does the string contain all vowels?", result);
          
            // Task-4

            function replaceXWithY(inputString) {
                // Replace all 'x' with 'y' and 'X' with 'Y'
                let result = inputString.replace(/x/g, 'y').replace(/X/g, 'Y');
                return result;
              }
              
            //   // Example Input
            //   const input = "Example with x and X in it.";
            //   const result = replaceXWithY(input);
            //   console.log(result); // Output: "EYample with y and Y in it."
              

                // Task-5

                function capitalizeFirstLetter(inputString) {
                    // Split the string into words
                    const words = inputString.split(" ");
                  
                    // Capitalize the first letter of each word
                    const capitalizedWords = words.map(word => {
                      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                    });
                  
                    // Join the words back into a single string
                    return capitalizedWords.join(" ");
                  }
                  
                  // Example Input
                  const input = "hello world, this is a test string.";
                  const result = capitalizeFirstLetter(input);
                  console.log(result); // Output: "Hello World, This Is A Test String."
                  