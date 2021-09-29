// Acronym
// Write a function that generates and returns an acronym from a string of words. For example, the function should return "PNG" for the string "Portable Network Graphics". Count compound words (words connected with a dash) as separate words.

// Examples
// Copy Code
function acronym(string) {
  let rgx = new RegExp(/-/g);
  string = string.replace(rgx, ' ');
  return string.split(' ').map(word => word[0].toUpperCase()).join('')

}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"