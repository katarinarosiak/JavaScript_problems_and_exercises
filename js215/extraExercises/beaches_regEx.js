// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).


// - case insensitive 
// 0 no overlap 

function sumOfABeach(str) {
  let matches = str.match(/sand|water|fish|sun/gi);
  return matches ? matches.length : 0;
}

// Examples
console.log(sumOfABeach("WAtErSlIde") );                //   ==>  1
console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN"));   // ==>  3
console.log(sumOfABeach("gOfIshsunesunFiSh") );          // ==>  4 
console.log(sumOfABeach("cItYTowNcARShoW") );             // ==>  0
console.log(sumOfABeach('suun')) // 0

