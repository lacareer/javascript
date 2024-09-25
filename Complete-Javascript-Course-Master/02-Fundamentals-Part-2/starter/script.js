//**********TOPICS COVERED**********
// Functions
// Function Declarations vs. Expressions
// Arrow functions
// Functions Calling Other Functions
// Introduction to Arrays
// Basic Array Operations (Methods)
// Introduction to Objects
// Dot vs. Bracket Notation
// Object Methods
// JS lOOPS
// Looping Backwards and Loops in Loops
// The while Loop

//avoid accidental and visible error
//with this mode the code stop executing at the point of an error
//it prevents from using reserved keyword
"use strict";

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //code stops here because varibale name is wrong, missing the s after driver
if (hasDriverLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

///////////////////////////////////////
// Functions
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

///////////////////////////////////////
// Arrow functions

const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor_1(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor_1(2, 3));

///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement_1 = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement_1(1991, "Jonas"));
console.log(yearsUntilRetirement_1(1950, "Mike"));

///////////////////////////////////////
// Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAgeArray = function (birthYeah) {
  return 2037 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age11 = calcAgeArray(years[0]);
const age22 = calcAgeArray(years[1]);
const age33 = calcAgeArray(years[years.length - 1]);
console.log(age11, age22, age33);

const ages = [
  calcAgeArray(years[0]),
  calcAgeArray(years[1]),
  calcAgeArray(years[years.length - 1]),
];
console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
const myFriends = ["Michael", "Steven", "Peter"];

// Add elements and returns the new length
const newLength = myFriends.push("Jay");
console.log(myFriends);
console.log(newLength);

//adds to the start of the array
myFriends.unshift("John");
console.log(myFriends);

// Remove elements and returns the popped element
myFriends.pop(); // removes last element
const popped = myFriends.pop(); //removes the new last element
console.log(popped);
console.log(myFriends);

//removes the first element and returns it
myFriends.shift(); // First
console.log(myFriends);

//get the position of the array element
console.log(myFriends.indexOf("Steven")); //returns 1
console.log(myFriends.indexOf("Bob")); //returns -1 bcs element not found

myFriends.push(23);

//includes returns true if part of the array and false if not
// it uses strict comparison
console.log(myFriends.includes("Steven"));
console.log(myFriends.includes("Bob"));
console.log(myFriends.includes(23));

if (myFriends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas_1 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas_1);

console.log(jonas_1.lastName); //dot notation using property name. In this case, lastname
console.log(jonas_1["lastName"]); //bracket notation using property name. In this case, lastname

const nameKey = "Name";
console.log(jonas_1["first" + nameKey]);
console.log(jonas_1["last" + nameKey]);

// console.log(jonas.'last' + nameKey)//will not work

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas_1[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

//Adding items to object
jonas_1.location = "Portugal"; //dot notation
jonas_1["twitter"] = "@jonasschmedtman"; //bracket notation
console.log(jonas_1);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas_1.firstName} has ${jonas_1.friends.length} friends, and his best friend is called ${jonas_1.friends[0]}`
);

///////////////////////////////////////
// Object Methods

const jonas_2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  //'this' is equal to the object calling the method
  //use the function key word when creating functions in objects
  calcAge: function () {
    //using this to create a new item in the object
    //this.age is same as jonas_2['age]
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas_2.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas_2.calcAge());

console.log(jonas_2.age);
console.log(jonas_2.age);
console.log(jonas_2.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas_2.getSummary());
console.log(``);
// JS lOOPS
///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas_3 = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

// console.log(jonas_3[0])
// console.log(jonas_3[1])
// ...
// console.log(jonas_3[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas_3.length; i++) {
  // Reading from jonas array
  console.log(jonas_3[i], typeof jonas_3[i]);

  // Filling types array
  // types[i] = typeof jonas[i]; //OR
  types.push(typeof jonas_3[i]);
}

console.log(types);

const years_1 = [1991, 2007, 1969, 2020];
const ages_1 = [];

for (let i = 0; i < years_1.length; i++) {
  ages_1.push(2037 - years_1[i]);
}
console.log(ages_1);

// continue and break
console.log("--- ONLY STRINGS ---");

for (let i = 0; i < jonas_3.length; i++) {
  if (typeof jonas_3[i] !== "string") continue; //skips the next line to the next iteration if any

  console.log(jonas_3[i], typeof jonas_3[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas_3.length; i++) {
  if (typeof jonas_3[i] === "number") break; //stops the parent loop from running at the is point

  console.log(jonas_3[i], typeof jonas_3[i]);
}

///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas_4 = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas_4.length - 1; i >= 0; i--) {
  console.log(i, jonas_4[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1; //trunc removes the decimal part of the random number

//refresh browser to see o/p if there's none to create a new random number
//bcs there might be no o/p bcs the first number was a 6 and the loop doesn't run
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
