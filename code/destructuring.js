// array/object destructuring

// array destructuring
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
// console.log(first, second, rest); // 1 2 [3, 4, 5]

// object destructuring
/*
const user = {
    name: 'John',
    age: 30,
    email: 'john@test.com'
};
const { name, age,email } = user;
console.log(name, age, email);
*/
const user = {
    name: 'John',
    age: 30,
    email: 'john@test.com'
};
const { name, age,email, city = 'LA' } = user;
// console.log(name, age, email, city);

// function params without destructuring
// function printUser(person) {
//     console.log(`Name is ${person.name}, age is ${person.age}, email is ${person.email}`);
// }
// const person = {
//     name: 'John',
//     age: 30,
//     email: 'john@gmail.com'
// };
// printUser(person);

// function params with destructuring
function printUser({ name, age, email }) {
    console.log(`Name is ${name}, age is ${age}, email is ${email}`);
}
const person = {
    name: 'John',
    age: 30,
    email: 'john@gmail.com'
};
printUser(person);