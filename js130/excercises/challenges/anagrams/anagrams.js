// Anagrams
// Write a program that takes a word and a list of possible anagrams and selects the correct sublist that contains the anagrams of the word.

// For example, given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana", the program should return a list containing "inlets". Please read the test suite for the exact rules of anagrams.








//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ------------------  UNDERSTAND THE PROBLEM:  -------------------
//1.
//2.
//3.
//Input:
//- a string and an array of strings 
//Output:
//- an array containing all words that are ana anagram of input word 
//RULES:
// Explicit:
//- 
//-
//-
//-
//-Implicit
//- no matches return empty array 
//- anagrams are two words that have exactly the same letters 
// - case insensitive
// identical words are not anagrams
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
//=>
//=>
//=>
//output:
//=>
//=>
//=>
// --------------- DIFFERENT SOLUTIONS --------------------------------
//MENTAL MODEL: 
//*
//DATA STRUCTURES: 
// ------------------------  ALGORYTHM:  -----------------------------
//- constructor () :
// creates and save anagaram  
//match ()
//- if not same length return []
//- if exaaclty the same return []
//-  take anagram and a word, change to lowercase and sort it alphabetically 
//-  compare 
//-  if the same push to the final array
//-  return the final array 
//-
//-
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



class Anagram {
  constructor(anagram) {
    this.anagram = anagram;
  }
  match(list) {
    let allAnagrams = [];

    list.forEach(word => {
      if (Anagram.isAnagram(word, this.anagram) && !Anagram.includes(word, allAnagrams)) {
        allAnagrams.push(word);
      }
    });
    return allAnagrams;

  }
  static isAnagram(word1, word2) {
    return (word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('') && word1.toLowerCase() !== word2.toLowerCase());
  }
  static includes(word, arr) {
    return arr.some(el => el.toLowerCase() === word.toLowerCase())
  }
}

module.exports = Anagram;