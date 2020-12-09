// Moving
// You have the following classes.


//solution 1
// class Creature {
//   constructor(name) {
//     this.name = name; 
//   }
//   walk() {
//     return `${this.name} ${this.gait()} forward.` 
//   }
// }

// class Person extends Creature {
//   gait() {
//     return "strolls";
//   }
// }

// class Cat extends Creature {
//   gait() {
//     return "saunters";
//   }
// }

// class Cheetah extends Creature {
//   gait() {
//     return "runs";
//   }
// }

// //You need to modify the code so that this works:

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"
//
//solution 2

let mixinObj = {
  walk() {
    return `${this.name} ${this.gait()} forward.`
  }
}


class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

Object.assign(Person.prototype, mixinObj);

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}
Object.assign(Cat.prototype, mixinObj);

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

Object.assign(Cheetah.prototype, mixinObj);

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"