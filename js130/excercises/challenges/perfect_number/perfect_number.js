class PerfectNumber {
  static classify(number) {
    let allDivisors = [0];
    if (number <= 1) throw new Error('input cannot be a negative number or 0');
    for (let index = 1; index < number - 1; index++) {
      if (number % index === 0) allDivisors.push(index);
    }
    let sum = allDivisors.reduce((currSum, num) => currSum + num);

    if (sum === number) {
      return 'perfect';
    } else if (sum > number) {
      return 'abundant';
    } else {
      return 'deficient';
    }
  }
}

module.exports = PerfectNumber; 