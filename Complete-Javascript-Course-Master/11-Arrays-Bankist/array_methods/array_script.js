"use strict";

/** ARRAY TOPICS COVERED */

///////////////////////////////////////
console.log("");
console.log("********** JS REPEAT() METHOD**********");
console.log("");

function towerBuilder(nFloors) {
  // build here
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  console.log(tower);

  return tower;
}

console.log(towerBuilder(1)); // ["*"]);
console.log(towerBuilder(2)); // [" * ","***"]);
console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]);

///////////////////////////////////////
console.log("");
console.log("********** ARRAY NEW/PUSH METHOD**********");
console.log("");

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

console.log("");
console.log("********** ARRAY UNSHIFT METHOD**********");
console.log("");

//adds to the start of the array
myFriends.unshift("John");
console.log(myFriends);

console.log("");
console.log("********** ARRAY POP METHOD**********");
console.log("");

// Remove elements and returns the popped element
myFriends.pop(); // removes last element
const popped = myFriends.pop(); //removes the new last element
console.log(popped);
console.log(myFriends);

console.log("");
console.log("********** ARRAY SHIFT METHOD**********");
console.log("");

//removes the first element and returns it
myFriends.shift(); // First
console.log(myFriends);

console.log("");
console.log("********** ARRAY INDEXOF METHOD**********");
console.log("");

//get the position of the array element
console.log(myFriends.indexOf("Steven")); //returns 1
console.log(myFriends.indexOf("Bob")); //returns -1 bcs element not found

myFriends.push(23);

console.log("");
console.log("********** ARRAY INCLUDES METHOD**********");
console.log("");
//includes returns true if part of the array and false if not
// it uses strict comparison. Only checks for equality
console.log(myFriends.includes("Steven"));
console.log(myFriends.includes("Bob"));
console.log(myFriends.includes(23));

