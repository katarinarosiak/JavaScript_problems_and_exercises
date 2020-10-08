// /Staggered Caps (Part 2)
// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

// Example:

// Copy Code
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);



function staggeredCase(str) {
  str = str.toLowerCase();
  let str1 = '';
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= 'a' && str[i] <= 'z')) {
      str1 += str[i];
    } else if (!(counter % 2)) {
      str1 += str[i].toUpperCase();
      counter++;
    } else {
      str1 += str[i].toLowerCase();
      counter++
    }
  }

  return str1;
}