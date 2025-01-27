let person = {
    name: "Zasim Mallick",
    age: 20,
    nationality: "Bangladeshi",
    details: {
      height: "5 ft 7 in",
      weight: "63 kg",
      languages: ["English", "Bengali", "Urdu", "Arabic"]
    }
  };
  

  console.log(person.details.height); // Output: "5 ft 7 in"
console.log(person.details.languages[0]); // Output: "English"

// Using bracket notation
console.log(person["details"]["weight"]); // Output: "63 kg"


person.details.weight = "64 kg"; // Update weight
console.log(person.details.weight); // Output: "64 kg"

person.details.languages.push("Spanish"); // Add a new language
console.log(person.details.languages); // Output: ["English", "Bengali", "Urdu", "Arabic", "Spanish"]



delete person.age; // Removes the age property
console.log(person); 
// Output: { name: "Zasim Mallick", nationality: "Bangladeshi", details: { ... } }


delete person.details.height; // Removes the height property
console.log(person.details); 
// Output: { weight: "64 kg", languages: ["English", "Bengali", "Urdu", "Arabic", "Spanish"] }
