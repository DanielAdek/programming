const fibonacci = (n) => {
  const result = [0, 1];

  for (let i=2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[result.length - 1];
}

console.log(fibonacci(5));


const fibRecursively = (n) => {
  if (n < 2) return n;
  return fibRecursively(n - 1) + fibRecursively(n - 2);
}

console.log(fibRecursively(5))