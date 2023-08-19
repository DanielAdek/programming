const compareTwoStrings = (stringA, stringB) => {
  const cleanedStringA = cleanString(stringA);
  const cleanedStringB = cleanString(stringB);
  if (cleanedStringA !== cleanedStringB) return false;
  return true;
}

const cleanString = (str) => {
  const result = [];

  for (const val of str.toLowerCase().split("")) {
    if (new RegExp(/\w/).test(val)) {
      result.push(val)
    }
  }

  console.log(result);
  return result.join("")
}


console.log(compareTwoStrings("Ch$ri##st", "christ"))