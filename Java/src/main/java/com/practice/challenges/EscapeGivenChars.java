package com.practice.challenges;

public class EscapeGivenChars {
  public boolean solve(String param1, String param2, char[] excapeChars) {
    char[] modified = new char[10];
    int i = 0;
    for (char value : excapeChars) {
        modified[i] = value;
      i++;
    }
    return modified.toString() == param1;
  }
}
