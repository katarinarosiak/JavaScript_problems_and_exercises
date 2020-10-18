let sortme = function (names) {

  let counter = 0;

  while (counter < names.length - 1) {
    counter = 0;
    for (let index = 0; index < names.length - 1; index++) {

      if (names[index].toLowerCase() > names[index + 1].toLowerCase()) {
        let first = names[index];
        let second = names[index + 1]
        names[index] = second;
        names[index + 1] = first;

      } else {
        counter++;
      }
    }
  }
  return names;
}