// write an algorithm to pick first character and last character and repeat
// the process until it has picked all character in that word
// example: given word 1. hlole, algorithm return hello
//                     2. wrdlo, algorithm return world

const pickFirstThenLastSequence = (word) => {
  // create a new string
  // create a while-loop until the no char in word left
  // have two variable firstChar and lastChar
  // if lastCharIndex is not equal 0 then add firstChar and lastChar to a string
  // else add char to the end of the string
  // return the new string
  word = word.split("");
  let result = "";
  while (word.length) {
    let firstChar = word.slice(0)[0], lastChar = word.slice(-1)[0];
    if (word.length - 1 !== 0) {
      result += firstChar + lastChar;
      word = word.slice(1, word.length - 1); // remove the first and last
    } else {
      result += word.slice(0)[0]; // use the final char
      word = ""  // reset word to nothing
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