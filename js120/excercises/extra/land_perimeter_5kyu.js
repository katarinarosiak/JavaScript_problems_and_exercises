Land perimeter / kyu 5

Task:
Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands.Each piece of land will be marked with 'X' while the water fields are represented as 'O'.Consider each tile being a perfect 1 x 1piece of land.Some examples for better visualization:

  ['XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO']
or


should return: "Total land perimeter: 24",
while


['XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO']

should return: "Total land perimeter: 18"


function landPerimeter(arr) {
  let splitted = arr.map(el => el.split('')).map((subArr, index1) => subArr.map((str, index2) => (str === 'X' ? [index1, index2] : [str])
  ))
  let counterX = 0;
  let conncetions = 0;
  splitted.forEach(subArr => subArr.forEach(inner => {
    if (!inner.includes('O')) {
      counterX++;
      splitted.forEach(innerAr => innerAr.forEach(innerEl => {
        if (isConnceted(innerEl, inner)) {
          conncetions++;
        }
      }))
    }
  }))
  let result = (counterX * 4) - conncetions;
  return `Total land perimeter: ${result}`;
}

function isConnceted(arr1, arr2) {
  let hasSameEl = (arr1, arr2) => arr1.some((el, index) => el === arr2[index])
  let secondBiggerBy1 = (arr1, arr2) => arr1.some((el, index) => el === arr2[index] + 1 || el + 1 === arr2[index])

  return hasSameEl(arr1, arr2) && secondBiggerBy1(arr1, arr2)
}  