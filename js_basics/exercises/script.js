// Variables

// creation
let name = "John";
let surname = "Doe";

// re-assigning
let age = 11;
age = 54;

// const prevent re-assign
const pi = 3.14;
// pi = 10; - outputs error 

// create variable using different variable
let a = 10;
let b = 7 * a;  //outputs 70

const max = 57;
const actual = max - 13;
const percentage = actual / max; // outputs 0.7719

// naming conventions

const MY_BIRTHDAY = "10.7.2003" // hard-coded values should be in caps
// const myAge = someCode(BIRTHDAY) // less specific values

// strings in maths

let x = "10";
let y = 10;
// console.log(x + y); - outputs 1010

// Data types
// numbers

let n = 123;
n = 12.345; // represents both integer and floating point numbers

let m = 1 / 0 // outputs Infinity, greater than any number
let o = "Hi!" / 2 // outputs NaN = computational error

const myString = "123";
const myNum = Number(myString); // converts string to number if possible


// bigint

q = 9007199254740991 + 1; // 9007199254740992
r = 9007199254740991 + 2; // 9007199254740992 -> JS can't store larger values
const bigInt = 12345678901234689012345689001236890n; // n at the end represents integers of arbitrary lenght

// strings

let str1 = "Hello!"; // use either " or '
let str2 = `Hello! ${str1}`; // with backticks you can embed another expression(s)
let str3 = `${str2} number ${2 + 1}`; // outputs "Hello! Hello! number 3"

let str4 = `For the moment I'm going to bed because it's late
and I wish you a good night and good luck
with a handshake.` // bacticks can be stretched over multiple rows
let str5 = "For the moment I'm going to bed because it's late/nand I wish you a good night and good luck/nwith a handshake." // the same can be achieved using /n

const bigmouth = 'I\'ve got no right to take my place…'; // this prevents using the quotation marks

const myNum2 = 123;
const myString2 = String(myNum2); // converts all numbers to strings

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length; // outputs 26
let char = text.charAt(0); // outputs A
char = text.charCodeAt(0); // outputs UTF-16 code of A
char = text.charCodeAt(56); // outputs Nan
let at = text.at(2); // outputs C 
at = text.at(56); // outputs undefied

let text1 = "Hello";
let text2 = "World";
let concat = text1.concat(" ", text2); // outputs "Hello World"

let text3 = "Apple, Banana, Kiwi" 
let part = text.slice(7) // slices out the rest of the string
part = text3.slice(-12) // if negative it's counted from the end of the string
part = text3.slice(7, 13) // outputs the extracted part "Banana"
part = text3.substring(7, 6) // takes the lenght of the extracted part -> outputs "Banana"

let toUpperCase = text3.toUpperCase() // .toLowercase does the opposite

let unicodeCharcter = "Hello world \uD800" // replaced with Unicode character

let text4 = "     Hello world     ";
let trim = text4.trim(); // removes tabs from both sides
let trimStart = text4.trimStart(); // removes tabs only from start, .trimEnd

let text5 = "5";
let padStart = text5.padStart(4,"0") // pads with 0 until lenht 4 -> outputs 0005, .padEnd 

let text6 =  "Hello world"
let repeat = text6.repeat(4)  // pretty self explanatory

let text7 = "Please visit Microsoft and Microsoft!";
let replace = text7.replace("Microsoft", "Apple"); // replaces only first match
replace = text7.replace("MICROSOFT", "Apple"); // is case sensitive - can be insensitivised by /MICROSOFT/i
replace = text7.replaceAll("Microsoft", "Apple"); // replaces all matches - alternatively /Microsoft/g

let text8 = "Hello, world,!";
let split = text8.split(","); // splits by comma -> outputs Array(3) [ "Hello", " world", "!" ]
split = text8.split(""); // outputs array with single characters

// boolean

let nameFieldChecked = true; // can be true or false, in this case the name field is checked

// null

let age2 = null; // signals unknow value

// undefined

let age3; // no value assigned -> outputs undefined

// typeof operator

typeof age2; // outputs undefined
typeof 10n; // outputs bigint

// Comparisons

let isGreaterNumber = 4 > 1; // outputs true

let isGreaterString = "Z" > "A"; // outputs true
isGreaterString = "Bee" > "Be"; // words are compared letter-by-letter Unicode index -> outputs true
isGreaterString = "a" > "A"; // outputs true

let isGreaterMix = "02" > 1; // strings are automatically converted to numbers if possible -> outputs true
let isGreaterBoolean = isGreaterString == isGreaterNumber; // converts to 1 == 1 -> outputs true

let isEqual = 0 == false; // regular equality checks doesn't diferentiate between 0 (or empty string) and false -> outputs true
isEqual = null == undefined; // equal each other
let isStrictEqual = 0 === false;  // strict equality checks the data types -> outputs false
isStrictEqual = null === undefined; // different types -> outputs false

console.log(isStrictEqual)