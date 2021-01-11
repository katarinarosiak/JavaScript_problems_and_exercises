var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];
sum += (function (arr) {

  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

