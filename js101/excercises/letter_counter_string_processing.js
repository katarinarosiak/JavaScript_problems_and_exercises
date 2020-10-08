// /Lettercase Counter
// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

// Examples:

// Copy Code
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }



function letterCaseCount(str) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  for (let index = 0; index < str.length; index++) {

    if (str[index] >= 'a' && str[index] <= 'z') {
      obj.lowercase++;
    } else if (str[index] >= 'A' && str[index] <= 'Z') {
      obj.uppercase++;
    } else {
      obj.neither++;
    }
  }

  return obj;
}