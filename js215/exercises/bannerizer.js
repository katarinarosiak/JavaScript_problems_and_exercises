// Bannerizer
// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:

// Copy Code
logInBox('To boldly go where no one has gone before.');
// will log on the console:

// Copy Code
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// Copy Code
logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
// You may assume that the output will always fit in your browser window.

function logInBox(str) {
  let frameLen = str.length + 2;
  let frame = `+${'-'.repeat(frameLen)}+\n`;
  let whiteSpace = `|${' '.repeat(frameLen)}|\n`;
  
  
  console.log('\n', frame, whiteSpace, `| ${str} |\n`, whiteSpace, frame);
};