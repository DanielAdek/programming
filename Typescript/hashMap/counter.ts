/**
 Problem 1: Counting Frequency of Elements
  Problem:
    Given an array of numbers, count the frequency of each number.
 */

export const frequencyCounter = (arr: number[]): Map<number, number> => {
  const freqCounter: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    freqCounter.set(arr[i], (freqCounter.get(arr[i])! || 0) + 1);
  }

  return freqCounter;
}