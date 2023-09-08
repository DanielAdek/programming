
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = this.getSize();
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  getSize() {
    let size = 0;
    let node = this.head;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let nextNode = this.head;
    let lastNode = null;
    while (nextNode) {
      lastNode = nextNode;
      nextNode = nextNode.next
    }
    return lastNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let nextNode = this.head.next;
    while (nextNode.next) {
      previous = nextNode;
      nextNode = nextNode.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const lastNode = new Node(data, null)
    let currentLastNode = this.getLast();
    if (!currentLastNode) {
      this.head = lastNode;
    } else {
      currentLastNode.next = lastNode;
    }
  }

  getNodeAt(index) {
    let node = this.head, counter=0;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  getMiddleNode() {
    let counter1 = this.getFirst();
    let counter2 = this.getFirst();

    while (counter2.next?.next) {
      counter1 = counter1.next;
      counter2 = counter2.next.next;
    }

    return counter1;
  }

  insertNodeAt(data, index) {
    const newNode = new Node(data, null);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    const previousNode = this.getNodeAt(index - 1);
    let currentIndexNode = this.getNodeAt(index);

    if (previousNode) {
      newNode.next = currentIndexNode;
      previousNode.next = newNode;
    } else {
      newNode.next = currentIndexNode
      currentIndexNode = newNode;
    }
  }

  removeNodeAt(index) {
    // want to have a previous node to point to the next
    // edge cases:
        // if nothing is at the head return;
        // if there is only one node present
        // if number is greater than what we have in node
        // when the first node is removed

    if (!this.head) {
      return;
    }

    if (index === 1) {
      this.head = this.head.next;
      return;
    }

    let previousNode = this.getNodeAt(index - 1);

    if (!previousNode) previousNode = this.getNodeAt(index);

    previousNode.next = previousNode.next.next;
  }

  splice(start, end) {
    // edge cases:
      // if head is null
      // if start is more than our size
      // if end is more than our size
      // if start is the head
    if (!this.head) return;

    const size = this.getSize();

    if (start > size) {
      return;
    }

    if (start === 0) {
      this.head = this.getNodeAt(end).next;
      return;
    }

    let previousNode = this.getNodeAt(start);
    if (previousNode)
      previousNode.next = this.getNodeAt(end);
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

const myLinkedList = new LinkedList();
myLinkedList.insertFirst({bio: "I love myself"});
myLinkedList.insertFirst({username: "John"})
myLinkedList.insertFirst({fullName: "John Smith"})
myLinkedList.insertLast({age: 37});
myLinkedList.insertNodeAt({a: 12}, 3);
myLinkedList.removeNodeAt(2)
const midNode = myLinkedList.getMiddleNode();

// console.log(myLinkedList.getSize());
// console.log(myLinkedList.getFirst())
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.getNodeAt(2));
console.log(midNode)

// let i = 0;
// for (const value of myLinkedList) {
//   console.log(i, new Set(Object.keys(value.data)));
//   i++
// }

function fromLast(list, n) {
  let slowRunner = list.getFirst();
  let fastRunner = list.getFirst();

  for (let i=0; i < n; i++) {
    fastRunner = fastRunner.next;
  }

  while (fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next;
  }

  return slowRunner;
}
console.log(fromLast(myLinkedList, 3))

module.exports = myLinkedList;