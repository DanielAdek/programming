// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

const findLongestWord = phrase => {
  if (typeof phrase != 'string') return 'Invalid Input';

  const splited_word = phrase.split(' ');

  for (let i = 0; i < splited_word.length; i++) {
    let measure = splited_word[i].length;

    while (measure < check_point) {

      if (measure < check_point) measure = check_point;

      if (check_point === measure) return splited_word[i];

    }
  }
  return phrase;
}

console.log(findLongestWord('The quick brown fox jump over the lazy dog'))