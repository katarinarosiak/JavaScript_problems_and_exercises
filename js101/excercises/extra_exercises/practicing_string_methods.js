//write one function using each of (basic) string methods:

//charAt()
let string = "Today is a beautiful day";

let character = string.charAt(6);
console.log(character);//i

//concat()
let stringToConcat1 = "A conditional is a fork (or multiple forks) in the road.";
let stringToConcat2 = "Your data arrives at a conditional,";
let stringToConcat3 = " which then tells the data where to go.";

let concatinatedStrings = stringToConcat1.concat(stringToConcat2, stringToConcat3);
console.log(concatinatedStrings); //3 concat. strings

//endsWith()
let stringToCheckEnd = "That's enough talking; let's write some code";
console.log(stringToCheckEnd.endsWith("e"));  //true

//includes()
let stringInlcudes = "Here, we use the browser's prompt function to get a number from the user.";

console.log(stringInlcudes.includes("browser")); //true

//indexOf()
let stringIndexOf = "This code uses the === operator to determine whether the input";

console.log(stringIndexOf.indexOf("c"));  //5

//lastIndexOf()
let stringLastIndexOf = "As you can see, we can control the program's flow ";

console.log(stringLastIndexOf.lastIndexOf("we")); //16

//repeat()
let stringToRepeat = "The examples below are all valid JavaScript conditionals.";

console.log(stringToRepeat.repeat(2)); //"The examples below are all valid JavaScript conditionals. "The examples below are all valid JavaScript conditionals."

//replace()
let stringReplace = "Example 2 demonstrates that you can handle both true and false";

console.log(stringReplace.replace(/a/g, "A")); //"ExAmple 2 demonstrAtes thAt you cAn hAndle both true And fAlse"

//slice()

let stringToSlice = "Based on the indentation";

console.log(stringToSlice.slice(0, 5)); //"Based"
console.log(stringToSlice.slice(-3, 5)); //""
console.log(stringToSlice.slice(-4)); // "tion"
console.log(stringToSlice.slice(0, -4)); //"Based on the indenta"

//split()
let stringToSplit = "Examples 6 and 7 both behave the same way.";

console.log(stringToSplit.split("a")); //["Ex", "mples 6 ", "nd 7 both beh", "ve the s", "me w","y.";

//startsWith()
let stringStartedWith = "Let's look at the comparison operators ";
console.log(stringStartedWith.startsWith("b")); //false

//substring()

let substringOf = "is one place where omitting the block is preferable.";
console.log(substringOf.substring(0, 2)); //"is"
console.log(substringOf.substring()); //"is one place where omitting the block is preferable.";
console.log(substringOf.substring(0, 0)); //""
console.log(substringOf.substring(NaN, 2)); //"is"
console.log(substringOf.substring(false, 2)); //"is"


