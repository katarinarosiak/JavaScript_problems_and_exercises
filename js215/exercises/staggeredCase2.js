

// Staggered Caps Part 2
// Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.

// Examples:

function staggeredCase(str) {
  let upper = false;
  return str.split('').map((char) => {
      if (char.match(/[a-z]/i)) {
        upper = !upper;
        return upper ? char.toUpperCase() : char.toLowerCase()
      };
        return char;
  }).join('');
};


// Copy Code
console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");
