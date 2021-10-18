// 1. Hoisting

// normal function declaration

console.log(hello()); // Hello World

function hello() {
  return "Hello World";
}

// normal function expression

// console.log(helloExp()); // ReferenceError: Cannot access 'helloExp' before initialization
let helloExp = function () {
  return "Hello World from helloExp";
};
console.log(helloExp()); // Hello World from helloExp

// arrow function

// console.log(helloArrow()); //ReferenceError: Cannot access 'helloArrow' before initialization
let helloArrow = () => {
  return "Hello World from helloArrow";
};
console.log(helloArrow()); // Hello World from helloArrow

// 2. this Keyword

let user = {
  uName: "Hinata",
  name1: () => {
    console.log("this name from arrow function: " + this.uName);
  },
  name2() {
    console.log("this name from normal function: " + this.uName);
  },
};

user.name1(); // this name from arrow function: undefined (No this keyword for arrow function)
user.name2(); // this name from normal function: Hinata

// 3. Arguments Objects (spread operator)

let user2 = {
  show: () => {
    console.log("Arguments from arrow function: ", ...arguments);
  },
  show2() {
    console.log("Arguments from normal function: ", ...arguments);
  },
};

// user2.show(1, 2, 3); // ReferenceError: arguments is not defined (Arrow functions do not have arguments)
user2.show2(1, 2, 3); // Arguments from normal function:  1 2 3

// let fun1:(fun, args) => fun(...args);

// 4. Constructors

/**
 * Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’.
 * the arrow functions are only ‘callable’ and not constructible
 */

let x = function () {
  console.log(arguments);
};
new x(1, 2, 3); // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

let y = () => {
  console.log(arguments);
};
// new y(1, 2, 3); // y is not a constructor
