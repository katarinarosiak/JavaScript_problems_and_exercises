// Practice Problem: Anagrams
// Write a Function named anagram that takes two arguments: a word and an array of words. Your function should return an array that contains all the words from the array argument that are anagrams of the word argument. For example, given the word "listen" and an array of candidate words like "enlist", "google", "inlets", and "banana", the program should return an array that contains "enlist" and "inlets".

// Examples
// Copy Code

function isAnagram(word1, word2) {
  return word1.split('').sort().join('') === word2.split('').sort().join('')
}

function anagram(word, list) {
  return list.filter(currWord => isAnagram(currWord, word));
}


//with reduce: 
// function anagram(word, list) {
//   return list.reduce((acc, currWord) => {
//      if (isAnagram(word, currWord)) {
//        acc.push(currWord);
//      }
//      return acc;
//   }, [])
// }


anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]