if (myFriends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

console.log("");
console.log("********** ARRAY SLICE METHOD**********");
console.log("");

let arr = ["a", "b", "c", "d", "e"];

//SLICE METHOD DOESN'T CHANGE THE ARRAY
//SLICE WITH NO PASSED PARAMS PRODUCES A COPY OF THE ARRAY

console.log(arr.slice()); //prints ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); //removes item before index . prints ['c', 'd', 'e']
console.log(arr.slice(2, 4)); //prints ['c', 'd']//does not include 2nd index
console.log(arr.slice(-2)); //prints ['d', 'e']
console.log(arr.slice(1, -2)); //prints ['b', 'c']
console.log(arr.slice()); //prints entire arr  ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); //prints entire arr ['a', 'b', 'c', 'd', 'e']

console.log("");
console.log(
  "********** ARRAY SPLICE METHOD ( Removes at specified index/es)**********"
);
console.log("");

//SPLICE METHOD CHANGES THE ARRAY
//the array after splicing will only contain element not spliced from the array
//returns what was removes.
//So: let x = arr.splice(2)
// value of x will be ['c', 'd', 'e']
//while the actual array will now be just ['a', 'b']
console.log(arr.splice(2)); //removes and return ['c', 'd', 'e']:
console.log(arr);
console.log(arr.splice(-1)); //removes and return the last element ['b']
console.log(arr);
console.log(arr); //prints ['a'] array now changed bcs of the splice just above

//delete item from array
let arr_delete = ["a", "b", "c", "d", "e"];
//delete only 2nd item: b
arr_delete.splice(1, 1); //read delete item at index 1 and only 1 item
console.log(arr_delete);
//delete the last two items
arr_delete.splice(-2, 2); //read delete item at index -2 and only 2 item including it
console.log(arr_delete);

arr = ["a", "b", "c", "d", "e"];

//first element is index to start the splice(removal) from and the second where to stop(number of items to remove) the splice
console.log(arr.splice(1, 1)); //removes and returns ['b', 'c']

let arr_2 = ["j", "i", "h", "g", "f"];

//reverse method reverses the array and also the original array
console.log(arr_2.reverse()); //reverse the arr_2 array permanently
console.log(arr_2); //changes array

//CONCAT method

console.log("");
console.log("********** ARRAY CONCAT METHOD **********");

const letters = arr.concat(arr_2);
console.log(letters); //or
console.log([...arr, ...arr_2]);

console.log("");
console.log("********** ARRAY JOIN METHOD **********");
console.log(letters.join("-"));
console.log(letters.join("_"));

console.log("");
console.log("********** ARRAY AT METHOD**********");
console.log("");

const arr_at = [23, 11, 64];
//all doing same with ES6 and old school way
console.log(arr_at.at(0));
console.log(arr_at[0]);

//all doing same thing
console.log(arr_at.at(-1));
console.log(arr_at[arr_at.length - 1]);
console.log(arr_at.splice(-1)[0]);

//also works with strings
console.log("jonas".at(0));
console.log("jonas".at(-1));

console.log("");
console.log("********** ARRAY FOREACH METHOD**********");
console.log("");

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//USING for-of loop
console.log("*********** Using for-of loop ***********");
// for (const movement of movements) { //without index
for (const [i, movement] of movements.entries()) {
  //with index using destructuring since .entries() produces array like [index, arrayItem]
  if (movement > 0) {
    console.log(`Account activity ${i}: you deposited ${movement}`);
  } else {
    console.log(`Account activity ${i}: you withdrew ${Math.abs(movement)}`);
  }
}

//iterates through an array using a function
//But you cannot break or continue with a forEach loop: Note that
//You can use/pass in one, two or all params of the forEach loop depending on what you want but must be in the order [arrayItem, index, array]
//movement = array item at a specific index
//index = the index of the current array index
//array = the entire arraymade up of all array items
console.log("*********** Using forEach loop with function keyword ***********");

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Account activity ${index}: you deposited ${movement}`);
  } else {
    console.log(
      `Account activity ${index}: you withdrew ${Math.abs(movement)}`
    );
  }
});

console.log("*********** Using forEach loop with arrow function ***********");

movements.forEach((movement, index) => {
  if (movement > 0) {
    console.log(`Account activity ${index}: you deposited ${movement}`);
  } else {
    console.log(
      `Account activity ${index}: you withdrew ${Math.abs(movement)}`
    );
  }
});

console.log("");
console.log("********** ARRAY FIND METHOD **********");
console.log("");
//Find returns the first item of an array that meet a boolean condition as it  iterates through an array

const firstWithrawal = movements.find((mov, i, arr) => {
  return mov < 0;
});

const firstdeposit = movements.find((mov, i, arr) => {
  return mov > 0;
});
console.log(firstWithrawal);
console.log(firstdeposit);

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const account = accounts.find((acc, i, arr) => {
  return acc.owner === "Sarah Smiths";
});

console.log(account);

console.log("");
console.log("********** ARRAY FINDINDEX METHOD **********");
console.log("");

//findIndex is similaras find() but returns the index of the first found element
//can be used to find a user in a pool of user and delete their account as in the bankist App

console.log("");
console.log("********** ARRAY SOME() METHOD**********");
console.log("");
//INCLUDES USES STRICT COMPARISON/MUST BE EQUAL ===
console.log(movements.includes(-130));

//BUT WITH SOME YOU CAN CREATE A CONDITION
const anyDeposits = movements.some((mov, i, arr) => {
  return mov < 1500;
});

//returns true if any of the item meets the condition
const anyDeposits_1 = movements.some((mov, i, arr) => {
  return mov > 5000;
});
console.log(anyDeposits);
console.log(anyDeposits_1);

console.log("");
console.log("********** ARRAY EVERY() METHOD**********");
console.log("");

//returns true if all of the item meets the condition
console.log(account1.movements.every((mov) => mov > 0)); //has deposits: amount < 0
console.log(account2.movements.every((mov) => mov > 0)); //has deposits: amount < 0
console.log(account3.movements.every((mov) => mov > 0)); //has deposits: amount < 0
console.log(account4.movements.every((mov) => mov > 0));

//could also have your callback coded diff and use multiple places;
//Follows DRY principle
const bankDeposits = (mov) => mov > 0;

console.log(movements.some(bankDeposits));
console.log(movements.filter(bankDeposits));
console.log(movements.every(bankDeposits));

console.log("");
console.log("********** ARRAY FLAT METHOD **********");
console.log("");
//REMOVES NESTED ARRAYS AND MAKES THE ARRAY CONTENT ALL ITEMS IN THE NESTED ARRAY AND THOSE NOT NESTED
//Works for one level of nesting by default
const arr_flat = [[1, 2, 3, 4], 5, 6, 7, [8, 9, 10]];
const flattened = arr_flat.flat();
console.log(flattened); //prints [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//to go 2 or more levels of nesting deep, specify the depth  level
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(1)); //prints [Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(2)); //prints [1, 2, 3, 4, 5, 6, 7, 8]

//getting the overall balance in the bank using all account movements

//creates a new array of all the movemments in each account
const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);

//nesting of accountMovement is only one level deep
//produces a one array of all account movements
const allMovements = accountMovements.flat();
console.log(allMovements);

//returns the cummulative of all bank money
const overallBalance = allMovements.reduce((transac, cur, i, arr) => {
  return transac + cur;
}, 0);

console.log(overallBalance);

//using chaining instead of the above
const chained = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((transac, cur, i, arr) => {
    return transac + cur;
  }, 0);

console.log(chained);

console.log("");
console.log("********** ARRAY FLATMAP METHOD **********");
console.log("");

//flat map combines map() and flat() into one
//flat method here nly goes one level deep
//if you need to go more than that, use map.flat(levelNeeded) like shown in the flat() heading above
const chained_2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((transac, cur, i, arr) => {
    return transac + cur;
  }, 0);
console.log(chained_2);

console.log("");
console.log("********** ARRAY REDUCE METHOD **********");
console.log("");

//reduces array into one single value
//acc = accumulatoe
//cur = current item in the array
// i = index of the current item i the array
//arr = the array with all item
//0 = initial value of the accumulator

const balance = movements.reduce(function (acc, cur, i, arr) {
  //shows all the params value from start to end of the iteration
  console.log(`Iteration ${i}: Initial value ${acc}, Current cash ${cur}`);
  return acc + cur; //keeps adding each item in the array  to the accumulator
}, 0);

console.log(movements);
console.log(balance);

//TO GET THE MAX VALUE FROM REDUCE
//uses the first item in the array as the start point/initial value for the accumulator
const max = movements.reduce(function (acc, cur, i, arr) {
  if (acc > cur) {
    return acc;
  } else {
    return cur;
  }
}, movements[0]);

console.log(max);

console.log("");
console.log("********** ARRAY FILTER METHOD **********");
console.log("");
//Filter returns a brand new array of array items that meet a boolean condition as it  iterates through an array
//returns all transaction of sum greater than 0
const deposits = movements.filter(function (move, i, movement) {
  return move > 0;
});
console.log(movements);
console.log(deposits);

//returns all transaction of sum greater than 0
const withdrawal = movements.filter((move, i, movement) => {
  return move < 0;
});
console.log(movements);
console.log(withdrawal);

console.log("");
console.log("********** ARRAY MAP METHOD **********");
console.log("");

//Map returns a brand new array as it  iterates through an array
const move_map = [200, 450, -400, 3000, -650, -130, 70, 1300]; //assuming thses are all un euros
const euroUsd = 1.1;

//using function expressions
// const moveToUsd = move_map.map(function (mov, i, moves) {
//   return mov * euroUsd;
// });

//using arrow expressions. Note that you can omit the last 2 params passed to the callback if you are not going to use them
const moveToUsd = move_map.map((mov, i, moves) => {
  return mov * euroUsd;
});

console.log(move_map);
console.log(moveToUsd);

//creates a new array of all account activity
//Note that you can omit the last 2 params passed to the callback if you are not going to use them
const moveDescription = move_map.map((movement, index, arr) => {
  if (movement > 0) {
    return `Account activity ${index}: you deposited ${movement}`;
  } else {
    return `Account activity ${index}: you withdrew ${Math.abs(movement)}`;
  }
});

console.log(moveDescription);

console.log("");
console.log("*** ARRAY CHAINING USING FILTER, MAP AND REDUCE METHODS ****");
console.log("");
//You can only chain this method if the one before the next returns an array
//e.g reduce returns single item and can not be chained to someting else

const filterMapReduce_totalBalance = movements
  .filter((mov, i, arr) => {
    // arr refers to movements
    return mov > 0;
  })
  .map((cur, i, arr) => {
    //arr refers to the array received from the filter operation
    return cur * euroUsd;
  })
  .reduce((acc, cur, i, arr) => {
    //arr refers to the array received from the map operation
    return acc + cur;
  }, 0);

console.log(filterMapReduce_totalBalance.toFixed(2));

console.log("");
console.log("********** ARRAY MAP METHOD FOR MAPS**********");
console.log("");

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});

console.log("");
console.log("********** ARRAY MAP METHOD FOR SETS**********");
console.log("");

const uniqueCurrencies = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(uniqueCurrencies);

//A Set has no key so the below prints the key and value as same
//soy the key params passed  to the call back not need
uniqueCurrencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// the underscore sign is used when the param is not needed
// it is called a "do away"
console.log("Do-away symbol");

uniqueCurrencies.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`);
});

