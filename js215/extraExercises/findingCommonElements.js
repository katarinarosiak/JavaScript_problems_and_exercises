// Finding Common Elements
// Create a function that takes two "sorted" arrays of elements and returns an array of elements which are common to both the input arrays.

//Examples:
commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞[[3]]




//Test Cases:
//invalid input: 
commonElements(''); // [];
//empty arr
commonElements([], [1, 2, 3, 4, 7, 10]); // []
// duplicates 
commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]);// [,[1, 2, 4, 5]]
//other data types 
commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞[1, 3, 4, 7]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞[]
