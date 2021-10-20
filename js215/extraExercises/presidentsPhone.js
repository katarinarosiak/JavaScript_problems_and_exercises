// The President's phone is broken

// He is not very happy.

// The only letters still working are uppercase E, F, I, R, U, Y.

// An angry tweet is sent to the department responsible for presidential phone maintenance.


// Decipher the tweet by looking for words with known meanings.

// FIRE = "You are fired!"
// FURY = "I am furious."
// If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."

// Notes

// The tweet reads left-to-right.
// Any letters not spelling words FIRE or FURY are just ignored
// If multiple of the same words are found in a row then plural rules apply -
// FIRE x 1 = "You are fired!"
// FIRE x 2 = "You and you are fired!"
// FIRE x 3 = "You and you and you are fired!"
// etc...
// FURY x 1 = "I am furious."
// FURY x 2 = "I am really furious."
// FURY x 3 = "I am really really furious."
// etc...
// Examples

// ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
// ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
// ex3. FYRYFIRUFIRUFURE = "Fake tweet."

// i: string (uppercase, ciphered tweet message)
// o: decipher tweet, (str) or 'Fake tweet'

// R: 
// - E, F, I, R, U, Y   if there is any other letter => fake tweet, 
// - words (with known meaning):
//   - FIRE = "You are fired!"
//   - FURY = "I am furious."
//   - any other character that is allowed but is nut FURY or FIRE ignore 
//   - always uppercase
//   - no empty strings 
//   - order matters 
//   - it has to be exact charactrs 
  
  
  
//   D: string, array => string 
  

// A: 
// - if there are any characters that are not allowe return Fake tweet;
// - if no FIRY or FURY => fake tweet 
// - extract all the matches for FURY and FIRE in an array (rgx)
// - itegrate through the array and count number of consecutive words


//   - based on that number generate a proper sentence and append to empty string 
  
//  - groupWords  [a,a,b,c,c,a]  => [[a,a], [b], [c,c], [a]]
    // - iterate through the array i++
    //   - start = 0 
    //   - end = 2 
    //   - slice  
    //   - compare if the last and the almost last  el are the same 
    //     - if yes:
    //       - increment end ++ and continue
    //     if no:
    //       - take the slice and pop the last element to a var
    //       - push the remaining slice to an arr
    //       - set start to end-1 
    //       - increment end ++  
    // - if arr not empty push to arr 
    // - return the nested arr 
   
// - join the array and return 
   
  
  
// - genreateAsentence:
// - if FIRE: 
//   - if once => "You are fired!"
//   - if mroe than once add 'and you'  X times -1
// - IF FURY: 
//   - if once "I am furious."
//  - if more => add 'really' X times -1

function fireAndFury(tweet) {
  let allMatches = tweet.match(/FURY|FIRE/g);

  if (/[^EFIRUY]/.test(tweet) || !allMatches) return 'Fake tweet.'; 
  
  return allMatches.join('').match(/(FIRE)+|(FURY)+/g).map(sequence => genreateAsentence(sequence)).join(' ');
}


function genreateAsentence(sequence) {
  let arr = sequence.match(/FURY|FIRE/g);
  let len = arr.length;
  let fired = "You are fired!";
  let andY = 'and you ';
  let fury = "I am furious.";
  let really = 'really ';

  if (arr[0] === 'FIRE') {
    if (len === 1) return fired;
    return fired.replace('You ', `You ${andY.repeat(len-1)}`)
  } else {
    if (len === 1) return fury;
    return fury.replace('I am ', `I am ${really.repeat(len-1)}`)
  } 
}


//Happy Path: 
console.log(fireAndFury('FIRE')) // ===  "You are fired!")
console.log(fireAndFury('FURY')) // ===  "I am furious.")

console.log(fireAndFury('FIREFIRE') ===  "You and you are fired!");
console.log(fireAndFury('FIREFIREFIREFIRE') ===  "You and you and you and you are fired!")

console.log(fireAndFury('FURYFURYFURYFURY') ===  "I am really really really furious.");


console.log(fireAndFury("FURYYYFIREYYFIRE"))//, "I am furious. You and you are fired!");

console.log(fireAndFury("FIREYYFURYYFURYYFURRYFIRE"))//, "You are fired! I am really furious. You are fired!");
 
console.log(fireAndFury("FYRYFIRUFIRUFURE"))//, "Fake tweet.");

console.log(fireAndFury("YYYYY"))//, "Fake tweet.");
console.log(fireAndFury("122211"))//, "Fake tweet.");

//order of the character matters
console.log(fireAndFury("YYYY"))//, "Fake tweet.");
