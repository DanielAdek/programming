/**
Problem 4: Find the Intersection of Two Arrays
Problem:
Given two integer arrays numbs1 and numbs2, return an array of their intersection.
Each element in the result must be unique, and the result can be in any order.

Example 1:
Input: numbs1 = [1, 2, 2, 1], numbs2 = [2, 2]
Output: [2]

Example 2:
Input: numbs1 = [4, 9, 5], numbs2 = [9, 4, 9, 8, 4]
Output: [4, 9]
Explanation: Both `4` and `9` appear in both arrays.
*/

export const interception = (numbs1: number[], numbs2: number[]): number[] => {
  const set1: Set<number> = new Set<number>(numbs1);
  const resultSet: Set<number> = new Set<number>();

  for (const numb of numbs2) {
    if (set1.has(numb)) {
      resultSet.add(numb);
    }
  }

  return Array.from(resultSet);
}

