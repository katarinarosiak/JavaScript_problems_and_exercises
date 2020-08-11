// /Practice Problem 9
// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageSum = 0;

for (let key in ages) {
  ageSum += ages[key];
}



console.log(ageSum);



//with reduce()


console.log(Object.values(ages).reduce((initVal, element) => initVal + element));