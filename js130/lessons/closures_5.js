// Write a function named makeMultipleLister that you can call with a number as an argument. The function should return a new function that, when invoked, logs every positive integer multiple of that number less than 100. It should work like this:

function makeMultipleLister(number) {
  let multiplier = [];
  let times = 2;

  multiplier.push(number);

  while (multiplier[multiplier.length - 1] < 100 && (number * times < 100)) {

    multiplier.push(number * times);
    times++;

  }

  return function newFunc() {
    multiplier.forEach(el => console.log(el));
  }
}


let lister = makeMultipleLister(17);
lister();

// 17
// 34
// 51
// 68
// 85