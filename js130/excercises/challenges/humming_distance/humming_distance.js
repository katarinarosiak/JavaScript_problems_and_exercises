// Point Mutations
// Write a program that can calculate the Hamming distance between two DNA strands.

// A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.

// The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.

// By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.

// This is called the Hamming distance.


// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// ^ ^ ^  ^ ^    ^^


// The Hamming distance between these two DNA strands is 7.

// The Hamming distance is only defined for sequences of equal length. If you have two sequences of unequal length, you should compute the Hamming distance over the shorter length.






//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PEDAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ------------------  UNDERSTAND THE PROBLEM:  -------------------
//1. counting Hamming distance = number of differences between one and the other 
//2.
//3.
//Input:
//- two strings
//Output:
//- number (Humming distance)
//RULES:
// Explicit:
//- if two strings are different length count humming distance of the shortest =  number of differences 
//- 
//-
//-
//-Implicit
//- case sensitive 
//- only letters 
// - has to be a class 
// ignores extra strands on the longer 
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
//=> AAABCDEF
//=>
//=>
//output:
//=> AAAB
//=> 4?
//=>
// --------------- DIFFERENT SOLUTIONS --------------------------------
//MENTAL MODEL: 
//*
//DATA STRUCTURES: 
// ------------------------  ALGORYTHM:  -----------------------------
//- if two strings the same return 0 
//if not valid input trhow error
// mthod hammingDistance: 
// if two strings the same return 0 
//take two strings and check their length
//- if equal take first and compare to the second
//-   - iterate throug str and check if the char are same 
//-   - if not same increment counter 
//- if not equal take shortest and compare to longest 
//-   - iterate through shortest str 
//-   - compare char 
//    - if not the same increment counter 
//-   - 
//- return counter 
// is valid() :
// - check if all capital letters, check if string, don't throw if empty 
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

//test cases:
// same length, same characters
// 'ABCDABCD', 'ABCDABCD' => 0
// same, length, different characters
// 'ABCDABCD', 'CDAFCDAF' => 8
// same characters, different length, second shortest
// 'ABCDABCDABCD', 'ABCDABCD' => 0
// same characters, different length, first shortest
// 'ABCDABCD', 'ABCDABCDABCD' => 4
// two empty string
// '', '' => 0
// one empty str 
// '', "ABCD" => 4
// invalid input 
// '__$%#', 'ABCDE' => trow eeror
// doesn not shorteen original strand 
// 'ABCDABCDABCD',   => 'ABCDABCDABCD'

//REMARKS:
//additional validation of input added using regex


class DNA {
  constructor(dnaStrand) {
    this.dnaStrand = dnaStrand;

    if (!this.isValid(dnaStrand)) {
      throw new Error('invalid input!');
    }
  }
  hammingDistance(strandToCompare) {
    if (!this.isValid(strandToCompare)) {
      throw new Error('invalid input!');
    }
    if (strandToCompare === this.dnaStrand) {
      return 0;
    } else if (strandToCompare.length === 0) {
      return this.dnaStrand.length;
    } else if (this.dnaStrand.length === 0) {
      return strandToCompare.length;
    } else {
      let shortest = strandToCompare.length > this.dnaStrand.length ? this.dnaStrand : strandToCompare;
      let longest = strandToCompare.length <= this.dnaStrand.length ? this.dnaStrand : this.dnaStrand;

      let counter = 0;

      for (let index = 0; index < shortest.length; index++) {
        console.log(shortest[index], longest[index]);
        if (shortest[index] !== longest[index]) {
          counter++;
        }
      }
      return counter;
    }
  }
  isValid(str) {
    let regex = /[^A-Z]/g;
    if (typeof str !== 'string') return false
    return str.match(regex);
  }
}


module.exports = DNA;