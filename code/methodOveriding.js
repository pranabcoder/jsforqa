/*
Method overriding is a concept in which a child class can provide a specific implementation of a method that is already provided by
its parent class. When a method in a subclass has the same name, the same parameters or signature and the same return type(or sub-type)
as a method in its superclass, then the method in the subclass is said to override the method in the superclass.
*/
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    startEngine() {
        console.log('Car is starting');
    }
}

class Audi extends Car {
    constructor(make, model) {
        super(make, model);
    }
    // Method overriding
    startEngine() {
        console.log('Audi is starting');
    }

    autoPilot() {
        console.log('Audi is running on auto pilot');
    }
}

const audi = new Audi('Audi', 'A6');
audi.startEngine(); // Audi is starting
audi.autoPilot(); // Audi is running on auto pilot
const car = new Car('Toyota', 'Corolla');
car.startEngine(); // The Car is starting
car.autoPilot(); // Error: car.autoPilot is not a function. Parent class method is not available in child class.