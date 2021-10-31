// Burglary Series (05): Third Most Expensive
// Time to call your lover to inform what he/she lost in the burglary.

// Given an object of the stolen objects, return the 3rd most expensive item on the list. If that is not possible, because there are not enough items, return false.

// Examples
console.log(thirdMostExpensive({})) // ➞ false

console.log(thirdMostExpensive({ piano: 100, tv: 200 })) // ➞ false

console.log(thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 }))//  ➞ "stereo"

console.log(thirdMostExpensive({ piano: 1000, tv: 500, ball: 10, mirror: 200, })) // ➞ "mirror"
// Notes
// All prices will be of different monetary values.


function thirdMostExpensive(obj) {
  if (Object.keys(obj).length < 3) return false;
  return Object.entries(obj).sort((a, b) => b[1] - a[1])[2][0];
}


// Test.assertEquals(thirdMostExpensive({piano: 100, stereo: 200, tv: 10 }), "tv")
// Test.assertEquals(thirdMostExpensive({piano: 100, stereo: 200, tv: 10, timmy: 500 }), "piano")
