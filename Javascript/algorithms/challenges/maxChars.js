const maxChars = (input) => {
  const split = input.split("");
  const metric = {}
  for (const inp of split) {
      if (inp in metric) {
        metric[inp] += 1
      } else metric[inp] = 1
  }

  let highest = 0, mode = "";
  for (const key in metric) {
    if (key != " ")
      if (metric[key] > highest) {
        highest = metric[key];
        mode = key;
      }
  }
  return mode;
}

console.log(maxChars("the Quick brown fox jump over the lazy dog"))