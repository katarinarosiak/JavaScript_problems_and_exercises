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







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ------------------  UNDERSTAND THE PROBLEM:  -------------------
//1.
//2.
//3.
//Input:
//-  any number between 1 - 3000
//Output:
//- roman numeral coresponfing to that number 
//RULES:
// Explicit:
//- 
//-
//-
//-
//-Implicit
//- needs to be a class
//- need to have toRoman() method 
// - toRoman() method translate a number to roman digit 
// Roman Numerals:
// I - 1 
// II , III - 2,3
// V - 5
// IX - 9
// X
// L - 50
// C- 100
// D - 500
// M - 1000
// EDGE CASES:
// =>
// => 
// => 
//QUESTIONS: 
//- can mutate the obj or need to return new one?
//- other questions, clarification
//
// ------------------------- EXAMPLES/TEST CASES: -------------------
//input:
//=>  2011 => MMXI  
//=>  112 => CXII 
//=>  2021 => 1000 + 1000 + 10 + 10 + 1
// => 539 => 500 + 10 + 10 + 10 + (9-1)
// 764 => 500 + 100 + 100 + 50 + 10 + (5 -1)
// 836 => 500 + 100 + 100 + 100 + 10 + 10 + 10 + 5 + 1
//3078 => 1000 + 1000 + 1000 + 50 + 10 + 10 + 5 + 1 + 1 + 1
//output:
//=>
//=>
//=>
// --------------- DIFFERENT SOLUTIONS --------------------------------
//MENTAL MODEL: 
//*
//DATA STRUCTURES: 
// ------------------------  ALGORYTHM:  -----------------------------
//-  constructor:
//-  - initialization of number 
//-  [I,X, C, M]
//- toRoman(): 
//  - separet numbers into tousands, hundreds, tens and ones
//  - iterate through object with the numbers 
//  for ones: check if the same as in the ROMan object, if yest just return roman 
//      -check if > 5 if yes: (num - 5) and repat IC
//       if not 5 - num and repeat I 
//   for tens: chekc if exist in the obejct if yes return the roman digit
//          - if not check >5 if yes num - 5 and repat XC
//          else 5 - num repat I 
// for hundrads: check if exist
// after every loop increment counter++                   - 
// transform to roman: MM  XL IV and join
// return 
//  ---------------------  PSEUDOCODE:  ------------------------------
//
//
//
//
//
//
//
// ==>   Checklist:  <==
//- () ;
//- names
//- logic/dry run
//- length
//- return  !!!!!!!!!!
// -------------------------------- CODE:  -----------------------------  


class RomanNumeral{
  
  constructor(number) {
    this.number = number;
  }
  toRoman() {
    const ROMAN_NUM = {
      I : 1,
      IV : 4, 
      V : 5,
      IX : 9,
      X : 10,
      XL : 40,
      L : 50,
      XC : 90,
      C : 100,
      CD : 400,
      D : 500,
      CM : 900,
      M : 1000,
    };
    let romanFinal = [];
    let roman_sign = 'I';
    let roman_num = 'V';
 
    let digits = this.number.toString().split('').reverse().map(el=> Number(el));
    console.log(digits);

    function exist(num, obj, idx) {
      if (idx === 1) {num = Number(num + '0')};
      if (idx === 2) {num = Number(num + '00')};
      if (idx === 3) {num = Number(num + '000')};

      for (let key in obj) {
        if (obj[key] === num) return key;  
      };
    }

    digits.forEach((dig, index) => {

      if (exist(dig, ROMAN_NUM, index)) {
         romanFinal.unshift(exist(dig, ROMAN_NUM, index));
      } else if(dig > 5) {
          romanFinal.unshift((roman_num + roman_sign.repeat(dig - 5))) 
        } else {
          romanFinal.unshift((roman_sign.repeat(dig)));
        }

        if(index === 0) {
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

let number = new RomanNumeral(911);
number.toRoman();