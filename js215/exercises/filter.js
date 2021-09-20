function myFilter(array, func) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      arr.push(array[i])
    }
  }
  return arr;
}

let isPythagoreanTriple = function (triple) {
  console.log(triple);
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

myFilter([{ a: 3, b: 4, c: 5 },
{ a: 5, b: 12, c: 13 },
{ a: 1, b: 2, c: 3 },], isPythagoreanTriple);

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]