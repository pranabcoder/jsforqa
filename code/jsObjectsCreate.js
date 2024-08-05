// 1. Object Literals:
const person = {
    name: 'John',
    age: 30,
    country: 'USA',
    occupation: 'Developer'
};

// console.log(person.name); // John

// 2. Constructor Function:
function Car(make, model, year, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
}

const car1 = new Car('Toyota', 'Corolla', 2020, 20000);
// console.log(car1.make); // Toyota

// 3. Class Syntax:
class Customer {
    constructor(name, product, country) {
        this.name = name;
        this.product = product;
        this.country = country;
    }

    addToCart() {
        return `${this.name} added ${this.product} to the cart`;
    }
}

const customer1 = new Customer('John', 'Laptop', 'USA');
console.log(customer1.addToCart()); // John added Laptop to the cart
