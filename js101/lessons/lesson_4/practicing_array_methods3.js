/// Practice Problem 10
// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


console.log(Object.values(ages).reduce((accumulator, element) => {
  if (accumulator > element) {
    return element;
  } else {
    return accumulator;
  }
}
)
);