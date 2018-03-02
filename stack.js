'use strict';


class _Node {
  constructor(value, next) {
    this.value = value,
    this.next = next;
  }
} //end _Node calss



class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new _Node(value, null);
    //check for empty stack
    if (this.top === null) {
      this.top = newNode;
      newNode.next = null;
      return;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  popTop() {
    let node;
    if (this.top === null) {
      console.log('The list is empty, nothing to pop');
      return;
    }
    node = this.top;
    this.top = node.next;

    return node.value;

  }

  pop(value) {
    let node;
    node = this.top;
    if (this.top === null) {
      console.log('The list is empty, nothing to pop');
      return;
    }

    while ((node.next !== null) && (node.value !== value)) {
      node = node.next;
    }
    this.top = node.next;

    return node.value;
  }




} //end Stack class


function peek(stack) {
  return stack.top.value;
}

function display(stack) {
  if (stack.top === null) {
    console.log('list is empty, nothing to display');
    return;
  }

  let node = stack.top;
  let i = 1;
  while (node !== null) {
    console.log('Node: ', i, '= ', node.value);
    node = node.next;
    i++;
  }
}

function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let string = new Stack();

  //push str into stack, keep moving top of stack
  for (let i = 0; i < str.length; i++) {
    string.push(str.charAt(i));
  }

  //pop from stack, comparing chars
  let i = 0;
  while (string.pop(str.charAt(i)) === str.charAt(i)) {
    i++;
  }
  if (i !== str.length)
    return false;
  else
    return true;
}



function matchParens(expression) {
  expression = expression.toLowerCase().replace(/[' ']/g, '');
  console.log(expression);
  let stack = new Stack();

  //push parens into the stack
  let i = 0;

  while (i < expression.length) {

    switch (expression.charAt(i)) {
    case '(':
      console.log('push: ', expression.charAt(i));
      stack.push(expression.charAt(i));
      break;
    case ')':
      console.log('pop: ', expression.charAt(i));
      stack.popTop();
      break;
    case '[':
      console.log('push: ', expression.charAt(i));
      stack.push(expression.charAt(i));
      break;
    case ']':
      console.log('pop: ', expression.charAt(i));
      stack.popTop();
      break;
    case '{':
      console.log('push: ', expression.charAt(i));
      stack.push(expression.charAt(i));
      break;
    case '}':
      console.log('pop: ', expression.charAt(i));
      stack.popTop();
      break;
    default:
      console.log('default:  ', expression.charAt(i));
      break;
    } //end switch

    i++;
  }
  display(stack);
}



function stackSort(stack) {
  display(stack);
  // let sortedStack = new Stack();
  let current = stack.top;
  let tempNode = new _Node(null, null);


  //set current back to the top
  current = stack.top;
  console.log(current.value);

  //loop the length of the stack, sorting the values
  while (current.next !== null) {
    if (current.value > current.next.value) {
      tempNode.value = current.value;
      current.value = current.next.value;
      current.next.value = tempNode.value;
      current = stack.top;
    } else
      current = current.next;
  }

  display(stack);
}



function main() {

  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log('------------');
  display(starTrek);
  // console.log('------------');
  // console.log(peek(starTrek));
  // console.log('------------');
  // starTrek.pop('McCoy');
  // console.log('------------');
  // display(starTrek);
  // console.log('------------');
  // console.log(is_palindrome('dad'));
  // console.log(is_palindrome('Tricia'));
  // console.log(is_palindrome('A man, a plan, a canal: Panama'));
  // console.log(is_palindrome('1001'));
  // console.log(is_palindrome('Tauhida'));
  // console.log('------------');
  matchParens('[({string.pop(str.charAt(i))} === str.charAt(i))]');
  console.log('------------');

  let newSort = new Stack();
  newSort.push(3);
  newSort.push(2);
  newSort.push(1);
  newSort.push(10);
  newSort.push(5);
  display(newSort);
  console.log('------------');
  stackSort(newSort);
}

main();