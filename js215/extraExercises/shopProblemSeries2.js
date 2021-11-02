//Return an array with all the items you can buy 
// This means: 
// - they are in the stock: (they ate not NaN and not undefined)
// - it's possible to buy them in the store usually (there is a key with that name)
// - the amount is right

// it should return: [{milk: '1'}, {kefir: '13'},]


let shop = {
  diary: [{ 'milk': 13 }, { 'yogurt': 7 }, { 'kefir': 13 }, { 'cheese': 7 }],
  meat: [{ 'salami': NaN }, { 'ham': 12 }, { 'turkey': 19 }],
  vegetables: [{ 'salad': 7 }, { 'tomato': undefined }, { 'potato': undefined }],
  fruits: [{ 'apples': undefined }, { 'grapes': undefined }, { 'bananas': 10 }]
};


let list = {
  diary: [{ milk: '1' }, { kefir: '20' }],
  meat: [{ 'salami': 11 }],
  vegetables: [],
  fruits: [{ 'grapes': 4 }],
  other: [{ chocolate_chips: '12' }],
};

let list2 = {
  diary: [{ milk: undefined }, { kefir: '4' }],
  meat: [{ salami: '1' }],
  vegetables: [],
  fruits: [{ salad: 10 }],
  other: [{ chocolate_chips: '12' }],
};

// DS: [key: [{}, {}, {}]], => [[key, val], [key, val]]
// {k: [{}, {}]} => [{}, {}]

// A: 
// 1. simplify strcutres:
//    - (Obj.values) flatten it
//    - object.vlaues flatten it

// 2. filter out the elements that are not avaialble
//   let filteredOutUnavaialble =
//     - iterate through each item to buy (on each ieteration):
//        - return true of the item is avaialble at the shop: 
//         - isAvaialble(currItem, allShopItems):
//             - iterate through shop items
//             - check if the current Item exist in the shop
//             - check if the current item to buy is not undefoned on NaN in the shop
//             - if all of it is true for that item return true else false 
// 3. update the values that are availeble but in the not right amount 
//     (return) [{}, {}..]
//     - updateHowManyCanBuy (filteredOutUnavaialble):
//         - iteretae through each itemTo buy {}
//           - for each item to buy get the values of items in the shop (11)
//           - coerce stringifiend num to number 
//           - if the value from shop is a number and it's less than toBuy value:
//               update the item to buy with a new val (itemToBuy val = shopItem val)
//     - return updated arr of obj


function getItemsThatICanBuy(shop, list) {
  let shopItems = Object.values(shop).flat().flatMap(item => Object.entries(item))
  let toBuyItems = Object.values(list).flat();

  let onlyAvaialbe = toBuyItems.filter(itemToBuy => isAvailable(itemToBuy, shopItems));
  return updateHowManyCanBuy(onlyAvaialbe, shopItems)
}


function updateHowManyCanBuy(onlyAvaialbe, shopItems) {

  onlyAvaialbe.forEach(availableItem => {
    shopItems.filter(shopItem => {
      let toBuyProduct = Object.entries(availableItem).flat();
      if (shopItem[0] === toBuyProduct[0]) {
        if (shopItem[1] < +toBuyProduct[1]) {
          availableItem[toBuyProduct[0]] = shopItem[1].toString();
        }
      }
    })
  })
  return onlyAvaialbe;
}


function isAvailable(itemToBuy, shopItems) {
  let toBuyEntry = Object.entries(itemToBuy).flat();


  return shopItems.some(shopItem => {
    return toBuyEntry[0] === shopItem[0] && shopItem[1] !== undefined && !Number.isNaN(shopItem[1]);
  })
}

console.log(getItemsThatICanBuy(shop, list));



