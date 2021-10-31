// //Create a function that takes two arguments: an object with shop departments that stores lists of grocery items, and a string with description of what needs to be bought. It should return a nested arrays with the names of the departments and an index on which this item can be found

// let shop = {
//   diary: ['milk', 'yogurt', 'kefir', 'cheese'],
//   meat: ['salami', 'ham', 'tukey'],
//   vegetables : ['salad', 'tomato', 'potato'],
//   fruits : ['apples', 'grapes', 'bananas']
// };
// let list = 'Buy: water, cheese, bananas and milk'; 

// goShopping(shop, list);
// //[null, ['diary', 3], ['fruits', 2], ['diary', 0]]

// i: object with arrays as values , string  'buy', items to buy 
// o: nesteed arrays (key (department) index of the item to buy)

// R: 
// where there is no item =>  null
// - input any other data types => null
// - the second only strings or null => null
// - if no items found => [null]
// - '' => null
// - can contain otehr data types 
// - if ampty
//{} => null

// DS: {: []}, [], str   [[]], undefined ... 
// A: 
// - if any other data type as the first arg => null
// - the object is empty => null
// - if the string is empty => null
// - declara a varabile result => []
// - take the list find all the matches if  items
// - sstring strcucture 'Buy: ..... and 
//  - map through array of matches
//     - on each match item chekc if the item exist in any of the departments: 
//         - iterate through each department and check if at least one f them includes the item. 
//         - return true if yes and false otheriwse 
//     - if it exist:
//       - find the department array and assign it to a variable 
//       - return departments name and index of that item in the department array (as an array)
//     - if not found: 
//       - return null; 
// - retun the mapped array 


function goShopping(shop, list) {
  if (typeof shop !== 'object') return null;
  if (shop === null) return null;
  if (list === '') return null;
  if (Object.keys(shop).length === 0) return null;

  let RE = /\b\w+\b/g
  let matches = list.match(RE).filter(el => el !== 'Buy' && el !== 'and');
  [water, cheese, banan, milk]


  shop = Object.entries(shop);
  return matches.map(item => {
    if (exist(item, shop)) {
      let depart = shop.find(department => {
        return department[1].includes(item);
      })
      return [depart[0], depart[1].indexOf(item)];
    } else {
      return null;
    }
  })
}

function exist(item, shop) {
  return shop.some(department => {
    return department[1].includes(item);
  })

}



let shop = {
  diary: ['milk', 'yogurt', 'kefir', 'cheese'],
  meat: ['salami', 'ham', 'tukey'],
  vegetables: ['salad', 'tomato', 'potato'],
  fruits: ['apples', 'grapes', 'bananas']
};
let list = 'Buy: water, cheese, bananas and milk';



//Happu Path: 

// let list1 = 'Buy: yogurt, cheese, bananas and milk'; 
// console.log(goShopping(shop, list1));
//[['diary', 1], ['diary', 3], ['fruits', 2], ['diary', 0]]

// //no item with null
console.log(goShopping(shop, list));
//[null, ['diary', 3], ['fruits', 2], ['diary', 0]]

// // //if ither data types as input: 
// console.log(goShopping([], list));
// // //null
// console.log(goShopping(undefined, list));
// // //null
// console.log(goShopping(null, list));
// //null
// console.log(goShopping(false, list));
// // //null

// //emptyness
// console.log(goShopping({}, list));
// //null
// console.log(goShopping(shop, ''));
// //null

