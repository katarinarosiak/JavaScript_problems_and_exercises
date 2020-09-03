/// Madlibs
// Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

// Example:

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.



let readline = require('readline-sync')

console.log('Enter a noun:');
let noun = readline.question('');
console.log('Enter a verb');
let verb = readline.question('');
console.log("Enter an adjective:");
let adjective = readline.question('');
console.log("Enter an adverb");
let adverb = readline.question('');

console.log(`Your ${adjective} ${noun} ${verb} very ${adverb} every day.`);
console.log(`Can you ${verb} ${adverb} with ${noun} so that he is not ${adjective}?`);
console.log(`What time do you ${verb} after ${adjective} ${noun} brings you turtle ${adverb}`);