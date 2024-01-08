const anagramFirstSolution = (param1, param2) => {
  const str1ToObject = setObjectValues(param1);
  const str2ToObject = setObjectValues(param2);

  if (Object.keys(str1ToObject).length !== Object.keys(str2ToObject).length) return false;

  for (const key in str2ToObject) {
    if (str2ToObject[key] !== str1ToObject[key]) {
      return false
    }
  }
  return true;
}

const setObjectValues = (word) => {
  const strToObject = {};
  for (const val of word.replace(/\W/g, "").toLowerCase()) {
    strToObject[val] = strToObject[val] + 1 || 1;
  }
  return strToObject;
};

// console.log(anagramFirstSolution("kaka", "akak"))


const anagramSecondSolution = (stringA, stringB) => cleanString(stringA) === cleanString(stringB);

const cleanString = (str) => str.replace(/\[^a-zA-Z0-9]+/g, '').toLowerCase().split("").sort().join("");

// console.log(anagramSecondSolution("dog", "god"))


// ************************* ANAGRAM CHALLENGE FROM HACKER RANK *********************************** //

/**
Two words are anagrams of one another if their letters can be rearranged to form the other word.

  Given a string, split it into two contiguous substrings of equal length. Determine the minimum
  number of characters to change to make the two substrings into anagrams of one another.

  Example
 s=abccde
Break s into two parts: 'abc' and 'cde'. Note that all letters have been used, the substrings are contiguous
 and their lengths are equal. Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde'
 which are anagrams. Two changes were necessary.

  Function Description

Complete the anagram function in the editor below.

  anagram has the following parameter(s):

string s: a string

Returns

int: the minimum number of characters to change or -1.

Input Format

The first line will contain an integer, q,
 the number of test cases.
  Each test case will contain a string s

  Constraints

consists only of characters in the range ascii[a-z].

  Sample Input

6
aaabbb
ab
abc
mnop
xyyx
xaxbbbxx

Sample Output

3
1
-1
2
0
1

Explanation

Test Case #01: We split
into two strings ='aaa' and ='bbb'. We have to replace all three characters from the first string with 'b' to make the strings anagrams.

  Test Case #02: You have to replace 'a' with 'b', which will generate "bb".

  Test Case #03: It is not possible for two strings of unequal length to be anagrams of one another.

  Test Case #04: We have to replace both the characters of first string ("mn") to make it an anagram of the other one.

  Test Case #05: and are already anagrams of one another.

  Test Case #06: Here S1 = "xaxb" and S2 = "bbxx". You must replace 'a' from S1 with 'b' so that S1 = "xbxb"
*/


function anagram(s) {
  // assume only lower case letter
  s = s.replace(/[^a-zA-Z]+/g, "").toLowerCase();

  // Not anagram then return -1
  if (s.length % 2 !== 0) return -1;

  // Split the string into two equal parts
  const midPoint = s.length / 2;
  const first = s.slice(0, midPoint);
  const second = s.slice(midPoint);

  // Count the frequency of characters in both substrings
  const freq = new Array(26).fill(0);

  for (let i=0; i < midPoint; i++) {
    freq[first.charCodeAt(i) - 97]++; // 97 is same as 'a'.charCodeAt(0)
    freq[second.charCodeAt(i) - 'a'.charCodeAt(0)]--; // 'a'.charCodeAt(0) is same as 97
  }

  // Calculate the minimum number of changes needed
  const changesNeeded = (freq.reduce((acc, curr) => acc + Math.abs(curr), 0)) / 2;

  return changesNeeded;
}

// ALTERNATIVE SOLN TO THE ABOVE
const anagrams = (s) => {
  const letters = s.replace(/[^a-zA-Z]+/g, "").toLowerCase();
  const mid = Math.floor(letters.length / 2);

  const left = letters.slice(0, mid);
  const right = letters.slice(mid);

  if (s.length % 2 !== 0) {
    return -1;
  }

  const leftHashMap = new Map();

  let countChangesRequired = 0;

  for (const char of left) {
    leftHashMap.set(char, (leftHashMap.get(char) || 0) + 1);
  }

  for (const char of right) {
    if (!leftHashMap.has(char) || leftHashMap.get(char) === 0) {
      countChangesRequired++;
    } else {
      leftHashMap.set(char, leftHashMap.get(char) - 1);
    }
  }

  return countChangesRequired;
}

