// Mini Inventory Management System

let ItemCreator = (function () {

  function validateItem(itemName, category, quantity) {
    return !(itemName.length <= 3 || category.split(' ').length >= 2 || quantity === undefined);
  }

  function generatedSku(itemName, category) {
    let checkName = itemName.split(' ');
    if (checkName.length === 2 && checkName[0].length === 2) {
      return (checkName[0] + checkName[1][0] + '/n' + category.slice(0, 2)).toUpperCase();
    } else {
      return (itemName.slice(0, 3) + category.slice(0, 2)).toUpperCase();
    }
  }

  return function ItemCreator(itemName, category, quantity) {
    if (validateItem(itemName, category, quantity)) {
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
      this.sku = generatedSku(itemName, category, quantity);
    } else {
      return { notValid: true };
    }
  };
})();


let ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      ItemManager.items.push(item);
    }
  },
  validateItem(itemName, category, quantity) {
    return !(itemName.length <= 3 || category.split(' ').length >= 2 || quantity === undefined);
  },
  generateSku(name, category) {
    let checkName = name.split(' ');
    if (checkName.length === 2 && checkName[0].length === 2) {
      return (checkName[0] + checkName[1][0] + '/n' + category.slice(0, 2)).toUpperCase();
    } else {
      return (name.slice(0, 3) + category.slice(0, 2)).toUpperCase();
    }
  },
  update(sku, infoToUpdate) {
    ItemManager.items.forEach(item => {
      if (item.sku === sku) {
        for (let key in infoToUpdate) {
          item[key] = infoToUpdate[key];
        }
      }
    });

  },
  inStock() {

    return ItemManager.items.filter(el => el.quantity > 0);
  },
  itemsInCategory(givenCategory) {
    return ItemManager.items.filter(el => el.category === givenCategory);
  },
  delete(sku) {

    let indexToRemove = 0;

    for (let index = 0; index < ItemManager.items.length; index++) {
      if (ItemManager.items[index].sku === sku) {
        indexToRemove = index;
      }
    }
    ItemManager.items.splice(indexToRemove, 1);
  }
};

let ReportManager = {
  item: {},
  init(ItemManager) {
    ReportManager.item = ItemManager;
  },

  reportInStock() {

    let report = [];
    ReportManager.item.items.forEach(el => {
      if (el.quantity > 0) {
        report.push(el.itemName);
      }
    });
    console.log(report.join(', '));
  },

  createReporter(sku) {
    let obj = {
      itemInfo() {
        ReportManager.item.items.forEach(item => {
          if (item.sku === sku) {
            for (let key in item) {
              console.log(`${key} : ${item[key]}`);
            }
          }
        });
      }
    };

    return obj;
  }
};

//valid item
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
//ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items
//(soccer ball is removed from the list)
//ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');

kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10