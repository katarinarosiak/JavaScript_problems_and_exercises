// You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

// Task
// Test if the string can be entirely formed by consecutively concatenating words of the dictionary.

// For example:

// dictionary: ["code", "wars"]

// s1:         "codewars" =>  true  -> match 'code', 'wars'
// s2:         "codewar"  =>  false -> match 'code', unmatched 'war'


function validWord(arr, str) {

  if (reduceStr(arr, str).length === 0) {
    return true;
  } else {
    arr.sort((a, b) => a.length - b.length);
    if (reduceStr(arr, str).length === 0) {
      return true;
    } else {
      arr.sort((a, b) => b.length - a.length);
      if (reduceStr(arr, str).length === 0) {
        return true;
      }
    }
  }
  return false;
}

function reduceStr(arr, str) {
  arr.forEach(el => {
    let reg = new RegExp(el, 'g')
    if (str.match(reg)) str = str.replace(reg, '');
  });
  return str;
}