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

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements

function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

let arr5 = [1, 2, 3];

// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
  let sortedArray = arr.slice().sort(); 
  let result = [];

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== sortedArray[i - 1]) {
      result.push(sortedArray[i]);
    }
  }
  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings))

// ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    function bornBefore1500 (arr) {
        return arr.filter(arr => arr.year < 1600 && arr.year >= 1500);
    }
    console.log(bornBefore1500(inventors))

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    function firstAndLastNames (arr) {
        return arr.map(arr => `${arr.first} ${arr.last}` )
    }
    console.log(firstAndLastNames(inventors))
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    function oldestToYoungest (arr) {
        return arr.sort((a, b) => a.year - b.year)
    }
    console.log(oldestToYoungest(inventors))

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    function yearsTogether (arr) {
        return arr.reduce()
    }
    // 5. Sort the inventors by years lived

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];