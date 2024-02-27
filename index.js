

// ForEach Method 1:
const numbers1 = [2, 4, 6, 8, 10];
console.log("ForEach Method 1:");
numbers1.forEach((element) => {
    // Multiply each element by 3 and log the result
    console.log(element * 3);
});

// ForEach Method 2:
const strings = ['apple', 'banana', 'cherry', 'date'];
console.log("\nForEach Method 2:");
strings.forEach((string, index) => {
    // Log each string with its index
    console.log(`Index: ${index}, String: ${string}`);
});

// Map Method 1:
const numbers2 = [5, 10, 15, 20, 25];
console.log("\nMap Method 1:");
const squaredNumbers = numbers2.map((element) => {
    // Square each element and return the result
    return element ** 2;
});
console.log(squaredNumbers);

// Map Method 2:
const students = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 85 },
    { name: 'Charlie', score: 95 }
];
console.log("\nMap Method 2:");
const studentNames = students.map((student) => {
    // Extract only the names from each student object
    return student.name;
});
console.log(studentNames);

// Combining Methods:
const numbers3 = [1, 2, 3, 4, 5];
console.log("\nCombining Methods:");
const doubledAndSquared = [];
numbers3.forEach((number) => {
    // Double each number and push it to the new array
    doubledAndSquared.push(number * 2);
});
const finalArray = doubledAndSquared.map((number) => {
    // Square each number in the new array and return the result
    return number ** 2;
});
console.log(finalArray);
