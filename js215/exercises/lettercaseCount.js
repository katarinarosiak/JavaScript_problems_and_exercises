// Lettercase Counter
// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.



function letterCaseCount(string) {
  return {
    lowercase: string.match(/[a-z]/g)?.length || 0,
    uppercase: string.match(/[A-Z]/g)?.length || 0,
    neither: string.match(/[^a-z]/gi)?.length || 0,
  }
}


// Examples:

// Copy Code
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }