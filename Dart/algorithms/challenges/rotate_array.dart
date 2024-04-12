void rotateArray(List<int> nums, int k) {
  List<int> rotated = [];

  for (int i = 0; i < nums.length; i++) {
    rotated[(i + k) % nums.length] = nums[i];
  }

  nums = rotated;

  print(nums);
}
