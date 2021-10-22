// How Many
// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

// Example:

// Copy Code
const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// // console output
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2

function countOccurrences(arr) {
  
  let itemsCount = arr.reduce((obj, item) => {
    obj[item] = obj[item] ? obj[item] +=1 : 1;   
    return obj;
  },{})
  
  for (let key in itemsCount) {
    console.log(`${key} => ${itemsCount[key]}`);
  }

};

