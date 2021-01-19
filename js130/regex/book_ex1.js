// Write a method that returns true if its argument looks like a URL, false if it does not.

function isUrl(str) {
  let regex = new RegExp(/^htt(ps|p):\/\/\w*.\w*$/);
  return !!str.match(regex);
}


console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false