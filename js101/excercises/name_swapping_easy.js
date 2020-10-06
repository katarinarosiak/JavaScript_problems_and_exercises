// /Name Swapping
// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

// Examples:

// Copy Code
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"



function swapName(string) {

  return `${string.split(' ')[1]}, ${string.split(' ')[0]}`
}