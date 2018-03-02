'use strict';


class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}



class Queue {
  constructor(first, last) {
    this.first = null;
    this.last = null;
  }


  enqueue(data) {

    let newNode = new _Node(data, null, null);
    //check for empty queue
    if (this.first === null) {
      this.first = newNode;
      console.log('enqueue the first node: ', newNode.value);
      // return;
    }

    if (this.last !== null) {
      console.log('enqueue the node: ', newNode.value);
      newNode.next = this.last;
      this.last.prev = newNode;
    }
    this.last = newNode;
  }
}

function peek(queue) {
  return queue.first.value;
}

function display(queue) {
  if (queue.first === null) {
    console.log('list is empty, nothing to display');
    return;
  }

  let node = queue.first;
  let i = 1;
  while (node !== null) {
    // console.log(node);
    console.log('Node: ', i, '= ', node.value);
    node = node.prev;
    i++;
  }
}


function main() {

  let starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  display(starTrekQ);
}

main();