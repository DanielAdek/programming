package com.practice.patterns;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MultiplePointers {

  public static void main(String[] args) {
    int[] nums = {3, 2, 2, 3};

    int result = removeElement(nums, 3);

    System.out.println(result);
  }


  public static int removeElement(int[] nums, int val) {
    List<Integer> arrayList = new ArrayList<>();

    for (int num : nums) {
      arrayList.add(num);
    }

    int slowPointer = 0;

    for (int fastPointer = 0; fastPointer < arrayList.size(); fastPointer++) {
      if (arrayList.get(fastPointer) != val) {
        arrayList.set(slowPointer, arrayList.get(fastPointer));
        slowPointer++;
      }
    }

    for (int i = 0; i < slowPointer; i++) {
      nums[i] = arrayList.get(i);
    }

    System.out.println(nums.length);

    return slowPointer;
  }
}
