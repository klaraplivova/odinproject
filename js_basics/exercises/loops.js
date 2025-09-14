const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// For loop

for (const cat of cats) { // Loops through the array and prints each item to console
  // console.log(cat);
}

for (let i = 0; i < cats.length; i++) { // 
 // console.log(cats[i]);
}

// While loop 
let a = 0; 
let myFavoriteCats = "My favourite cats are: "

while (a < cats.length) {
  if (a === cats.length - 1) {
    myFavoriteCats += `and ${cats[a]}.`;
  } else {
    myFavoriteCats += `${cats[a]}, `;
  }

  a++;
}

// Do while loop

do {
  if (a === cats.length - 1) {
    myFavoriteCats += `and ${cats[a]}.`;
  } else {
    myFavoriteCats += `${cats[a]}, `;
  }

  a++;
} while (a < cats.length);

// .map

function toUpper(string) { 
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper); // Calls the function until it reaches the end of the list

// console.log(upperCats); // ['LEOPARD', 'SERVAL', 'JAGUAR', 'TIGER', 'CARACAL', 'LION']

// .filter

function lCat(cat) {
  return cat.startsWith("L"); // Creates a boolean
}

const filtered = cats.filter(lCat); // When "true" include in the new array

// console.log(filtered); // [ "Leopard", "Lion" ]

for (let i = 0; i <= 10; ++i) {
    if (i % 2) {
    } else {
        // alert(i);
    }
};

let i = 0;
while (i < 3) {
    // alert(`number ${i}!`);
    i++;
}

let input = prompt("Enter number greater than 100.")
for (input; input < 100; ) {
    if (input < 100) {
        input = prompt("Try again")
    } else if (input === "") {
       input = 1010;
       break;
    } else {
        break;   
    }
}