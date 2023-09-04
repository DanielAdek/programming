let i = 0;

const postI = i++
console.log("POST INCREMENT: ", postI)

let ii = 0
const preI = ++ii;
console.log("PRE INCREMENT: ", preI)

let iii = 0
const compoundI = iii += 1;
console.log("COMPOUND ASSIGNMENT: ", compoundI)


const person = {
  #name: "",
  #age: 0,

  set seAge(value) {
    if (!value) {
      return process.stdout.write("Invalid Input");
    }
    this.#age = value;
    return this;
  },
  set setName(value) {
    if (!value) {
      return process.stdout.write("Invalid Input");
    }
    this.#name = value;
    return this;
  },

  get getName() {
    return this.#name;
  },

  get getAge() {
    return this.#age;
  }
}


// const person = new Person();
person.setName("john")