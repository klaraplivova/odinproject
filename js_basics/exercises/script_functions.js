function myFunction() { // function with no parameters
  alert("hello");
}

myFunction(); // calls the function once

const myText = "I am a string";
const newString = myText.replace("string", "sausage"); //needs 2 parameters

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" "); // optional parameter
console.log(madeAString); // returns 'I loe chocolate frogs'

const madeAnotherString = myArray.join(); // without parameter the function iserts ","
console.log(madeAnotherString); // returns 'I,love,chocolate,frogs'

function hello(name = "Chris") { // setting defaut parameter when no input is added
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

const textBox = document.querySelector("#textBox");
const output1 = document.querySelector("#output");

// textBox.addEventListener("keydown", function (event) { // anonyous function
  // console.log(`You pressed "${event.key}".`);
// });

// textBox.addEventListener("keydown", event => { // arrow function
  // console.log(`You pressed "${event.key}".`);
// });

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

// the function above can be shortened to: 
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
// or
function checkAge2(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

function min(a,b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

function min2(a, b) {
    return a < b ? a : b;
}

function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => { alert("You agreed."); },
  () => { alert("You canceled the execution."); }
);

