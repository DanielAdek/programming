const Stack = require("./stack");
// The Queue data structure uses the FIFO principle

class Queue {
  constructor() {
    this.array = []
  }

  add(data) {
    this.array.unshift(data); // add to the top of the list
  }

  remove() {
    return this.array.pop(); // return the last element just removed
  }

  peek() {
    return this.array[this.array.length - 1] // get the last one to be removed
  }
}

const sourceQOne = new Queue();
sourceQOne.add("meet")
sourceQOne.add("Apple")

const sourceQTwo = new Queue();
sourceQTwo.add("fish");
sourceQTwo.add("Mango");

sourceQTwo.remove();
sourceQOne.remove();

// weave

const weave = function (qOne, qTwo) {
  const q = new Queue();

  while (qOne.peek() || qTwo.peek()) {
    if (qOne.peek()) {
      q.add(qOne.remove())
    }
    if (qTwo.peek()) {
      q.add(qTwo.remove())
    }
  }

  return q;
}

console.log(weave(sourceQOne, sourceQTwo))

// queue from stack problem
class QueueFromStack {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack()
  }

  add(data) {
    this.firstStack.push(data);
  }

  remove() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop())
    }

    const removedData = this.secondStack.pop();

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop())
    }


    return removedData;
  }

  peek() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const peekedElement = this.secondStack.peek()

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop())
    }

    return peekedElement;
  }
}
