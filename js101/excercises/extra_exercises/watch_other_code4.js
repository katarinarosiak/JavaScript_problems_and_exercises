//  Problem 2: Common Chars
// =begin
// Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
// =end

//  abbba  abbba abbba   => abbba  
// abba   abba  abb  => abb
// baab   abba  abb  => abb 
// aabb   aabb  abb


// ['cool', 'lock', 'cook']
// {coo      co    coo}\]
// c o

// []
// 'bella', 'label', 'roller'
// ell          ell        ell

// aaaac   aaaac   aaaac
// aaaac

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//  ------------------------  UNDERSTAND THE PROBLEM:  ---------------------------- 
//1.
//2.
//3.
//Input:
//-  arr of str 
//Output:
//-  arr of str (char that are common) 
//RULES:
// Explicit:
//- all lowercase
//- return char that show up in all str within arr 
//- if a char occures 4 times return just 3 
//- return [] if no char are common 
//-Implicit
//- return in alphabetical order 
//-
// Edge Cases:
// =>
// => 
// => 
//QUESTIONS: 
//- can mutate the obj or need to return new one?
//- other questions, clarification

// ------------------------------- EXAMPLES/TEST CASES: -----------------------------
//i:  ['cool', 'lock', 'cook']
//=>    c o o 
//o:
//=>
//MENTAL MODEL: 
//*
//DATA STRUCTURES: 
// ------------------------------  ALGORYTHM:  -------------------------------------- 
// iterate through arr return all letters that exist in all words for each word  
// - choose the sortest word  
// - check if an char more than 3 times if so remove 
// - sort alphabetically
// - return  
// - 
//  ---------------------------  PSEUDOCODE:  -------------------------------------
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
//- return  !!!!!!!!!!
// ----------------------------------- CODE:  ----------------------------------------   

function common_chars(arr) {
  let arrOfLetters = [];

  let result = arr.map(word => word.split('').filter(char => arr.every(el => el.includes(char))))

  result = removeThree(result);


  return result.sort((a, b) => a.length - b.length)[0].sort();
}


function removeThree(arr) {

  return arr.map(subArr => {
    let removedArr = [];
    subArr.forEach(char => {
      if (!isMore(char, removedArr)) {
        removedArr.push(char);
      }
    })
    return removedArr;
  }

  )
}


function isMore(lett, arr) {
  let counter = 0;

  for (let index = 0; index < arr.length; index++) {
    if (lett === arr[index]) counter++;
  }
  if (counter >= 3) return true
  return false;
}



console.log(common_chars(['bella', 'label', 'roller'])) // == ['e', 'l', 'l']
console.log(common_chars(['cool', 'lock', 'cook'])) // == ['c', 'o']
console.log(common_chars(['aabbaa', 'cccdddd', 'eeffee', 'ggrrrr'])) // == []


console.log(common_chars(['ab', 'bc']))



PROBLEM STATEMENT:
// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.


// console.log(solve([[1,2],[4],[5,6]])) //,4);
// console.log(solve([[1,2],[4,4],[5,6,6]])) //,4);
// console.log(solve([[1,2],[3,4],[5,6]])) //,8);
// console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])) //,72);