// ===============================
// SLICE METHOD
// ===============================

// Create array
let nums = [1, 2, 3, 4, 5];

// Extract values from index 1 to 3
let slicedNums = nums.slice(1, 4);

// Print both arrays
console.log("Original Array:", nums);
console.log("Sliced Array:", slicedNums);

// ===============================
// CONCAT METHOD
// ===============================

// Create two arrays
let a = [1, 2];
let b = [3, 4];

// Merge arrays using concat
let combined = a.concat(b);

// Print arrays to prove original is not changed
console.log(a);
console.log(b);
console.log(combined);

// ===============================
// JOIN METHOD
// ===============================

// Create string array
let words = ["I", "love", "JavaScript"];

// Join using different separators
console.log(words.join(" "));
console.log(words.join("-"));
console.log(words.join(","));

// ===============================
// INCLUDES METHOD
// ===============================

// Create array
let numbersArray = [10, 20, 30, 40];

// Check if value exists
if (numbersArray.includes(20)) {
    console.log("20 is found in the array");
} else {
    console.log("20 is not found in the array");
}

// ===============================
// FLAT METHOD
// ===============================

// Create nested array
let nestedArray = [1, [2, 3], [4, [5, 6]]];

// Flatten array with different depth
console.log(nestedArray.flat(1));
console.log(nestedArray.flat(2));

// ===============================
// COMBINING SLICE AND CONCAT
// ===============================

// Original array
let mainArray = [1, 2, 3, 4, 5];

// Slice first part
let part1 = mainArray.slice(0, 2);

// Slice second part
let part2 = mainArray.slice(3);

// Combine sliced parts
let newArray = part1.concat(part2);

// Print result
console.log("Original Array:", mainArray);
console.log("New Array:", newArray);
