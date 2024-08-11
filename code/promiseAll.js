/* Case 1 - Promise.all with an array of promises
* f1 = resolve
* f2 = resolve
* f3 = resolve
*
const func1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from func1');
        }, 2000);
    });
}

const func2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from func2');
        }, 2000);
    });
}

const func3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from func3');
        }, 2000);
    });
}

Promise.all([
    func1(),
    func2(),
    func3()
]).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});


const func1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [1, 2, 3, 4, 5];
            resolve(data);
        }, 2000);
    });
}

const func2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [6, 7, 8, 9, 10];
            resolve(data);
        }, 2000);
    });
}

const func3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [11, 12, 13, 14, 15];
            resolve(data);
        }, 2000);
    });
}

Promise.all([
    func1(),
    func2(),
    func3()
]).then((data) => {
    console.log(`Data from different functions: ${data}`);
}).catch((error) => {
    console.log(`Error in promise ${error}`);
});
*/

/* Case 2 - Promise.all with an array of promises
* f1 = resolve
* f2 = reject
*  */

const getData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from getData1');
        }, 2000);
    });
}

const getData2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error from getData2');
        }, 2000);
    });
}

Promise.all([
    getData1(),
    getData2()
]).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// If any of the promises is rejected, the Promise.all will be rejected with the error from the rejected promise.