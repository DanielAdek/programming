// Write a JavaScript function which returns the n rows by n columns identity matrix.

const matrix = n => {
  for (let i=1; i < n; i++) {
    
    for (let j=i; j < n; j++) {
      
      if (i === j) console.log(i)
      else console.log('0');
    }

  console.log('------------------')
  }
}

matrix(5)