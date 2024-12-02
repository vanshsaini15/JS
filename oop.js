//The new keyword is crucial for object-oriented programming in JavaScript,
//allowing for the creation of multiple instances of an object with shared properties and methods defined in a constructor.

class Person {
  talk() {
    console.log("talking");
  }
  walk() {
    console.log("walking");
  }
}

const person1 = new Person();
const person2 = new Person();
person1.talk();

person1.swim = () => {
  console.log("can swim");
};

person1.swim();
// person2.swim(); // don't have this function

console.log(person1._proto_);
console.log(person2._proto_);
