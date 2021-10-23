// Combine Two Objects Into One, Summing Like Values
// Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.

// There's a married couple, Hank and his spouse Sheila. Hank works at a power plant making $70,000 a year, and Sheila is a teacher making $40,000 a year. They both earn rental income from separate rental properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income because it fits the same category.

// const user1 = {
//   powerPlant: 70000,
//   rental: 12000
// }

// const user2 = {
//   teaching: 40000,
//   rental: 10000
// }

// becomes ➞ {
//   powerPlant: 70000,
//   teaching: 40000,
//   rental: 22000   // The rental income is added together.
// }
// Arguments
// user1Income (Object) ⁠— an income object for user1
// user2Income (Object) ⁠— an income object for user2
// returns: A new object with like values combined
// Challenges
// They won't have the same number of key-value pairs.
// The return object must return the values ordered from lowest to highest so your answers can match the test answers.

// i: 2 obj

// R:
// - return a new obj
// - sum elements that belogs to the sam ecategory 
// - not the same num of key, val 
// - the return value ordered based on the amount ????


// - same category:
// - the name of the keys are the same 

// {1: 11, 2: 10} {1: 1, 3: 1} => {1:12, 2: 10, 3: 1}



// dS: obj, str, numbers, arrays 

// - copy the first object 
// - itereate trhough the second obj and if the key doesn't exist in the opied obj 
// - create it and assign a value
// - if it exist sum the value to the current value of copied obj 
// - return the copied object 

function combine(obj1, obj2) {
  let copiedObj = {...obj1};
  
  
  for (let key in obj2) {
    if (copiedObj[key]) {
      copiedObj[key] += obj2[key];
    } else {
      copiedObj[key] = obj2[key];
    }
  }
  return Object.entries(copiedObj).sort((a,b) => a[1] - b[1]).reduce((obj, arr) => {
    obj[arr[0]] = arr[1];
    return obj;
   }, {})
}


const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}


console.log(combine(user1, user2));