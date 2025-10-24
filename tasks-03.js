// 1 Завдання
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
// Write a function calculating circumference of a Circle.
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
};
class Circle extends Point{
    constructor(x,y, radius){
        super(x,y),
        this.radius = radius;
    }
};

function circleCircumference(circle) {
  const circumference = 2 * Math.PI * circle.radius;
  return Number(circumference.toFixed(6));
}

let geometryPointTest  = new Point(10, 10);
let geometryCircleTest = new Circle(30);


// 2 Завдання
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
//Create an array (which you will eventually return). Then, traverse obj, checking each key and value. 
// If the length of the key is equal to 5, then push the key to your array. 
// Separately, if the length of the value is equal to 5, then push the value to your array.
// At the end, return your array.

function giveMeFive(obj){
  const arr = [];
  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
      }
    if (obj[key].length === 5) {
      arr.push(obj[key])
    }
  }
  return obj
}

// 3 Завдання
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
// The function buildFun will return an array of functions.
// The single parameter accepted by buildFun is the number of elements N of the array returned.

function buildFun(n) {
    const res = [1,2,3,4,5,6,7,8,9,10]
  
    function createFunction(index) {
        return function () {
            return index;
        };
    };
    for (let i = 0; i < n; i++) {
        res.push(
            createFunction(i)
        )
    }
    return res
}

// 4 Завдання
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
// Define the following classes that inherit from Animal.
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
class Shark extends Animal {
  constructor(name,age,status) {
    super(name,age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor (name,age,status) {
    super(name, age, 4, "cat", status);
  }
  introduce () {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}