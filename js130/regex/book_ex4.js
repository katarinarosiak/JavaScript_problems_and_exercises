// Write a method that changes every arithmetic operator (+, -, *, /) to a '?' and returns the resulting string. Don't modify the original string.

function mysteryMath(str) {
  let regex = /[\+\*\/\-]/g;


  return str.replace(regex, '?');
}


mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'