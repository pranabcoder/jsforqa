// Declaring of an array

let myArray = []; // Empty array
let numbers = [1, 2, 3, 4, 5]; // Array of numbers
// let fruits = ['Apple', 'Banana', 'Cherry', 'Date']; // Array of strings

// Array method - Push
// Adds an element to the end of the array and returns the new length of the array
let languages = ['JavaScript', 'Python', 'Ruby'];
languages.push('Java');
console.log(languages); // Output: ['JavaScript', 'Python', 'Ruby', 'Java']

// Array method - Pop
// Removes the last element from the array and returns that element
languages.pop();
console.log(languages); // Output: ['JavaScript', 'Python', 'Ruby']

// Array method - Shift
// Removes the first element from the array and returns that element
let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
let firstFruits = fruits.shift();
console.log(firstFruits); // Output: Apple
console.log(fruits); // Output: ['Banana', 'Cherry', 'Date']

// Array method - Unshift
// Adds one or more elements to the beginning of the array and returns the new length of the array
let color = ['Red', 'Green', 'Blue'];
let arrayLength = color.unshift('Yellow');
console.log(arrayLength); // Output: 4
console.log(color); // Output: ['Yellow', 'Red', 'Green', 'Blue']

// Array method - Splice
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 1, 'Feb'); // Insert at index 1
console.log(months); // Output: ['Jan', 'Feb', 'April', 'June']

// Array method - Slice
// Returns a shallow copy of a portion of an array into a new array object selected from beginning to end (the end not included)
let animals = ['Cat', 'Dog', 'Elephant', 'Bee', 'Ant'];
let newAnimals = animals.slice(1, 3); // Slice from index 1 to 3
console.log(animals); // Output: ['Cat', 'Dog', 'Elephant', 'Bee', 'Ant']
console.log(newAnimals); // Output: ['Dog', 'Elephant']

// Array method - Concat
// Combines two or more arrays and returns a new array
let fr = ['Apple', 'Banana', 'Cherry'];
let num = [1, 2, 3];
let combinedArray = fr.concat(num);
console.log(combinedArray); // Output: ['Apple', 'Banana', 'Cherry', 1, 2, 3]

// Array method - IndexOf
// Returns the first index at which a given element can be found in the array, or -1 if it is not present
let my_colors = ['Red', 'Green', 'Blue', 'Yellow', "Blue"];
let pos = my_colors.indexOf('Blue');
console.log(pos); // Output: 2

// How to find all the indexes of a value in an array
let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Blue'];
let secondPos = colors.indexOf('Blue', colors.indexOf('Blue') + 1);
console.log(secondPos); // Output: 4

// Array method - Includes
// Determines whether an array includes a certain value among its entries, returning true or false as appropriate
let testUsersRoles = ["admin", "user", "moderator", "seller", "vendor"];
let isAdmin = testUsersRoles.includes("admin");
console.log(isAdmin); // Output: true

// Check for the multiple values in an array
let testUsers = ["admin", "user", "moderator", "seller", "vendor"];
let flag = testUsers.includes("admin", "john");
console.log(flag); // Output: true

// Array method - forEach
// Calls a function for each element in the array
let numbersOne = [1, 2, 3, 4, 5];
numbersOne.forEach((element) => {
  console.log(element);
});

// Array method - lastIndexOf
// Returns the last index at which a given element can be found in the array, or -1 if it is not present
let myColors = ['Red', 'Green', 'Blue', 'Yellow', "Blue"];
let lastPos = myColors.lastIndexOf('Blue');
console.log(lastPos); // Output: 4



