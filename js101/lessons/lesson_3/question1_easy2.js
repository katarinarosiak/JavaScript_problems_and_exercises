
// Question 1
// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replace("important", "urgent"));


let regex = /important/gi
console.log(advice.replace(regex, "urgent"));