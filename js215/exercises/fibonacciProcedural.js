  
function fibonacci(n) {
  let fibSeq = [0, 1, 1]
  if (fibSeq[n]) return fibSeq[n];
  
  for (let i = 2; i < n; i++) {
    fibSeq.push(fibSeq[fibSeq.length - 2] + fibSeq[fibSeq.length - 1]);
  }
  return fibSeq[fibSeq.length - 1];   
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050