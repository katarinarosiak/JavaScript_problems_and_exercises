// /=begin
// Write a method to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string,

// All given inputs are in lowercase letters a-z.
// =end

// console.log(common_prefix(["flower", "flow", "fliwht"]) == "fl");
// console.log(common_prefix(["dog", "racecar", "car"]) == "");
// console.log(common_prefix(["interspecies", "interstellar", "interstate"]) == "inters");
// console.log(common_prefix(["throne", "dungeon"]) == "");
// console.log(common_prefix(["throne", "throne"]) == "throne");

1. iterate through arr
2. make slice first letter check if exist in all the elements
3. if no return false
4. if yes continue and make the slincebigger 


function common_prefix(arr){
  for (let i = 0; i < arr.length; i++){
    let sliced = arr[i].slice(0, i+1)
    return arr.every(el => arr.includes(sliced))
  }
}




function common_prefix(arr) {
  let firstWord = arr[0];
  let allSubstFirst = [];


  for (let index = 0; index < firstWord.length; index++) {
    let current = firstWord.slice(0, index + 1);
    if (arr.every(word => word.includes(current))) {
      allSubstFirst.push(current);
    }
  }

  return allSubstFirst[allSubstFirst.length - 1] || '';
}

console.log(common_prefix(["interspecies", "interstellar", "interstate"]));


// function common_prefix(arr){
//   let arrPrefix = [];
  
  
//   for(let index = 0; index < arr[0].length; index += 1) {
//     let currentSlice = arr[0].slice(0, index + 1);
    
//     let answer = arr.every((ele) =>{
//      return ele.includes(currentSlice);
//       });
    
//     if (answer === true) {
//     arrPrefix.push(currentSlice);
//     }
//   }
  

//   return arrPrefix[arrPrefix.length - 1];
// }

console.log(common_prefix(["flower", "flow", "fliwht"]));


//without every method 
function common_prefix(arr){
   let arrPrefix = [];
  
  
  for(let index = 0; index < arr[0].length; index += 1) {
    let currentSlice = arr[0].slice(0, index + 1);
    
    if (checkIfExistInEvery(arr, currentSlice)) {
       arrPrefix.push(currentSlice); 
    }    
  }  
 
  return arrPrefix[arrPrefix.length - 1];
}  


function checkIfExistInEvery(arr, str) {
  
  for (let index = 0; index < arr.length; index++) {
    if (!arr[index].includes(str)) {
      return false;
    }  
  }  
  return true;
}  

