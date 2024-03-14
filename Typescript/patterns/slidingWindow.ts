// ************ CLASS WORK ************* //
/**
 * Get the maximum sum of a consecutive integers in the give set of array of integers.
 * given an arr = [1, 1, 2, 3, 3, 4, 5, 6 ,7 ,7, 8]
 * write a function called maxSumSubArray, takes in array and n, then returns the max sum sub array
 * example = maxSumSubArray([1, 1, 3, 2, 4], 2)
 * output = 6
 * explanation = only [2, 4] can be added to get the maximum in two sum arrays
 *
 * example 2 = maxSumSubArray([1, 1, 3, 2, 4], 3)
 * output = 9
 * explanation = only [3, 2, 4] can be added to get the maximum in three sum arrays
 *
 * example 3 = maxSumSubArray([], 4)
 * output = null
 * explanation = nothing to calculate, so it returns null;
 *
 * example 2 = maxSumSubArray([6], 1)
 * output = 6
 * explanation = only [6] can be found, so it is returned
 */
const maxSumSubArray = (arr: number[], n: number): number | null => {
  // if nothing provided in array
  if (!arr.length) return null;

  // if array length is equal n value
  if (arr.length === n) {
    let maxSum: number = 0;
    for (const int of arr) {
      maxSum += int;
    }

    return maxSum;
  }

  let maxSum: number = 0;

  // first, sum up the first nth integers;
  for (let i: number = 0; i < n; i++) {
    maxSum += arr[i];
  }

  for (let i: number = n; i < arr.length; i++) {
    maxSum = maxSum - arr[i - n] + arr[i];
  }


  return maxSum;
}

console.log(maxSumSubArray([1, 1, 3, 2, 4], 2))

function minSubarrayLength(target: number, nums: number[]): number {
  let left: number = 0;
  let currentSum: number = 0;
  let minLength: number = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minLength !== Infinity ? minLength : 0;
}
