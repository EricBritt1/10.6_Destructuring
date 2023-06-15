// Q1 Object Destructing 1
/* 
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?
*/

// My Answer:
/* The code will print the value 8 for numPLanets and will print 1849 for yearNeptuneDiscovered */

// Q2  Destructing 2 
/*
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears);
*/

//My answer:
/*
The code will print discovery years. So it'll print it like such in the console after you console.log(discoveryYears):
yearNeptuneDiscovered: 1846,
yearMarsDiscovered: 1659
*/

//Q3 Object Destructing 3

/* 
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

My Answer:
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?

'Your name is Alejandro and you like purple'
getUserData({firstName: "Melissa"}) // ?

'Your name is Melissa and you like green'

getUserData({}) // ?

Your name is undefined and you like green

*/

// Q4 Array Destructing1
/*
```jsx
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
"Maya"
console.log(second); // ?
"Marisa"
console.log(third); // ?
"Chi"
```
*/

// Q5 Array Destructing2

/*
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
"Raindrops on roses"
console.log(whiskers); // ?
"whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ?
 [ "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings" ]
*/

// Q6 Array Destructuring3

/*
let numbers = [10, 20, 30];
This below swaps the positions!
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ? 
[10,20,30] (wrong)
solution : [10,30,20]
*/

//ES2015 Refactoring
 
// Q1 ES5 Assigning Variables to Object Properties

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  //My ES2015 version
/*
WRONG
const {a = 1} = obj
const {b = 2} = obj

Solution (Ask Kwame how this works!)
const {a,b} = obj.numbers
*/
  //Q2 ES2015 Object Destructuring



  // ES5 Array Swap
  var arr = [1, 2];
  var temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;

  //My ES2015 version
  /*
  Correct!
[arr[0], arr [1]] = [arr[1], arr[0]]
  */

// ES2015 One-Line Array Swap with Destructuring

//raceResults()


//Correct but not neat
function raceResults([first, second, third, ...rest]) {
    return {
        first,
        second,
        third,
        rest
    };
};

const raceResults2 = ([first, second, third, ...rest]) => ({first,second,third,...rest})
/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
