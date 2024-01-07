const myMap = new Map();

myMap.set("name", "Jasmine");
myMap.set("age", 12);

console.log(myMap);

console.log(myMap.get("name"));

console.log(myMap.has("age"));

console.log(myMap.size);

const obj = Object.fromEntries(myMap);

console.log("From Entries: ", obj)

for (const value of myMap.values()) {
  console.log("VALUE: ", value)
}

for (const key of myMap.keys()) {
  console.log("KEY: ", key)
}

myMap.set("to", "del");

console.log(myMap)
const del = myMap.delete("to");

console.log(myMap);

myMap.clear();

console.log(myMap);


const memoization = function (fn) {
  const cache = new Map();

  function memoized (...args) {
    if (cache.has(args)) {
      return cache.get(args);
    }

    const result = fn.call(this, args);
    cache.set(args, result);

    return result;
  }

  memoized.prototype.clearCache = function () {
    return cache.clear();
  }

  return memoized
}

const multiplyByTwo = (a)  => {
  return a * 2
}

const mem = memoization(multiplyByTwo);

console.log(mem(5));

console.log(mem(5));

console.log(mem(2 + 3));


const revealCache = function () {
  mem.prototype.clearCache();
}

revealCache()