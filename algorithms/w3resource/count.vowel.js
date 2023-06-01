// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

const countVowels = str => {
  const split = str.split('');
  
  let vcount = 0;

  const vowel = {a: '1', e: '2', i: '3', o: '4', u: '5', y: '6'};

  for (const char of split) {
    if (char.toLowerCase() in vowel) vcount += 1;
  }

  return vcount;
}

console.log(countVowels('The Quick Brown Fox Jump Over The Lazy Dog'));