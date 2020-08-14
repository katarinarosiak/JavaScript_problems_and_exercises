Further Exploration
Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted.

logInBox('To boldly go where no one has gone before.', 3);

// Further Exploration
// Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted.

function logInBox(string, maxWidth) {

  if (string.length > maxWidth) {
    string = string.slice(0, maxWidth);
  };

  let firstRow = "+--" + "-".repeat(maxWidth) + "+";
  let secondRow = "| " + " ".repeat(maxWidth) + " |";
  let thirdRow = "| " + string + " |";
  let fourthRow = "| " + " ".repeat(maxWidth) + " |";
  let fifthRow = "+--" + "-".repeat(maxWidth) + "+";

  if (string.length > maxWidth) {
    string = string.slice(0, maxWidth);
  };





  console.log(firstRow);
  console.log(secondRow);
  console.log(thirdRow);
  console.log(fourthRow);
  console.log(fifthRow);
};