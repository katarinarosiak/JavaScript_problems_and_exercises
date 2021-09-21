let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangles) {
  return rectangles.map(el => el[0] * el[1]).reduce((acc, sum) => acc + sum);
}

totalArea(rectangles);    // 141