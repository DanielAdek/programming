package com.practice.challenges;

import org.jetbrains.annotations.NotNull;

public class JumpPower {

  public static void main(String[] args) {
    int[] array = {1, 1, 1, 1, 4};
    int result = canJump3(array);
    System.out.println(result);
  }

  public static boolean canJump(int @NotNull [] nums) {
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


  public static boolean canJump2(int[] nums) {
    int maxJumpLen = nums[0];

    for (int i = 0; i < nums.length; i++) {

      if (maxJumpLen < i) {
        return false;
      }
      maxJumpLen = Math.max(i + nums[i], maxJumpLen);
    }
    return true;
  }

  private static int canJump3(int @NotNull [] nums) {
    int jumps = 0, currentPos = 0, maxJumpLen = nums[0];

    for (int i = 0; i < nums.length - 1; i++) {
      maxJumpLen = Math.max(maxJumpLen, i + nums[i]);

      if (i == currentPos) {
        currentPos = maxJumpLen;
        jumps++;
      }
    }
    return jumps;
  }
}
