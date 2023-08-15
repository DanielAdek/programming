const getLongestWord = (word) => {
  let longest = "", len = 0;

  for (const val of word.split(" ")) {
    const wordLength = val.length;

    if (len < wordLength) {
      len = wordLength;
      longest = val;
    }
  }
  return longest;
}

console.log(getLongestWord("Web Development Tutorial"));

