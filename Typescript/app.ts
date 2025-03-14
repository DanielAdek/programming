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