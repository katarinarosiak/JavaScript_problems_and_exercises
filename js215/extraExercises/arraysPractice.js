// 4. Create a function that removes from the inventory everything that is on the given list:


let shop = [
  ['milk', 'yogurt', 'kefir', 'cheese'],
  ['salami', 'ham', 'tukey'],
  ['salad', 'tomato', 'potato'],
  ['apples', 'grapes', 'bananas']
];
let list = ['tomato', 'grapes', 'cheese'];




//stocktaking(shop, list);
// [
//   ['milk', 'yogurt', 'kefir'],
//   ['salami', 'ham', 'tukey'],
//   ['salad', 'potato'],
//   ['apples', 'bananas']
// ];

let idx = [];
shop.forEach((innerArr, i) => {
  innerArr.forEach(el => {
    if (list.includes(el)) {
      idx.push([i, innerArr.indexOf(el)]);
    }
  })
})

idx.forEach(indexes => {
  shop[indexes[0]].splice(indexes[1], 1)
})
console.log(shop);