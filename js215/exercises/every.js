function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  };
  return true;
};

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true