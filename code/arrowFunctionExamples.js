// Example 1 - arrow function with one parameter
const square = num => num * num;
// console.log(square(5)); // 25

// Example 2 - arrow function with no parameter
const greet = () => console.log('Hello World!');
// greet(); // Hello World!

// Example 3 - arrow function with multiple parameters
const add = (a, b) => a + b;
// console.log(add(5, 3)); // 8

// Example 4 - arrow function with object
const person = {
    firstName: 'John',
    lastName: 'Doe',
}
const getFullName = (person) => `${person.firstName} ${person.lastName}`;
// console.log(getFullName(person)); // John Doe

// Example 5 - arrow function with default value
const greetUser = (name = 'User') => `Hello ${name}!`;
// console.log(greetUser('John')); // Hello John!
//console.log(greetUser()); // Hello User!

// Example 6 - arrow function with rest parameter (variadic function) (...values)
const sum = (...values) => values.reduce((acc, value) => acc + value, 0);
// console.log(sum(1, 2, 3, 4, 5)); // 15

// Another example
const browserInformation = (browser = 'Chrome', ...details) => {
    console.log(`Browser: ${browser}`);
    console.log('Details:', details);
};
// browserInformation('Firefox', 'Version: 100', 'OS: Windows 10', 'Language: English');

// Example 7 - max number using arrow function
const max = (a, b, c) => Math.max(a, b, c);
console.log(max(5, 3, 8)); // 8


