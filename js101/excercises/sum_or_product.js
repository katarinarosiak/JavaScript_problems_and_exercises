const readline = require('readline-sync');

while (true) {
  console.log("Please input an integer greater than 0");
  let userNumber = Number(readline.question());

  while (!isCorrectNumberInput(userNumber)) {
    console.log(
      "This is not accepted input. Please enter only integers greaten than 0");
    userNumber = Number(readline.question());
    console.log(userNumber);
  }

  console.log('Input "s" to sum the numbers and "p" to multiply the numbers');
  let userCalculationChoice = readline.question();
  while (!isCorrectLetterImput(userCalculationChoice)) {
    console.log("This is not accepted input. Please enter only 's' or 'p'");
    userCalculationChoice = readline.question();
  }

  let consecutiveNumbers = finsConsecutiveNumBetween0and(userNumber);
  console.log(consecutiveNumbers);
  let result = 0;

  if (userCalculationChoice === 's') {
    result = consecutiveNumbers.reduce((el1, el2) => el1 + el2);
  } else {
    result = consecutiveNumbers.reduce((a, b) => a * b);
  }
  console.log(`The sum of ${consecutiveNumbers} is ${result}`);
  console.log("would you like to make another claculation?");
  let anotherCalculation = readline.question();


  if (anotherCalculation.toLowerCase() === "no") {
    break;
  } else if (anotherCalculation.toLowerCase() === "yes") {
    clearTheScreen();
  } else {
    console.log("Please answer only 'yes' or 'no'");
    anotherCalculation = readline.question();
  }
}

function isCorrectNumberInput(userInputNumber) {
  return (userInputNumber > 0 &&
    Number.isInteger(userInputNumber) &&
    userInputNumber !== "");
}

function isCorrectLetterImput(inputLetter) {
  return (inputLetter.toLowerCase() === "p" ||
    inputLetter.toLowerCase() === "s");
}

function finsConsecutiveNumBetween0and(givenNumber) {
  let numbers = [1];
  let counter = 2;

  while (givenNumber > numbers.length) {
    numbers.push(counter);
    counter += 1;
  }
  return numbers;
}

function clearTheScreen() {
  for (let counter = 0; counter < 30; counter += 1) {
    console.log(" ");
  }
}
