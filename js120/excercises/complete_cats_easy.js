/// Complete the Program - Cats!
// Consider the following program.

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age, color);
    this.color = color;
  }
  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

// Update this code so that when you run it, you see the following output:

//  My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.