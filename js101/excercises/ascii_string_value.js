//ASCII String Value
// Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

// Examples:

// asciiValue('Four score');         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
// asciiValue('');                   // 0

// input:  string 
// output: string 
// rules: 
// - needs be function that takes one argument 
// - functon needs to return a string
// - count ASCII string value is a sume of ASCII values of each charaacter 
// - to dettermine the value use charCodeAt()
// - empty string  retruns 0 

// Q: do spaces has ASCII value? 

// test:
// i: "a"
// a => 97 
// o : 97

// i:: "aa"
// 97 + 97 
// output: 194

// dS : string => number => array  

// a: Take a given string and loop through it to determin the value of it 
// - coerce the string to a number and push it into an array
// - sum all the numbers in an array and
// -coerce the result to a string and return 

function asciiValue(word) {
  let ascii = [];
  if (word === "") {

    return 0;
  }

  for (let i = 0; i < word.length; i += 1) {
    ascii.push(word.charCodeAt(i));
  }

  return ascii.reduce((a, b) => a + b);
}


asciiValue("a");

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0