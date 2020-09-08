// Clean up the words
// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// Example:

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - 
// Output:
// - 
// Rules:
// -
// -
// -
// Questions: 
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// - loop through the given string
// - determin if the current indexed character a non alphabetical 
// - if no continue
// - if yes replace with ' ';
// if last character in the new string is ' ', then don;t add 
// return new string 

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 

function cleanUp(string) {
  let newString = '';
  let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'W', 'V', 'X', 'Y', 'Z'];

  for (let index = 0; index < string.length; index++) {

    if (upper.includes(string[index].toUpperCase())) {
      newString += string[index];
    } else if (!newString.endsWith(' ')) {
      newString += " ";
    } else {
      continue;
    }
  }

  return newString;
}


// in this solution we iterate through the given string.We then determin whether the current character is a letter but checking if it is included in the upper array, that contains all upper case characters.We would thought firstly change every character to upperCase in order to compare it.
// If the character is a letter we would concatinate it with newString, which we have initialised.If the character is not a letter we would check if the last charater of the strng is a space.If not we would conact a space with newSTring.If it's not we would simply continue. FInally we return newString. 