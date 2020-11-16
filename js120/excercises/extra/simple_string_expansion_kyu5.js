// Simple string expansion

// Consider the following expansion:

// solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
// solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.
// Given a string, return the expansion of that string.

// Input will consist of only lowercase letters and numbers(1 to 9) in valid parenthesis.There will be no letters or numbers after the last closing parenthesis.

// More examples in test cases.

// Good luck!

function solve(str) {
  let finalStr = '';
  let repeatNum = 1;

  if (!str.includes('(') || !str.includes(')')) return str;

  for (let index = 0; index < str.length; index++) {
    current = str[index];
    if (current >= 1 && current <= 9) {
      repeatNum = current;
    } else if (current === '(') {
      let sliced = solve(str.slice(index + 1, indexOfLastPar(str) - 1));
      finalStr += sliced.repeat(repeatNum)
      repeatNum = 1;
      break;
    } else {
      finalStr += current.repeat(repeatNum);
      repeatNum = 1;
    }
  }
  return finalStr;
}

function indexOfLastPar(str) {
  return str.split('').reverse().indexOf(')')
}