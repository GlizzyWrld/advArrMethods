class Vehicle {
    constructor(a, b, c){
        this.make = a;
        this.model = b;
        this.year = c;

        if (!Number.isFinite(c) || c <= 0)
    throw new Error("Invalid year: " + c);
    }
    honk () {
        return "Beep!"
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(a, b, c){
        super(a, b, c);
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor(a, b, c){
        super(a, b, c);
        this.numWheels = 2
    }
    revEngine() {
        return "VROOM!! VROOM!! patatat!"
    }
}

class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }