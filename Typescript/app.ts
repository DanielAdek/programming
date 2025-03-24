// ******************* leetcode ******************* //
import { twoSum } from "./leetcode/twoSum";

// ************** TwoSum Example usage:
console.log(twoSum([11, 15, 7, 2], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 4], 6));



//******************* Hash Map *******************//
import hashTable from "./hashMap";

// Counter Example usage:
console.log("=============== counter ==================")
console.log(hashTable.frequencyCounter([3, 2, 3, 3, 4, 11, 15, 7, 2]));
console.log(hashTable.frequencyCounter([1, 2, 2, 3, 3, 3]));

console.log("=============== first non repeat ==================")
console.log(hashTable.firstNonRepeatChar("leetcode"));
console.log(hashTable.firstNonRepeatChar("loveleetcode"));

console.log("=============== majority ==================")
console.log(hashTable.majorityElement([3, 2, 3]));
console.log(hashTable.majorityElement([2, 2, 1, 1, 1, 2, 2]));

console.log("=============== intersection ==================")
console.log(hashTable.interception([1, 2, 2, 1], [2, 2]));
console.log(hashTable.interception([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(hashTable.interception([4, 9, 5, 6, 6, 7, 0, 0, 1, 3, 5, 2, 7, 6, 9, 8], [9, 4, 9, 8, 4]));

console.log("=============== prefix sum ==================")
console.log(hashTable.prefixSum([1, 2, 2, 1]));
console.log(hashTable.prefixSum([9, 4, 9, 8, 4]));
console.log(hashTable.prefixSum([4, 9, 5, 6, 6, 7, 0, 0, 1, 3, 5, 2, 7, 6, 9, 8]));

console.log("=============== prefix sum II ==================")
console.log(JSON.stringify(hashTable.prefixSumII([1, 2, 3]), null, 2));

console.log("=============== sub array sum ==================")
console.log(hashTable.subArraySum([1, 1, 1], 2));
console.log(hashTable.subArraySumSolnII([3, 4, 7, 2, -3, 1, 4, 2], 7));
console.log(hashTable.maxSumSubArray([2, 1, 5, 1, 3, 2, 4, 3, 4, 5], 3));