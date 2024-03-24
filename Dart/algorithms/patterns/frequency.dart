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

int majorityElement(List<int> nums) {
  Map<int, int> freq = new Map();

  for (int num in nums) {
    freq[num] = (freq[num] ?? 0) + 1;
  }

  int mode = 0;
  int value = 0;

  for (MapEntry num in freq.entries) {
    if (num.value >= value) {
      mode = num.key;
      value = num.value;
    }
  }

  return mode;
}
