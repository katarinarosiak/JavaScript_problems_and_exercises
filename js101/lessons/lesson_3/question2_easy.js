//How can you determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function isEndingExclamation(string) {
  if (string.slice(-1) === "!") {
    return true
  } else {
    return false
  }
}

console.log(isEndingExclamation(str2));