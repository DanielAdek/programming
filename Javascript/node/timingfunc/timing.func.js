const fruitJuice = ['Mango'];

const readArray = timer => {
  for (const fruit of fruitJuice) {
    console.log('From ' + timer + ': This is ' + fruit + '\n');
  }
}

const sayHi = () => console.log('Hi There!');

const great = () => console.log('Hello World!');

setImmediate(() => readArray('Immediate'));

process.nextTick(sayHi);

setTimeout(() => readArray('Timeout'), 100);

great();