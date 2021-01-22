class Triangle {
  constructor(len1, len2, len3) {
    this.len1 = len1;
    this.len2 = len2;
    this.len3 = len3;

    if (this.len1 <= 0 || this.len2 <= 0 || this.len3 <= 0) {
      throw new Error('The length of sides has to be greater than 0');
    } else if (!this.validLength()) {
      throw new Error('Invalid length. Sum of two sides must be greater or equal  the third')
    }
  }

  validLength() {
    return (this.len1 + this.len2 >= this.len3 &&
      this.len2 + this.len3 >= this.len1 &&
      this.len3 + this.len1 >= this.len2)
  }
  kind() {
    if (this.len1 === this.len2 && this.len2 === this.len3) {
      return 'equilateral';
    } else if (this.len1 === this.len2 || this.len2 === this.len3 || this.len3 === this.len1) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;