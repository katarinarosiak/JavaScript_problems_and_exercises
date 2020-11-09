//The Supermarket Queue kyu 6 
//https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
  let tills = [];

  if (!customers.length) return 0;
  if (n === 1) return customers.reduce((acc, num) => acc + num);
  if (n > customers.length) return Math.max(...customers);

  for (let i = 0; i < n; i++) {
    tills[i] = customers[i];
  }

  for (let index = n; index < customers.length; index++) {
    tills.sort((a, b) => a - b);
    tills[0] += customers[index];
  }

  return Math.max(...tills);
}