//Js supports loops like for, while, do-while, for-in, for-of etc.

// for loop example -
// print 1 to 10 numbers
// for (initialization; condition; increment/decrement) {
//   // code block to be executed
// }
/*
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
*/
// for...of loop example -
// print the elements of an array
/*
let arr = [1, 2, 3, 4, 5];
for (let element of arr) {
    console.log(element);
}
*/
// while loop example -
// print 1 to 10 numbers
/*
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
*/
// do...while loop example -
// print 1 to 10 numbers
/*
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);
*/
// break statement example -
// print 1 to 100 numbers: print hi when you see the multiple of 5 and break the loop
/*
let num = 1;
while (num <= 100) {
    if (num % 5 === 0) {
        console.log('hi');
        break;
    }
    console.log(num);
    num++;
}


const browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
for (const browserName of browser) {
    if (browserName === 'safari') {
        console.log('safari is found');
        break;
    }
}

// for...in loop on object example
const user = {
    name: "John Deo",
    age: 30,
    city: 'New York'
};

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
*/
// for...in loop on array example
const arr = ['apple', 'banana', 'mango', 'orange'];
for (const index in arr) {
    console.log(`${index}: ${arr[index]}`);
}