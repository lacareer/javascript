/********TOPICS ********* */

// Variable scoping.. see Behind-the-scene/final for more details
// "this" keyword
// "argument" keyword
//copying primitives and objects

'use strict';

///////////////////////////////////////
// Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}
const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

// *************** "this" keyword *******************

/******* RULE 1 ********/
// "this" is a window object in JS
console.log(
  ` This key word "this" not attached to anything is a wwindow object as shown below`
);
console.log(this);

/******* RULE 2 ********/
const calculateAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};

//when function is called like this without being attached to an owner, "this" is undefined in the calculateAge(1997)
calculateAge(1997);

/******* RULE 3 ********/
const calculateAgeArrow = birthyear => {
  console.log(2037 - birthyear);
  console.log(this);
};

//when function is called like this, function being an arrow function, without being attached to an owner, "this" will be a window object in the calculateAge(1990)
//"this" in arrow function does not have its own "this" keyword but uses that from the PARENT SCOPE. In this case global window scope of calculateAgeArrow(1990)
calculateAgeArrow(1990);

/******* RULE 4 ********/
const chuks = {
  year: 1921,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

//when function is called like this, with it being attached to an owner, "this" will be the owner calling it, in this case "chuks.
//This is shown below were chuks called the functions in the chuks object.. "this" is the chuks object not because the function is inside it but because its
chuks.calcAge(); //prints the entire object, chuks, and what is returns from calAge()

const maltilda = {
  year: 2017,
};

maltilda.calcAge = chuks.calcAge; //method borrowing(coping a method from one object to another)

//when function is called like this, with it being attached to an owner, "this" will be the owner calling it, in this case "maltilda".
//This is shown below were maltilda called the functions in the maltilda object.. "this" is the maltilda object not because the function is inside it but because its
maltilda.calcAge(); //prints the entire object, maltilda, and what is returns from calAge()

/*****MORE EXAMPLE ON RULES INVOLVING THE "this" KEYWORD */

//same as RULE 2
const f = chuks.calcAge;
//when function is called like this without being attached to an owner, "this" is undefined
//f(); //this keyword is undefined. Uncomment to see error

const jonas = {
  firstname: 'Jonas',
  year: 1921,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //soln 1 b4 ES6

    //const self = this // this or that
    //   const isMillenial = function () {
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillenial(); //"this" is undefine bcs calling isMillenial() without OWNER
    // },

    //SOLN ES6 using arrow functions. Arrow functions have no "this"
    //so uses the "this"  of parent function
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial(); //"this" is undefine bcs calling isMillenial() without OWNER
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`); //"this" is udefined bcs of arrow function
  },
};

//same as RULE 3
//when function is called like this, function being an arrow function, without being attached to an owner, "this" will be a window object in greet()
//"this" in arrow function does not have its own "this" keyword but uses that from the PARENT SCOPE. In this case global window scope of  greet()
//the window object has no attribute firstname
jonas.greet(); //"this" is undefined bcs greet() is an arrow function

//RULE 2
jonas.calcAge();

//***************** "argument" keyword *****************/
//arguments keyword returns an array of all the argument only with functions with the functions keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

//throw "undefined" error becuase its an arrow function without the function keyword
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

//addArrow(2, 5, 8); //uncomment to see error

///////////////////////////////////////
// Objects vs. primitives//

//primitive dont point to the same memory location
//so changing one doesn't change the other
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

//objects, reference values, point to the same memory location
//so changing one changes the other
const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

//copying primitive values and objects
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica; //not actual copy. points to same memory location
marriedJessica.lastName = 'Davis'; //changes original object
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};//will not work bcs marriedJessica is a "const" but "let" would work

// Actual Copying objects but not deep copy
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //creates a brand new object: from jessica2 to jessicCopy
jessicaCopy.lastName = 'Davis';

//bcs not deep copy, increase in jessica2 family and also increases jessicaCopy
//use lodash for deep clone
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
