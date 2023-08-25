function* numbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const generatorNumber = numbers();
console.log(...generatorNumber);
