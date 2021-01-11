function myBind(func, contextObj) {

  return function newFunc(...arg) {
    return func.call(contextObj, ...arg);
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
let newAdder = myBind(adder, numbers);
newAdder(1, 1); //3 
