// Create a function that finds the word "bomb" in the given string. If found, return "Duck!!!", otherwise return "There is no bomb, relax.".b() {



function bomb(str) {
  let regEx = new RegExp(/bomb/i);
  if (str.match(regEx)) {
    return 'Duck!!!';
  } else {
    return 'There is no bomb, relax.'
  }
}

bomb("There is a bomb.") //➞ "Duck!!!"

//bomb("Hey, did you think there is a bomb?") //➞ "Duck!!!"

//bomb("This goes boom!!!") //➞ "There is no bomb, relax."