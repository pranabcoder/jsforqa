/*
Start the coffee machine - 2 sec
Grind coffee beans - 1 sec
Boil water - 1.5 sec
Pour coffee in cup - 0.5 sec
Add ground coffee into the filter - 0.5 sec
Stir the coffee - 1 sec
Enjoy your coffee!
*/

function startCoffeeMachine(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Start the coffee machine');
            callback('Coffee machine started');
        }, 2000);
    });
}

function grindCoffeeBeans(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Grind coffee beans');
            callback('Coffee beans ground');
        }, 1000);
    });
}

function boilWater(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Boil water');
            callback('Water boiled');
        }, 1500);
    });
}

function pourCoffeeInCup(boilWater, callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pour coffee in cup');
            callback(boilWater + ' and coffee poured');
        }, 500);
    });
}

function addGroundCoffeeIntoFilter(groundCoffee, callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Add ground coffee into the filter');
            callback('Coffee added to ' + groundCoffee);
        }, 500);
    });
}

function stirTheCoffee(coffeInCup, callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Stir the coffee');
            callback('Enjoy your ' + coffeInCup);
        }, 1000);
    });
}

function enjoyCoffee(finalCoffee) {
    console.log('Enjoying my ' + finalCoffee);
}

// callback hell
startCoffeeMachine((coffeeMachine) => {
    grindCoffeeBeans((groundCoffee) => {
        boilWater((boiledwater) => {
            pourCoffeeInCup(boiledwater, (waterInCup) => {
                addGroundCoffeeIntoFilter(groundCoffee, (coffeInCup) => {
                    stirTheCoffee(coffeInCup, (finalCoffee) => {
                        enjoyCoffee(finalCoffee);
                    });
                });
            });
        });
    });
});