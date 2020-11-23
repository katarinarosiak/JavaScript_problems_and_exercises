// 2. Use the OLOO pattern to create an object prototype that we can use to create pet objects. The prototype should let us create and use pets like this:

PetPrototype = {
  sleep() {
    console.log("I am sleeping")
  },
  wake() {
    console.log("I am awake")
  },
  init(animal, name) {
    this.name = name;
    this.animal = animal;

    return this;
  }

}


let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake
