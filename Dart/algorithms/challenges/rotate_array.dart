void rotateArray(List<int> nums, int k) {
  List<int> rotated = List<int>.filled(nums.length, 0);

  for (int i = 0; i < nums.length; i++) {
    rotated[(i + k) % nums.length] = nums[i];
  }

  for (int i = 0; i < nums.length; i++) {
    nums[i] = rotated[i];
  }

  print(nums);
}
