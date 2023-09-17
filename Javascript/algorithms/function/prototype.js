function Person (gender) {
  this.gender = gender
}

const person = new Person();

console.log(person.__proto__ === Person.prototype) // true
console.log(person.__proto__.constructor === Person.prototype.constructor) // true
console.log(Person.prototype.isPrototypeOf(person)); // true


Person.prototype.isHuman = function () {
  return true;
}

// Inheritance

function Man (name) {
  Person.call(Man)
  this.name = name;
}

const man = Object.create(Person.prototype);

console.log(man, man.isHuman());