// console.log(anagrams("xbcbbx"))
// console.log(anagrams("csgokgibmftzeozyadcofpouaerckbbpwhdg"))
// console.log(anagrams("njdtcezqezsjbgotwjtacwngzecihkxvtaqxepnkqiusoklnvepyceebiijqsinnkfkpu"))
// console.log(anagrams("bkhxeyirnfycfchjeptphnawckbmbxodkxcoxkiksinxkwjqncgxqgtusxhuuxxeuzvsmfegntdxpmofrwcjexd"))


/**
 * We consider two strings to be anagrams of each other if the first string's letters can be rearranged to
 * form the second string. In other words, both strings must contain the same exact letters in the same exact
 * frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
 *
 * Alice is taking a cryptography class and finding anagrams to be very useful. She decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?
 *
 * Given two strings,
 * and , that may not be of the same length, determine the minimum number of character deletions required to make and
 *
 * anagrams. Any characters can be deleted from either of the strings.
 *
 * Example.
 *
 * The only characters that match are the 's so we have to remove from and from for a total of
 *
 * deletions.
 *
 * Function Description
 *
 * Complete the makingAnagrams function in the editor below.
 *
 * makingAnagrams has the following parameter(s):
 *
 *     string s1: a string
 *     string s2: a string
 *
 * Returns
 *
 *     int: the minimum number of deletions needed
 *
 * Input Format
 *
 * The first line contains a single string,
 * .
 * The second line contains a single string,
 */

function makingAnagram(s1, s2) {
  const freq = new Array(26).fill(0);

  for (let i=0; i < s1.length; i++) {
    freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let i=0; i < s2.length; i++) {
    freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  const deletionNeeded = freq.reduce((acc, curr) => acc + Math.abs(curr), 0)

  return deletionNeeded;
}



function makingAnagrams(s1, s2) {
  const first = s1.replace(/\W/g, "").toLowerCase();
  const second = s2.replace(/[^a-zA-Z]+/g, "").toLowerCase();

  const freq1 = new Map();
  const freq2 = new Map();

  for (const char of first) {
    freq1.set(char, (freq1.get(char) || 0) + 1);
  }

  for (const char of second) {
    freq2.set(char, (freq2.get(char) || 0) + 1);
  }

  let numberOfDeletion = 0;

  for (const char of freq2.keys()) {
    if (freq1.get(char)) {
      numberOfDeletion += Math.abs(freq1.get(char) - freq2.get(char));
      freq1.delete(char);
      freq2.delete(char);
    } else
      numberOfDeletion += freq2.get(char);
  }

  for (const char of freq1.keys()) {
    numberOfDeletion += freq1.get(char);
  }


  return numberOfDeletion;
}

console.log(makingAnagrams("absdjkvuahdakejfnfauhdsaavasdlkj", "djfladfhiawasdkjvalskufhafablsdkashlahdfa"))

/**
 Dothraki are planning an attack to usurp King Robert's throne. King Robert learns of this conspiracy from Raven and
 plans to lock the single door through which the enemy can enter his kingdom.
 But, to lock the door he needs a key that is an anagram of a palindrome.
 He starts to go through his box of strings, checking to see if they can be rearranged into a palindrome.
 Given a string, determine if it can be rearranged into a palindrome. Return the string YES or NO.
 Example
 s=aabbccdd
 One way this can be arranged into a palindrome is abcddcba. Return YES.
 Function Description
 Complete the gameOfThrones function below.
 gameOfThrones has the following parameter(s):
 string s: a string to analyze
 Returns
 string: either YES or NO
 */

const gameOfThrones = (s) => {
  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  let count = 0;

  for (const v of freq.values()) {
    if (v & 2 !== 0) {
      count++;
    }
  }

  if (count <= 1) return "YES";

  return "NO";
}

// console.log(gameOfThrones("cdcdcdcdeeeef"))


/**
Given two strings, determine if they share a common substring.
 A substring may be as small as one character.
Example
These share the common substring
These do not share a substring.
Function Description
Complete the function twoStrings in the editor below.
twoStrings has the following parameter(s):
 string s1: a string
 string s2: another string
Returns
 string: either YES or NO
 */
const twoStrings = (s1, s2) => {
  const freq = new Map();

  for (const char of s1) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (const char of s2) {
    if (freq.get(char)) return "YES";
  }

  return "NO";
}

// console.log(twoStrings("abc", "bde"));