console.log("");
console.log("*** ARRAY SORT() METHODS ****");
console.log("");

//MUTATES/PERMANENTLY THE ORIGINAL ARRAY
//CONVERTS, WHEN USED ON NUMBERS, NUMBERS TO STRING AND SORT ACCORDINGLY

///////////////////////////////////////
// Sorting Arrays

// Strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners); //

//CONVERTS TO STRING AND SORT
//NOT WHAT WE WANT
console.log(movements); // prints [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movements.sort());

console.log(`** Sorting below for only numbers. Not for strings **`);
// return < 0: put A before B (i.e current keep order)
// return > 0, B, A (switch order)

//NB THAT IN THE ASCENDING/DESCENDING ORDER BELOW,
//THE RETURN NUMBER IS WHAT DETERMINES THE SORT ORDER

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1; //greater than 0 (switch order)
//   if (a < b) return -1; //less than 0 (keep order)
// });

//Same as above
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1; //less than 0 (keep current order)
//   if (a < b) return 1;//greater than 0 (switch order)
// });

//same as above
movements.sort((a, b) => b - a);
console.log(movements);

console.log("");
console.log("*** ARRAY fill() METHODS ****");
console.log("");

///////////////////////////////////////
// More Ways of Creating and Filling Arrays
const arrFill = [1, 2, 3, 4, 5, 6, 7]; //creates new array
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); //creates new array

