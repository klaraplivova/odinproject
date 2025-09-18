// Notes

let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits[0]); // prints Apple

fruits[2] = "Pear"; // Rewrites plum to pear
fruits[3] = "Banana"; // Adds an item - now the array has lenght 4
// console.log(fruits.at[-1]) // Takes the end of the array

// console.log(fruits.pop()); // Removes last item in the list
fruits.push("Pear"); // Adds last item. Can be multiple items.
//  .shift() and .unshift() works the same except it works from the begginig of the array

fruits.splice(1, 1); // removes 1 element at index 1
fruits.splice(0, 2, "Let's", "dance"); // removes 2 objects at index 0 and adds Let's dance in their place

// let arr = ["Apple", {name: "John"}, true, function () {alert("hello")}, ]; // Can store anything

//console.log(arr[1].name) // prints John
// arr[3](); // runs the hello function

//console.log(String(arr)); // returns the array as 1 string

let letters = ["t", "e", "s", "t"];

// console.log( letters.slice(1, 3) ); // e,s (copy from 1 to 3)

// console.log( letters.slice(-2) ); // s,t (copy from -2 till the end)

delete letters[1] // deletes the index but it stays empty

let numbers = [1, 2];

numbers.concat([3, 4]); // Adds to the end of the array. Prints 1, 2, 3, 4
numbers.indexOf(0); // Prints 1
numbers.includes(false); // True
let result = numbers.reduce((sum, current) => sum + current, 0); // Prints 15

// ["Bilbo", "Gandalf", "Nazgul"].forEach(); // Calls for each element

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1); // Prints John
let someUsers = users.filter(item => item.id < 3); // Prints array of the first 2 users

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length); // Prints 5, 7, 6


const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map((num) => num + 1);
// console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

// Exercises

function sumOfTripledEvens(array) {
let sum = 0;
  for (let i = 0; i < array.length; i++) {

    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}



let array = [1, 2, 3, 4, 5]


let filteredArray = array.filter((num) => num % 2 === 0)
let mappedArray = filteredArray.map((num) => num * 3)
let reducedArray = mappedArray.reduce((total, currentItem) => total += currentItem);

function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

// let sum = 0
// let mappedArray = array.map((arr) => {
//     if (arr % 2 === 0) {
//         sum += arr * 3;
//     }
//     }
// )


function camelize (string) {
    let arrStr = string.split("-");
    let camelized = "";
    camelized += arrStr[0];

    for (item of arrStr.slice(1)) {
        let firstCapitalizedLetter = item[0].toUpperCase();
        let allOtherLetters = item.slice(1);
        let wordWithFirstLetterCapitalized = firstCapitalizedLetter + allOtherLetters;
        camelized += wordWithFirstLetterCapitalized;
    }

    return camelized;
}

function camelise (string) {
    return string 
        .split("-")
        .map ((word, index) => {
            if (index === 0) {
                return word;
            } else {
                return word[0].toUpperCase() + word.slice(1)
            }
        })
        .join("")
}

function filterRange (arr, a, b) {
    return arr.filter((item) => item >= a && item <=b)
}

let array2 = [5, 3, 8, 1];
let filteredRange = filterRange(array2, 1, 4);

function filterRangeInPlace (arr, a, b) {
    for (let i = 0; i < arr.lenght; i++)
        if (arr[i] >= a || arr[i] <= b) {
            arr.splice(i, 1);
            i--;
        }
}

let arr3 = [5, 2, 1, -10, 8];
arr3.sort((a, b) => b - a)

let arr4 = ["HTML", "JavaScript", "CSS"];

function copySorted (arr) {
    return  arr.slice().sort()
}

console.log(copySorted(arr4))
console.log(arr4)