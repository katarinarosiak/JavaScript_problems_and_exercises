// Reserved Keywords
// We have been asked to implement a function that determines whether or not a given word is a reserved keyword.We wrote the isReserved function below along with some test cases, but we aren't seeing the expected result. Why not? Fix the code so that it behaves as intended.

// const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
//   'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
//   'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
//   'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
//   'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
//   'with', 'yield'];

// function isReserved(name) {
//   RESERVED_KEYWORDS.forEach(reserved => {
//     if (name === reserved) {
//       return true;
//     }
//   });

//   return false;
// }

// console.log(isReserved('monkey')); // false
// console.log(isReserved('patch'));  // false
// console.log(isReserved('switch')); // should be: true
//answer:

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  return RESERVED_KEYWORDS.some(reserved => (name === reserved));
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true
console.log(isReserved('break')); // should be: true

//The fuction isReserved() has been returning false in all of the cases. It was because forEach method was used to iterate through the RESERVED_KEYWORDS array. Since the if statement existen within body of callback function that forEach has called and forEach always returns undefined this is what was returned ignoring the return value of the statement. Finally the 'return false' was placed outside of the forEach body, therefore it didn't matter what the callback function would return, false would be the return statement of the isReserved function call.    