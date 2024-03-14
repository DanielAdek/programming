package com.practice.algorithms;

import java.util.HashMap;
import java.util.Map;

public class Anagram {

  public static boolean validate(String str, String string) {
    String onlyWord = str.replaceAll("\\W", "").toLowerCase();
    String onlyWrd = string.replaceAll("\\W", "").toLowerCase();

    if (onlyWord.length() != onlyWrd.length()) {
      return false;
    }

    Map<Character, Integer> frqWord = new HashMap<>();
    Map<Character, Integer> frqWrd = new HashMap<>();

    for (char w : onlyWord.toCharArray()) {
      frqWord.put(w, frqWord.getOrDefault(w, 0) + 1);
    }

    for (char w : onlyWrd.toCharArray()) {
      frqWrd.put(w, frqWrd.getOrDefault(w, 0) + 1);
    }

    for (char w : frqWord.keySet()) {
      // check if a key in one is missing in the other or if frequencies don't match
      if (!frqWrd.containsKey(w) || !frqWrd.get(w).equals(frqWord.get(w))) {
        return false;
      }
    }

    return true;
  }
}
