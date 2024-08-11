function getEvenNumber(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value % 2 === 0) {
                resolve(value);
            } else {
                reject(new Error('The value is not an even number'));
            }
        }, delay);
    });
}

// promise chain
getEvenNumber(4, 1000)
    .then((value) => {
        console.log('The value is an even number:', value);
        return getEvenNumber(3, 1000);
    })
    .then((value) => {
        console.log('The value is an even number:', value);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });