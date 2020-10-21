//merge sort


// mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
// mergeSort([5, 3]);                 // [3, 5]
// mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

// mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

// - take list ofel and divide it into two sub arrays 
// - if more than one el divid again
// - until no more ellements in the list 
// - when cannot divide anymore
// - merge two subarr :
//    - take first num and compare with first num from another subarr
//    - take the smallest first and the greater last
//    - continue until all the elements are merged into one arrays
// - return sorted array 



// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]

console.log(mergeSort([9, 5, 7, 1]))

function mergeSort(arr) {
  let dividedArr = arr;

  for (let index = 0; index < dividedArr.length; index++) {
    if (!Array.isArray(dividedArr[index])) {
      dividedArr.push(arr.slice(0, (arr.length) / 2), arr.slice(arr.length / 2));
      return dividedArr(dividedArr);
    } else {
      if (dividedArr[index].length > 1) {
        divide(dividedArr[index]);
      }
    }
  }

  return dividedArr;
}


function divide(arr) {
  let dividedArr = [];

  for (let index = 0; index < dividedArr.length; index++) {
    if (!Array.isArray(dividedArr[index])) {
      dividedArr = divide(dividedArr);
    } else {

    }
  }
  dividedArr.push(arr.slice(0, (arr.length) / 2), arr.slice(arr.length / 2))
  return dividedArr;
}






function merge(arr1, arr2) {
  let sortedArr = [];
  let shorter;
  let longer;

  if (arr1.length > arr2.length) {
    longer = arr1;
    shorter = arr2;
  } else {
    longer = arr2;
    shorter = arr1;
  }

  longer.forEach((firstEle, index) => {
    if (shorter[index] === undefined) {
      sortedArr.push(firstEle);
    } else if (firstEle < shorter[index]) {
      sortedArr.push(firstEle);
      sortedArr.push(shorter[index]);
    } else {
      sortedArr.push(shorter[index]);
      sortedArr.push(firstEle);
    }
  })
  return sortedArr;
}

//[1,8,1, 4,5,1, 0] => [[1,8,1],[4,5,1, 0]]



