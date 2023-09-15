// FREEZE AND DEEP FREEZE

Object.prototype.deepFreeze = function (object) {
  const propName = Reflect.ownKeys(object);

  for (const prop of propName) {
    const value = object[prop];
    if (value && typeof value === "object" || typeof value === "function") {
      Object.deepFreeze(value); // can also be written as deepFreeze(value)
    }
  }

  return Object.freeze(object);
}

const deepFreezeNestedTodoList = Object.deepFreeze({
  item1: {
    task: "Learn Object",
    done: false,
    item: {
      task: "learn freeze"
    }
  },
  item2: {
    task: "Learn Functional program",
    done: false
  },
  item3: {
    task: "Learn Data Structure",
    done: false
  },
  item4: {
    task: "Learn Algorithms",
    done: false
  }
});

// deepFreezeNestedTodoList.item1.item.task = "Learn deep freeze" // does not change the value
// console.log(deepFreezeNestedTodoList) // same as creation


// SEALING AND DEEP SEALING
Object.prototype.deepSeal = function (object) {
  const propNames = Reflect.ownKeys(object);

  for (const prop of propNames) {
    const value = object[prop];

    if (value && typeof value === "object") {
      Object.deepSeal(value);
    }
  }
  return Object.seal(object);
}

const deepSealedNestedObject = Object.deepSeal({
  item1: {
    task: "Learn Object",
    done: false,
    item: {
      task: "learn seal"
    }
  },
  item2: {
    task: "Learn Functional program",
    done: false
  },
  item3: {
    task: "Learn Data Structure",
    done: false
  },
  item4: {
    task: "Learn Algorithms",
    done: false
  }
});

// delete deepSealedNestedObject.item1.item.task // silently throw error

// console.log(deepSealedNestedObject) // same as original




// COPYING OBJECT TO A NEW OBJECT IN FOUR WAYS

const myObject = {
  name: "Branden",
  bio: {
    born: 1960,
    married: true
  }
};

// -- copy with structured clone
const withStructuredClone = structuredClone(myObject);

withStructuredClone.name = "Brandi" // not connected to the original
console.log(withStructuredClone.name) // Brandi
console.log(myObject.name) // Braden

withStructuredClone.bio.born = 1961 // not connected to original
console.log(withStructuredClone.bio.born) // 1961
console.log(myObject.bio.born) // 1960

// structuredClone cannot copy function so method walk is not added at creation
myObject.walk = function () { return "can walk" };

// -- copy with assign
const withAssign = Object.assign({}, myObject); // still connected by nested object

withAssign.name = "Brendan" // not connected to original

console.log(withAssign.name) // Brendan
console.log(myObject.name) // Brandan

withAssign.bio.born = 1962 // connected to original
console.log(withAssign.bio.born) // 1962
console.log(myObject.bio.born) // 1962


// -- copy with for...in...loop
const withForLoop = new Object();

for (const key in myObject) {
  withForLoop[key] = myObject[key];
}

withForLoop.name = "Brandy"; // not connected to original
console.log(withForLoop.name) // Brandy
console.log(myObject.name) // Branden

withForLoop.bio.born = 1963 // connected to original
console.log(withForLoop.bio.born) // 1963
console.log(myObject.bio.born) // 1963


// -- copy with JSON.parse(JSON.stringify())
const withJsonCopy = JSON.parse(JSON.stringify(myObject));

withJsonCopy.name = "Brandi Json"; // not connected to original
console.log(withJsonCopy.name) // Brandy
console.log(myObject.name) // Branden

withJsonCopy.bio.born = 1964 // not connected to the original
console.log(withJsonCopy.bio.born) // 1964
console.log(myObject.bio.born) // 1963



// OBJECT METHODS

// -- define property

const customObject = new Object();

Object.defineProperties(customObject, {
  name: {
    value: "Alaska",
    writable: false,
    enumerable: false,
    configurable: false
  }
});

customObject.name = 12
console.log(customObject)



// OBJECT GROUP BY

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

Object.prototype.groupBy = function (arr, property) {
  return arr.reduce((result, obj) => {
    const key = obj[property];
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(obj);
    return result;
  }, {});
}

const grouped = Object.groupBy(inventory, "type");

console.log(grouped);