// 1. find unique values from array:
const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const uniqueArray = [...new Set(array)];
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// 2. convert int to string:
const number = 123;
// console.log(number.toString()); // Output: '123'
// console.log(typeof number.toString()); // Output: string

// 3. convert float to int:
const floatNumber = 12.34;
// console.log(parseInt(floatNumber)); // Output: 12

// 4. checks if a value is a number:
const value = '123';
if (typeof value === number && !isNaN(value)) {
    // console.log('Is a number!');
} else {
    // console.log('Not a number!');
}

// 5. swap values of the two variables:
let a = 1;
let b = 2;
[a, b] = [b, a];
// console.log(a, b); // Output: 2 1

// 6. checks if an object has a property:
const person = {
    name: 'John',
    age: 28
};
if (person.hasOwnProperty('name')) {
    // console.log('Has name property!');
}

// 7. remove falsy values from an array: (false, null, 0, "", undefined, and NaN)
const arrayOne = [0, 1, false, 2, '', 3];
const filteredArray = arrayOne.filter(Boolean);
// console.log(filteredArray); // Output: [1, 2, 3]

// 8. String --> Uppercase, lower case :
const string = 'hello world';
// console.log(string.toUpperCase()); // Output: HELLO WORLD
// console.log(string.toLowerCase()); // Output: hello world

// 9. checks if an array contains a value:
const lang = ['java', 'javascript', 'python', 'ruby'];
if (lang.includes('javascript')) {
    // console.log('Found!');
}

// 10. checks if an array is empty:
const arrayTwo = [];
if (!arrayTwo.length) {
    // console.log('Empty!');
}

// 11. generate random number between two numbers:
const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(`Random Number: ${randomNumber}`);

// 12. String to number:
const numberOne = '123';
const x1 = parseFloat(numberOne);
// console.log(x1);

// 13. Join array elements into a string:
const elements = ['Fire', 'Air', 'Water'];
const sentence = elements.join(' ');
// console.log(sentence); // Output: Fire Air Water

// 14. get object property:
const personOne = {
    name: 'John',
    age: 28,
    dob: '01-01-1990'
};
// console.log(personOne['name']);
// console.log(personOne['dob']);

// 15. clone an array or object:
const marks = [10, 20, 30, 40, 50, 66, 70];
const cloneMarks = [...marks];
// console.log(cloneMarks);

const personTwo = {
    name: 'John',
    age: 28
};
const clonePerson = { ...personTwo }; // spread operator
// console.log(clonePerson);

// 16. covert objects to array:
const employee = {
    name: 'John',
    age: 28,
    designation: 'Developer'
};
// a. keys array
const keys = Object.keys(employee);
// console.log(keys); // Output: ['name', 'age', 'designation']
// b. values array
const values = Object.values(employee);
// console.log(values); // Output: ['John', 28, 'Developer']
// c. key-value array
const entries = Object.entries(employee);
// console.log(entries); // Output: [['name', 'John'], ['age', 28], ['designation', 'Developer']]

// 17. get current date and time:
const currentDate = new Date();
// console.log(currentDate.toLocaleString());

// 18. Check variable is defined or not:
let x;
if (typeof x !== 'undefined') {
    console.log('Variable is defined!');
}

// 19. truncate an array:
const arrayThree = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayThree.length = 3;
// console.log(arrayThree); // Output: [1, 2, 3]

// 20. get the last element of an array:
const arrayFour = [1, 2, 3, 4, 5];
const lastELementOfAnArray = arrayFour.slice(-1);
console.log(lastELementOfAnArray); // Output: [5]

