// ===============================
// ARRAY DESTRUCTURING
// ===============================

// Create an array with 5 numbers
let numbers = [10, 20, 30, 40, 50];

// Destructure the first value into firstNum
// Destructure the second value into secondNum
let [firstNum, secondNum] = numbers;

// Print values to check result
console.log("First Number:", firstNum);
console.log("Second Number:", secondNum);

// ===============================
// SKIPPING VALUES
// ===============================

// Here we skip the second value using empty space
let [num1, , num3] = numbers;

// Print after skipping one value
console.log("After Skipping:");
console.log(num1); // prints first value
console.log(num3); // prints third value

// ===============================
// DEFAULT VALUES
// ===============================

// Create array with only one value
let marks = [80];

// If second value is missing, default value 0 is used
let [math = 0, science = 0] = marks;

// Print values
console.log("Math Marks:", math);
console.log("Science Marks:", science);

// ===============================
// OBJECT DESTRUCTURING
// ===============================

// Create an object
let student = {
    name: "Prayash",
    age: 20,
    city: "Kathmandu"
};

// Extract object properties into variables
let { name, age, city } = student;

// Print extracted values
console.log(name);
console.log(age);
console.log(city);

// ===============================
// RENAMING VARIABLES
// ===============================

// Rename name to studentName and city to studentCity
let { name: studentName, city: studentCity } = student;

// Print renamed variables
console.log(studentName);
console.log(studentCity);

// ===============================
// NESTED DESTRUCTURING
// ===============================

// Create nested object
let user = {
    id: 1,
    profile: {
        username: "admin",
        email: "admin@gmail.com"
    }
};

// Extract values from nested object
let {
    profile: { username, email }
} = user;

// Print nested values
console.log(username);
console.log(email);

// ===============================
// FUNCTION PARAMETER DESTRUCTURING
// ===============================

// Function receives object and destructures it directly
function showStudent({ name, age }) {
    console.log("Student Name:", name);
    console.log("Student Age:", age);
}

// Call function with student object
showStudent(student);
