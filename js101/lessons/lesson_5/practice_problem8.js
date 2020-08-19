/// Practice Problem 8
// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};


let newArr = [];
let vowels = "aeiou";

Object.entries(obj).forEach(el => el[1].forEach(word => word.split('').forEach(letter => {
  if (vowels.includes(letter)) {
    newArr.push(letter);
  }
})));


console.log(newArr);

