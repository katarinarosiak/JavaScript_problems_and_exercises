// Letter Counter Part 2
// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// Examples:

function wordSizes(str) {
  let words = str.replace(/[^a-z\s]/gi, '').match(/\S+/g);

  return  words ? words.reduce((obj, word) => {
    obj[word.length] = obj[word.length] ? obj[word.length] + 1 : 1;
    return obj;
  },{}) : {};
}

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
// wordSizes('');                                            // {}