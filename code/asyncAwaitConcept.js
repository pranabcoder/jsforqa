// async function without await
/*
async function f1() {
    console.log('this is an async function without await');
    return 42; // return a promise that resolves with 42
}

f1().then(result => {
    console.log(result);
}); // logs: 42
*/

/* async function without await but with error:
async function f2() {
    console.log('this is an async function without await but with error');
    throw new Error('this is my error');
}

f2().catch(error => {
    console.log(error.message);
}); // logs: error
*/

// async function with a resolved/rejected promise :
function getInfo() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random < 0.5) {
                resolve('success');
            } else {
                reject('wrong value error');
            }
        }, 2000);
    });
}

// create an async function
async function getNumberInfo() {
    console.log('this is an async function with a resolved/rejected promise');
    try {
        const result = await getInfo(); // async step
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// call the async function
getNumberInfo(); // logs: success or wrong value error