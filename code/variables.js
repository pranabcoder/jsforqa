// Var: old way of declaring variables. After ES6, we use let and const
// Scope of var: function/local scope + global scope
// Example of var:

var x = 10;
function test() {
  var y = 20;
}
console.log(x); // 10

/*
Example of local scope:
var pop = 'hi js';
function rel(){
  var top = 'Hello js';
}
rel();
console.log(top); // ReferenceError: top is not defined
*/
// Example of global scope + local scope:
var pop = 'hi js';
function rel(){
  var top = 'Hello js';
  console.log(top); // hi js
  console.log(pop); // Hello js
}
rel();
console.log(pop); // hi js

// Var redeclaration example:
var browser = 'Chrome';
var browser = 'Firefox';
console.log(browser); // Firefox

// undefined example:
var a;
console.log(a); // undefined
a = 'Hello';
console.log(a); // Hello

// Issue with var:
var flag = "hey john";
var t1 = 4;
if (t1 > 3) {
  var flag = "hello";
}
console.log(flag); // Hello
// var flag is redeclared in the if block. This is an issue with var.
// To avoid this issue, we use let and const.

// Let: block scope - {}
let m = 'hey john';
let time = 4;
if (time > 3) {
  let m = 'hello';
}
console.log(m); // Hey John,
// Here m is not redeclared in the if block. This is the advantage of let.

// Can we update let?
let name = 'John';
name = 'Doe';
console.log(name); // Doe
// We can't update two same variable names in the same block using let. But we can update the value of the variable.

// Const: block scope - {}
// constant value, cannot be reassigned or modified after initialization
const pi = 3.14;
console.log(pi); // 3.14
pi = 3.141; // TypeError: Assignment to constant variable.




























































