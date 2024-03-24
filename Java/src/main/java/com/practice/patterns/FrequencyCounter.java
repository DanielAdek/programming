package com.practice.patterns;

public class FrequencyCounter {

  public static void main(String[] args) {
    int[] nums = {3, 2, 2, 3};

    int result = removeElement(nums, 3);

    System.out.println(result);
  }


  private static int removeElement(int[] nums, int val) {
    int counter = 0;
    for (int num : nums) {
      if (num != val) {
        nums[counter] = num;
        counter++;
      }
    }
    return counter;
  }
}
