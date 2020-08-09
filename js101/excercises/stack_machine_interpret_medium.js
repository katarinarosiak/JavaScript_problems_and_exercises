/// Stack Machine Interpretation
// A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

// A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

// This sounds complex, but the behavior is straightforward and easy to walk through manually. Consider a MULT operation in a stack-and-register language. It multiplies the stack value with the register value, removes the value from the stack, and stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation transforms the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is transformed to [3], and the register is left with the value 168.

// Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
// MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// All operations are integer operations (which is only important with DIV and MOD).

// Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.

// Examples:

minilang('PRINT');   //[] 0
// 0

minilang('5 PUSH 3 MULT PRINT');  //reg: 5, [3, 5] = 15,  15, [5]   
// // 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT'); //8 [, 5]
// 5
// 3
// 8

minilang('5 PUSH POP PRINT'); //5, [ 5]
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'); //4  [, 3, 5]
// // 5
// // 10
// // 4
// // 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT'); 7[3, 3]
//6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


//i: string including commands and numbers
//o: integer as a result of running the program
//rules: 
/// - input will be valid coomads
// - it will react to the commands-
// - program will always take the up most element of the stack
// - operation will be performed on the stack element and register and result will be stored in the register 
// - the values of the stack is in the beginning [] 
// - value of the register is 0 in te beginning

// examples: 
// in: ""

/// a: 
// - take a given string and transform it to an array of commands 
// - loop through the array and take the first index falue 
// - if it's a number assign it to register variable
// - if it's not a number determin the task:
//   - determin what is the task:
//   - perfom the task 
//   continue until the array is empty 


function minilang(task) {
  let register = 0;
  let stack = [];
  let commands = [];


  commands = task.split(' ');


  for (let i = 0; i < commands.length; i++) {
    if (Number.isInteger(Number(commands[i]))) {
      register = Number(commands[i]);

    } else {

      switch (commands[i]) {
        case 'PUSH':
          pushToStack(register, stack);
          break;
        case "PRINT":
          print(register);
          break;
        case "ADD":
          register = addRegAndStack(register, stack);
          break;
        case "SUB":
          register = substractRegAndStack(register, stack);
          break;
        case 'MULT':
          register = multiplyRegAndStack(register, stack);
          break;
        case "DIV":
          register = divideRegAndStack(register, stack);
          break;
        case "MOD":
          register = moduloRegandStack(register, stack);
          break;
        case "POP":
          register = popStack(stack);
          break;
        default:
          console.log('none of this');
      }
    }
  }
}



/// let testStack = [];
// let testRegister = 0;

// pushToStack()


function pushToStack(registerValue, stack) {
  stack.push(registerValue);
}

function addRegAndStack(registerVal, stack) {
  let currentVal = stack.pop();
  return registerVal + currentVal;
}

function substractRegAndStack(registerVal, stack) {
  let currentVal = stack.pop();
  return registerVal - currentVal;
}

function multiplyRegAndStack(registerVal, stack) {
  let currentVal = stack.pop();
  return currentVal * registerVal;
}

function divideRegAndStack(registerVal, stack) {
  let currentVal = stack.pop();
  return Math.floor(registerVal / stack);
}

function moduloRegandStack(registerVal, stack) {
  let currentVal = stack.pop();
  return Math.floor(registerVal % stack);
}

function popStack(stack) {
  return stack.pop();
}

function print(registerVal) {
  console.log(registerVal);
}




