const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn(...args);
    cache[args] = result;

    return result;
  }
}


module.exports = memoize;

const memoization = (fn) => {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);

    cache.set(key, result);

    console.log(cache)
    return result;
  }
}

const clearMemoizationCache = (memoToClear) => memoToClear.cache.clear();

const multiplesOfFive = (arr) => {
  const result = [];
  for (const digit of arr) {
    if (digit % 5 === 0) {
      result.push(digit);
    }
  }
  return result.join(", ");
}

const memoizedFunc = memoize(multiplesOfFive);

console.log(memoizedFunc([25, 55, 15, 225, 500, 10, 23]));

console.log(memoizedFunc([23]))