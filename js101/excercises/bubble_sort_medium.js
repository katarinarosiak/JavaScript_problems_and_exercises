function bubbleSort(arr) {

  let counter = 1;
  while (counter > 0) {
    counter = 0;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > arr[index + 1]) {
        let el1 = arr[index];
        let el2 = arr[index + 1];
        arr[index] = el2;
        arr[index + 1] = el1;
        counter++;
      }
    }
  }
  return arr;
}