// Cute Angles
// Write a function that takes a floating point number representing an angle between 0 and 360 degrees, and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.



// Examples:

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"
// Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.


// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input: floating point number 
// - 
// Output: string repesents angle in degrees, min and sec
// - 
// Rules:
// - functionn that takes one arg
// -only numbers
// -count degrees by adding degree sign
// -count minutes by taking the num after. and 
// - 
// How to Convert Decimal Degrees to DMS
// Follow these steps to convert decimal degrees to DMS:

// For the degrees use the whole number part of the decimal
// For the minutes multiply the remaining decimal by 60. Use the whole number part of the answer as minutes.
// For the seconds multiply the new remaining decimal by 60

// Questions: 
// -

// EXAMPLES/TEST CASES:
// i:
// =>dms(45,596)
// o:
// => (45˚35'46"
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// - 
// -
// -
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 


function dms(num) {
 let degree = 0;
 let minutes = 0;
 let seconds = 0;
 
  if (num > 0) {
    num = num - (Math.round(num / 360) * 360); 
  } else if (num < 0 ) {
    num =  360 + (num + (Math.round(num / 360) * -360));
    console.log((Math.round(num / 360) * 360));
                  
  }
  
   degree = Math.floor(num);
   minutes= Math.floor((num % 1) * 60);
   seconds = Math.floor((((num % 1) * 60) % 1) * 60);
  
  
  
  return `${appendZero(degree)}°${appendZero(minutes)}'${appendZero(seconds)}"`;

}

function appendZero(num) {
  
  if (String(num).length < 2) {
   return '0' + num; 
  } else {
    return String(num);
  }
}



console.log(dms(-1));   // 359°00'00" 
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
console.log(dms(860));

