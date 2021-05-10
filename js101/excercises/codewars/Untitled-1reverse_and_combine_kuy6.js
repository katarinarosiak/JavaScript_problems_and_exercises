// Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...

// So what to do?
// Input: String containing different "words" separated by spaces

// 1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
//    (odd number of words => last one stays alone, but has to be reversed too)
// 2. Start it again until there's only one word without spaces
// 3. Return your result...


/// Input:  "abc def"
// Output: "cbafed"

// Input:  "abc def ghi 123" 
// Output: "defabc123ghi"

// Input:  "abc def gh34 434ff 55_eri 123 343"
// Output: "43hgff434cbafed343ire_55321"
// I think it's clear?! First there are some static tests, later on random tests too...







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//  ------------------------  UNDERSTAND THE PROBLEM:  ---------------------------- 
//1.
//2.
//3.
//Input:
//-  str
//Output:
//-str
//RULES:
// Explicit:
//- if more than on e word reverse each word and combaine 
//  i f one word dont' reverse, just return 
//- if odd number of words reverse, combine and leave the last one 
//  - do it again until only one word 
//- 
//-
//-Implicit
//-
//-
// Edge Cases:
// =>
// => 
// => 
//QUESTIONS: 
//- can mutate the obj or need to return new one?
//- other questions, clarification

// ------------------------------- EXAMPLES/TEST CASES: -----------------------------
//i:"sdfsdf wee sdffg 342234 ftt"
//=>  weefdsfds gffds432243 ttf => sdfsdfeew342234sdffg ftt => gffds432243weefdsfdsttf
//o: 
//=>
//MENTAL MODEL: 
//*
//DATA STRUCTURES: 
// ------------------------------  ALGORYTHM:  -------------------------------------- 
//-  if input is 1 length return the input 
//-  coerce the string into an array of words 
//-  iterate throug the arr of words (increment index by 2)
//-  each iterate check if next element exist 
//-  if exist take each of the two el reverse and combine and place in an new array  
//-  if doesn exist take just one element and reverse  
//-  continue until the length of the array is 1 
// return the rray joined to string 

//  ---------------------------  PSEUDOCODE:  -------------------------------------
// if()
// split
// while () 
//for() index+=2
//  !arr[index+1]  
//  reverse   + 
//  push 
// join()
// ==>   Checklist:  <==
//- () ;
//- names
//- logic/dry run
//- return  !!!!!!!!!!
// ----------------------------------- CODE:  ----------------------------------------   


function reverse_and_combine_text(str) {

  let words = str.split(' ');

  if (words.length === 1) return str;

  while (words.length > 1) {
    let finalArr = [];
    for (let index = 0; index < words.length; index += 2) {
      if (words[index + 1]) {
        finalArr.push(rev(words[index]) + rev(words[index + 1]))
      } else {
        finalArr.push(rev(words[index]));
      }
    }
    words = finalArr;
  }
  return words.join('');
}

function rev(el) {
  return el.split('').reverse().join('')
}

//defabcdd


//console.log(reverse_and_combine_text("abc def dd")) // , "cbafed")
console.log(reverse_and_combine_text("abc def ghi jkl")) // "defabcjklghi")
console.log(reverse_and_combine_text("dfghrtcbafed")) //, "dfghrtcbafed")
console.log(reverse_and_combine_text("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44")) //, "trzwqfdstrteettr45hh4325543544hjhjh21lllll")
	// console.log(reverse_and_combine_text("sdfsdf wee sdffg 342234 ftt")) //, "gffds432243fdsfdseewttf")
  //  //  gffds432243weefdsfdsttf
