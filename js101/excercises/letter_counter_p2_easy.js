/// Letter Counter (Part 2)
// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// Examples:

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}


function wordSizes(string) {
  let obj = {};

  if (!string) {
    return obj;
  }

  let wordArr = removeNonLetters(string);
  wordArr = wordArr.sort((a, b) => a.length - b.length);;

  obj[wordArr[0].length] = 1;
  for (let index = 1; index < wordArr.length; index++) {
    if (obj[wordArr[index - 1].length] === obj[wordArr[index].length]) {
      obj[wordArr[index].length] += 1;
    } else {
      obj[wordArr[index].length] = 1;
    }
  }

  return obj;
}



function removeNonLetters(string) {
  let newArr = [];

  newArr = string.split(' ').map(el => {
    let word = '';
    for (let index = 0; index < el.length; index++) {
      if (el[index].toLowerCase() >= 'a' && el[index].toLowerCase() <= 'z') {
        word += el[index];
      }
    }
    return word;
  });

  return newArr;
}

// Int his solution we have reused the 'wordSizes()' function form the previous excercise. We have adjusted it by adding removeNonLetters() function that takes one argument, a string, then using a `split()` method in order to coerce the string to the array. We then call map mehod on this new array that we have saved in newArr variable. Map will execute a callback function once for each element of newArr and initialize word variables with an empty string onn line 40. Then the callback function will iterate throuh each character of the el and check wheter this character is a letter. If so it will concatinate it with the current value of `word`. Finally the callback function will return word variable and this map will return a new array of strings that oncludes only letter characters. The return value of calling map method will be then saved in newArr variable and returned. 
//FInally the return value of calling `wordSizes()` function will be an object containing properties representing how many words of each length appeard in the initial input string argument.  