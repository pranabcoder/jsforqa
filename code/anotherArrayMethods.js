// 1. every():
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// Syntax: arr.every(callback(element[, index[, array]])[, thisArg])

// Example 1: Check if all elements are greater than 10
const arr = [12, 5, 8, 130, 44];
let result = arr.every((element) => element > 10);
// console.log(result); // false

// 2. some():
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns a Boolean value.
// Syntax: arr.some(callback(element[, index[, array]])[, thisArg])
let number = [12, 5, 8, 130, 44];
let resultOne = number.some((element) => element > 10);
// console.log(resultOne); // true

// 3. find():
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.

let total = [5, 12, 8, 130, 44];
let firstElement  = total.find((element) => element > 10);
//console.log(firstElement); // 12

// 4. reverse():
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// Syntax: arr.reverse()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let reversedFruits = fruits.reverse();
// console.log(reversedFruits); // [ 'Mango', 'Apple', 'Orange', 'Banana' ]

// 5. sort():
// The sort() method sorts the elements of an array in place and returns the sorted array.
// Syntax: arr.sort([compareFunction])
let fruitsOne = ["Banana", "Orange", "Apple", "Mango"];
let sortedFruits = fruitsOne.sort();
// console.log(sortedFruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// If the array having both numbers, capital and small letters
let mixedArray = [1, 3, '2Test', "Banana", "Orange", "apple", "Mango"];
let sortedMixedArray = mixedArray.sort();
console.log(sortedMixedArray); // [ 1, 3, '2Test', 'Banana', 'Mango', 'Orange', 'apple' ]