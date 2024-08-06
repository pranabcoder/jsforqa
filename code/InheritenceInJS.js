// Child class inherits from
// Parent class in known as superclass also
// Parent class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInformation() {
        return `${this.make}, ${this.model}, ${this.year}`;
    }

    startEngine() {
        return "Vroom Vroom" + " " + this.make;
    }

    stopEngine() {
        return "Engine stopped";
    }
}

// Child class
class Car extends Vehicle {
    constructor(make, model, year, fuelType) {
        super(make, model, year);
        this.fuelType = fuelType;
    }

    driveCar() {
        return "Car is driving" + this.model;
    }

}

// Another child class
class Truck extends Vehicle {
    constructor(make, model, year, loadingCapacity) {
        super(make, model, year); // Call the parent constructor
        this.loadingCapacity = loadingCapacity;
    }

    driveTruck() {
        return "Truck is driving" + this.model + " capacity: " + this.loadingCapacity;
    }
}

// Create the objects (instances) of the classes
let car = new Car("Toyota", "Corolla", 2020, "Petrol");
let truck = new Truck("Volvo", "VNL", 2019, "1000kg");
// console.log(car.startEngine());
// console.log(car.getInformation());

console.log(truck.startEngine());

// Multiple Inheritance is not supported in JS
// Multilevel Inheritance is supported in JS