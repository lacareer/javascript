"use strict";
/** topics coverd  */

// isNaN()
// isFinite()
// isInteger()
// Math.sqrt()
// Max()
// CONSTANT PI
// RANDOM
// ROUNDING INTEGERS
// ROUNDING DECIMALS
// MODULUS (REMAINDER) OPERATOR
// CHECK EVEN NUMBERS
// NUMERIC SEPERATOR
// BIG INTEGER
// DATES
// DATES OPERATIONS
// INTERNATIONALIZATION OF DATES
// INTERNATIONALIZATION OF NUMBERS
// TIMERS

console.log("");

//In JS all number are floats even if we write them as integers
console.log(23 === 23.0);

//number problems in JS
console.log(0.1 + 0.2); //PRINTS 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //PRINTS false

//coversion from string to number using JS type coersion
//make sure chrome browser developer console is in dark mode to see statted colors
console.log("23"); //prints 23 with white
console.log(Number("23")); //prints 23 with purple
console.log(+"23"); //prints 23 with purple

//number parsing from string
//NB that the string must begin with a number
console.log(Number.parseInt("30px")); //prints 30
console.log(Number.parseInt("e23")); //prints NAN
console.log(Number.parseFloat("2.5rem")); //prints 30
console.log(Number.parseFloat("23.45px")); //prints NAN

//Number.parseInt or float accepts a 2nd param that stipulate the number base to use
console.log(Number.parseInt("30px,", 10)); //prints 30
console.log(Number.parseInt("e23,", 10)); //prints NAN

//isNAN is not best to check if something is a number
console.log(`**** isNaN() ****`);
console.log(Number.isNaN(20)); //prints false
console.log(Number.isNaN("20")); //prints false
console.log(Number.isNaN(+"20x")); //prints true
console.log(Number.isNaN(23 / 0)); //prints false

//Best way of checking if something is/not a number use Number.finite(x) or Number.isInteger
console.log(`**** isFinite() ****`);
console.log(Number.isFinite(20)); //prints true
console.log(Number.isFinite(20.55)); //prints true
console.log(Number.isFinite("20")); //prints false
console.log(Number.isFinite(+"20x")); //prints false
console.log(Number.isNaN(23 / 0)); //prints false

console.log(`**** isInteger() ****`);
////In JS all number are floats even if we write them as integers
console.log(Number.isInteger(20)); //prints true
console.log(Number.isInteger(20.0)); //prints true
console.log(Number.isInteger(20 / 0)); //prints true
//but this prints false
console.log(Number.isInteger(20.25)); //prints flase bcs after the decimal point there is a number

console.log(`**** Math.sqrt() ****`);
console.log(Math.sqrt(25)); //same as below
console.log(25 ** (1 / 2)); //square root
console.log(8 ** (1 / 3)); //cube root
console.log(16 ** (1 / 4)); //fourth root

console.log(`**** Max() ****`);
//does type coesion of numbers in string
//but not number that contains string letters. It prints NaN
console.log(Math.max(5, 18, 18, 11, 2)); //prints 18
console.log(Math.max(5, "29", 11, 2)); //prints 29
console.log(Math.max(5, 18, "8px", 11, 2)); //prints NaN
console.log(Math.max(5, 18, 98, 11, 2)); //prints 98

console.log(`**** Min() ****`);

console.log([78, 56, 232, 12, 8]); //8
console.log([78, 56, 232, 12, 0]); //0;
console.log([1, 56, 232, 12, 8]); //1

console.log(`**** CONSTANT PI ****`);
console.log(Math.PI);
//AREA OF A CIRCLE
console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(`**** RANDOM ****`);
//Gives a number between 0 and 1
console.log(Math.random()); //prints a number each time between 0......1
console.log(Math.trunc(Math.random() * 6) + 1); //prints number between 1 and 6

