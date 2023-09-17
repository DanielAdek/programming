function MyFunction(name) {
  this.name = name;
}

const obj = new MyFunction("Brandan Eich");

const caller = function (name, currentYear) {
  this.name = name;
  this.age = currentYear - 1961;
  return `${this.name} is ${this.age} years old`;
}

const objCall = caller.call(obj, "Brendan Eich", 2023);
const objApply = caller.apply(obj, ["Eich Brendan", 2023]);

console.log(objCall);
console.log(objApply);


// FOR CURRYING USE CASE

const curryFunc1 = caller.bind(null, "Bren Eich");
const curryFunc2 = curryFunc1.call(null, 2023);

console.log(curryFunc2);


// WHILE USING DURING CONSTRUCTOR FUNCTION INHERITANCE

function BaseFunction (prop) {
  this.prop = prop
}

function InheritBase (initProp, baseProp) {
  BaseFunction.call(this, baseProp); // this line invokes the BFunc and gives access to the object that is being created from InheritedBase

  this.initProp = initProp;
  // ...other properties, and ...more...
}

InheritBase.prototype = Object.create(BaseFunction.prototype); // created inheritance



