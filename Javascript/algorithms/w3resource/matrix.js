// Write a JavaScript function which returns the n rows by n columns identity matrix.
// [[1, 0, 0, 0],
//  [0, 1, 0, 0],
//  [0, 0, 1, 0],
//  [0, 0, 0, 1]]

const matrix = n => {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  const lastMatrixElement = results[results.length - 1];

  let currentPosition = 0;

  while (lastMatrixElement.length < n) {
    for (let i=0; i < n; i++) {
      if (i !== currentPosition) {
        results[currentPosition][i] = 0;
      } else {
        results[currentPosition][i] = 1
      }
    }
    currentPosition++
  }
  return results;
}


const matrixGPT = (n) => {
  const results = new Array(n);

  for (let i = 0; i < n; i++) {
    results[i] = new Array(n).fill(0);
    results[i][i] = 1; // Set diagonal elements to 1
  }

  return results;
};

const done = matrix(5)
console.log(done)