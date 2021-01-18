// Is the Last Character an "N"?

// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(name) {
  let regEx = new RegExp(/n/);
  let lastChar = name[name.length - 1];
  if (lastChar.match(regEx)) {
    return true
  } else {
    return false;
  }
}

console.log(isLastCharacterN("Dean")) //➞ true
console.log(isLastCharacterN("Aiden")) //, true)
console.log(isLastCharacterN("Roxy")) //, false)
console.log(isLastCharacterN("Bert")) //, false)
console.log(isLastCharacterN("Dean")) //, true)
console.log(isLastCharacterN("Ian")) //, true)
console.log(isLastCharacterN("Brian")) //, true)
console.log(isLastCharacterN("Daniel")) //, false)