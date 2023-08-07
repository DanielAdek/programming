package com.practice.algorithms;

public class FizzBuzz {

  public FizzBuzz() {}

  public void fizzbuzz(Integer len) {
    for (int i=0; i <= len; i++) {
      if (i % 3 == 0 && (i % 5) != 0) {
        System.out.println("Fizz");
      } else if ((i & 5) == 0 && (i % 3) != 0) {
        System.out.println("Buzz");
      }  else if (i % 3 == 0 && (i % 5) == 0 ) {
        System.out.println("FizzBuzz");
      } else System.out.println(i);
    }
  }
}