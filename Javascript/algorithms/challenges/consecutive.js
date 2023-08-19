// run `node index.js` in the terminal
/**
 * Write a function to compress consecutive repeated characters in a string.
 *
 * For example:
 * Input "aaaabbb" returns  "a4b3".
 * Input of “zzbaaabk” returns “z2ba3bk
 */

// solution
function compressString(input) {
  if (input.length === 0) {
    return "";
  }

  let compressed = "";
  let currentChar = input[0];
  let count = 0;

  for (let i = 0; i < input.split("").length; i++) {
    if (input[i] === currentChar) {
      count++;
    } else {
      compressed += currentChar + (count > 1 ? count : "");
      currentChar = input[i];
      count = 1; // reset count
    }
  }

  compressed += currentChar + (count > 1 ? count : "");

  return compressed;
}
console.log(compressString("zzbaaabk"))