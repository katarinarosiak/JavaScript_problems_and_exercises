// Inventory Item Availability
// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

// - -i arr of obj, inventory item (id num int)  
// - o boolean
// true if available, else false 

// - compute availibility 
// should return true only if the sum of the quantity values of the item's transactions is greater than zero. sum > 0
// - in (addition)
// - out substraction 

// algo: 
// - filter out transactions with the given id 
// - compute the quantity:
//   - declare a vatiable quantityt 
//   - iterate through all the objects 
//   - check if 'in' then increment variable by quantity
//   - check if movement i out then decrement by quantity 
//   - return variable  
// - if the quanttiy > 0 return true else fals 

// Examples:

// Copy Code
const transactions = [{ id: 101, movement: 'in', quantity: 5 },
{ id: 105, movement: 'in', quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in', quantity: 12 },
{ id: 103, movement: 'out', quantity: 15 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in', quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in', quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 },];

//isItemAvailable(101, transactions);     // false
//isItemAvailable(105, transactions);     // true

function isItemAvailable(id, transactions) {
  return filterTransactions(id, transactions).reduce(countMovement, 0);
};

function filterTransactions(id, transactions) {
  return transactions.filter(obj => obj.id === id);
};


function countMovement(prevVal, { quantity, movement }) {
  return movement === 'in' ? prevVal += quantity : prevVal -= quantity
};
