/** Sherlock considers a string to be valid if all characters of the string appear the same number
  of times. It is also valid if he can remove just  character at  index in the string,
  and the remaining characters will occur the same number of times.
  Given a string , determine if it is valid. If so, return YES, otherwise return NO.
  Example
This is a valid string because frequencies are .
  This is a valid string because we can remove one  and have  of each character in the remaining string.
  This string is not valid as we can only remove  occurrence of . That leaves character frequencies of .
  Function Description
Complete the isValid function in the editor below.
  isValid has the following parameter(s):
string s: a string
Returns
string: either YES or NO
Input Format
A single string .
  Constraints
Each character
Sample Input 0
aabbcd
Sample Output 0
NO
Explanation 0
Given , we would need to remove two characters, both c and d  aabb or a and b  abcd,
 to make it valid. We are limited to removing only one character, so  is invalid.
  Sample Input 1
aabbccddeefghi
Sample Output 1
NO
Explanation 1
Frequency counts for the letters are as follows:
{'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 2, 'f': 1, 'g': 1, 'h': 1, 'i': 1}
There are two ways to make the valid string:
  Remove  characters with a frequency of : .
Remove  characters of frequency : .
Neither of these is an option.
  Sample Input 2
abcdefghhgfedecba
Sample Output 2
YES
*/

// SOLUTION BREAK DOWN
/**
 * create a data structure to hold each char
 * create a for loop to fill each char by its frequencies
 * collect all the frequencies into another data structure
 * create another data structure to hold frequencies as key
 * fill each frequencies by the amount of occurrency
 * create an array to get the keys all the keys
 * check if the length of the array is  1 then it is a "YES"
 * check if the length is two then get the first element and second element into a variable
 * also get the count of the first element and do same with the second
 * if the absolute difference between first element and seconde element is 1 and one of the counts is 1 then "YES"
 * otherwise all other chances are a "NO"
 */
const sherlock = (string) => {

  const charCount = new Map();

  // Count the frequency of each character
  for (const char of string) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }


  const counts = [...charCount.values()];

  // Create an object to count the frequency of frequencies
  const freqCount = {};

  // Count the frequency of frequencies
  for (const count of counts) {
    freqCount[count] = (freqCount[count] || 0) + 1;
  }

  const freqKeys = Object.keys(freqCount).map(Number);

  // If there's only one distinct frequency, it's already valid
  if (freqKeys.length === 1) {
    return "YES";
  }

  // If there are two distinct frequencies and one of them is 1 more or 1 less than the other, it's valid
  if (freqKeys.length === 2) {
    const [freq1, freq2] = freqKeys;
    const count1 = freqCount[freq1];
    const count2 = freqCount[freq2];

    if (Math.abs(freq1 - freq2) === 1 && (count1 === 1 || count2 === 1)) {
      return "YES"
    }
  }

  // Otherwise, it's not valid
  return "NO";
}

console.log(sherlock("abc"));
console.log(sherlock("aabbcd"));
console.log(sherlock("aabbccddeefghi"));
console.log(sherlock("abcdefghhgfedecba"));
