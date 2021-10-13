// Stack Machine Interpretation
// A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

// A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

// Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

// Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// All operations are integer operations (which is only important with DIV and REMAINDER).

// Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they will not contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.


// i: string - command to be performed 
// o: integer (the value of that operation) 

// - all arg are valid 
// - initial values are [], 0 

// R: 
// Stack : data structure first in first out 
// - represented as an array, teh first el bottom, the last is the top  
// - [1,2,3]
// - it uses Array.prototype.push and Array.prototype.pop.

// stack-and -register 
// - programming language 
// - each operation uses register 

// register:
// - current value 
// - it's not part of the stack

// operations: 
// - they use the latest pushed value
// - make an operation on that value and the register
// - stores the result bakc in the register 

// Types of operations: 
// - MULT
// [1,2,3] r: 2
// [1,2]   3*2 r: 6
// - all operations are number operations 

// List of comands: 
// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.


// DS => string => number ,  object 
//  array , number 
// => number 

// ALGO: 
// - generate an object with commands name as keys and functions as values
// - object key: register, stack 
// - split the string into array of strings where each el is a command or number
// - iterate through the splitted array and execute each command
//   - check if the command exist in the object if not (it means it's a number) teart is as n command 
//    - coerce to a number and push the n to a register
//   -  if not a number execute a command 

function minilang(command) {
  let stackAndRegister = {
    stack: [],
    register: 0,
    n(num) {
      this.register = num;
    },
    PUSH() {
      this.stack.push(this.register);
    },
    ADD() {
      this.register += this.stack.pop();
    },
    SUB() {
      this.register -= this.stack.pop()
    },
    MULT () {
      this.register *= this.stack.pop();
    },
    DIV() {
      console.log(this.register / this.stack.pop());
      this.register = Math.floor(this.register / this.stack.pop());
      console.log(this.register);
    },
    REMAINDER() {
      this.register = Math.floor(this.register % this.stack.pop()); 
    },
    POP() {
      this.register = this.stack.pop();
    },
    PRINT() {
      console.log(this.register);
    }
  };
  
  let separatedCommands = command.split(' ');
  separatedCommands.forEach(com => {
    stackAndRegister[com] ? stackAndRegister[com]() : stackAndRegister.n(+com);
  });

};



// Exa: 
//minilang('5 PUSH 3 MULT PRINT');
// [] , 15
// 15

//minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// [5] 3 
// 5
// 3
// 8


//minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7




//minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 PRINT REMAINDER PRINT MULT PRINT');   
// 12

//minilang('-3 PUSH 5 SUB PRINT');
// 8

//minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)