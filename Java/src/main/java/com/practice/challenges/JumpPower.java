package com.practice.challenges;

public class JumpPower {

  public static void main(String[] args) {

  }

  public boolean canJump(int[] nums) {
    int currentMaxJumpLength = nums[0];

    for (int i = 0; i < nums.length; i++) {
      if (currentMaxJumpLength < i) {
        return false; // Cannot reach this position
      }
      if (i + nums[i] > currentMaxJumpLength) {
        currentMaxJumpLength = i + nums[i];
      }
      if (currentMaxJumpLength >= nums.length - 1) {
        return true; // Reached the last position
      }
    }

    return false;
  }
}
