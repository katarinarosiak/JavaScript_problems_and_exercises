// Write a function that searches the prototype chain of an object for a given property and assigns it a new value.If the property does not exist in any of the prototype objects, the function should do nothing.The following code should work as shown:


let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

function assignProperty(obj, prop, val) {
  let searchProto = obj;
  while (Object.getPrototypeOf(searchProto) && searchProto[prop]) {
    searchProto = Object.getPrototypeOf(searchProto);
    searchProto[prop] = val;
  }
}

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

