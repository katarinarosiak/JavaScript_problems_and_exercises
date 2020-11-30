//  Towable (part 1)
// Using the following code, create a towMixin mixin that contains a method named tow that returns I can tow a trailer! when invoked. Include the mixin in the Truck class.

// let towMixin = {
//   tow() {
//     return 'I can tow a trailer!'
//   }
// }

// class Truck {
//   constructor() {
//     Object.assign(this, towMixin)
//   }
// }

// class Car {}


const towMixin = {
  tow() {
    return "'I can tow a trailer!'";
  }
}

class Truck { }

Object.assign(Truck.prototype, towMixin)
class Car { }

let truck = new Truck();
truck.tow();
