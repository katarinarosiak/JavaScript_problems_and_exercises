function raiseToPower(firstNum, secondNum) {
  let result = firstNum;

  for (let index = 0; index < secondNum - 1; index++) {
    result *= firstNum;
  }
  return result;
}

console.log(raiseToPower(2, 4));

console.log(raiseToPower(345, 43));

console.log(raiseToPower(-4263, 2));