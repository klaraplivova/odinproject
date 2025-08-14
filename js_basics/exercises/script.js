// Variables

// creation
let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

// re-assigning
let age = 11;
console.log(age); // outputs 11

age = 54;
console.log(age); // outputs 54

// const prevent re-assign
const pi = 3.14;
// pi = 10; - outputs error 
console.log(pi); 

// maths
console.log((3 + 2) - 76 * (1 + 1))
console.log((4+6+9)/77)

// create variable using different variable
let a = 10;
let b = 7 * a; 
console.log(b) //outputs 70

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage) // outputs 0.7719

// naming conventions

const MY_BIRTHDAY = "10.7.2003" // hard-coded values should be in caps
// const myAge = someCode(BIRTHDAY) // less specific values

// strings

let x = "10";
let y = 10;
console.log(x + y); //outputs 1010