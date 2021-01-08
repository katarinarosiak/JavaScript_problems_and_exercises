function makeCounterLogger(num) {
  let startNum = num;
  return function someFunc(secNum) {
    if (startNum > secNum) {
      for (let index = startNum; index >= secNum; index--) {
        console.log(index);
      }
    } else {
      for (let index = startNum; index <= secNum; index++) {
        console.log(index);
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2
countlog(5)