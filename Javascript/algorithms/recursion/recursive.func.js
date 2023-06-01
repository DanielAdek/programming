// Recursion are process (function) that calls itself until a base case point

const countDown = num => {
  if (num <= 0) return 'All done';

  console.log(num)
  num -= 1;
  countDown(num);
}
const result = countDown(5);
console.log(result);


const sumRange = num => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
const total = sumRange(4);
console.log(total)


const factorial = num => {
  if (num === 1) return 1;
  return num *= factorial(num - 1);
}
const multiple = factorial(4);
console.log(multiple);


const collectOdds = array => {
  const result = [];

  const main = arr => {
    if (arr.length === 0) return;

    if (arr[0] % 2 !== 0) result.push(arr[0]);

    return main(arr.slice(1))
  }
  main(array);
  return result;
}
const odds = collectOdds([1, 2, 3, 4, 5, 6, 7]);
console.log(odds);