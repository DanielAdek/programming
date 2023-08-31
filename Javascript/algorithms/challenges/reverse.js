const reverseInt = (n) => {
  const charsArray = n.toString().split("");
  let reversed = "";
  for (const char of charsArray) {
    reversed = char + reversed;
  }
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(90))
console.log(reverseInt(-90))
console.log(reverseInt(-0))
console.log(reverseInt(543))