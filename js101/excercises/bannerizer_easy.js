// Bannerizer
// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:

// logInBox('To boldly go where no one has gone before.');
// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
// You may assume that the output will always fit in your browser window.



// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - strng 
// Output:
// - a string in a box
// Rules:
// -function one arg - string
// -one line break above and under the text
// -if "" then empty box 
// -the frame grows according to input 
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
//strings
// ALGORYTHM: 
//-create five variables, one for each line of the frame 
//- on each line create a base template
// if the input is empty string, print base template 
// - count length of the string and add additional characters to the template according to length of the string
// - use conactination to connect strings to the frame
// -console.log the result 
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 


function logInBox(string) {
  let firstRow = "+--" + "-".repeat(string.length) + "+";
  let secondRow = "| " + " ".repeat(string.length) + " |";
  let thirdRow = "| " + string + " |";
  let fourthRow = "| " + " ".repeat(string.length) + " |";
  let fifthRow = "+--" + "-".repeat(string.length) + "+";





  console.log(firstRow);
  console.log(secondRow);
  console.log(thirdRow);
  console.log(fourthRow);
  console.log(fifthRow);
};

logInBox('To boldly go where no one has gone before.');