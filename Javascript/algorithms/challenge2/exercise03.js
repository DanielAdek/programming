const listOfData = require("../dataSet")

// write a program that accepts a large data set and returns them in a given sequence
// and size of the data that should be returned. Ensure to add necessary useful key values like
// previous, next, current, total, totalReturned, and totalSequence
// where 1. previous: shows the previous page before the current. (note: should be null if no previous)
//       2. next: shows the next page after the current. (note: should be null if no next)
//       3. current: the requested data set
//       4. total: the total element in the large data-set
//       5. totalReturned: the total data-set chunked out of the last data-set on request
//       6. totalSequence: the total iteration we can have based on the total number chunked data-set
// example: given [{data: "types"}, {data: "structure"}] when sequence 1 and size 1, = { data: [{data: "type"}], ... }
// when sequence 2 and size 1 then [{data: "structure"}]
// when sequence 3 and size 1 then []

const pagination = (dataSet, sequence, size) => {
  // create an empty data-set to contain all data-set
  // create a for-loop to go over the main data-set
  // get the last data-set from point one and fill it up to the requested size
  // else create a new empty list when point 3 is full
  // after all return the element at the sequence

  const paginatedSet = []

  for (let i= 0; i < dataSet.length; i++) {
    let lastPaginated = paginatedSet[paginatedSet.length - 1];

    if (!lastPaginated || lastPaginated.length === size) {
      paginatedSet.push([dataSet[i]])
    } else {
      lastPaginated.push(dataSet[i]);
    }
  }
  const dataSetReturned = paginatedSet[sequence - 1]
  const paginated = {
    data: dataSetReturned || [],
    previous: sequence - 1 < 1 ? null : sequence - 1,
    current: sequence,
    next: sequence + 1 > paginatedSet.length ? null : sequence + 1,
    totalSequence: paginatedSet.length,
    totalReturned: dataSetReturned?.length || 0,
    total: dataSet.length,
  }
  return paginated;
}

console.log(pagination(listOfData, 1, 2));






const paginationSoln2 = (dataSet, sequence, size) => {
  // divide the entire data-set by the size = the total number of sequence available
  // create a for-loop to have empty data-set by the length of totalSequence available
  // create another for-loop after the first for-loop
  // within the second for-loop insert into each chunk until the chunkSize is equal to size
  // get the chunked data where the sequence if equal to the index of the data

  const totalSequence = Math.floor(dataSet.length / size);

  const paginatedSet = [];

  for (let i =0; i < totalSequence; i++) {
    paginatedSet.push([]);
  }


  let index = 0;
  while (dataSet.length) {
    const currentElement = paginatedSet[index];
    if (currentElement || currentElement?.length !== size) {
      currentElement?.push(dataSet[index]);
    }
    dataSet = dataSet.slice(index, dataSet.length - 1);
    ++index;
  }

  return paginatedSet;
}

console.log(paginationSoln2(["Angel", "God", "Spirit", "Son"], 1, 2))
