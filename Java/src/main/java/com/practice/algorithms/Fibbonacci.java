package com.practice.algorithms;

public class Fibbonacci {

  public Integer solveFibbonacci(int n) {
    if (n < 2) {
      return n;
    }
    return this.solveFibbonacci(n - 1) + this.solveFibbonacci(n - 2);
  }
}
