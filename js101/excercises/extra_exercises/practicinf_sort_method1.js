//practicing sort()
//excercises
// Create a function that takes a string and returns a string with its letters in alphabetical order.

//   Examples
console.log(AlphabetSoup("hello")) //➞ "ehllo"
console.log(AlphabetSoup("edabit")) //➞ "abdeit"
console.log(AlphabetSoup("hacker")) //➞ "acehkr"
console.log(AlphabetSoup("geek")) //➞ "eegk"
console.log(AlphabetSoup("javascript")) //➞ "aacijprstv"

function AlphabetSoup(string) {
  let arrToSort = string.split('');
  return (arrToSort.sort()).join('');
}