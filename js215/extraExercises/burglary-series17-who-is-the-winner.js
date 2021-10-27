// Burglary Series (17): Who is the Winner?
// The fight between you and your spouse is over. Based on your perception of how the fight went, determine who won.

// Given an object with three rounds, with nested objects as your points per round, determine the winner by counting who won the most rounds. The winner of the round is whoever scored the most points in that round. Draws are possible, both in rounds as in the final result.

// If you won more rounds than your spouse, return "ME!"
// If your spouse won more rounds, return "SPOUSE!"
// If you are tied, return "NOBODY!"
// 

//I: object with nested round object 
//O: string ('SPOUSE', 'NOBODY', 'ME" )

//- there are three rounds ( always three rounds) 
//  - each nested obj describe a round an dpoints for this round
// - 
//   Wiiner: 
//   - has most scores at that round 
//   - if draw => 'NOBODY' (in rounds or final result) 
//   - who ever wins more rounds , winds the game _> ME , SPOUSE or NOBODY 

//   - valid input will always be nested obj with 3 rounds 
//   - undefined or other data types => return null; 
//   - number of rounds: number or stringified number (always interer) can be zero 
//   -   11, '11'  
//   - amount of points can be undeifned => treat it as 0; 
//   - numbers max 100


// DS:

// DS: obj =>  obj   => str

//A:
// - if input is not an object or empty object return null

//  - declare a variable and assign an object with three properties (me, spouse, nobody , values 0 )
//  - itereate thrugh the input objec 
//  -  on eahc iteration: 
//     - check who wins the round
//       - grab the number and coerce to numebr if stringified 
//       - if undefined coerce it 0
//       - compare spose wuth me : 
//         - if spose grater increment spouse in the created objects, 
//         - if me greater increment me 
//         - else increment nobody 
//     - increment number of points in the created object for the winner 
//  - iterate throgh the created object and determine who wins the whole game 
//     - compare me with spose  and if equal then return NObody 
//     - if Spouse is greater return spoise 
//     - else return me




function determineWinnerOfFight(winnerObj) {
  if (typeof winnerObj !== 'object') return null;
  if (winnerObj === null) return null;
  if (Object.keys(winnerObj).length === 0) return null;

  let finalObj = {
    "ME": 0,
    "SPOUSE": 0,
    "NOBODY": 0
  }

  for (let key in winnerObj) {
    finalObj[checkWhoWins(winnerObj[key])]++;
  }

  if (finalObj['ME'] > finalObj['SPOUSE']) {
    return 'ME!'
  } else if (finalObj['ME'] < finalObj['SPOUSE']) {
    return 'SPOUSE!';
  }
  return 'NOBODY!';
}

function checkWhoWins(obj) {
  if (obj.me === undefined) {
    obj.me = 0;
  }
  if (obj.spouse === undefined) {
    obj.spouse = 0;
  }
  if (+obj.me > +obj.spouse) {
    return 'ME';
  } else if (+obj.me < +obj.spouse) {
    return 'SPOUSE';
  } else {
    return 'NOBODY';
  }
}



//Happy Path: 

//darw
console.log(determineWinnerOfFight({
  round1: {
    me: undefined,
    spouse: '5',
  },
  round2: {
    me: undefined,
    spouse: '20',
  },
  round3: {
    me: undefined,
    spouse: '10',
  },
})); //  "NOBODY!"

//spuse wins
console.log(determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
})) // "SPOUSE!"

// me wins 
console.log(determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 10,
    spouse: 10,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
})) // "SPOUSE!" 


//Edge case: 
// if input is any other data types 

console.log(determineWinnerOfFight('str') === null);
console.log(determineWinnerOfFight(11) === null);
console.log(determineWinnerOfFight(false) === null);
console.log(determineWinnerOfFight(undefined) === null);

// //numbers can be stringified 
console.log(determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 10,
    spouse: '10',
  },
  round3: {
    me: 10,
    spouse: '10',
  },
}) === "ME!");



// //points can be undifnedned 
console.log(determineWinnerOfFight({
  round1: {
    me: undefined,
    spouse: 5,
  },
  round2: {
    me: undefined,
    spouse: 10,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}) === "SPOUSE!");

// //max number 100
console.log(determineWinnerOfFight({
  round1: {
    me: 5,
    spouse: 100,
  },
  round2: {
    me: 1,
    spouse: 100,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}) === "SPOUSE!");