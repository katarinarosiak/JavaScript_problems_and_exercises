// myBind() Improved
// Our earlier implementation of Function.prototype.bind as myBind was simplistic. Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. It's called partial function application. Read the MDN documentation to learn more about partial function application. (We'll also cover it in a later course.)

// Alter the myBind function written in the previous exercise to support partial function application.




function myBind(func, contextObj, ...additionalArg) {

  return function newFunc() {
    return func.call(contextObj, ...additionalArg);
  }
}



//test:
let numbers = {
  a: 1,
  b: 2
}

function adder(arg1, arg2) {
  return this.a + this.b + arg1 + arg2;
}
//adder(); //NaN
let newAdder = myBind(adder, numbers, 1, 1);
newAdder(); //5 
