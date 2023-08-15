const pyramid = (n) => {
  let midpoint = Math.floor((2 * n - 1) / 2);
  for (let row=0; row < n; row++) {
    let triangle = "";

    for (let col=0; col < 2 * n - 1; col++) {

      if (midpoint - row <= col && midpoint + row >= col) {
        triangle += "#"
      } else {
        triangle += " "
      }
    }
    console.log(triangle)
  }
}

pyramid(5)
