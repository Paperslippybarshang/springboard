// Part 1

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year
  };

  honk() {
    return 'Beep!'
  };

  toString() {
    return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
  }
}

// Part 2
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }

}

// Part 3
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOM!"
  }
}

// Part 4 
class Garage {
  constructor(capacity) {
    this.vehicle = []
    this.capacity = capacity
  }

  add(vehicle) {
    if(this.vehicle.length === this.capacity) {
      return 'Sorry, we\'re full'
    }
    this.vehicle.push(vehicle)
    return 'Vehicle added!'
  }
}