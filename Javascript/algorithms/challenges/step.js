const generateSteps = (n) => {
  let result = ""
  for (let i=0; i < n; i++) {
    result += generatePound(i) + generateSpaces(i) + "\n"
  }
  return result;
}

const generateSpaces = function (n) {
  let emptySpaces = "";
  for (let i=0; i <= n; i++) {
    emptySpaces += " ";
  }
  return emptySpaces;
}

const generatePound = function (n) {
  let pound = "";
  for (let i=0; i <= n; i++) {
    pound += "#"
  }
  return pound;
}

// console.log(generateSteps(3));


// correction
const step = (n) => {
  for (let row=0; row < n; row++) {
    let stairs = "";
    for (let col=0; col <= n; col++) {
      stairs += col <= row ? "#" : " "
    }
    console.log(stairs);
  }
}

step(5)