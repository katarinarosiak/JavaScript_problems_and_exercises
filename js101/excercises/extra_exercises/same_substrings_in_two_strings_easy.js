

function sameSubstrings(string1, string2) {
  str1Substr = substrings(string1);
  str2Substr = substrings(string2);

  console.log(str1Substr);
  console.log(str2Substr);
  return str1Substr.some(el => str2Substr.includes(el));
}

function substrings(str) {
  let arr = [];

  for (let index = 0; index < str.length; index++) {
    for (let substr = index + 2; substr < str.length + 1; substr++) {
      arr.push(str.slice(index, substr));
    }
  }
  return arr;
}


console.log(sameSubstrings('Something', 'Fun'));