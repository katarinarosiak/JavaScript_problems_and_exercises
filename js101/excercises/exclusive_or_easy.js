// /Exclusive Or
// The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one of two conditions to be truthy, the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

// Examples:

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);


/// i:
// o: boolean, true if one arg. truthy, false otheriwse  
// rules: function that takes two arg
// - it has to return true if exatly one arg is truthy 
// - all values can be arg
// - 

// exa:
// in: 1, 0
// 0=> false
// in: true, false=> true
// in false, false => false 
// in: "hello" => 0 => true 

// a: takes two arg and check if both are truthy 
// if yes return false
// - if both are falsy return false
// - if one is trthy and other falsy retrun true

function xor(firstArg, secArg) {
  if (firstArg && !secArg) {
    return true;
  } else if (!firstArg && secArg) {
    return true;
  } else {
    return false;
  }
}

