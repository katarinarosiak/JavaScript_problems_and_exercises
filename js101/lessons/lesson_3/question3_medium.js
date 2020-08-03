// without do/while loop 
function factors(number) {
  let factors = [];
  let divisor = number;
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors
}



// with do/while
function factors1(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0 && number > 0) {
      factors.push(number / divisor);
      console.log("ok");
    }
    divisor -= 1;
  } while (divisor > 0);
  return factors;
}

console.log(factors1(-5));
console.log(factors1(0));

console.log(factors(0));
console.log(factors(-1));