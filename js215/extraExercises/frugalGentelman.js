// The Frugal Gentleman
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// Examples
// chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"

// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

// chosenWine([]) ➞ null
// Notes
// All wines will be different prices, so there is no confusion in the ordering.


// i: array objects  [{name: str, price: num}]
// o: string  (name of the wine a key) 

// R: 
// - choose the second cheapest 
// - if empty arr => null
// - if only one choice buy it 
// - all wines have differnet prices
// - each object consist of only one wine 

//DS+> array, object, strings, numbers, 

// - if [] return null
// - if len of the array is 1 return the name of the wine 
// - sort the array based on the price
// - choose the item on idx 1
// - access the name of the item and return 

function chosenWine(wineArr) {
  if (wineArr.length === 0) return null; 
  if (wineArr.length === 1) {
    return wineArr[0]['name'];
  };
 return  wineArr.sort((a, b) => a.price - b.price)[1]['name'];
}



console.log(chosenWine([])); // null

console.log(chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
])) // ➞ "Wine 9"

console.log(chosenWine([{ name: "Wine A", price: 8.99 }])) // ➞ "Wine A"


