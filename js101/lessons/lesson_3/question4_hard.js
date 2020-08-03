function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length === 4 &&
    dotSeparatedWords.reduce(function (element1, element2) {
      return isAnIpNumber(element1) === isAnIpNumber(element2);
    })
  ) {
    return true;
  } else {
    return false;
  }

}



console.log(isDotSeparatedIpAddress("1.2.3.4"));


function isAnIpNumber(word) {
  if (word > 0 && word < 255) {
    return true;
  } else {
    return false;
  }
}