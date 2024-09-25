/**** TOPIC COVERED */
//DEFAULT PARAMETERS
// PASSING VALUE VS REFERENCE IN FUNCTIONS
//FIRST CLASS AND HIGHER ORDER FUNCTION
// CALL() AND APPLY() USED TO MANUALLY SET THE 'this' key word
//'bind' keyword USED TO MANUALLY SET THE 'this' key word
//IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSION
// CLOSURES

'use strict';

///////////////////////////////////////
console.log('');
console.log(`******** DEFAULT PARAMETERS ********`);
console.log(' ');

// Default Parameters
const bookings = [];

//E6 allow us to set defaults in the argument passed to the function
//Any computation done on defaults, if it depends on another default,
//that defaults must be passed/set b4 the computation as shown below
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 OLD WAY OF SETTING DEFAULTS PARAMS
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
//number of passengers cannot be skipped bcs price uses it for computaion
//if you want to change the price but use the number of passenger default, pass undefined for it
//as shown below
createBooking('LH123', undefined, 1000);

///////////////////////////////////////
console.log('');
console.log(`******** PASSING VALUE VS REFERENCE IN FUNCTIONS ********`);
console.log(' ');

// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in'); //should display but does not bcs object has been change in newPassport() below
  } else {
    alert('Wrong passport!'); //display bcs object has been change in newPassport() below
  }
};

checkIn(flight, jonas);
//The big take away from this example is that:
//1. Copy of a primitive type points to diff memory location so changing flightNum = 'LH999'; doesn't change flight
// const flightNum = flight;
console.log(flight);

//Conversely, changing the object in the function changes the actual object bcs they point to the same memory location
// Is the same as doing...
// const passenger = jonas;
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

//FIRST CLASS AND HIGHER ORDER FUNCTION
console.log(' ');
console.log(`******** FIRST CLASS AND HIGHER ORDER FUNCTION ********`);
console.log(' ');

// Functions Accepting Callback Functions
const oneWord = function (str) {
  //regex / /g is used to removed all blank spaces
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function: THEY TAKE IN A FUNCTION - transformer()
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); //name used to get the name of the function passed
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5); //calls the function for each array item

// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); //greeterHey is now essentially greet() and can be used in place of greet()
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas'); //passes 'Hello' and 'Jonas' at the same time

// Modified greet() using arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

///////////////////////////////////////
console.log(' ');
console.log(`******** CALL AND APPLY METHOD (manually sets 'this') ********`);
console.log(' ');

// The call and apply Methods

//SCENERIO : lufthansa object is the parrent
//but it has many other child carriers
//but we want to use the book function in the parent
//this means that the 'this' keyword will be undefined in the child carrier
//we solve this by manually setting the keyword 'this' usig the call() nad apply() method
//Major diff between call() and apply() is:
//call() receives a list of argument
//apply() recieves an array of argument
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {} //oldschool
  //ES6 style
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

//'this' referes to the owner 'lufthansa'
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; //new method/function created

console.log(' ');
console.log(
  `****** Using 'call' and 'apply' when 'this' keyword is undefined ******`
);
console.log(' ');

// Does NOT work bcs this used in lufthansa.book is undefined
//a better way is to use call(), apply() or bind() to manually set the 'this' keyword
// book(23, 'Sarah Williams');

// Call method
//THIS SOLVES THE ABOVE PROBLEM
//the first argument is what you want the 'this' keyword to be
// while - 23, 'Sarah Williams' -, are the argument passed to the new function created above: const book = lufthansa.book
//the new function is derived from the lufthansa object which uses the 'this' keyword that is undefined in book(23, 'Sarah Williams')
//Hence the use of the call method to manually defined the owner of 'this'
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

//can still even manually set the owner of the 'this' in lufthansa object also
// although we could just do lufthansa.book(239, 'Mary Cooper');
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

console.log(' ');
console.log(`******** 'bind' keyword (manually sets 'this') ********`);
console.log(' ');

// The bind Method: better than call() and apply()
//creates a new function with a bound 'this' that has a owner
//The good thing is that you only do it once

//Remember fro above: const book = lufthansa.book
const bookEW = book.bind(eurowings); //new functions created with 'this' bound  to an object/owner
const bookLH = book.bind(lufthansa); //new functions created with 'this' bound  to an object/owner
const bookLX = book.bind(swiss); //new functions created with 'this' bound  to an object/owner

bookEW(23, 'Steven Williams');

////create a new function with bounded 'this' for only  flight number 23
//passing only some of the function argument is called :partial application
//when used the name of the passenger will then be passed as showned below
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners

console.log(' ');
console.log(
  `******** 'bind' keyword with event listeners (manually sets 'this') ********`
);

//adding new properties to the lufthansa object
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
//to see that the owner of the 'this' keyword is the caller/owner: in this case the lufthansa object
// NUMBER OF PLANE OS NOW INCREASE BY 1
lufthansa.buyPlane();

//'this' here is the button. Console displays the html of the button and NAN
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

//'this' here is now the lufthansa object bcs it is now bounded
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
console.log(' ');
console.log(`******** Partial application of function argument ********`);

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // NO Partial application

const addVAT = addTax.bind(null, 0.23); //CREATES NEW FUNCTION WITH Partial application

console.log(addVAT(100)); // Partial application
console.log(addVAT(23)); // Partial application

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23); //RATE
console.log(addVAT2(23)); //VALUE
console.log(addVAT2(100)); //VALUE

//IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSION
//THEY RUN JUST ONCE
//They are contained in ablock and called immediately
console.log(' ');
console.log(`******** IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSION ********`);

(function () {
  console.log('This function declaration only runs once and never again');
})(); //calling the function

(() => {
  console.log('This arrow function declaration only runs once and never again');
})(); //calling the function

//closures
console.log(' ');
console.log(`******** CLOSURES ********`);
//CLOSURES: A function always have access to the execution context, all variable in its parent function,  of where it was created
//And does not loose that access/connection

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//remember that passengerCount = 0;
//possible bcs of closure
const booker = secureBooking();
//increments passengerCount ++
booker(); //prints 1 passengers
booker(); //prints 2 passengers
booker(); //prints 3 passengers

//check scopes, [[Scopes]]: Scopes[3], in console to see closure execution context
console.dir(booker);

///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2 demo closure
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
