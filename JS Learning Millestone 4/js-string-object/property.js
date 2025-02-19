let person = {
    name: "Zasim Mallick",
    age: 20,
    nationality: "Bangladeshi"
  };
  
  console.log(person.name); // Output: "Zasim Mallick"
  console.log(person.age);  // Output: 20
  console.log(person['nationality']);  
  

  person.height = "5 ft 7 in"; // Adding a new property
console.log(person.height); // Output: "5 ft 7 in"

person.age = 21; // Updating an existing property
console.log(person.age); // Output: 21



let key = "nationality";

console.log(person["name"]);       // Output: "Zasim Mallick"
console.log(person[key]);          // Output: "Bangladeshi"
console.log(person["age"]);        // Output: 20


person["weight"] = "63 kg"; // Adding a new property
console.log(person["weight"]); // Output: "63 kg"

person["name"] = "Zasim M."; // Updating an existing property
console.log(person["name"]); // Output: "Zasim M."


