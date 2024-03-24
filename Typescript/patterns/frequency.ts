/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

const majorityElement = (nums: number[]): number => {
  const freq: { [key: number]: number} = {};

  for (const num of nums) {
    freq[num] = (freq[num] + 1) || 0;
  }

  let mode: number = 0;
  let currentValue: number = 0;

  for (let key in freq) {
    if (currentValue <= freq[key]) {
      currentValue = freq[key];
      mode = parseInt(key);
    }
  }

  return mode;
}

console.log(majorityElement([2,2,1,1,1,2,2,3,3,3,3]));