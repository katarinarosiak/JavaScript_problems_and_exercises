//OOP basics 2-6

class Cat {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

let kitty = new Cat('Sophie');

kitty.greeting();
