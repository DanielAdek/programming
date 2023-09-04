const bubbleSortMyIdea = (arr) => {
  const sorted = [];

  while (arr.length) {
    const currentMin = Math.min(...arr);
    const index = arr.indexOf(currentMin);
    sorted.push(currentMin);
    arr.splice(index, 1);
  }

  return sorted;
}

console.log(bubbleSortMyIdea([100, -40, 500, -124, 0, 21, 7]))

const bubbleSortSolution = (arr) => {
  for (let i=0; i < arr.length; i++) {
    for (let j=0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
       const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

console.log(bubbleSortSolution([100, -40, 500, -124, 0, 21, 7]))

const sortAlphabetically = (unsorted) => {
  const charsArray = [];

  for (const val of unsorted.toUpperCase().split("")) {
    // const lastChars
  }

}

// console.log(sortAlphabetically("webster"))