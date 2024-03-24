package com.practice.challenges;

public class ReversedString {

  public String flip(String str) {
    char[] chars = str.toCharArray();
    StringBuilder s = new StringBuilder();
    for(int i=chars.length-1; i>=0; i--) {
      s.append(chars[i]);
    }
    return s.toString();
  }

  public int flipInteger(int n) {
    char[] convertedInt = Integer.toString(n).toCharArray();
    String reversed = "";
    for (char val : convertedInt) {
      reversed = val + reversed;
    }
    return (int) (Integer.parseInt(reversed, 10) * Math.signum(n));
  }
}
