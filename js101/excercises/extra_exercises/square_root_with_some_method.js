// - check if any of those are square root 
//of given number 
function addingElement() {
  return 1 + 4;
}

let arr = [3, 52, undefined, 8, "soup", 9, addingElement(), 3];

// - calculate the square root of given number
// - itirate through array elements and compare to the result 
// -  

function isSquareRootOf(number, array) {
  let squared = Math.sqrt(number);
  return array.some(element => element === squared);
}

console.log(isSquareRootOf(9, arr));

//array.some(function(currentValue, index, arr), thisValue)