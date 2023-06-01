// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const sorting = unsortedStr => {
  const alphaString = unsortedStr.replace(/[^a-zA-Z0-9]+/g, '');
  const arr = alphaString.split('');

  for (let i = 1; i < alphaString.length; i++) {

    let j = i;
    
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr.join('');
}

console.log(sorting('562135689907'))