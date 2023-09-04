const fs = require('fs');

// Synchronous function to read a file
function readFileSyncExample() {
  try {
    // Synchronously read the contents of a file
    const data = fs.readFileSync('sample.txt', 'utf-8');

    // This code block is executed only after the file is read
    console.log('File contents:');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

console.log('Before calling readFileSyncExample');
readFileSyncExample();
console.log('After calling readFileSyncExample');

