import { Stack } from './stack.js';

let myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(1);
let isEmptyMyStack = myStack.isEmpty();

console.log(myStack);
console.log(myStack.peek());
console.log(isEmptyMyStack);