// Given two nested structures: shop and list return an array of objects containing items that are in the list but we cannot buy. 
// The return value should be: 
// [ { salami: 11 }, { grapes: 4 }, { chocolate_chips: '12' } ]
// Because: 
// - salami is NaN  in the shop
// - grapes are undefined in the shop
// - and the are no chocolate chips at the store at all. 


let shop = {
  diary: [{ 'milk': 13 }, { 'yogurt': 7 }, { 'kefir': 13 }, { 'cheese': 7 }],
  meat: [{ 'salami': NaN }, { 'ham': 12 }, { 'turkey': 19 }],
  vegetables: [{ 'salad': 7 }, { 'tomato': undefined }, { 'potato': undefined }],
  fruits: [{ 'apples': undefined }, { 'grapes': undefined }, { 'bananas': 10 }]
};


let list = {
  diary: [{ milk: '1' }, { kefir: '4' }],
  meat: [{ 'salami': 11 }],
  vegetables: [],
  fruits: [{ 'grapes': 4 }],
  other: [{ chocolate_chips: '12' }],
};

// let list2 = {
//   diary: [{milk: undefined}, {kefir: '4'}],
//   meat: [{salami: '1'}],
//   vegetables: [], 
//   fruits: [{salad:10}],
//   other: [{chocolate_chips: '12'}],
// };



function getUnavailable(shop, list) {
  let toBuy = Object.entries(list).map(arr => arr[1]).flat();
  let shopItems = Object.entries(shop).map(arr => arr[1]).flat().map(item => Object.entries(item).flat());

  return toBuy.filter((item, idx) => {
    return isUnavailable(item, shopItems, idx)
  });
}

function isUnavailable(itemToBuy, shopItems, idx) {
  let entryItem = Object.entries(itemToBuy).flat();

  if (noItem(entryItem, shopItems)) return true;

  let firstTrue = shopItems.find(item => {
    if (entryItem[0] === item[0] && (item[1] === undefined || Number.isNaN(item[1]))) {
      return true
    } else {
      return false;
    }
  })
  return firstTrue;
}


function noItem(itemToBuy, shopItems) {
  if (shopItems.some(shopItem => shopItem[0] === itemToBuy[0])) {
    return false;
  }
  return true;
}



console.log(getUnavailable(shop, list))