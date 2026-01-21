// ===============================
// REST OPERATOR WITH ARRAYS
// ===============================

// Create an array of fruits
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Store first value in firstFruit
// Store remaining values in otherFruits
let [firstFruit, ...otherFruits] = fruits;

// Print values
console.log(firstFruit);
console.log(otherFruits);

// ===============================
// REST OPERATOR IN FUNCTIONS
// ===============================

// Function accepts multiple arguments using rest operator
function countArguments(...args) {
    // args becomes an array
    return args.length; // return total count
}

// Call function and print result
console.log("Total Arguments:", countArguments(1, 2, 3, 4));

// ===============================
// SPREAD OPERATOR WITH ARRAYS
// ===============================

// Create two arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Merge arrays using spread operator
let mergedArray = [...arr1, ...arr2];

// Print merged array
console.log("Merged Array:", mergedArray);

// ===============================
// COPYING AN ARRAY
// ===============================

// Original array
let originalArray = [10, 20, 30];

// Create copy using spread operator
let copiedArray = [...originalArray];

// Modify copied array only
copiedArray.push(40);

// Print both arrays to prove original is not changed
console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);

// ===============================
// SPREAD OPERATOR WITH OBJECTS
// ===============================

// Create object
let person = {
    name: "Prayash",
    age: 20
};

// Create new object by copying and adding new property
let newPerson = {
    ...person,
    city: "Pokhara"
};

// Print objects
console.log(person);
console.log(newPerson);

// ===============================
// UPDATING OBJECT PROPERTIES
// ===============================

// Update age without changing original object
let updatedPerson = {
    ...person,
    age: 30
};

// Print results
console.log("Old Person:", person);
console.log("Updated Person:", updatedPerson);
