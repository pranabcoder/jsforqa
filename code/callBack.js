/*
callback function is a function that is passed as an argument to another function
and is executed after some operation has been completed
async call/task -- once this task is completed, the callback function is called
*/

// Basic callback function without async task

function greet(name, callback) {
    console.log(`Hello ${name}`); // normal/async step/task, could be async call/api call
    callback();
}

// callback function
function welcome() {
    console.log("Welcome to callback function");
}

// greet("John", welcome);

// callback with async function
function printInfo(name, callback) {
    // async task
    setTimeout(() => {
        console.log(`Hello ${name}`);
        callback('plz check your email');
    }, 3000);
}

function displayMessage(msg) {
    console.log(msg);
}

// printInfo("Lisa", displayMessage);

// callback with async function
function fetchUserData(userId, callback) {
    // async task
    setTimeout(() => {
        const users = [
            {
                id: 1, name: "John", email: "john@gmail.com"
            },
            {
                id: 2, name: "Lisa", email: "lisa@gmail.com"
            }
        ];
        const user = users[userId];
        if (user) {
            callback(null, user);
        } else {
            callback("User not found", null);
        }
    }, 2000);
}

// callback function
function handleUserData(err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(`User name: ${user.name}, email: ${user.email}`);
    }
}

fetchUserData(3, handleUserData);