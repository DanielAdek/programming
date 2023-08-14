const chunk = (arr, size) => {
  const chunkedArrays = [];

  for (const val of arr) {
    const lastChunked = chunkedArrays[chunkedArrays.length - 1];

    if (!lastChunked || lastChunked.length === size) {
      chunkedArrays.push([val])
    } else {
      lastChunked.push(val)
    }
  }

  return chunkedArrays;
}

console.log(chunk([1, 2, 3, 4, 5], 2));


const chunks = (arrayToChunk, size) => {
  let index = 0;
  const chunkedArray = [];
  while (index < arrayToChunk.length) {
    const currentChunked = arrayToChunk.slice(index, index + size);
    chunkedArray.push(currentChunked);
    index += size;
  }
  return chunkedArray;
}

console.log(chunks([1, 2, 3, 4, 5, 6, 7], 3));
