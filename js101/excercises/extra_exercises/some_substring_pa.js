let words = ["soup", "plain", "polish", "Pal"];



function loop(word, substrLength) {
  let first = 0;
  let second = substrLength;
  let arr = [];
  while (first < word.length) {
    while(second <= word.length) {
      arr.push(word.slice(first, second));
      second++;
    }
    first++;
    second = first + substrLength;
    }
    return arr;
  }

  function hasSubstrPa(wordsArray) {
    return wordsArray.some(element => {
      let substrings = loop(element, 2);
      console.log(substrings);
      return substrings.includes("pa");
    });
  }

  console.log(hasSubstrPa(words));
 