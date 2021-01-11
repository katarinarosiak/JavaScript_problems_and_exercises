// Make a Stack
// A stack is a compound data type like an array. The difference between an array and a stack is that in an array you can insert and remove elements in any order you want, but a stack has a rule whereby you can only add new elements at the end and remove the last inserted element.

// Create a function newStack, that when called returns a stack object with three methods: push, pop, and printStack. push takes a value and inserts it at the end of the stack. pop removes the last element from the stack. printStack logs each remaining element of the stack on its own line.

// Internally, use an array to implement the stack. Make sure that the array is not accessible from outside the methods.


function newStack() {
  let stack = [];
  return {
    push(item) {
      stack.push(item);
    },
    pop() {
      stack.pop();
    },
    printStack() {
      stack.forEach(el => console.log(el));
    }
  }
};

let stackObj = newStack();

stackObj.push(1);
stackObj.push(2);
stackObj.push(2);
stackObj.pop();

stackObj.printStack();