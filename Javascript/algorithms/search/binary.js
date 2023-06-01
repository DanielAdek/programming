// write a function that searches a number in a data-structure, return index of number or -1

const binarilySearchValue = (array, num) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const midpoint = Math.round((min + max) / 2);
    const midNum = array[midpoint];
    if (midNum == num) return midpoint;
    if (num < midNum) max = midpoint - 1;
    else min = midpoint + 1;
  }
  return -1;
}

console.log(binarilySearchValue([1, 2, 3, 5, 6, 7, 9, 10], 5));


