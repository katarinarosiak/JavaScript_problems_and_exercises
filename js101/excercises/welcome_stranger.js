// Welcome Stranger
// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

// Example:

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// i: 1 array, 1 object  
// o: string 

// r: 
// - has to create a function that takes 2 arguments
// - an input array will include 2 or more elements
// - object contacin 2 keys, ttile, occupation. 
// - returns a greeting with persons' full name and title


// q: adjoining? 


// dS:
// - array, object, string


// a: 
// - take a given array and concat strings adding spaces in between
// - take given object and extract values 
// - return a string with greetings , name and values of the obj.

function greetings(name, personalData) {
  return (`Hello, ${name[0]} ${name[1]} ${name[2]}! Nice to have a ${personalData.title} ${personalData.occupation} around.`);
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);