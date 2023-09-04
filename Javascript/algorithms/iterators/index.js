
// adding separately
const range = {
  from: 1,
  to: 5
}

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ } // += 1} // find the difference between ++ and += 1
      }
      return { done: true, value: undefined }
    }
  }
}

for (const obj of range) {
  console.log(obj)
}

// const arr = Array.from(range);

// console.log(arr);


// putting it together
const iterable = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ }
    }
    return { done: true }
  }
}


// another way to put together
const iterableRang = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          return { done: false, value: current++ }
        }
        return { done: true, value: undefined }
      }
    }
  }
}

for (const value of iterableRang) {
  console.log(value);
}

console.log([0, ...iterableRang])

// for (let i=iterable.from; i <= iterable.to; i++) {
//   console.log(i)
// }



// Symbol

let mySymbol = Symbol("This is a text");
mySymbol = "The text has changed";
console.log(mySymbol.description)