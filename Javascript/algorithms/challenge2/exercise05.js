/** You are given a string containing characters  and  only.
 * Your task is to change it into a string such that there are no matching adjacent characters. To do this,
 * you are allowed to delete zero or more characters in the string.
  Your task is to find the minimum number of required deletions.
  Example
Remove an  at positions  and  to make  in  deletions.
  Function Description
Complete the alternatingCharacters function in the editor below.
  alternatingCharacters has the following parameter(s):
string s: a string
Returns
int: the minimum number of deletions required
Input Format
The first line contains an integer , the number of queries.
  The next  lines each contain a string  to analyze.
  Constraints
Each string  will consist only of characters  and .
  Sample Input
5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB
Sample Output
3
4
0
0
4
Explanation
The characters marked red are the ones that can be deleted so that
 the string does not have matching adjacent characters.
 */

const alternatingChars = (string) => {
  // we have an array of char that will be returned
  // we get the last element in the array and check if it is the same as the current element in the iteration
  // if same continue else add to the array
  // then delete it from the string and reset the string
  // then return the original string length minus the array length

  let str = string.split("");
  const altStr = [];
  do {
    const lastChar = altStr[altStr.length - 1];
    const currentChar = str[0];
    if (currentChar !== lastChar) {
      altStr.push(currentChar);
    }
    str = str.slice(1, str.length);
  } while (str.length)
  return string.length - altStr.length;
}

const alternatingChars2 = (string) => {
  // we have an array of char that will be returned
  // we get the last element in the array and check if it is the same as the current element in the iteration
  // if same continue else add to the array
  // then return the original string length minus the array length

  const altStr = [];
  for (let i=0; i < string.length; i++) {
    const lastChar = altStr[altStr.length - 1];
    if (string[i] !== lastChar) {
      altStr.push(string[i]);
    }
  }
  return string.length - altStr.length;
}

console.log(alternatingChars("5"))
console.log(alternatingChars("AAAA"))
console.log(alternatingChars("BBBBB"))
console.log(alternatingChars("ABABABAB"))
console.log(alternatingChars("BABABA"))
console.log(alternatingChars("AAABBB"))