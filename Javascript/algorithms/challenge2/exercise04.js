/** A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.
 Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.
  Example
Delete  from  and  from  so that the remaining strings are  and  which are anagrams. This takes  character deletions.
 Function Description
 Complete the makeAnagram function in the editor below.
 makeAnagram has the following parameter(s):

string a: a string
string b: another string
Returns
int: the minimum total characters that must be deleted
Input Format
The first line contains a single string, .
The second line contains a single string, .
Constraints
The strings  and  consist of lowercase English alphabetic letters, ascii[a-z].
  Sample Input
cde
abc
Sample Output
4
Explanation
Delete the following characters from the strings make them anagrams:
  Remove d and e from cde to get c.
  Remove a and b from abc to get c.
  It takes deletions to make both strings anagrams.
*/

// SOLUTION BREAK DOWN
// create two empty non-primitive object.js: charModeA and charModeB
// create a counter: this will hold the value of chars to delete
// create a loop to make charModeA key-value pair with the first param: a
// do the same with the second param: b
// create a check if the char of a is not in b then increment counter by the value of the char
// check if the mode is not same, then subtract and add result to counter;
// return counter;

const makeAnagram = (a, b) => {
  const charModeA = makeKeyValuePairs(a);
  const charModeB = makeKeyValuePairs(b);

  const deletionNeed1 = getDeletion(charModeA, charModeB);
  const deletionNeed2 = getDeletion(charModeB, charModeA);


  return deletionNeed1 + deletionNeed2;
}

const makeKeyValuePairs = (string) => {
  const cleanString = string.replace(/\W/, "");
  const keyValuePair = {};
  for (const val of cleanString) {
    keyValuePair[val] = keyValuePair[val] + 1 || 1;
  }
  return keyValuePair;
}
const getDeletion = (obj1, obj2) => {
  let counter = 0;
  for (const char in obj1) {
    if (!obj2[char]) {
      counter += obj1[char];
    } else if (obj1[char] > obj2[char]) {
      counter += Math.abs(obj1[char] - obj2[char])
    }
  }
  return counter;
}

console.log(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"))


// SOLUTION FROM CHAT-GPT

function makeAnagramGPTSoln(a, b) {
  const charCount = new Array(26).fill(0); // Assuming only lowercase letters

  // Count character frequencies in string a
  for (const char of a) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
    charCount[index]++;
  }

  // Subtract character frequencies in string b
  for (const char of b) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
    charCount[index]--;
  }

  // Count the total number of deletions required
  const deletions = charCount.reduce((acc, count) => acc + Math.abs(count), 0);

  return deletions;
}

console.log(makeAnagramGPTSoln("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"))