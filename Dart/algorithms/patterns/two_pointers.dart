int removeDuplicates(List<int> nums) {
  if (nums.isEmpty) return 0;

  int same_counter = 0;
  int slowPointer = 0;

  for (int fastPointer = 1; fastPointer < nums.length; fastPointer++) {
    if (nums[fastPointer] != nums[slowPointer]) {
      slowPointer++;
      nums[slowPointer] = nums[fastPointer];
      same_counter = 0;
    } else {
      same_counter++;
      if (same_counter <= 1) {
        slowPointer++;
        nums[slowPointer] = nums[fastPointer];
      }
    }
  }
  return slowPointer + 1;
}

int highestCommonFactor(List<int> nums) {
  if (nums.isEmpty) return 0;

  if (nums.length == 1) return nums[0];

  int slowPointer = 0, counter = 0, mode = 0, value = 0;

  nums.sort();

  for (int fastPointer = 1; fastPointer < nums.length; fastPointer++) {
    if (nums[slowPointer] == nums[fastPointer]) {
      counter++;
    } else {
      if (counter > value) {
        mode = nums[slowPointer];
        value = counter;
      }
      slowPointer = fastPointer;
      counter = 0;
    }
  }

  if (counter > value) {
    mode = nums[nums.length - 1];
  }
  return mode;
}
