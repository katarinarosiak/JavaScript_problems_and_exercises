
let arr = [1, 2, 3];

function doSth(el) {
  console.log(el);
}

function forEach(arr, callback, thisArg) {
  for (let index = 0; index < arr.length; index++) {
    callback.call(thisArg, arr[index], index, arr);
  }
}

//forEach(arr, doSth);

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }
  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo('Item: ');

//arr.forEach(foo.showItem, foo);

forEach(arr, foo.showItem, foo);
//forEach(arr, foo.showItem);

forEach(["a", "b", "c"], function (value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});