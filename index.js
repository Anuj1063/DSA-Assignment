// Answer 1

function findPairs(arr, targetSum) {
  const pairs = [];
  const numSet = new Set(arr);

  for (let i = 0; i < arr.length; i++) {
    const complement = targetSum - arr[i];
    if (numSet.has(complement) && complement !== arr[i]) {
      pairs.push([arr[i], complement]);
      numSet.delete(arr[i]);
      numSet.delete(complement);
    }
  }

  return pairs;
}

const arr1 = [2, 3, 4, 5, 6, 7];
const targetSum = 9;

const pairs = findPairs(arr1, targetSum);

console.log(pairs);

// Answer 2-----------------------------------------------------------------------

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

const arr2 = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr2);
console.log(arr2);

// Answer 3------------------------------------------------------------------

function areRotations(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const concatStr = str1 + str1;
  return concatStr.includes(str2);
}

const str1 = "abcd";
const str2 = "cdab";

console.log(areRotations(str1, str2));

// Answer 4-----------------------------------------------------------------------

function firstNonRepeatedChar(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

const str = "aabbccdddeeg";
console.log(firstNonRepeatedChar(str));

// Answer 5------------------------------------------------------------------------------

function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${source} to rod ${destination}`);
    return;
  }
  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from rod ${source} to rod ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}
towerOfHanoi(3, 1, 2, 3);

// Answer 6------------------------------------------------------------------------------------

function postfixToPrefix(postfix) {
  const stack = [];
  const operators = ["+", "-", "*", "/", "^"];
  for (let i = 0; i < postfix.length; i++) {
    const token = postfix[i];
    if (operators.includes(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const prefixExpr = token + operand1 + operand2;
      stack.push(prefixExpr);
    } else {
      stack.push(token);
    }
  }
  return stack.pop();
}

const postfix = "2 3 4 * +";
const prefix1 = postfixToPrefix(postfix);
console.log(prefix1);

// Answer 7------------------------------------------------------------------------------------------

function prefixToInfix(prefix) {
  const stack = [];
  const operators = ["+", "-", "*", "/", "^"];
  for (let i = prefix.length - 1; i >= 0; i--) {
    const token = prefix[i];
    if (operators.includes(token)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const infixExpr = `(${operand1} ${token} ${operand2})`;
      stack.push(infixExpr);
    } else {
      stack.push(token);
    }
  }
  return stack.pop();
}

const prefix2 = "+ * 2 3 4";
const infix = prefixToInfix(prefix2);
console.log(infix);

// Answer 8-------------------------------------------------------------------------------------------

function checkBrackets(code) {
  const stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const expectedBracket = openingBrackets[closingBrackets.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== expectedBracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const code1 = "function test() { if (x > 0) { return true; } }";
console.log(checkBrackets(code1));

const code2 = "function test() { if (x > 0) { return true; }";
console.log(checkBrackets(code2));

// Answer 9-------------------------------------------------------------------------------------------------

function reverseStack(stack) {
  const auxStack = [];
  while (stack.length > 0) {
    auxStack.push(stack.pop());
  }
  while (auxStack.length > 0) {
    stack.push(auxStack.pop());
  }
  return stack;
}

const stack1 = [1, 2, 3, 4, 5];
console.log(reverseStack(stack1));

// Answer 10------------------------------------------------------------------------------------------------

class Stack {
  constructor() {
    this.items = [];
    this.minStack = [];
  }
  push(item) {
    this.items.push(item);
    if (
      this.minStack.length === 0 ||
      item <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(item);
    }
  }
  pop() {
    const item = this.items.pop();
    if (item === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return item;
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new Stack();
stack.push(4);
stack.push(2);
stack.push(6);
stack.push(1);
console.log(stack.getMin());
