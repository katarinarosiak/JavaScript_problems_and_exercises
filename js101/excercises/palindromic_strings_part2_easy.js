/// Palindromic Strings (Part 2)
// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - string
// Output:
// - boolean
// Rules:
// - case doesn't matter 
// - ignore all the signs 
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
// - take a stirn and replace alll the charatcers that are not letters or number with a space 
// - remove spaces 
// - change string to upperCase and compare 
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 



function isRealPalindrome(string) {
  let newString = '';

  for (let index = 0; index < string.length; index++) {
    if ((string[index].toUpperCase() >= 'A' && string[index].toUpperCase() <= 'Z') || (Number(string[index]) >= 0 && Number(string[index]) <= 9)) {
      newString += string[index];
    }
  }
  newString = newString.split(' ').join('').toUpperCase();
  return isPalindrome(newString);
}


function isPalindrome(string) {
  console.log(string);
  return string === string.split('').reverse().join('');
}

//In this solution we have initialized a isRealPalindorme function that takes one argument which is a string. We then declare a newString variable and assign an empty string to it. Then we iterate through the value of newSTring variable by using for statement, starting from first element (index 0) and going through the whole length of the string. We increment index by one with each ieteration. WIth each iteration we are checking the condition of if statement of whether the value on the current index place is a alphabtetical character. We do it by using toUpperCase() method in order to firslty transform current value to upper case and then checking if this character is between 'A' and 'Z' according to (UTF-16 codepoints). Then we look if the character pass the second part of the condition, where we check if the value exisiting on the current ondex place is a numerical value. We do it by explicitly coercing the string character to a number by using Number() method and then again checking if it is placed between 0 and 9 according to UTF-16 codepoints. If both of those condition evaluates to true we can be sure that the elements are indeed either a letter or a number. In thsi case we would simply concatinate it with newSTring.Otheriwse we would just ignore this character and move on to the next iteration. Next we want to remove all the spaces from the string. We do it by calling split() method on the value of newString variable, which if we input ' ' as an argument is explicitly coercing the string to array of elements, in which each element is a character of a string, excluding spaces. We then coerce the array to string again by using join() method and call toUpperCase() on it to transform all the characters to upper case. We then call isPalidnrome function on the string that returns true if the input string is a plaidrome and false if it's not. FInally we  return the evaluated value of this expression.