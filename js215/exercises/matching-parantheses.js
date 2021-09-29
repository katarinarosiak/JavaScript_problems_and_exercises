function isBalanced(str) {
  let param = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      param++
    } else if (str[i] === ')') {
      param--
    }
    if (param < 0) return false;
  }
  return !param;
};




isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false