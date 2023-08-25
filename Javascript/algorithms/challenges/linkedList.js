
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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
}

const myLinkedList = new LinkedList();
myLinkedList.insertFirst({bio: "I love myself"});
myLinkedList.insertFirst({username: "John"})
myLinkedList.insertFirst({fullName: "John Smith"})
myLinkedList.insertLast({age: 37});
myLinkedList.insertNodeAt({a: 12}, 3);
// console.log(myLinkedList.getSize());
// console.log(myLinkedList.getFirst())
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.getNodeAt(2));