// Roman Numerals
// The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

// The Romans wrote numbers using letters - I, V, X, L, C, D, M. Notice that these letters have lots of straight lines and are hence easy to hack into stone tablets.

//  1  => I
// 10  => X
//  7  => VII

//  There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

// Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

// To see this in practice, consider the example of 1990. In Roman numerals, 1990 is MCMXC:

// 1000=M
// 900=CM
// 90=XC

// 2008 is written as MMVIII:

// 2000=MM
// 8=VIII



class RomanNumeral {

  constructor(number) {
    this.number = number;
  }
  toRoman() {
    const ROMAN_NUM = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    };
    let romanFinal = [];
    let roman_sign = 'I';
    let roman_num = 'V';

    let digits = this.number.toString().split('').reverse().map(el => Number(el));

    function exist(num, obj, idx) {
      if (idx === 1) { num = Number(num + '0') }
      if (idx === 2) { num = Number(num + '00') }
      if (idx === 3) { num = Number(num + '000') }

      for (let key in obj) {
        if (obj[key] === num) return key;
      }
    }

    digits.forEach((dig, index) => {

      if (exist(dig, ROMAN_NUM, index)) {
        romanFinal.unshift(exist(dig, ROMAN_NUM, index));
      } else if (dig > 5) {
        romanFinal.unshift((roman_num + roman_sign.repeat(dig - 5)))
      } else {
        romanFinal.unshift((roman_sign.repeat(dig)));
      }

      if (index === 0) {
        roman_sign = 'X';
        roman_num = 'L'
      } else if (index === 1) {
        roman_sign = 'C';
        roman_num = 'D'
      } else {
        roman_sign = 'M';
        roman_num = '';
      }
    })
    return romanFinal.join('');
  }
}

module.exports = RomanNumeral;