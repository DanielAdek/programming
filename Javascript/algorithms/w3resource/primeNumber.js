// Write a JavaScript function that accepts a number as a parameter and checks
// whether it is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1
// that has no positive divisors other than 1 and itself.

const primeNumber = (number) => {
  const divisors = [2, 3, 4, 5, 6, 7, 8, 9];

  const basicPrime = [2, 3, 5, 7];

  if (basicPrime.includes(number)) {
    return 1;
  }

  if (number < 2) return -1;

  for (const divisor of divisors) {
    if (number % divisor === 0) {
      return -1
    }
  }
  return 1;
}

console.log(primeNumber(41))


// Solution
const primeNumberSoln = (num) => {
  if (num < 2) return false;

  for (let i=2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(primeNumberSoln(6))