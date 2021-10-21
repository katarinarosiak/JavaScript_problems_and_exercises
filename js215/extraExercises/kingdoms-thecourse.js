// Kingdoms Ep2: The curse (normal)

// Our King was cursed - He can not pronounce an entire word anymore. Looking for the witch, the inquisition punishes every beautiful and intelligent woman in the Kingdom. Trying to save your wife and to stop the violence, you beg the audience of the Highest Priest, explaining that you can understand the King's speech. The future of your family is in your hands! Given the string speech and the array vocabulary. You should return a string of replaced "encoded" words in speech with appropriate word from vocabulary.

// Notes:
// Encoded words consist of lowercase letters and at least one asterisk;
// There will always be only one appropriate word from vocabulary for every word in speech;
// speech consists of lowercase letters, spaces and marks ?!,. ;
// There might be more words in vocabulary than words in speech;
// The length of an encoded word must be the same as an appropriate word of vocabulary;
// The minimum length of a word is 3;


// Example:
// given: speech = "***lo w***d!" and vocabulary = ["hello", "world"]

// return "hello world!" 
// given: speech = "c**l, w*ak!" and vocabulary = ["hell", "cell", "week", "weak"]

// return "cell, weak!" 


// i: str, [] with vocabulary
// o: str decoded

// r: lowercase letters and * 
//   - alwyas one word 
//   - min word len 3 
//  - more words in vocab than in speach
// - len of encoded word is the same as in vocab 
// - * is a character


// A:
// - find all macthes with a word with * inside 
// - call a replacer func
//   - take the given word 
//   - make a pattern of it
//   - find a match in the vocabulary array 
//   - return the match 


// c**l  => make a patter of it and return the first word that macthes it 

// function translate(str, vocabulary) {

//   let matches = str.replace(/\**[a-z]*\**/g, (word)=>{
//     let filteredVocab = vocabulary.filter(el => el.length === word.length);
//     console.log(filteredVocab, word);
//     let rgx = word.replace(/\*/g, '.')
//     console.log(filteredVocab.join('').match(rgx));
//     return filteredVocab.join('').match(rgx)
//   })
//   console.log(matches);
//   return matches;
// };



// function translate(str, vocabulary) {
//   str.split(' ').map(word => {
//     console.log(word)
//     console.log(vocabulary)
//     let sameLen = vocabulary.find(item => item.length === word.length);
//     let rgx = word.replace(/\*/g, '.');

//     //console.log(sameLen.join(' ').match(rgx))
//   })


// };


// - replace each word from the sentence with it's match in the array
//   - match any word that contain '*'  (/\w|\*+/g)
//   - replace * with . 
//   - create a regex from it 
//   - iterate through the array and search for a match 
//   - return the match 
// - return 


// let word = '...lo'
// let sentence = 'abc ***lo ***lo'

// let rgx = new RegExp(word, 'g');
// console.log(sentence.match(rgx))



function translate(sentence, vocabulary) {
  return sentence.replace(/[a-z\*]+/gi, (word) => {
     let rgx = new RegExp(word.replace(/\*/g, '.'), 'g');
     return vocabulary.find(el => el.match(rgx) && word.length === el.length);
  })
}




console.log(translate("***lo w***d!", ["hello", "world"]));  

console.log(translate("hell*, w***d!", ["hello","hell","word","world"]));//hello, world!
console.log(translate("****. ***,", ["aaa","bbbb"])); //bbbb aaa

console.log(translate("*ow ****v* **** ****u oq**y *t***. s*opq. qro***, q*x", ["ooqqu","ptqqq","qqqovq","qpqq","qpx","oqqqy","qropoo","sqopq","qow"]))