// Empty arrays + fill method
const x = new Array(7); //creates  new array with 7 empty spots
console.log(x);
// console.log(x.map(() => 5));//map cannot work on empty array
// x.fill(1, 3); //fill it up with 1 from index 3 to end
// x.fill(1);
// x.fill(1, 3, 5); //fill it up with 1 from index 3 to index 5. Like in slice, final index not included
// console.log(x);

arrFill.fill(23, 2, 6); //fill it up with 23 from index 2 to index 6. Like in slice, final index not included
console.log(arrFill);

// Array.from
//the callback is same as in map
//you have access to cur, i, arr in the callback
const yy = Array.from({ length: 7 }, () => 1); //creates a new array of length 7 and fills it up with 1's
console.log(yy);

const z = Array.from({ length: 7 }, (_, i) => i + 1); //uses the discard symbols, not using that param: _
console.log(z);

// getting all the transaction on the DOM whenth balance lable is clicked
//Below code works on the starter/script.js bcs the label and classes selected are there
//and not here

// labelBalance.addEventListener("click", function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("€", ""))
//   );
//   console.log(movementsUI);
//   Alternative way of creating array of all node element with the class
//   const movementsUI2 = [...document.querySelectorAll(".movements__value")];
// });

console.log("");
console.log("*** More reduce() array practice***");
console.log("");

///////////////////////////////////////
// Array Methods Practice

// 1. aLL DEPOSIT IN ALL ACCOUNTS
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2. COUNT ALL DEPOSIT >= 1000
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

//OR

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  //.reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ operator
let a = 10;
console.log(a++); //returns 10
console.log(a); //prints 11

//to solve the above
let b = 10;
console.log(++b); //prints 11
console.log(b); //prints 11

// 3. CREATING OBJECT WITH REDUCE()
const { deposit, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposit += cur) : (sums.withdrawals += cur); //or
      sums[cur > 0 ? "deposit" : "withdrawals"] += cur;
      return sums;
    },
    { deposit: 0, withdrawals: 0 }
  );

console.log(deposit, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(titleCase); //makes sure that any word in the exception starts the title, its capitalize
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
