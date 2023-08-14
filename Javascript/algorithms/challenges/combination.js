// Write a JavaScript function that generates all combinations of a string.

const allStringCombination = (str) => {
  const charsArray = str.replace(/[^a-zA-Z0-9]+/g, "").split("");
  const start = 0, combinations = [];
  const len = charsArray.length;

  const backTrack = (currentIteration, currentValue) => {
    combinations.push(currentValue);

    for (let i=currentIteration; i < len; i++) {
      currentValue += charsArray[i];
      backTrack(i + 1, currentValue);
      currentValue = currentValue.slice(0, -1);
    }
  }

  backTrack(start, '');

  return combinations.slice(1, combinations.length).join(",");
}

console.log(allStringCombination("dog"))


function getCombinations(input) {
  const output = [];

  function backtrack(start = 0, current = '') {
    output.push(current);

    for (let i = start; i < input.length; i++) {
      current += input[i];
      backtrack(i + 1, current);
      current = current.slice(0, -1);
    }
  }

  backtrack();

  return output.join(',');
}

const inputString = 'dog';
const combinations = getCombinations(inputString);
console.log(combinations);



function generateCombinations(inputString) {
  const result = [];

  function backtrack(currentCombination, remainingCharacters) {
    if (remainingCharacters.length === 0) {
      result.push(currentCombination);
      return;
    }

    for (let i = 0; i < remainingCharacters.length; i++) {
      const nextChar = remainingCharacters[i];
      const newCombination = currentCombination + nextChar;
      const newRemaining = remainingCharacters.slice(0, i) + remainingCharacters.slice(i + 1);
      backtrack(newCombination, newRemaining);
    }
  }

  backtrack('', inputString);
  return result;
}

const input = 'abc';
const combinations = generateCombinations(input);
console.log(combinations);
