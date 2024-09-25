//********TOPICS COVERED********

// variable assignment with const, let and var
// console logs
// variable types using typeof
// Basic operators and shorthand operations
// strings and template literals
// Type conversion
// Truthy and Falsy
// Equality operators: == and ===
// JS Switch statement. Uses strict comparison: ===

js = "amazing";
console.log(40 + 40 - 10 + 23);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

// the only special character allowed in JS are underscore and dollar sign : _ and $
let jonas_maltida = "Jam";
let $function = 27;

// Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun); //checks for the variable type. Output is boolean
console.log(typeof firstName); //checks for the variable type.  Output is string
console.log(typeof $function); //checks for the variable type.  Output is number

// variable reassignment
javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun); //o/p string

let year;
console.log(year); //o/p is undefined
year = 1991;

// variable declaration using 'const' and 'var'
// The const keyword is used for variable that should not change, immutable, and must have initial value
const birthYear = 1900; //date of birth should'nt change
let age = 120; //age can change

// Basic operators:
// Math operator: Addition, subtration, multiplication,  division, typeof, exponent - wth some having some variation or a combination of operators
//  +, -, *, /, typeof, **, =, +=, *=,, ++, --,
const now = 2021;
const ageJonas = now - 1991;
const ageSarah = now - 1961;
console.log(`Their ages are: ${ageJonas}, ${ageSarah}`);

let x = 10 + 15;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// comaparison operators: >, <, >=, <=, ===, ==
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(now - 1991 > now - 2018);

// strings

const nameFirst = "Chuks";
const job = "Web developer";
const birth = 1991;
const currentYear = 2045;

// using template  literal to output strings
const myName = `I'm is ${nameFirst}, a ${currentYear - birth} ${job}`;
console.log(myName);

// template literal very userful in multiple string o/p
console.log(`first line
second line
third line
fourth line`);

// code to check if qualify for a driver's license
const agePerson = 15;
const isOldEnough = agePerson >= 18;

if (agePerson >= 18) {
  console.log(`You are qualified to take a driver's test for licence`);
} else {
  const yearsLeft = 18 - agePerson;
  console.log(
    `You are still too young. Wait another ${yearsLeft} years to qualify`
  );
}

// Type conversion

// STRING TO NUMBER
const stringYear = "1991";
const hisName = "Jonas";
console.log(Number(myName)); //print "Not a Number" -NAN
console.log(typeof NaN); //a Number
console.log(stringYear + 18); //prints a concatenated string
console.log(Number(stringYear));

// number to strings
const numb = 23;
console.log(String(numb));
console.log(typeof String(numb));

// Truthy and Falsy

// Js falsy values: 0, '', undefined, null, NAN
// Falsy values means they becomes false when converted to boolean
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
// console.log(Boolean(NAN)); //CANNOT CONVERT NAN to boolean

//Truthy values become true when converted to boolean.
// Truthy values are all non-falsy values
console.log(Boolean({}));
console.log(Boolean("A"));
console.log(Boolean(1));

const money = 0;
// else statement runs because money is a falsy value
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job`);
}

// After changing money to truthy value the if statement runs
const money_2 = 10;
if (money_2) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job`);
}

// Equality operators: == and ===
// == does type coersion. It is aloose operator
// 18 == 18 gives true
// 18 == '18' gives true
// '18' == 18 gives true

// === does not do type coecision. So the value on lhs and rhs must have same type and value to get true
// 18 === 18 gives true
// 18 == '18' gives false
// '18' == 18 gives false

// JS prompt: uncomment to see code work
// const favNum = prompt(`Please eneter your favouite number`); //input is a string
// const favNum_1 = Number(prompt(`Please eneter your favouite number`)); //input is converted to number
// console.log(favNum, typeof favNum);
// console.log(favNum_1, typeof favNum_1);

// // strick not eqaul to: !==
// // loose not eqaul to: !=
// if (favNum !== favNum_1) {
//   console.log(`The prompt inputs were different`);
// }

// Boolean logic : AND and OR

const hasDriverLicense = true;
const hasGoodVision = false;
const isTired = true;

console.log(hasGoodVision && hasGoodVision);
console.log(hasGoodVision || hasGoodVision);
console.log(!hasGoodVision);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log(`Sarah can drive`);
} else {
  console.log(`Someone else should drive`);
}

// JS Switch statement. Uses strict comparison: ===

const day = `sunday`;

switch (day) {
  case `monday`: //day === monday
    console.log(`Today is Monday`);
    break;
  case `tuesday`: //day === tuesday
    console.log(`Today is Tuesday`);
    break;
  //cmbining cases
  case `wednesday`: //day === wednesday
  case `thuesday`: //day === thurdayday
    console.log(`Today is either Wednesday or Thursday`);
    break;
  case `friday`: //day === friday
    console.log(`Today is Friday`);
    break;
  case `saturday`: //day === saturday
  case `sunday`: //day === sunday
    console.log(`Today is either Saturday or Sunday`);
    break;
  default:
    //when no case was a match
    console.log(`There was no match`);
}

// Ternary operator
const ageTernary = 23;
ageTernary >= 18
  ? console.log(`Age is greater than 18`)
  : console.log(`Age is greater than 18`);

const drink = ageTernary >= 18 ? `wine` : `water`;
console.log(drink);
