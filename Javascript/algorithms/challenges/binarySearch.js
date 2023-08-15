const binarySearch = (intArray, int) => {
  let lowest = 0, highest = intArray.length - 1;

  while (lowest <= highest) {
    const midpoint = Math.round((lowest + highest)/2);
    const midNum = intArray[midpoint];
    if (midNum === int) return midpoint;
    if (midNum > int) {
      highest = midpoint - 1;
    } else {
      lowest = midpoint + 1;
    }
  }
}

console.log(binarySearch([1, 2, 5, 6, 7, 8, 9], 5))