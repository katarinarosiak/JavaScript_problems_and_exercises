// Bubble Sort

// A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

// - on each pass two consecutive elements are compared 
// - if the first is greater than second they are swapped
// - go until there are no swapps left 
// - mutate the array
//  - if string > sort according to ASCI
//  - if number sort according to > 
//  - how to sort other data types? (no other data types) 


// procedure bubbleSort(A : list of sortable items)
//     n := length(A)
//     repeat
//         swapped := false
//         for i := 1 to n-1 inclusive do
//             /* if this pair is out of order */
//             if A[i-1] > A[i] then
//                 /* swap them and remember something changed */
//                 swap(A[i-1], A[i])
//                 swapped := true
//             end if
//         end for
//     until not swapped
// end procedure

function bubbleSort(arrToSort) {
  let arrLen = arrToSort.length;
  let swapped = true; 

  while (swapped) {
    swapped = false;
    for (let i = 1; i <= arrLen; i++) {
      if (arrToSort[i-1] > arrToSort[i]) {
        swap(i-1, i, arrToSort);
        swapped = true;
      }
    } 
  }
}

function swap(idx1, idx2, arr) {
  let firstEl = arr[idx1];
  let secondEl = arr[idx2];
  
  arr[idx2] = firstEl;
  arr[idx1] = secondEl; 
}





const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]