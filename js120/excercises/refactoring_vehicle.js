//Refactoring Vehicles

class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  getWheels() {
    return this.wheels;
  }
  info() {
    return `${this.make} ${this.model}`
  }
}


class Car extends Vehicle {
  constructor(make, model, wheels) {
    super(make, model, wheels);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, wheels) {
    super(make, model, wheels)
  }
}

class Truck extends Car {
  constructor(make, model, wheels, payload) {
    super(make, model, wheels, payload);
    this.payload = payload;
  }
}

let audi = new Car('car', 'Audi', 4);
console.log(audi.getWheels())