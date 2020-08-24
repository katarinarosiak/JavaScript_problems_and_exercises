// /Practice Problem 14
// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
// The return value should look like this:

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - obj
// Output:
// - array   
// Rules:
// - return an array with fruit colors and vegetable size
// - color capitalized
// - size uppercased
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
// - loop through the obj and determin if the element is a fruit
// - if yes, return color with capitalized letters
// - if not return size, with upperCase letters
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 

let finalArr = [];

for (let key in obj) {
  if (obj[key].type === 'fruit') {
    finalArr.push(obj[key].colors.map(name => name[0].toUpperCase() + name.slice(1)));
  } else {
    finalArr.push(obj[key].size.toUpperCase());
  }
}

console.log(finalArr);


// We have iterated throuht each key in the given object multidimensional object and reached to 'type' key of the inner object. We have then determin whether the inner elements represents fruit and if so we then reached the inner array representing colors by using obj[key] bracket notation and .color dot notation. We have then used map method to iterate throght the inner array and change used the element reference operator [] to access first letter of each color and using toUpperCase() method transform it to Upper case. We, then conacatinated the upperCased first letter to the rest of the word that we extracted using slice() method. Finally we have pushed the transformed array to finalArr variable. However, if using the object[key].type we have determined that the type is not a fruit we have reached 'size' key by using cobination of bracket and dot notation obj[key].size. We then transformed the whole word to upperCase by using to UpperCase() method and pushed the transformed string to finalArr. In the end we have logged to the console finalArr that presented desired outcom of nested array with capitalized colors of fruits and uppercased size of vegetables.     