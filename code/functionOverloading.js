// There is no concept of function overloading in JavaScript.

function print() {
    console.log("Hello");
}

function print(name) {
    console.log(name);
}

function print(name, age) {
    console.log(name, age);
}

// calling the function
// print(); // Output: undefined undefined
// print("John"); // Output: John undefined
// print("John", 26); // Output: John 26
// Js Compiler will consider the last function definition and ignore the previous ones.

// Example - run testcases on remote machine: browserName, browserVersion, remoteExecution

function displayBrowserInfo(browserName, browserVersion, remoteExecution) {
    if (typeof browserVersion === 'string' && typeof remoteExecution === 'boolean') {
        console.log(`Browser Name: ${browserName}, Browser Version: ${browserVersion}, Remote Execution: ${remoteExecution}`);
    } else if (typeof browserVersion === 'string') {
        console.log(`Browser Name: ${browserName}, Browser Version: ${browserVersion}`);
    } else {
        console.log(`Browser Name: ${browserName}`);
    }
}

displayBrowserInfo("Chrome", "91.0.4472.124", true);
displayBrowserInfo("Firefox", "89.0.2");
displayBrowserInfo("Safari");