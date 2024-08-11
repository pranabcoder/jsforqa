/* Promise.allSettled
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

Promise.allSettled([
    getData1(),
    getData2()
]).then((results) => {
    results.forEach((result) => {
        if (result.status === 'fulfilled') {
            console.log(result.value);
        } else {
            console.log(result.reason);
        }
    });
});