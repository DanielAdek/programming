// ************ CLASS WORK ************* //
/**
 * count the unique values in the give set of sorted array of integers.
 * given an arr = [1, 1, 2, 3, 3, 4, 5, 6 ,7 ,7, 8]
 * write a function that returns the number of unique values in the above.
 * output = 8
 */
const countUniqueValues = (arr: number[]): number => {
  if (arr.length < 1) return 0;

  let i: number = 0;

  for (let j: number = 1;  j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  const lengthOfUnique: number = i + 1;

  arr.length = lengthOfUnique;

  console.log(arr);

  return lengthOfUnique;
}

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6 ,7 ,7, 8]))

/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none)
 * of the characters without disturbing the relative positions of the
 * remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 * Example 1:
 *
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 */
function isSubsequence(s: string, t: string): boolean {
  let firstPointer: number = 0;
  let secondPointer: number = 0;

  for(const char of t) {
    if (s[firstPointer] !== t[secondPointer]) {
      secondPointer++;
    } else {
      firstPointer++
      secondPointer++
    }
  }
  return firstPointer === s.length;
};


/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing
 * all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Example 2:
 *
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 * Example 3:
 *
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 */
function isPalindrome(s: string): boolean {
  const alphaNum: string = s.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();

  let leftPointer: number = 0;
  let rightPointer: number = alphaNum.length - 1;

  for (let i: number = 0; i < alphaNum.length; i++) {
    if (alphaNum[leftPointer] !== alphaNum[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
};


/**
Given a 1-indexed array of integers numbers that is already sorted in
 non-decreasing order, find two numbers such that they add up to a specific target number.
 Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore, index1 = 1, index2 = 3. We return [1, 3].

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore, index1 = 1, index2 = 2. We return [1, 2].
 */

const indexOfTwoSum = (numbers: number[], target: number): Array<number> => {
  let leftPointer: number = 0;
  let rightPointer: number = numbers.length - 1;

  numbers = numbers.sort((a, b) => a - b);
  
  while (leftPointer < rightPointer) {
    const calcSum: number = numbers[leftPointer] + numbers[rightPointer];

    if (calcSum === target) {
      return [leftPointer + 1, rightPointer + 1];
    }
    if (calcSum < target) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return [];
}

console.log(indexOfTwoSum([2, 7, 9, 11, 15], 9));