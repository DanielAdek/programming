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

function Man (name, gen) {
  Person.call(this, gen);
  this.name = name;
}

Man.prototype = Object.create(Person.prototype);

const mySelf = new Man("Daniel", "Male");

console.log(mySelf);


const Animal = function (type) {
  this.type = type
}

Animal.prototype.move = function () {
  return `${this.name} is moving`
}

const dog = new Animal();
dog.name = "Rookie";

console.log(dog.move());

Object.prototype.lookUp = function (prototype) {
  // Have a baseline
  if (Object.getPrototypeOf(this) === null) {
    return Object.getPrototypeOf(this);
  }

  if (prototype.isPrototypeOf(this)) {
    return prototype;
  }

  return Object.getPrototypeOf(this).lookUp(prototype);
}

const Cats = function () {}

Object.setPrototypeOf(Cats.prototype, Animal.prototype);

const Flufikin = function () {}

Object.setPrototypeOf(Flufikin.prototype, Cats.prototype);

const kinpy = new Flufikin();

console.log(kinpy.lookUp(Animal));
