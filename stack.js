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

function main() {

  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log('------------');
  display(starTrek);
  console.log('------------');
  console.log(peek(starTrek));
  console.log('------------');
  starTrek.pop('McCoy');
  console.log('------------');
  display(starTrek);
  console.log('------------');
  console.log(is_palindrome('dad'));
  console.log(is_palindrome('Tricia'));
  console.log(is_palindrome('A man, a plan, a canal: Panama'));
  console.log(is_palindrome('1001'));
  console.log(is_palindrome('Tauhida'));

}

main();