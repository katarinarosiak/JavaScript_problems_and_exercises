const readline = require("readline-sync");
let messages = require("./calculator_messages.json");
let language = "eng";
let keepCounting = "y";

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return (
    num.toString().trimStart() === "" ||
    Number.isNaN(Number(num)) ||
    Math.sign(num) !== 1
  );
}

prompt(messages.chooseLang);
language = readline.question();
prompt(messages.welcome[language]);

while (true) {
  prompt(messages.firstNum[language]);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages.NotANum[language]);
    prompt(messages.firstNum[language]);
    number1 = readline.question();
  }

  prompt(messages.secondNum[language]);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages.NotANum[language]);
    prompt(messages.secondNum[language]);
    number2 = readline.question();
  }

  prompt(messages.operationMessage[language]);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(messages.numOnly[language]);

    operation = readline.question();
  }

  let output;
  switch (operation) {
    case "1":
      output = (Number(number1) + Number(number2)).toFixed(2);
      break;
    case "2":
      output = (Number(number1) - Number(number2)).toFixed(2);
      break;
    case "3":
      output = (Number(number1) * Number(number2)).toFixed(2);
      break;
    case "4":
      output = (Number(number1) / Number(number2)).toFixed(2);
      break;
  }

  prompt(`The result is: ${output}`);
  prompt(messages.another[language]);
  keepCounting = readline.question();
  console.log(keepCounting[0].toLowerCase());
  if (keepCounting[0].toLowerCase() !== "y") {
    break;
  }
}
