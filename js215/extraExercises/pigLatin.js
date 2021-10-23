// pigLatin 3.0
// Write a function that converts a sentence into pig latin.

// Rules for converting to pig latin:

// For words that begin with a vowel (a, e, i, o, u), add "way".
// Otherwise, move all letters before the first vowel to the end and add "ay".
// For simplicity, no punctuation will be present in the inputs.
// Examples
// pigLatinSentence("this is pig latin") ➞ "isthay isway igpay atinlay"

// pigLatinSentence("wall street journal") ➞ "allway eetstray ournaljay"
// Notes
// All letters will be in lowercase.

//  i: str
//  o: str

// - if words begins wth vowels + way
// - else move all letters before the first vowel to the end + ay
// - no punctuation
// - 

  
// - replace all the words starting with vowel with that words + way
// - replace all the words that doesn't with:
//   - make a slice untl teh first vowel, place vowel+slice+ay return 


function pigLatinSentence(str) {
  return str.replace(/\b\w{2,}\b/gi, replacer)
}

function replacer(word) {
  let RE = /\b[aeiou]/gi;
  if (RE.test(word)) {
    return word+'way';
  }
  word.slice(0, word.indexOf())
}


console.log(pigLatinSentence("this is pig latin")) // ➞"isthay isway igpay atinlay"

console.log(pigLatinSentence("wall street journal")) //➞ "allway eetstray ournaljay"