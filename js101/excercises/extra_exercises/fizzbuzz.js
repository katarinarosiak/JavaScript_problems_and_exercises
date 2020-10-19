// =begin
// write a method that takes two arguments: the first is the starting number, and the second is the ending number. Print out all numbers between the two numbers except if a number is divisible by 3, print out "Fizz", if a number is divisible by 5, print out "Buzz", and if a number is divisible by 3 and 5, print out "FizzBuzz".

fizzbuzz(1, 15);
//fizzbuzz(1, 15);

// - num % 3 && num % 5 'FizzBuzz'
// - if num % 3 +> 'FIzz'
// - num % 5 => 'Buzz'

// algo:
// - create a loop starting from start num ending on end num
// - check if a (index) is divisible by 3 and 5 
// - if so print 'FizzBuzz'
// - if not chekc if its divisible by 3 
// - if so print 'Fizz'
// -  check if it's divisible by 5 if yest print Buzz
// - else print index 


function fizzbuzz(startNum, endNum) {

  for (let index = startNum; index <= endNum; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log('FizzBuzz');
    } else if (index % 3 === 0) {
      console.log('Fizz');

    } else if (index % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(index);
    }

  }


}