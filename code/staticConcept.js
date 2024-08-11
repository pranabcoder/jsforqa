class Car{
    static wheels = 4;
    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
        this.wheels = 50;
    }
    static stop(){
        console.log("Car is stopped");
    }
    drive(){
        console.log(`${this.name} is driving`);
    }
}

const car1 = new Car("Audi", "A8", 100000);
console.log(car1);
console.log(`Static car wheels${Car.wheels}`);
Car.drive(); // Error
// Because drive is not a static method, so it can't be called using class name
Car.stop();
c1.stop(); // Error
// Because stop is a static method
// static variables and methods are called using class name
// non-static variables and methods are called using an object of the class