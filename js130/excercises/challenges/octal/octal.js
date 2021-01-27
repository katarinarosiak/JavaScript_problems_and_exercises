class Octal {
  constructor(number) {
    this.number = number;
  }
  toDecimal() {
    if (!this.isValid(this.number)) return 0;
    let multiplier = 1;
    let reversedOct = this.number.split('').reverse().reduce((acc, num) => {
      acc += (num * multiplier)
      multiplier *= 8;
      return acc;
    }, 0);
    return reversedOct;
  }
  isValid(num) {
    let regex = /[a-z8-9]/gi;
    return !num.match(regex);
  }
}


module.exports = Octal;

