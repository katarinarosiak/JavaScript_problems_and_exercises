// https://edabit.com/challenge/PYXbvQh9W3c9i72xx

// Vending Machine

// Your task is to create a function that simulates a vending machine.

// Given an amount of money (in cents ¢ to make it simpler) and a productNumber,
// the vending machine should output the correct product name and give back the
// correct amount of change.

// The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

// The return value is an object with 2 properties:

//     product: the product name that the user selected. change: an array of
//     coins (can be empty, must be sorted in descending order).

// Examples

// vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20,
// 10 ] }


// Notes

//     The products are fixed and you can find them in the Tests tab.
//     If productNumber is invalid (out of range) you should return the string:
//     "Enter a valid product number".
//     If money is not enough to buy a certain product you should return the
//     string: "Not enough money for this product".
//     If there's no change, return an empty array as the change.

// // Products available
// const products = [
//   { number: 1, price: 100, name: 'Orange juice' },
//   { number: 2, price: 200, name: 'Soda' },
//   { number: 3, price: 150, name: 'Chocolate snack' },
//   { number: 4, price: 250, name: 'Cookies' },
//   { number: 5, price: 180, name: 'Gummy bears' },
//   { number: 6, price: 500, name: 'Condoms' },
//   { number: 7, price: 120, name: 'Crackers' },
//   { number: 8, price: 220, name: 'Potato chips' },
//   { number: 9, price: 80,  name: 'Small snack' },
// ];

// // Happy Path: 
// console.log(vendingMachine(products, 100, 9));  // {product: 'Small snack', [20]}

// //Sorted array 
// console.log(vendingMachine(products, 200, 9));  // {product: 'Small snack', [100, 20]}
 
// //Invalid product
// console.log(vendingMachine(products, 200, 10)); //"Enter a valid product number".

// // If money is not enough 
// console.log(vendingMachine(products, 10, 7)); //"Not enough money for this product".

// //the higest possible coin
// console.log(vendingMachine(products, 300, 9));  // {product: 'Small snack', [200, 100, 20]}





//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ------------------  UNDERSTAND THE PROBLEM:  -------------------
//1.
//2.
//3.
//Input:   number: amount in cents , number: product number , products array 
//- 
//Output:
//- obj new obje contains product name, chage in numbers representing coins  
// 
// Clarification of domain terms: 
// -
// - 
//RULES:
// Explicit:
//- coins: [500, 200, 100, 50, 20, 10]
//- output arry: sorted in desc order , 
//- if the given amount is equal to the price the array should be empty  
//- If productNumber is invalid (out of range) you should return the string:
//     "Enter a valid product number".
// - If money is not enough to buy a certain product you should return the
//     string: "Not enough money for this product".
// - if the amount of money is invalid return 'invalid amount'
// - always positive integer
//  - max 1000 , no negative, integer 
//-
//-Implicit
//- substract from amount, the price of the producst and then calculate the rest in coins 
//- the higest possible coin 
// EDGE CASES:
//    INPUT:
// => input data type: (can input be different data type?)
// => boundary conditions:
// => too many, too little arguments or none 
// => repetition / duplication 
// => if ARRAYS:
//    - [], [1, 2, a: 'A'], [1,,3], [<3 empty values>], large arrays
// => if NUMBERS:
//     - 0, -0, Infinity, -Infinity, very large nums, NaN, +/-, .234, 
//     - inclusive?
// => if STRINGS: 
//    - case sensitive.insensitive (special case UuU, AA)
//    - ' ', '  ', ' q', 'q ', tabs,  /n etc.
//    - '42', '@', 'dog\n', y as vowel 
// => SPECIAL VALUES AND EMPTINESS  
//    - undefined, NaN, null, function, /abc/
//    - {}, '', [], 0, [''],
// => BOOLEAN
//    -  true / false
//  
// => Failures / Bad input: 
//   - exceptions? 
//   - return special val (null/undefined/0)
// OUTPUT: 
// - same or new obj? 
// - 
//QUESTIONS: 
//- 
//
//----------------------- TEST YOUR UNDERSTANDING  -----------------
// 
//
//
//
// ------------------------- EXAMPLES/TEST CASES: -------------------
//
// Happy Path
// console.log()
// console.log()
// console.log()
//
// Edge Cases: 
//
// 
// Failures / Bad input: 
// 
//
//
//
// --------------- DIFFERENT SOLUTIONS --------------------------------
//MENTAL MODEL: 
//*
//DATA STRUCTURES: [], {}, numbers, string => {string, []} 
// ------------------------  ALGORYTHM:  -----------------------------
// - decalare a const variable change Array with numbers representing change i coins 
//- 1. take the product number and check there is product with that number 
//-     if not return "Enter a valid product number"
// 2. if the amount of money is less than the product price 
//-     if it is retunr "Not enough money for this product".
//- substract price of the product from the amount
//- calculate the change in coins:  
//       [500, 200, 100, 50, 20, 10];
//    210 => 200 10 
//       - until the num is === 0
//       - find the highest that is less or equal to the num 
//       - num - the higest 
//       - remaining find the highest ...


// 
//- create a new object with product name and change in array sorted in desc order 
//- return it 
//- ---------------------- TESTING ALGORYTHM WITH TEST CASES --------
//  ---------------------  PSEUDOCODE:  ------------------------------
//
//
//
//
//
//
//
// -------------------------------- CODE:  -----------------------------  

// Products available
const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];


function vendingMachine(products, amount, productNum) {
  const allCoins = [500, 200, 100, 50, 20, 10];

  let amountInStr = amount.toString();
  if (amountInStr[amountInStr.length - 1] !== '0') return "Invalid amount"; 

  let product = products.find(product => product.number === productNum);

  if (!product) return  "Enter a valid product number";
  if (product.price > amount) return "Not enough money for this product"

  let change = amount - product.price;

  return {
    product: product.name,
    change: calculateCoins(change, allCoins)
  };
}


function calculateCoins(changeAmount, allCoins) {
  let coinsArray = []; 
  while (changeAmount > 0) {
    let graterThanAMount = allCoins.find(coin => coin <= changeAmount);
    coinsArray.push(graterThanAMount);
    changeAmount -= graterThanAMount;
  }
  return coinsArray;
}


// Happy Path: 
console.log(vendingMachine(products, 100, 9));  // {product: 'Small snack', [20]}
console.log(vendingMachine(products, 170, 1)); // {product: 'Orange juice', [50, 20]}

//Eqal amount of money
console.log(vendingMachine(products, 500, 6)); // {product: 'Condoms', []}

//Sorted array 
console.log(vendingMachine(products, 200, 9));  // {product: 'Small snack', [100, 20]}
 
//Invalid product
console.log(vendingMachine(products, 200, 10)); //"Enter a valid product number".

// If money is not enough 
console.log(vendingMachine(products, 10, 7)); //"Not enough money for this product".

//the higest possible coin
console.log(vendingMachine(products, 310, 9));  // {product: 'Small snack', [200, 20, 10]}

//inlvalid money amount 
console.log(vendingMachine(products, 311, 9)); //Invalid amount

//Return a new object 
console.log(vendingMachine(products, 310, 9) === products); //false



