// Map function
// calls a defined callback function on each element of an array, and returns an array that contains the results.
// Syntax: array.map(callback[, thisArg])

let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map((number) => {
    return number * 2;
});
// console.log(doubleNumbers); // [2, 4, 6, 8, 10]

// Program to convert Fahrenheit to Celsius
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

let celsius = fahrenheit.map(fahrenheitToCelsius);
// console.log(celsius);

// Filter function
// filters out elements from an array based on a condition, and returns a new array.
// Syntax: array.filter(callback[, thisArg])

let numbersOne = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let evenNumbers = numbersOne.filter((numbers) => {
    return numbers % 2 === 0;
});
// console.log(evenNumbers); // [2, 4, 8, 10]

let employees = [
    { name: 'John', age: 30, gender: 'M' },
    { name: 'Jane', age: 25, gender: 'F' },
    { name: 'Jim', age: 26, gender: 'M' },
    { name: 'Jack', age: 29, gender: 'M' },
    { name : 'Jill', age: 23, gender: 'F' },
    { name: 'Joe', age: 31, gender: 'F'}
];

let femaleEmployees = employees.filter((employee) => {
    return employee.gender === 'F' && employee.age >= 25;
});

// console.log(femaleEmployees);

// Reduce function
// applies a function to reduce the elements of an array to a single value.
let numbersTwo = [1, 2, 3, 4, 5];
let sum = numbersTwo.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// console.log(sum); // 15

// Print maximum number in an array
let numbersThree = [10, 5, 25, 8, 30, 15];
let max = numbersThree.reduce((a, b) => {
    return Math.max(a, b);
});
// console.log(max); // 30

// Print total from a shopping cart
let shoppingCart = [
    { product: 'phone', qty: 1, price: 699 },
    { product: 'Screen Protector', qty: 1, price: 9.99 },
    { product: 'Memory Card', qty: 2, price: 20 },
    { product: 'Charger', qty: 1, price: 19.99 }
];

let grandTotal = shoppingCart.reduce((total, items) => {
    return total + items.qty * items.price;
}, 0);
console.log(grandTotal); // 768.98


