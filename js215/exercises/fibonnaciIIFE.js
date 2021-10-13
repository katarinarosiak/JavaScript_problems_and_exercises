let fibonacci = (function(n) {
  let fibSeq = [0, 1, 1];

  return function (n) {
    return fibSeq[n] ? fibSeq[n] : fibSeq[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
})()