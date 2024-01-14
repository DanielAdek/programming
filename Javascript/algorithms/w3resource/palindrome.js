// ====================================================
// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const palindrome = word => {
  if (typeof word !== 'string') return 'Please enter a word'
  
  const remove_non_char = word.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '')
  
  const toArray = remove_non_char.split('');
  
  const reversed = [];
  
  for (let i=0; i < toArray.length; i++) {
    reversed.push(toArray[(toArray.length - 1) - i]);
  }

  const is_palinedrome = reversed.join('');

  return remove_non_char === is_palinedrome;
}

console.log(palindrome('kafkak'));

// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function check_Palindrome(str_entry){
  // Change the string into lower case and remove  all non-alphanumeric characters
     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;
  // Check whether the string is empty or not
    if(cstr==="") {
      console.log("Nothing found!");
      return false;
    }
  // Check if the length of the string is even or odd 
    if ((cstr.length) % 2 === 0) {
      ccount = (cstr.length) / 2;
    } else {
  // If the length of the string is 1 then it becomes a palindrome
      if (cstr.length === 1) {
        console.log("Entry is a palindrome.");
        return true;
      } else {
  // If the length of the string is odd ignore middle character
        ccount = (cstr.length - 1) / 2;
      }
    }
  // Loop through to check the first character to the last character and then move next
    for (var x = 0; x < ccount; x++) {
  // Compare characters and drop them if they do not match 
      if (cstr[x] != cstr.slice(-1-x)[0]) {
        console.log("Entry is not a palindrome.");
        return false;
      }
    }
    console.log("The entry is a palindrome.");
    return true;
}
check_Palindrome('madam');
check_Palindrome('nursesrun');
check_Palindrome('fox');


// using two pointer to solve;
function isPalindrome(s) {
  const alphaNum = s.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();

  let leftIteration = 0;
  let rightIteration = alphaNum.length - 1;

  for (const char of alphaNum) {
    if (alphaNum[leftIteration] !== alphaNum[rightIteration]) {
      return false;
    }
    leftIteration++;
    rightIteration--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))



