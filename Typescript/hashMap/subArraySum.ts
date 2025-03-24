/**
Problem 5: Sub array Sum Equals K
Problem:
Given an array of integers numbs and an integer k, return the number of sub arrays whose sum equals k.

A sub array is a contiguous (continuous) part of the array.

Example 1:

Input: numbs = [1, 1, 1], k = 2
Output: 2
Explanation:
There are two sub arrays that sum to 2:

[1, 1] (starting at index 0)
[1, 1] (starting at index 1)

Example 2:

Input: numbs = [3, 4, 7, 2, -3, 1, 4, 2], k = 7
Output: 4
*/

export const subArraySum = (numbs: number[], k: number): number => {
  const hashMap: Map<number, number> = new Map<number, number>();
  hashMap.set(numbs[0], 1);

  let prefixSum = 0, count = 0;

  for (const numb of numbs) {
    prefixSum += numb;

    console.log("The current prefixSum is: ", prefixSum);

    console.log("The hash map is now: ", hashMap);

    if (hashMap.has(prefixSum - k)) {
      count += hashMap.get(prefixSum - k)!;
    }

    hashMap.set(prefixSum, (hashMap.get(prefixSum)! || 0) + 1);
  }

  console.log(`There are ${count} sub arrays that sum up to ${k}`);
  return count;
}


export const subArraySumSolnII = (arr: number[], k: number): number => {
  const prefixSum: Array<number> = new Array<number>(arr.length);
  prefixSum[0] = arr[0];

  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];

    if (prefixSum[i] % k === 0) count += 1;
  }

  console.log(`There are ${count} sub arrays that sum up to ${k}`);
  return count;
}


/**
  Problem 1: Maximum Sum Sub Array of Size K
  🔹 Problem: Given an array of integers numbs and an integer k, find the maximum sum of any contiguous sub array of size k.

  Example:

  Input: numbs = [2, 1, 5, 1, 3, 2], s = 3
  Output: 9
  Explanation: The sub array `[5, 1, 3]` has the maximum sum of `9`.
*/

interface MaxSum {
  maxArray: Array<number>
  sum: number
}

export const maxSumSubArray = (arr: number[], s: number): Map<"MaxSum", MaxSum> => {
  let sum = 0;
  const maxSub: Map<"MaxSum", MaxSum> = new Map<"MaxSum", MaxSum>();

  for (let i = 0; i < s; i++) {
    sum += arr[i];
  }

  maxSub.set("MaxSum", { maxArray: arr.slice(0, s), sum });

  for (let i = s; i < arr.length; i++) {
    const currentMaxSum = maxSub.get("MaxSum")!

    sum += arr[i] - arr[i - s];

    console.log("The current sum is: ", currentMaxSum.sum, "sum", sum);

    if (sum > currentMaxSum.sum) {
      console.log("The current i - s is: ", i - s);
      maxSub.set("MaxSum", { maxArray: arr.slice(i - s + 1, i + 1), sum });
    }
  }
  return maxSub;
}