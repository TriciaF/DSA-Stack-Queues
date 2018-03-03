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
      newNode.next = this.last;
      this.last.prev = newNode;
    }
    this.last = newNode;
  }

  dequeue() {
    if (this.first === null) {
      console.log('list is emplty cannot dequeue');
      return;
    }

    const node = this.first;
    this.first = node.prev;
    if (this.first === this.last)
      this.last = null;

    return node.value;
  }
}

function peek(queue) {
  if (queue.first === null) {
    console.log('The queue is empty - no peek');
    return;
  }
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
  console.log('---------------');
  starTrekQ.dequeue();

  display(starTrekQ);
  console.log('---------------');
  console.log(peek(starTrekQ));
}

main();