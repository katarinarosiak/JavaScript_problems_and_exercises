// /Alphabetical Numbers
// Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English word for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// Example:

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


//algo: 
// - change each number to a corresponding word
// - sort alphabetically


function alphabeticNumberSort(array) {
  let wordNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let newArr = [];

  for (let index = 0; index < array.length; index++) {
    newArr.push(wordNum[array[index]]);
  }
  newArr.sort();

  for (let indx = 0; indx < newArr.length; indx++) {
    for (let indx2 = 0; indx2 < wordNum.length; indx2++) {
      if (newArr[indx] === wordNum[indx2]) {
        newArr[indx] = indx2;
      }
    }
  }
  return newArr;
}




function alphabeticNumberSort(array) {
  return array.sort(sortAphabetically);
}

function sortAphabetically(num1, num2) {
  let wordNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (wordNum[num1] > wordNum[num2]) {
    return 1;
  } else if (wordNum[num1] < wordNum[num2]) {
    return -1;
  } else {
    return 0;
  }
}