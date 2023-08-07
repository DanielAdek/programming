package com.practice;

import com.practice.algorithms.Fibbonacci;
import com.practice.algorithms.FizzBuzz;

import java.util.HashMap;
import java.util.Map;

public class MainApplication {

  private String great() {
    return "Hello";
  }

  public static void main(String[] args) {
    Map<String, String> hmap = new HashMap<String, String>();
    hmap.put("Name", "Daniel");
    System.out.println(hmap);
    FizzBuzz fb = new FizzBuzz();
    fb.fizzbuzz(10);

    // Get Fib output
    Fibbonacci fibbonacci = new Fibbonacci();
    int fibResult = fibbonacci.solveFibbonacci(6);
    System.out.println(fibResult);
  }
}