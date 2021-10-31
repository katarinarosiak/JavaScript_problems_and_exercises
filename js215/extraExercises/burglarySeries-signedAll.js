// Burglary Series (22): Sign All
// You finally receive the entire stolen list document from the police. You need to sign at the end of the document but also each sub-list corresponding to each room in your house where the items were stolen.

// You are given two arguments, one object with nested objects and a string that corresponds to your name. The object already contains several signature properties, one on the root, the others on each nested object. Return an object with all containing signature values set to your name.

// function signAll(obj, name) {
//   for (let key in obj) {
//     if (key === 'signature') {
//       obj[key] = name;
//     } else {
//       for (let innerKey in obj[key]) {
//         if (innerKey === 'signature') {
//           obj[key][innerKey] = name;
//         }
//       }
//     }
//   }
//   return obj; 
// }

function signAll(obj, name) {
  return Object.fromEntries(Object.entries(obj).map(innerArr => {
    if (innerArr[0] === 'signature') {
      innerArr.splice(1, 1, name)
    } else {
      innerArr[1].signature = name;
    }
    return innerArr
  }))
}



// Examples
const obj = {
  kitchen: {
    painting: 100,
    piano: 1000,
    signature: "",
  },
  bathroom: {
    stereo: 220,
    signature: "",
  },
  signature: "",
};

console.log(signAll(obj, "Rocky")) // ➞ {
//     kitchen: {
//       painting: 100,
//       piano: 1000,
//       signature: "Rocky",  // changed
//     },
//     bathroom: {
//       stereo: 220,
//       signature: "Rocky",  // changed
//     },
//     signature: "Rocky",  // changed
// }
