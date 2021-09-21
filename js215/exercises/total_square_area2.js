
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];


function totalSquareArea(rectangles) {
  return rectangles.filter(arr => arr[0] === arr[1]).map(arr => arr[0] * arr[1]).reduce((acc, sum) => acc + sum);
}



totalSquareArea(rectangles);    // 121