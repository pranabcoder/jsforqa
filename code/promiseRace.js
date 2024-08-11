// Functions that return a resolved promise after a given time

const resolvePromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved');
        }, 2000);
    });
};

// Function that returns a rejected promise after a given time
const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Promise rejected');
        }, 600);
    });
};

// use Promise.race() to see which promise resolves first
Promise.race([
    resolvePromise(), rejectPromise()
]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});