function largestPrimeFactor(inputNum, lastPrime = 2) {
  if (isPrime(inputNum)) return inputNum;
  let result;

  if (!(inputNum % lastPrime)) {
    result = inputNum / lastPrime;
    return  isPrime(result) ? result : largestPrimeFactor(result, lastPrime);
  } else {
    lastPrime = generateNextPrime(lastPrime);
    if (!(inputNum % lastPrime)) {
      result = inputNum / lastPrime;
      return isPrime(result) ? result : largestPrimeFactor(result, generateNextPrime(lastPrime))
    } else {
      return largestPrimeFactor(inputNum, generateNextPrime(lastPrime));
    }
  }    
}

function generateNextPrime(lastPrime) {
  let i = lastPrime+1;
  while (true) {
    if (isPrime(i)) return i;
    i++;
  }
}

function isPrime(num) {
 for (let i = 2; i < num; i++) {
   if (num % i === 0) return false 
 }
 return  true
}

console.log(largestPrimeFactor(3)) // 3
console.log(largestPrimeFactor(8)); //2
console.log(largestPrimeFactor(13195)); //29
console.log(largestPrimeFactor(600851475143)) //6857




// function largestPrimeFactor(number) {
//   let prime = 2,
//     max = 1;
//   while (prime <= number) {
//     if (number % prime == 0) {
//       max = prime;
//       number = number / prime;
//     } else prime++; //Only increment the prime number if the number isn't divisible by it  
//     console.log('prime', prime);
//     console.log('max', max);
//   }
//   return max;
// }


// console.log(largestPrimeFactor(7)) // 7
// console.log(largestPrimeFactor(8)); //2
// console.log(largestPrimeFactor(13195)); //29
// console.log(largestPrimeFactor(600851475143)) //6857