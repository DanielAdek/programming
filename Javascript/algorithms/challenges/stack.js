class Stack {
  constructor() {
    this.array = []
  }

  push(record) {
    this.array.push(record)
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1]
  }
}

