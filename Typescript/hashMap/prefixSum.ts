/**
  Given an array on integers, write a prefix function that add up all the element

  Example: arr = [2, 3, 4, 4, 2, 5];
  Expected Output: [2, 5, 9, 13, 15, 20]
*/

export const prefixSum = (arr: number[]): number[] => {
  const output: number[] = new Array<number>(arr.length);
  output[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    output[i] = output[i - 1] + arr[i];
  }

  return output;
}


/**
  Given an array of integers, write a prefix function that returns a list of
  indices of the array, each index is an object that should hold
  a list of all the numbers from 0 to index in an object having prefixSum: element

  Example: arr = [2, 3, 4, 4, 2, 5];
  Expected Output: [
    {index: 0, element: 2, prefixSum: { elements: [2], sum: 2 } },
    {index: 1, element: 3, prefixSum: { elements: [2, 3], sum: 5 } },
    {index: 2, element: 4, prefixSum: { elements: [2, 3, 4], sum: 7 } }
  ]
*/

interface PrefixSumObj {
  index: number;
  element: number;
  prefixSum: {
    elements: number[];
    sum: number;
  };
}

export const prefixSumII = (arr: number[]): PrefixSumObj[] => {
  const output: PrefixSumObj[] = new Array<PrefixSumObj>(arr.length);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    output[i] = {
      index: i,
      element: arr[i],
      prefixSum: {
        elements: arr.slice(0, i + 1),
        sum: sum,
      },
    };
  }

  return output;
};
