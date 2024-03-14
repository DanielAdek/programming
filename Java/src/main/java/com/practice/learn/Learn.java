package com.practice.learn;

public class Learn {
  private int userAge;

  public Learn(int age) {
    userAge = age;
  }

  public static Learn getInstance(int age) {
    return new Learn(age);
  }

  public int getUserAge() {
    return userAge;
  }
}