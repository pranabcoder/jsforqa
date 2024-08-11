/*
Start the coffee machine - 2 sec
Grind coffee beans - 1 sec
Boil water - 1.5 sec
Pour coffee in cup - 0.5 sec
Add ground coffee into the filter - 0.5 sec
Stir the coffee - 1 sec
Enjoy your coffee!
*/

function startCoffeeMachine() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Start the coffee machine');
            resolve('Coffee machine started');
        }, 2000);
    });
}

function grindCoffeeBeans() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Grind coffee beans');
            resolve('Coffee beans ground');
        }, 1000);
    });
}

function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Boil water');
            resolve('Water boiled');
        }, 1500);
    });
}

function pourCoffeeInCup(boilWater) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pour coffee in cup');
            resolve(boilWater + ' and coffee poured');
        }, 500);
    });
}

function addGroundCoffeeIntoFilter(groundCoffee) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Add ground coffee into the filter');
            resolve('Coffee added to ' + groundCoffee);
        }, 500);
    });
}

function stirTheCoffee(coffeeInCup) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Stir the coffee');
            resolve('Enjoy your ' + coffeeInCup);
        }, 1000);
    });
}

function enjoyCoffee(finalCoffee) {
    console.log('Enjoying my ' + finalCoffee);
}

// promise chaining
startCoffeeMachine()
    .then((coffeeMachineStatus) => {
        console.log(coffeeMachineStatus);
        return grindCoffeeBeans();
    })
    .then((groundCoffee) => {
        console.log(groundCoffee);
        return boilWater();
    })
    .then((waterBoiled) => {
        console.log(waterBoiled);
        return pourCoffeeInCup(waterBoiled);
    })
    .then((coffeeInCup) => {
        console.log(coffeeInCup);
        return addGroundCoffeeIntoFilter(coffeeInCup);
    })
    .then((coffeeAdded) => {
        console.log(coffeeAdded);
        return stirTheCoffee(coffeeAdded);
    })
    .then((finalCoffee) => {
        enjoyCoffee(finalCoffee);
    })
    .catch((error) => {
        console.log(error);
    });