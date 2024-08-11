// Example - promise concept

const randomNumberPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve(randomValue);
        } else {
            reject(new Error('Random value is less than 0.5'));
        }
    }, 2000);
});

randomNumberPromise.then((data) => {
    console.log('Random number:', data);
}).catch((error) => {
    console.log('Error:', error.message);
});

