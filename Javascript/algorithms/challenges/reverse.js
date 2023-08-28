const reverseInt = (n) => {
  const charsArray = n.toString().split("");
  let reversed = "";
  for (const char of charsArray) {
    reversed = char + reversed;
  }
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(90))
console.log(reverseInt(-90))
console.log(reverseInt(-0))
console.log(reverseInt(543))



// write an algorithm to pick first character and last character and repeat
// the process until it has picked all character in that sequence
// example: given 1. hlole, algorithm return hello
//                2. wrdlo, algorithm return world

const pickFirstThenLastSequence = (word) => {
  // create a new string
  // create a while-loop until the last char in word
  // have two variable firstChar and lastChar
  // if firstCharIndex is not equal lastCharIndex then add firstChar and lastChar to a string
  // else add char to the end of the string
  // return the new string
  word = word.split("");
  let result = "";
  while (word.length) {
    const start = 0, end = word.length - 1;
    let firstChar = word[start], lastChar = word[end];
    if (start !== end) {
      result += firstChar + lastChar;
      word.splice(start, 1); // remove the start char
      word.splice(end - 1, 1) // remove the end char
    } else {
      result += word[start]; // use the final char
      word.splice(start, 1)  // remove the final char
    }
  }
  return result;
}

console.log(pickFirstThenLastSequence("hlole"));

const pickFirstThenLastSequenceSoln2 = (word) => {
  // create a new string with the first char
  // create a while-loop until the last char in word
  // create a for-loop that reverses a string within the will loop
  // after the for-loop, then pick the first char and add to the new string
  // then reset word to reversed string and reset reversed to initial state
  // return the new string
  let result = word[0];
  let reversed = "";
  do {
    for (let i=1; i < word.length; i++) {
      reversed = word[i] + reversed;
    }
    result += reversed[0];
    word = reversed.slice(0, word.length - 1);
    reversed = "";
  } while (word.length > 1)
  return result;
}

console.log(pickFirstThenLastSequenceSoln2("wrdlo"))