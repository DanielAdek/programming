const capitalise = (sentence) => {
  const sentenceArray = sentence.toLowerCase().split(" ");
  const capitalized = [];
  for (const val of sentenceArray) {
    capitalized.push(val[0].toUpperCase().concat(val.slice(1)))
  }
  return capitalized.join(" ");
}

console.log(capitalise("the quick brown fox jump over the lazy dog"));
console.log(capitalise("lastly, he was released"));
