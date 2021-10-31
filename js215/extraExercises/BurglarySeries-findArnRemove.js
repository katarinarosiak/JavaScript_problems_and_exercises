// Burglary Series (23): Find and Remove
// The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, but they detected further irregularities; the list of stolen items is misformatted and appears to contain other entries that don't belong there. Find and remove them.

// You receive an object with nested objects with strings as values. Convert their values to number and return an object without the entries that evaluate to NaN.

// I: object (with nested objects with strings) {a:{a:'a'}} 
// O: obj (with all values as numbers, and NaN removed)  

// {a: 1,
//  b: '2',
//  c: 'a'
// } => a: 1, b: 2, 


// - all the numbers => numbers
// - all the stringified numbers => numbers
// - everything else => NaN (not included) 
// - if {} => {}
// - not mutate 
// - if no values avalutaes to numbers => {}
// - not evalutae: NaN, , undefined, 
// - avalutes: null, 
// - differnet data types as input => undefined 


// {g:{a:1}, f: {a: 1, b: NaN}} =>
// {g : {a:1},
//  f : {a: 1, b: NaN}
// }

// - if any other data types as inpiut return {}
// - iterate through the object copy 
// - for each value: 
//   - iterate through each values: 
//     - take the val of inner obj 
//     - coerce to number 
//     - if coercion gives NaN remove (delete) it 
//     - else reassign
// return the object


function findAndRemove(items) {

  if (typeof items !== 'object') return undefined;
  if (items === null || Array.isArray(items)) return undefined;
  if (Object.keys(items).length === 0) return {};
  items = Object.assign(items, {});
  items = coerceToNums(items);
  items = removeNaNs(items);
  return items
}


function coerceToNums(items) {
  for (let outerKey in items) {
    let innerObj = items[outerKey];
    for (let innerKey in innerObj) {
      innerObj[innerKey] = Number(innerObj[innerKey]);
    }
  }
  return items;
}

function removeNaNs(items) {
  return Object.fromEntries(Object.entries(items).map(innerArr => {
    let transformed = Object.entries(innerArr[1]);
    transformed = transformed.filter(el => !Object.is(el[1], NaN))
    return [innerArr[0], Object.fromEntries(transformed)];
  }))
}


//Happy Path  
console.log(findAndRemove({ g: { a: '1', b: 2, c: 'hello' } })); // {g:{a: 1, b:2}}; 
console.log(findAndRemove({
  bedroom: {
    slippers: "10000",
    piano: "550",
    call: "vet",
    travel: "world",
  },
})) // ➞ {
// //     bedroom: {
//       slippers: 10000,
//       piano: 5500,
//     },
//   }

//NaN not included: 
// letters and numbers blends
console.log(findAndRemove({
  kitchen: {
    ["gold spoons"]: "900",
    piano: "550",
    notes: "ga0r76ba22g4e",
  },
  cellar: {
    reminder: "dog",
    bottle: "750",
  },
})) // ➞ {
//     kitchen: {
//       ["gold spoons"]: 900,
//       piano: 550,
//     },
//     cellar: {
//       bottle: 750,
//     },
//   }

// other data types as input 
console.log(findAndRemove([])); // undefined 
console.log(findAndRemove('hello')); // undefined 
console.log(findAndRemove(false)); // undefined 
console.log(findAndRemove(null)); // undefined 
console.log(findAndRemove(NaN)); // undefined 
console.log(findAndRemove(11)); // undefined 

//empty obj
console.log(findAndRemove({})); // {}

// //no values
console.log(findAndRemove({ g: { a: 'hello' } })); // {g:{}}

// //other values: 
console.log(findAndRemove({ g: { a: NaN, b: 'hello', c: undefined, d: {} } })); //{g:{}}

// //null
console.log(findAndRemove({ g: { a: null, b: [] } })); // {g:{a: 0}} 