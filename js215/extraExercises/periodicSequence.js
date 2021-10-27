/*
This challenge involves a series that can start with any string of digits. 
The next term in the series is found by adding the digits of the previous 
term, appending that sum to the previous term, and then truncating the 
leftmost digits so that the number of digits in the terms is always the same.
Let's start with "1234". The sum of the digits is 10. Appending gives us 
"123410", then truncating the left two digits results in "3410". The next 
three terms are "4108", "0813", "1312". The series becomes periodic when a 
term that previously appeared occurs again.

Example:
"124", "247", "713", "311", "115", "157", "713", "311" ...
This series becomes periodic at a length of 6 before "713" reappears.

Create a function whose argument is a digit string (the first term) and returns 
the length of the series when it first becomes periodic.

Examples:
periodic("1") ➞ 1
periodic("3061") ➞ 7
*/

// i: digits string (the first term)
// o: length of the series when it becomes periodic 

// series: start with any string of digits 

// term: 
// - string of digits '123' 
// next terms '236'
// next term '611'


// periodic: 
// - when the terms that occured priviously occures again 

// - no otehr data types, 
// - only one arg 
// - always stringified number 
// - never negative 
// - no ''
// - not dropping zeros 


// DS: strng => aray (of strings) => coerce all strings to digits => numbers 
// array to store sequence 

// A: 1236
// / - if the str length i 1 => return 1; 
// - declare a varibale a aasign an empty array to it ['123', '1236']
// - pushing the first term into the emoty array 
// loop: (true) 
//   - split the string into array of strings 
//   - coerce each string into a number
//   - save the array for later in variable 
//     - create a term:
//       - sum the numbers 
//       - check the length of the sum :
//           - coerce to str and check the length 
//       - append the sum to the end of the array 
//       - splice out the number of elemnet of sum length sfrom the front of the array 
//       - join the array into a stringified numer 
//       - return the term
//     - push the term to the term array 
//     check if is periodic: (term array) 
//       - check if the last element of the arr is included in the array:
//        - check if the array contains duplicates 
//          - find (indexOf current el is the same as idx)
//       if it does return the length of that array 
//        - else  
//        - reassign the term to strNum and  continue 

// [0, 0, 0, 0, 1, 1, 2, ]

function periodic(strNum) {
  if (strNum.length === 1) return 1;
  let sequenceArr = [strNum];

  while (true) {
    let term = [...strNum].map(Number);
    let nextTerm = createNextTerm(term);
    if (isPeriodic(sequenceArr, nextTerm)) {
      return sequenceArr.length
    };
    sequenceArr.push(nextTerm);
    strNum = nextTerm;
  }
};


function createNextTerm(term) {
  let sum = term.reduce((acc, sum) => acc + sum);
  let sumLen = String(sum).length;
  term.splice(0, sumLen);
  term.push(sum)
  return term.join('');
}

function isPeriodic(sequence, term) {
  return sequence.includes(term);
}



// console.log(createNextTerm([0,0,0,1]))

//console.log(periodic("22")) 


console.log(periodic("2") === 1);
console.log(periodic("22") === 13);
console.log(periodic("157") === 4);
console.log(periodic("1234567") === 943);
console.log(periodic("1818") === 1);
console.log(periodic("0000001") === 778);