//generating a random number between two values
const randomInt = (min, max) => {
  // 0...1 -> 0...(max - min) -> min...max
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

console.log(randomInt(10, 20));

// Rounding integers
console.log(`**** ROUNDING INTEGERS ****`);
//THEY ARE DO TYPE COERSION

//ROUNDS TO THE NEAREST INTEGER
console.log(Math.round(23.3));
console.log(Math.round(23.9));

//ROUND UP TO THE NEAREST INTEGER
console.log(Math.ceil(23)); //prints 23
console.log(Math.ceil(23.3)); //prints 24
console.log(Math.ceil(23.9)); //prints 24

//ROUND DOWN TO THE NEAREST INTEGER
console.log(Math.floor(23)); //prints 23
console.log(Math.floor(23.3)); //prints 23
console.log(Math.floor("23.9")); //prints 23
console.log(Math.floor(-23.3)); //prints -24

//REMOVES DECIMAL PART WITHOUT ROUNDING WHEN NUMBER IS POSITIVE
//AND WHEN NEGATIVE IT
console.log(Math.trunc(23.3));
console.log(Math.trunc(-23.3));

// Rounding decimals
console.log(`**** ROUNDING DECIMALS ****`);
//ROUNDS TO A SPECIFICIED NUMBER OF DECIMAL PLACES
//NB that  tofixed() always returns a string and not a number
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

///////////////////////////////////////
// The Remainder Operator
console.log(`**** MODULUS (REMAINDER) OPERATOR****`);

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

console.log(`**** CHECK EVEN NUMBERS ****`);
const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

// labelBalance.addEventListener("click", function () {
//   [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
//     // 0, 2, 4, 6
//     if (i % 2 === 0) row.style.backgroundColor = "orangered";
//     // 0, 3, 6, 9
//     if (i % 3 === 0) row.style.backgroundColor = "blue";
//   });
// });

//NUMERIC SEPERATOR IN JS
console.log(`**** NUMERIC SEPERATOR ****`);
//seperator are ignored

const diameter = 287460000000;
console.log(diameter);

//same as above
const diameter_2 = 287_460_000_000;
console.log(diameter_2);

const price = 34599; //$345.99
console.log(price);

const price_1 = 345_99; //$345.99
console.log(price_1);

///////////////////////////////////////
// Working with BigInt
console.log(`**** BIG INTEGER ****`);

//number can be stored in 64 bits and only 53 is used to hold the actual number
console.log(2 ** 53 - 1); //biggest number that JS can carry safely
console.log(Number.MAX_SAFE_INTEGER); //same as above
console.log(2 ** 53 + 1); //keep giving the same result bcs JS cannot store numbers bigger than  its max number
console.log(2 ** 53 + 2); //keep giving the same result bcs JS cannot store numbers bigger than  its max number
console.log(2 ** 53 + 3); //keep giving the same result bcs JS cannot store numbers bigger than  its max number
console.log(2 ** 53 + 4); //keep giving the same result bcs JS cannot store numbers bigger than  its max number

//bigint to the rescue
//n represent big int
//do not mix bigint with regular number
//math operations, Math. anything, will not work with bigint
console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20); //strict comparison
console.log(typeof 20n);
console.log(20n == "20"); //loose comparison

console.log(huge + " is REALLY big!!!");

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

console.log(`**** DATES ****`);
///////////////////////////////////////
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];
// Creating Dates

// Create a date

const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("December 24, 2015"));
console.log(new Date(account1.movementsDates[0]));

//MONTH IS INDEXED 0 IN JS
console.log(new Date(2037, 10, 19, 15, 23, 5)); //Y-M-D HR-MM-SS
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //COVERT 3 DAYS TO MILLISECOND

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); //year
console.log(future.getMonth()); //month
console.log(future.getDate()); //day
console.log(future.getDay()); //position od day in the date in 'future'
console.log(future.getHours()); //hrs
console.log(future.getMinutes()); //mins
console.log(future.getSeconds()); //seconds
console.log(future.toISOString()); //INTL STANDARD TIME
console.log(future.getTime()); //TIMESTAMPS

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

