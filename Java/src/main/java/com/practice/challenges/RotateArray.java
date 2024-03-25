package com.practice.challenges;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class RotateArray {
  public static void main(String[] args) {
    int[] arr = {1,2,3,4,5,6,7};

    rotate(arr, 3);

    rotateList(List.of(1,2,3,4,5,6,7), 3);
  }

  private static void rotate(int[] nums, int k) {
    int[] rotated = new int[nums.length];

    for (int i = 0; i < nums.length; i++) {
      rotated[(i + k) % nums.length] = nums[i];
    }

    for (int i = 0; i < nums.length; i++) {
      nums[i] = rotated[i];
    }

    System.out.println(Arrays.toString(nums));
  }

  private static void rotateList(List<Integer> nums, int k) {
    List<Integer> rotated = new ArrayList<>();

    for (int num : nums) {
      rotated.add(num);
    }

    for (int i = 0; i < nums.size(); i++) {
      rotated.set((i + k) % nums.size(), nums.get(i));
    }

    nums = rotated;

    System.out.println(nums);
  }

//  public ListNode rotateRight(ListNode head, int k) {
//    ListNode rotated = new ListNode();
//
//    for (int node : head) {
//      rotated.add(node);
//    }
//
//    for (int i = 0; i < head.size(); i++) {
//      rotated.set((i + k) % head.size(), head.get(i));
//    }
//
//  }
}
