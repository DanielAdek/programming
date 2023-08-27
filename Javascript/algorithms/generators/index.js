const linkedList = require("../challenges/linkedList");

function* numbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const generatorNumber = numbers();
// console.log(...generatorNumber);


class Iterable {
  constructor(username, age, moreData) {
    this.username = username;
    this.age = age;
    this.moreData = moreData || this.getDefaultData()
  }

  getDefaultData () {
    return {
      account: {
        bal: "$12m"
      }
    }
  }
}

Iterable.prototype[Symbol.iterator] = function* () {
  yield this.username;
  yield this.age;
  yield this.moreData;
}

const iterable = new Iterable("Daniel", 10);

const another = new Iterable("Mike", 12)

const allIterables = [...iterable, ...another]

// console.log(allIterables);


// Create a generator function that picks value from a data structure randomly, the pick algorithm should
// not pick an element twice

const names = ["John", "Peter", "James", "Mark", "Daniel", "Moses"];

const pickUniqueValueRandomly = function* (dataStructure) {
  // create a while-loop to keep on till dataStructure is empty
  // create a random number to pick value from data-structure
  // remove the value picked from data-structure and
  // yield the data that has been randomly picked
  do {
    const random = Math.floor(Math.random() * dataStructure.length);
    const value = dataStructure[random]
    dataStructure.splice(random, 1)
    yield value;
  } while (dataStructure.length)
}

const result = pickUniqueValueRandomly(linkedList);
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());

// for (let value of result) {
//   console.log(value);
// }

