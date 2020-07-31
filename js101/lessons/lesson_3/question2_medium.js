let munstersDescription = "The Munsters are creepy and spooky.";

let temp = munstersDescription.toUpperCase().slice(0, 5);

console.log(`${temp[0].toLowerCase()}HE ${temp[4].toLowerCase()}${munstersDescription.toUpperCase().slice(5)}`);


let munstersDescription2 = "The Munsters are creepy and spooky.";

let arr = [];
arr.push(...munstersDescription2)
let answer = arr.map(function (letter) {
  if (letter === letter.toUpperCase()) {
    return letter.toLowerCase();
  } else {
    return letter.toUpperCase();
  }
}).join("");


console.log(answer);