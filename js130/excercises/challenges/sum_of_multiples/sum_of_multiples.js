class SumOfMultiples {
  constructor() {
    this.givenNums = ![...arguments].length ? [3, 5] : [...arguments]
  }
  static to(naturalNum) {
    let sums = new SumOfMultiples();
    return sums.to(naturalNum);
  }
  to(naturalNum) {
    let allMultiples = [];

    if (naturalNum < 3) return 0;

    this.givenNums.forEach(num => {
      for (let index = num; index < naturalNum; index += num) {
        if (!allMultiples.includes(index)) {
          allMultiples.push(index);
        }
      }
    })
    return allMultiples.reduce((acc, num) => acc + num);
  }
}

module.exports = SumOfMultiples;