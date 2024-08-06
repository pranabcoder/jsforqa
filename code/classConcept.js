class Car {
    constructor(brand, price, model, color) {
        this.carname = brand;
        this.price = price;
        this.model = model;
        this.color = color;
    }
    present() {
        return 'I have a ' + this.carname;
    }
    refuel() {
        return 'I have a ' + this.carname + ' and refuel it';
    }
}

mycar = new Car('Ford', 50000, 'Mustang', 'Red');
console.log(mycar.present());
console.log(mycar.refuel());