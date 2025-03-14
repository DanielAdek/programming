/**
Problem 2: Find the First Non-Repeating Character
Problem:
  Given a string, find the first character that does not repeat.

Example:

Input: "leetcode"
Output: "l"

Input: "loveleetcode"
Output: "v"
*/

export const firstNonRepeatChar = (str: string): string => {
  const countChar: Map<string, number> = new Map<string, number>();

  for (const char of str) {
    countChar.set(char, (countChar.get(char)! + 1) || 1);
  }

  for (const [char, count] of countChar) {
    if (count == 1) {
        return char;
    }
  }

  return "";
}