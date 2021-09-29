// Reverse a String
// Implement a function that takes a string as an argument and returns a new string that contains the original string in reverse.

// Examples
// Copy Code
function reverse(string) {
  return string.split('').reverse().join('')
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"