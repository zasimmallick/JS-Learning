// Task-1

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": "#daa520"
  };
  
  // Access the golden rod color value
  const goldenRodColor = colors["golden rod"];
  console.log("Golden rod color value:", goldenRodColor);
  
//   Task-2

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
  };
  
  // Add the new property
  car["passenger capacity"] = 5;
  
  // Display the updated object
  console.log(car);
  
  //   Task-3

//   const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//       subject: "HSC Physics",
//       author: "Shahjahan Tapan",
//       marks: 30
//     }
//   };
  
//   // Access the physics marks
//   const physicsMarks = student.physics.marks;
  
//   // Display the marks
//   console.log("Physics marks:", physicsMarks);
  

//   Task-4

let student = {
    name: "Ariana Grande",
    age: 21,
    city: "Gaibandha",
    isStudent: true
  };
  
  // Count the number of properties
  const propertyCount = Object.keys(student).length;
  
  // Display the count
  console.log("Number of properties:", propertyCount);
  
//   Task-5

let myObject = {
    name: "John Doe",
    age: 25,
    city: "Example City",
    isStudent: true,
  };
  
  for (let key in myObject) {
    console.log(`key: ${key} | type: ${typeof myObject[key]}`);
  }
  

  