function rotateRightmostDigits(number, n) {
  let toMultiply = 1;
  let numericArr = number.toString().split('');
  
  if (n > numericArr.length || n <= 1) return number; 
  if (number < 0) {
    toMultiply = -1
    numericArr.shift();
  }
  
  let cut = numericArr.length - n;
   let rotated = numericArr.slice(0,cut).concat( rotateIt(numericArr.slice(cut)));
  
  return rotated.join('') * toMultiply; 
};

function rotateIt(arr) {
  arr.push(arr.shift());
  return arr;
}



//Happy Path 
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(123456, 3) === 123564);

// //n is 0 and 1
console.log(rotateRightmostDigits(735291, 0) === 735291);
console.log(rotateRightmostDigits(735291, 1) === 735291);

// //n is greater than number length 
console.log(rotateRightmostDigits(735291, 10) === 735291);

// rotating 00
console.log(rotateRightmostDigits(1000, 2) === 1000);

//if zero is at the beginning it will be dropped 
console.log(rotateRightmostDigits(1000, 4) === 1);

//if number is 0 
console.log(rotateRightmostDigits(0, 1) === 0);

//number is negative
console.log(rotateRightmostDigits(-735291, 2) === -735219);

//negative with leading zeros 
console.log(rotateRightmostDigits(-1000, 4) === -1);


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917