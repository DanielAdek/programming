function vowels(str) {
  const vowelLetters = {a: 0, e: 0, i: 0, o: 0, u: 0};

  for (const char of str.split("")) {
    if (char in vowelLetters) {
      vowelLetters[char] += 1;
    }
  }

  return Object.values(vowelLetters).reduce((acc, cur) => cur + acc, 0);
}

console.log(vowels("Hi there!"));