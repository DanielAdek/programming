const isPalindrome = (str) => {
  let reversed = "";
  const charsArray = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "").split("");

  for (const char of charsArray) {
    reversed = char + reversed;
  }

  return charsArray.join("") === reversed;
}

console.log(isPalindrome("aka")) // should return true
console.log(isPalindrome("kaka")) // should return false
console.log(isPalindrome("nurses run")) // should return true

function checkPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const str1 = 'madam';
const str2 = 'nurses run';
const str3 = 'fox';
console.log(checkPalindrome(str1));
console.log(checkPalindrome(str2));
console.log(checkPalindrome(str3));

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
check_Palindrome('nurses run');
check_Palindrome('fox');