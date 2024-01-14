// run `node index.js` in the terminal
/**
 * Write a function to compress consecutive repeated characters in a string.
 *
 * For example:
 * Input "aaaabbb" returns  "a4b3".
 * Input of “zzbaaabk” returns “z2ba3bk
 */
function compressString(str) {
  let compressed = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];

    if (current === next) {
      count++;
    } else {
      compressed += current + (count > 1 ? count : "");
      count = 1;
    }
  }
  return compressed;
}
console.log(compressString("zzbaaabk"))