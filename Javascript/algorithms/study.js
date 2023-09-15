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
  name: "",
  age: 0,

  set seAge(value) {
    if (!value) {
      return process.stdout.write("Invalid Input");
    }
    this.age = value;
    return this;
  },
  set setName(value) {
    if (!value) {
      return process.stdout.write("Invalid Input");
    }
    this.name = value;
    return this;
  },

  get getName() {
    return this.name;
  },

  get getAge() {
    return this.age;
  }
};



const obj = { name: "John", deep: { q: "something"}, fu() { return "nice"}}
const obj1 = JSON.parse(JSON.stringify(obj));
const obj2 = Object.create(obj);
const obj3 = obj

const cpObjForIn = {}

for (const key in obj) {
  cpObjForIn[key] = obj[key];
}

obj2.deep.q = "pete";
// obj2.name = "john"

// console.log(Object.keys(obj));



const nestedObject = new Object();

nestedObject.human = {
  man: {
    name: "Branden",
    occupation: {
      organization: {
        name: "ECMAScript"
      },
      job: {
        title: "Software Engineer",
        salary: 200000
      }
    },
    size: {
      height: "30rem"
    }
  }
}

const traverseObject = (object) => {
  const propNames = Reflect.ownKeys(object);

  const result = new Object();

  for (const prop of propNames) {
    const value = object[prop];

    if (value && typeof value === "Object") {

      result[prop] = traverseObject(value);
    }
    return result;
  }
}

console.log(traverseObject(nestedObject))