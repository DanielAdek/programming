const anagramFirstSolution = (param1, param2) => {
  const str1ToObject = setObjectValues(param1);
  const str2ToObject = setObjectValues(param2);

  if (Object.keys(str1ToObject).length !== Object.keys(str2ToObject).length) return false;

  for (const key in str2ToObject) {
    if (str2ToObject[key] !== str1ToObject[key]) {
      return false
    }
  }
  return true;
}

const setObjectValues = (word) => {
  const strToObject = {};
  for (const val of word.replace(/\W/g, "").toLowerCase()) {
    strToObject[val] = strToObject[val] + 1 || 1;
  }
  return strToObject;
};

console.log(anagramFirstSolution("kaka", "akak"))


const anagramSecondSolution = (stringA, stringB) => cleanString(stringA) === cleanString(stringB);

const cleanString = (str) => str.replace(/\[^a-zA-Z0-9]+/g, '').toLowerCase().split("").sort().join("");

console.log(anagramSecondSolution("dog", "god"))