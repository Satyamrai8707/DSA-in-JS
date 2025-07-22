// global scope

// var firstName = "satyam"

// function name(){
//     console.log(firstName);

// }
// name(); 
// console.log(firstName);


//function scope

// function foo(){
//     var x = 10
//     console.log(x);
// }
// foo()
// console.log(x); // ReferenceError: x is not defined

// block scope


if (true) {
    var z = 3;
  }
  console.log(z); // ✅ 3 — not block scoped!


// let and const are block scoped
// if (true) {
//     let a = 5;
//     const b = 10;
//     var c = 'Satyam'
//     console.log(a, b); // ✅ 5 10
// }
// console.log(c); // ReferenceError: a is not defined
  
//Hoisting

console.log(d); // undefined
var d = 20;
// console.log(e); // ReferenceError: Cannot access 'e' before initialization
let e = 30;
// console.log(f); // ReferenceError: Cannot access 'f' before initialization
const f = 40;

//Lexical Scope

function outerFunction() {
    var outerVar = 'I am from outer function';

    function innerFunction() {
        console.log(outerVar); // Accessing variable from outer function
    }

    innerFunction();
}
outerFunction(); // Output: I am from outer function
// Closure

function makeCounter() {
    let count = 0; // Private variable


    return function() {
        count += 1; // Accessing and modifying the private variable
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // Output: 1

//Module Scope

