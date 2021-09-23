// Practice Problem: Formatting Bands
// We have the following Array of information for some popular bands:

// Copy Code
// let bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

// There are problems with this data, though, so we first have to clean it up before we can use it:

// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.
// Write a function that can process the input band Array and return an Array that contains the fixed information:

// Copy Code
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];


// i: arr of objects
// o: array of objects

// r: 
// - chnage country of the band to canada 
// - band name should be capitalized 
// - remove all dots from the band names 
// - 

// - iterate through the array of objects 
// - on each oteration: 
//   - assign Canada to country key
//   - capitalize the band name 
//   - remove all the dots 


function processBands(data) {

  return data.map(obj => {
    obj.country = 'Canada';
    obj.name = transform(obj.name);
    return obj;
  })
}

function transform(sentence) {
  let dot = /\./g;
  sentence = sentence.replace(dot, '');
  return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

processBands(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]