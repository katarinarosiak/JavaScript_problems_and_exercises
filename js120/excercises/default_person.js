//Default Person

class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}

//or

class Person {
  constructor(name) {
    if (name) {
      this.name = name;
    } else {
      this.name = 'John Doe'
    }
  }
}


let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe


let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe