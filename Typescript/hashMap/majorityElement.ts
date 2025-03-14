/**
Problem 3: Find the Majority Element
Problem:
  Given an array of integers, find the element that appears more than n/2 times (where n is the size of the array).
  You may assume that the input always has a majority element.

Example 1:

Input: [3, 2, 3]
Output: 3
Example 2:

Input: [2, 2, 1, 1, 1, 2, 2]
Output: 2
*/
export const majorityElement = (arr: number[]): number | null => {
  const freqCounter: Map<number, number> = new Map<number, number>();

  for (const numb of arr) {
    freqCounter.set(numb, (freqCounter.get(numb)! + 1) || 1);
  }

  for (const [key, val] of freqCounter) {
    if (val > arr.length / 2 ) return key;
  }

  return null;
}