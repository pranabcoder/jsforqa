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
// console.log(customer1.addToCart()); // John added Laptop to the cart

// 4. Object.create(): with some prototype objects
const employee = {
    printInfo: function () {
        return `${this.name} is a ${this.occupation} in ${this.country}`;
    }
};

const e1 = Object.create(employee);
e1.name = 'John';
e1.occupation = 'Developer';
e1.country = 'USA';
// console.log(e1.printInfo()); // John is a Developer in USA

// 5. using factory function: returns an object
function createPerson(name, age, country) {
    return {
        name: name,
        age: age,
        country: country,
        printInfo() {
            return `${this.name} is ${this.age} years old and lives in the ${this.country}`;
        }
    };
}

const person1 = createPerson('John', 30, 'USA');
console.log(person1.printInfo()); // John is 30 years old and lives in the USA
