// promiseAny() concept

const getMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error: get Message from API 1');
        }, 500);
    });
};

const getUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error: Get Users from API 2');
        }, 200);
    });
};

const getProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error: Get Product from API 3');
        }, 1000);
    });
};

Promise.any([getMessage(), getUsers(), getProduct()]).then((data) => {
    console.log(data); // Will log the first resolved promise result
}).catch((error) => {
    console.log(error); // Will log all rejection reasons if all promise rejected
});

