// Write a JavaScript function that accepts a string as a parameter and converts 
// the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

const capitalize = word => {
  if (typeof word != 'string') return 'Invalid Input';

  const splited_word = word.split(' ');

  for (let i=0; i < splited_word.length; i++) {
    splited_word[i] = splited_word[i][0].toUpperCase() + splited_word[i].slice(1).toLowerCase();
  }

  return splited_word.join(' ');
}

console.log(capitalize("the quick brown fox jump over the lazy doG"))