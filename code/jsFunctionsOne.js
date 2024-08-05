// way 1 - function declaration

function add(a, b) {
    return a + b;
}

const sumResult = add(1, 2);
// console.log(sumResult); // 3

// way 2 - function expression: anonymous function
const subtract = function (a, b) {
    return a - b;
}

const subtractResult = subtract(3, 2);
// console.log(subtractResult); // 1

// way 3 - arrow function
const multiply = (a, b) => {
    return a * b;
}

const multiplyResult = multiply(2, 3);
// console.log(multiplyResult); // 6

// way 4 - function constructor
const divide = new Function('a', 'b', 'return a / b');
const divideResult = divide(6, 2);
// console.log(divideResult); // 3

// way 5 - IIFE (Immediately Invoked Function Expression)
const remainder = ((a, b) => {
    return a % b;
})(5, 2);
// console.log(remainder); // 1
/*
// Another Example
(function (a, b) {
    console.log(a + b);
})(1, 2); // 3
*/
// way 6 - generator function (ES6)
// generator function is a special type of function that works as an iterator
// it can pause and resume its execution
// it is defined using a function* and yield keyword
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction(); // returns a generator object
/*
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // undefined
*/
// way 7 - Anonymous function
// no specific name is given to the function
// it is defined using function keyword
// it can be assigned to a variable
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(function (number) {
    return number * number;
});
// console.log(square); // [1, 4, 9, 16, 25]

// Using arrow function
const squareArrow = numbers.map(number => number * number);
// console.log(squareArrow); // [1, 4, 9, 16, 25]

// way 8 - Recursive function
// a function that calls itself
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const factorialResult = factorial(5);
// console.log(factorialResult); // 120

// way 9 - Higher-order function
// a function that takes another function as an argument or returns a function

function addition(a, b) {
    return a + b;
}

function operationOnNumbers(a, b, operation) {
    return operation(a, b);
}

const additionResult = operationOnNumbers(5, 2, addition);
console.log(additionResult); // 7
