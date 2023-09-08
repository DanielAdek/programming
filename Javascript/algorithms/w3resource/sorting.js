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

const sortByBubble = unsortedStr => {
  const alphaString = unsortedStr.replace(/[^a-zA-Z0-9]+/g, '');
  const arr = alphaString.split('');

  for (let i = 0; i < alphaString.length; i++) {

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1]; // get a reference to the lesser

        // then swap
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr.join('');
}

console.log(sortByBubble('562135689907'))