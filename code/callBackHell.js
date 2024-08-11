// Pyramid of Doom or Callback Hell

asyncFunction1((result1) => {
    asyncFunction2(result1, (result2) => {
        asyncFunction3(result2, (result3) => {
            asyncFunction4(result3, (result4) => {
                asyncFunction5(result4, (result5) => {
                    console.log(result5);
                });
            });
        });
    });
});

// better way to write the above code
asyncFunction1()
    .then(result1 = asyncFunction2(result1))
    .then(result2 = asyncFunction3(result2))
    .then(result3 = asyncFunction4(result3))
    .then(result4 = asyncFunction5(result4))
    .then((result5) => {
        console.log(result5);
    }).catch((error) => {
    console.log(error);
});

// or using async/await
async function asyncFunction() {
    try {
        const result1 = await asyncFunction1();
        const result2 = await asyncFunction2(result1);
        const result3 = await asyncFunction3(result2);
        const result4 = await asyncFunction4(result3);
        const result5 = await asyncFunction5(result4);
        console.log(result5);
    } catch (error) {
        console.log(error);
    }
}