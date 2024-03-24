import 'dart:math';

/// using the sliding window pattern find the max
/// sub array sum in a given array, where a specified
/// length is provided as the second argument.

int maxSubArraySum(List<int> list, int num) {
  int maxSum = 0;
  int tempSum = 0;
  for (int i = 0; i < num; i++) {
    maxSum += list[i];
  }
  tempSum = maxSum;
  for (int i = num; i < list.length; i++) {
    tempSum = tempSum - list[i - num] + list[i];
    maxSum = max(maxSum, tempSum);
  }
  return maxSum;
}