///////////////////////////////////////
// Operations With Dates
console.log(`**** DATES OPERATIONS ****`);
const future_1 = new Date(2037, 10, 19, 15, 23);
// console.log(Number(future_1));//same as below
console.log(+future_1); //prints the time stamp: 2142278580000

//calculates the number of days between two dates
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); //convert the total time in a day to milliseconds

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14)); //yyyy-mm-dd
console.log(days1);

//internationalization of dates
console.log(`**** INTERNATIONALIZATION OF DATES ****`);

const nowNow = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long", //"numeric",
  year: "numeric",
  weekday: "long", //short or narrow are other options
};

//formatting the date// READ UP THE CODE FOR EACH COUNTRY AND Intl.DateTimeFormat() ON MSDN
console.log(new Intl.DateTimeFormat("en-US", options).format(nowNow)); //mm/dd/yy for USA
console.log(new Intl.DateTimeFormat("en-NG", options).format(nowNow)); //mm/dd/yy for USA
console.log(new Intl.DateTimeFormat("en-CA", options).format(nowNow)); //mm/dd/yy for cANADA
console.log(new Intl.DateTimeFormat("en-GB", options).format(nowNow)); //mm/dd/yy for bRITAIN
console.log(new Intl.DateTimeFormat("en-UK", options).format(nowNow)); //mm/dd/yy for bRITAIN
console.log(new Intl.DateTimeFormat("pt-PT", options).format(nowNow)); //mm/dd/yy for bRITAIN

console.log(new Intl.DateTimeFormat("en-UK").format(nowNow)); //mm/dd/yy for bRITAIN
console.log(new Intl.DateTimeFormat("pt-PT").format(nowNow)); //mm/dd/yy for bRITAIN
console.log(new Intl.DateTimeFormat("en-US").format(nowNow)); //mm/dd/yy for USA
console.log(new Intl.DateTimeFormat("en-NG").format(nowNow)); //mm/dd/yy for USA
console.log(new Intl.DateTimeFormat("en-CA").format(nowNow)); //mm/dd/yy for cANADA
console.log(new Intl.DateTimeFormat("en-GB").format(nowNow)); //mm/dd/yy for bRITAIN

//OR YOU COULD GET THE TIMW LOCALE FROM THE USER BROWSER
const locale = navigator.language;
console.log(locale);
console.log(new Intl.DateTimeFormat(locale, options).format(nowNow)); //mm/dd/yy for USA

///////////////////////////////////////
// Internationalizing Numbers (Intl)
console.log(`**** INTERNATIONALIZATION OF NUMBERS ****`);

const number = 3884764.23;

console.log("US:      ", new Intl.NumberFormat("en-US").format(number));
console.log("CAN:      ", new Intl.NumberFormat("en-CA").format(number));
console.log("Germany: ", new Intl.NumberFormat("de-DE").format(number));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY").format(number));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);

const option = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  // useGrouping: false,
};

console.log("US: ", new Intl.NumberFormat("en-US", option).format(number));
console.log("CAN: ", new Intl.NumberFormat("en-CA", option).format(number));
console.log("Germany: ", new Intl.NumberFormat("de-DE", option).format(number));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", option).format(number));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, option).format(num)
);

///////////////////////////////////////
// Timers
console.log(`**** TIMERS ****`);
//there 2 kind of times
// settimeout time runs once after a set time and stops
//setinterval timer runs will run forveer unless it is stopped

// setTimeout
//uses a callback function
//set time 3000 or anything specified

//WITH NO PASSED PARAMS
const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(() => console.log(`Here is your pizza!🍕`), 3000);

//with passes params
const pizzaTimer_1 = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000, //function runs after 3second.
  "olive with beacon",
  "spinnach with Broccolli"
);

//with passes params
const pizzaTimer_2 = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000, //function runs after 3second.
  ...ingredients
);
console.log("Waiting...");

//stopping the pizzaTimer_2 on condition
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer - 2);

// // setInterval
//keeps run until the time is stopped
//uncomment to see code operation

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
