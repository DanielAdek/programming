package com.practice;

import com.practice.algorithms.EscapeGivenChars;
import com.practice.algorithms.Fibbonacci;
import com.practice.algorithms.FizzBuzz;
import com.practice.algorithms.ReversedString;

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

    // THE FIZZBUZZ
    FizzBuzz fb = new FizzBuzz();
    fb.fizzbuzz(10);

    // THE FIBBONACCI
    Fibbonacci fibbonacci = new Fibbonacci();
    int fibResult = fibbonacci.solveFibbonacci(6);
    System.out.println(fibResult);

    // THE REVERSAL
    ReversedString reversedString = new ReversedString();
    System.out.println(reversedString.flip("Reverse"));
    System.out.println(reversedString.flipInteger(900));
    System.out.println(reversedString.flipInteger(-19));
    System.out.println(reversedString.flipInteger(123));


    EscapeGivenChars escapeGivenChars = new EscapeGivenChars();
    escapeGivenChars.solve("ThQuicBigBrownFoJumpOverTheLazyDog", "The1Quick#BigBrownFox&JumpOverTheLazyDog", new char[]{'1', '&', '#'});
  }
}