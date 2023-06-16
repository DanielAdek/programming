const fs = require('fs');


const start = Date.now();
fs.readFile(__dirname, 'utf-8', (err, content) => {
  console.log('1: ', Date.now() - start);
});

fs.readFile(__dirname, 'utf-8', (err, content) => {
  console.log('2: ', Date.now() - start);
});

fs.readFile(__dirname, 'utf-8', (err, content) => {
  console.log('3: ', Date.now() - start);
});

fs.readFile(__dirname, 'utf-8', (err, content) => {
  console.log('4: ', Date.now() - start);
});

fs.readFile(__dirname, 'utf-8', (err, content) => {
  console.log('5: ', Date.now() - start);
});

fs.readFile(__dirname, 'utf-8', (err, content) => {
  console.log('6: ', Date.now() - start);
});

fs.readFile(__dirname, 'utf-8', (err, content) => {
  console.log('7: ', Date.now() - start);
});

fs.readFile(__dirname, 'utf-8', (err, content) => {
  console.log('8: ', Date.now() - start);
});

fs.readFile(__dirname, 'utf-8', (err, content) => {
  console.log('9: ', Date.now() - start);
});

fs.readFile(__dirname, 'utf-8', (err, content) => {
  console.log('10: ', Date.now() - start);
});