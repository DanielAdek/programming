// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

const reverseNumber = number => {
  if (typeof number != 'number') return 'Please enter number';

  const toStringArray = number.toString().split('');

  const reversed = [];

  for (let i = toStringArray.length; i >= 0; i--) {
    reversed.push(toStringArray[i]);
  }

  return Number(reversed.join(''));
}

console.log(reverseNumber())

// Mathematical solution, but cannot work for decimal
function reverse_a_number(num) {
  let reversed_num = 0;
  while (num !== 0) {
    reversed_num = reversed_num * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return reversed_num;
}
const num = 1234567;
console.log("Original number: "+num);
const result = reverse_a_number(num);
console.log("Reversed number: "+result);
