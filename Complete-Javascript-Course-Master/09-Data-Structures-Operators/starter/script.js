/** TOPICS COVERED */
//ES6 array destructuring
//ES6 object destructuring
//ES6 Spread operator
//ES6 rest operator
//Short circuiting with AND (&&) and  OR (||)
//Nullish Coalescing operator
//ES6 for-of loop for arrays or objects
//ENHANCED OBJECT LITERALS
//OPTIONAL CHAINING
//SETS
//MAPS
//STRINGS

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //destructuring the object received in the function
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //used to show how spread operator unpacks values in array into the function
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  //used to show how rest operator pack values in array into the function
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/** 1. ARRAY DESTRUCTURING [] */
console.log(`******** ARRAY DESTRUCTURING [] ********`);

//simple destructuring of an array
//make sure to use the "const" keyword when destructuring
const arr = [2, 3, 4];
//without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//destructures 1st and 2nd
const [first, second] = restaurant.categories;
console.log(`First is: ${first}
Second is: ${second}`);

//destructures 1st and 3rd
const [firstOne, , third] = restaurant.categories;
console.log(`First is: ${firstOne}
third is: ${third}`);

// switching a variable value derived from an object

// **without destructuring
let [main, , secondary] = restaurant.categories;

const temp = main;
main = secondary;
secondary = temp;
console.log(`Main menu is: ${main}
secondary menu is: ${secondary}`);

//**with destructuring */
let [mainDest, , secondaryDest] = restaurant.categories;

[mainDest, secondaryDest] = [secondaryDest, mainDest];
console.log(`MainDest menu is: ${mainDest}
secondaryDest menu is: ${secondaryDest}`);

//destructuring function in object
console.log(restaurant.order(2, 0));
const [starterMeal, mainMeal] = restaurant.order(2, 0);
console.log(starterMeal, mainMeal);

//destructuring nested array - array inside array
const nested = [2, 4, [5, 6]];
//get 1st and 3rd items
const [i, , j] = nested;
console.log(i, j);

//destructuring nested array in nested variable above
//get 1st and individual items in 3rd position
const [k, , [m, n]] = nested;
console.log(i, m, n);

//setting default values when destructuring
//important when you don't know the length of the array
const defaultValues = [8, 9];
const [a_one, b_one, c_one] = defaultValues;
console.log(a_one, b_one, c_one); //c_one gives undefined bcs no value exist at index 2

//set default values
//default values are used if index doen't exist
const [d_one = 1, d_two = 1, d_three = 1] = defaultValues;
console.log(d_one, d_two, d_three);

/** 2. OBJECT DESTRUCTURING {} */
console.log(` ******** OBJECT DESTRUCTURING {} ********`);

//In object destructuring, variable names must match the property names in the object
//order of property name does not matter and no need to skip like in array. Just that the names match

const { names, openingHours, categories } = restaurant;
console.log(names, openingHours, categories);

//if you want to use a varibale name different from the property name
const {
  names: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//set default values
//default values are used if property doen't exist
//using property name, new varibale name diff from property name and setting default values
//menu property does not exist in restaurant and will print undefined so we set it to a default value
const { menu = [], openingHours: time, categories: type } = restaurant;
console.log(menu, time, type);

//mutating or overriding variable values in object destructuring
let q = 111;
let p = 999;
const obj = { q: 23, p: 7, c: 14 };
//overriding q,p variable to have the value of the property q, p in the object obj
//it is done by adding a block when destructuring, without which we get an error
({ q, p } = obj);

console.log(q, p); // prints 23, 7 - initial values 111,999 overwriten

//destructuring of nested objects using new variable names instead of property names
const { openingHours: time_open } = restaurant;
const {
  fri: { open: time_available, close: time_unavailable },
} = time_open;
console.log(time_available, time_unavailable);

//function destructuring obejct received
const restaurantInfo = {
  time: '22:30',
  address: 'Via del Sale, 21',
  mainIndex: 2,
  starterIndex: 2,
};

//actual destructuring handled in the function in restaurant object
restaurant.orderDelivery(restaurantInfo);

//using function destructuring defaults
const restaurantInfo_2 = {
  address: '1 Ajadi street',
  starterIndex: 1,
};

//actual destructuring handled in the function in restaurant object and  uses default values when certain properties are not passed
restaurant.orderDelivery(restaurantInfo_2);

//SPREAD OPERATOR
//On the RHS of the operation, RHS of = sign
//unpacks elements and delimit them with commas
//creates shallow copy
//works all all iterables: arrays, string, maps and sets and objects even if they are not iterables
console.log(` ********* SPREAD OPERATOR ********`);

// A. spread operator with arrays
const arr_new = [8, 9, 4];
//not so good way of copying old array into new
const badNewArr = [1, 2, arr_new[0], arr_new[1], arr_new[2]];
console.log(badNewArr);

//using ES6 spread operator it unpacks the array elemnet individually and write it to the new array

const arr_spread = [1, 2, ...arr_new]; //writes arr_new items to arr_spread delimited by commas
console.log(arr_spread);
console.log(...arr_spread); //prints them individually

const add_menu = [...restaurant.mainMenu, 'Gnocci'];
console.log(add_menu);

//create shallow copy with spread operator
const main_menu = [...restaurant.mainMenu];
console.log(main_menu);

//used spread to join arrays
const all_menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(all_menu);

//spread operator with iterables
const str = 'chuks';
const letters = [...str, '', 'S'];
console.log(letters);

//uncomment to see prompts
const ingredient = [
  prompt('Lets make pasta! Ingredient 1'),
  prompt('Lets make pasta! Ingredient 2'),
  prompt('Lets make pasta! Ingredient 3'),
];

console.log(ingredient);

//old school way, passing the ingredient elements one after the other without spread operator
restaurant.orderPasta(ingredient[0], ingredient[1], ingredient[2]);

//using spread to unpack the ingredient array(remember it delimits the values with comma in an array)
restaurant.orderPasta(...ingredient);

// B. spread operator with objects

//copying and adding more object properties
const newRestaurant = { founded: 1954, ...restaurant, founder: 'Michael' };
console.log(restaurant);
console.log(newRestaurant);

//copying and changing property values
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Morata Grande';
console.log(restaurantCopy.name);
console.log(restaurant.names);

//REST OPERATOR
//On the LHS of the operation, LHS of = sign
//Must be on one in a destructuring assignment and the last one in the assignment, like const w [x, y, ..z]
//Does not include skipped elements
//Packs element together delimited by commas
console.log(` ********* REST OPERATOR ********`);

const arr_rest = [1, 2, ...[3, 4]];

// A. using rest pattern in arrays
const [a_rest, b_rest, ...others] = arr_rest;
console.log(a_rest, b_rest, others);

//using rest operator on the LHS and the spread operataor on the RHS together
const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

// B. using rest pattern in arrays
const { sat, ...otherDays } = restaurant.openingHours;
console.log(sat, otherDays);

// C. using rest pattern in functions

//...number take all passed params and put them in an array
const addition = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

addition(2, 5);
addition(2, 5, 12, 4);
addition(2, 23, 5, 98, 7, 3, 5);

//here spread spread operator unpacks the params into the function
//which the functions packs back into an array
const w = [23, 5, 7];
addition(...w);

//prints Mushroom and others ('Onion', 'Garlic', 'Bread') in an array
restaurant.orderPizza('Mushroom', 'Onion', 'Garlic', 'Bread');

//prints only Mushroom and empty, [], array
restaurant.orderPizza('Mushroom');

//SHORT CIRCUITING WITH || operator
console.log(` ********* SHORT CIRCUITING WITH || operator ********`);

//returns the first true element and where there is non the last false element
// remember Truthy and Falsy
// In Js falsy values: 0, '', undefined, null, NAN. All others are truthy
console.log();

console.log(3 || 'Jonas'); //prints 3
console.log('' || 'Jonas'); //prints Jonas
console.log(true || 0); //prints true
console.log(undefined || null); //prints the last false element where non was true - null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //prints 1st true element - Hello

// A. assigning default values using ternary
//numGuest property does not exist on the object restaurant, so is undefined - falsy
const guest_1 = restaurant.numGuest ? restaurant.numGuest : 10; //guest_1 is 10
console.log(guest_1);

// B. assigning default values using short circuit
//very simple and more readable
const guest_2 = restaurant.numGuest || 55;
console.log(guest_2);

//using Nullish value: i.e null and undefined (NOT 0 OR '')
console.log(` ********* Nullish Coalescing operator ?? ********`);

restaurant.numGuest = 0;

const guest_3 = restaurant.numGuest || 45;
//prints 45 bcs 0 is falsy even when we want numGuest in the restaurant is 0
//Not an ideal situation
console.log(guest_3);

//To correct the above problem we use a nullish coalescing operator ??
const guest_4 = restaurant.numGuest ?? 35;
//Now prints correct guest value 0 even if it is falsy
console.log(guest_4);

//SHORT CIRCUITING WITH && operator
console.log(` ********* SHORT CIRCUITING WITH && operator ********`);
//returns the first FALSE element and where they are all truthy the last TRUE element
// remember Truthy and Falsy
// In Js falsy values: 0, '', undefined, null, NAN. All others are truthy
console.log(0 && 'Jonas'); //prints 0
console.log(7 && 'Jonas'); //prints Jonas
console.log('Hello' && 23 && null && 'Jonas'); //prints null

//OR ASSIGNMENT OPERATOR
console.log(` ********* OR ASSIGNMENT OPERATOR || AND ||= ********`);

const rest_1 = {
  nameOfRestaurant: 'Capri',
  numGuest: 0,
};
const rest_2 = {
  nameOfRestaurant: 'Lafiaza',
  owner: 'De Rossi',
};

//When reading make sure only one of A, B and C is uncomment to fully understand the code

//(A)
// rest_1.numGuest = rest_1.numGuest || 10;
// console.log(rest_1.numGuest); //prints 10
// rest_2.numGuest = rest_2.numGuest || 13;
// console.log(rest_2.numGuest); //prints 13

//(B)
//same as above comment code using the OR assignment
// rest_1.numGuest ||= 10;
// console.log(rest_1.numGuest); //prints 10
// rest_2.numGuest ||= 13;
// console.log(rest_2.numGuest); //prints 13

//(C)
//Not that console.log(rest_1.numGuest) in A and B prints 10 when the numGest is 0 BCS 0 is falsy
//Not ideal situation. Solution is using Nullish coalescing
rest_1.numGuest ??= 10;
console.log(rest_1.numGuest); //prints 0

rest_2.numGuest ??= 21;
console.log(rest_2.numGuest); ////prints 21

//"AND" ASSIGNMENT OPERATOR
console.log(` ********* "AND" ASSIGNMENT OPERATOR && AND &&= ********`);

const rest_3 = {
  nameOfRestaurant: 'Capri',
  numGuest: 0,
};
const rest_4 = {
  nameOfRestaurant: 'Lafiaza',
  owner: 'De Rossi',
};
//When reading make sure only one of A, B and C is uncomment to fully understand the code

// //(A)
// rest_3.numGuest = rest_3.numGuest && 10;
// console.log(rest_3.numGuest); //prints 0
// rest_4.numGuest = rest_4.numGuest && 13;
// console.log(rest_4.numGuest); //prints undefined bcs numGuest not exis and the short cct returns fist false value - undefined

// //(B)
// //same as above comment code using the OR assignment
// rest_3.numGuest &&= 10;
// console.log(rest_3.numGuest); //prints 0
// rest_4.numGuest &&= 13;
// console.log(rest_4.numGuest); //prints undefined bcs numGuest not exis and the short cct returns fist false value - undefined

//(C)
//Not that console.log(rest_1.numGuest) in A and B prints 10 when the numGest is 0 BCS 0 is falsy
//Not ideal situation. Solution is using Nullish coalescing
rest_3.numGuest ??= 309;
console.log(rest_3.numGuest); //prints 0

rest_4.numGuest ??= 41;
console.log(rest_4.numGuest); ////prints 21 and no longer undefined bcs of the nullish coalescing operator ??

//assigning new value to an existing property is possible with AND assignment b
//but if the property does not exist it wil not work as shown below
rest_3.owner &&= 'Annonymous'; //owner does not exist so false is return in the short cct
rest_4.owner &&= 'Annonymous'; //owner exist and 'Annonymous is evaluated and returns and assined to rest_3.owner
console.log(rest_3);
console.log(rest_4);

console.log('');
console.log(`********** USING ES6 FOR-OF LOOP (arrays) **********`);

const menu_for_of_loop = [...restaurant.starterMenu, ...restaurant.mainMenu];

//USING ES6 FOR-OF LOOP

//prints the item index in the array
console.log(`prints the item index in the array as shown below`);
for (const item in menu_for_of_loop) {
  console.log(item);
}

//prints the item in the array
console.log(`prints the item in the array as shown below`);
for (const item of menu_for_of_loop) {
  console.log(item);
}
//prints the item in the array
console.log(`prints the item in the array as shown below`);
for (const item of menu_for_of_loop) {
  console.log(item);
}

//prints the item index and the item in a 2 item array like [x,y]
console.log(`prints the item index and the item in a 2 item array like [x,y]`);
for (const item of menu_for_of_loop.entries()) {
  console.log(item);
}
//prints the item index and the item in a 2 item array like [x,y]
console.log(
  `prints the item index and the item in a 2 item array like [x,y] with custom print for user menu choice`
);
for (const item of menu_for_of_loop.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
//prints the item index and the item in a 2 item array like [x,y]
console.log(
  `prints the item index and the item in a 2 item array like [x,y] with custom print (using destructuring) for user menu choice`
);
for (const [num, food] of menu_for_of_loop.entries()) {
  console.log(`${num}: ${food}`);
}

console.log(`********** USING ES6 FOR-OF LOOP (objects) **********`);

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Property NAMES
const openingHours_3 = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//returns the keys of the object
const properties = Object.keys(openingHours_3);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// returns Property VALUES of each
const values = Object.values(openingHours_3);
console.log(values);

// Entire object
//// returns an array like so: [key, {value}]
const entries = Object.entries(openingHours_3);
console.log(entries);

// Destructuring to read each  [key, {value}] in the arrays
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

console.log(` ********** ENHANCED OBJECT LITERALS **********`);
// 1. allows you to add an existing object into another existing object
//without having to do openingHours_2 : openingHours_2 when it was added as shown in the example below
//Note that openingHours_2 : openingHours_2  is also correct but with ES6 we can just do: openingHours_2 where the object is added
// 2. Allows you to just write a function without a property attached to it as show below where all the function keywords are now removed and they still sork like before in restaurant object above
//3. ALLOWS UYOU TO DO COMPUTATIONS TOO. nO EXAMPLE HERE CHEC LECTURE SLIDES/VIDEO 113
const openingHours_2 = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant_2 = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //destructuring the object received in the function
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //used to show how spread operator unpacks values in array into the function
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  //used to show how rest operator pack values in array into the function
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  //also correct but not required
  //openingHours_2: openingHours_2,
  openingHours_2,
};

console.log(restaurant_2);

///////////////////////////////////////

console.log(`********** OPTIONAL CHAINING ********** `);

// Optional Chaining. only moves to the property/function after the ? sign if the one/s before it is is not undefined
//Best used with the Coalesing operator (??)

//code block does not run using the good old if statement
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//prints "undefined has no property open"
//bcs "mon" property is undefined since it does not exist
// console.log(restaurant.openingHours.mon.open); //prints "undefined has no property open"

// WITH optional chaining
//check for the "mon" property to see if it exist. Since it doen't it prints undefined and does not go to "open" property
console.log(restaurant.openingHours.mon?.open);

//check "openingHours", it exist. Moves to "mon" property to see if it exist. Since it doen't it prints undefined and does not go to "open" property
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  //checks if openingHours[day] exists on the property. Uses the Coalesing operator ?? to make sure 0 is treated as a nullish value and not  falsy
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods optional chaining uses ?. (question mark and period)
// Also use ?? (Coalescing operator) to make that if the method exist and returns 0
//it doesn't treat it as falsy and assign "Method does not exist" to the varaible
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

//code block using if statement to check if the array isn't empty before getting the name in the first index
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

//Same as bove but shorter
console.log(users[0]?.name ?? 'User array empty');

//sets
console.log(`******** JAVASCRIPT SET ********`);
///////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);
console.log('');

for (const order of ordersSet) console.log(order);

ordersSet.clear();
console.log(ordersSet);
// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

//create unique values using set and spread operator to create a new array of unique values
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//Prinnts the number of unique values
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size); //prints number of strings in the name: jonasschmedtmann

//MAPS
//USED TO CREATE KEY/VALUE PAIRS WITH MIXED DATA TYPES
console.log(`******** JAVASCRIPT MAPS ********`);

const rest = new Map();
//add key/value to map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

//uses JS to get real time hour of the day
//but we are using 8am as sample since we are yet to deal with time
const time_map = 8;
console.log(
  rest.get(time_map > rest.get('open') && time_map < rest.get('close'))
);

//check if it contains a xertain key using "has"
//similar to array includes
console.log(rest.has('categories'));

//deleting from a map
//rest.delete(2);

//clearing all items in a map
// rest.clear();

//
const arr_map = [1, 2];
rest.set(arr_map, 'Test');
//grabbing the h1 from our html
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); //prints all map key/value
console.log(rest.size); //prints 10

console.log(rest.get(arr_map)); //prints "test"

///////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer')); //or just hard coding below
const answer = 3; //hard coding after commenting above
console.log(answer);

//question.get('correct') === answer returns "true" if answer is 3
//question.get(true)) returns "correct"
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

///////////////////////////////////////
console.log(`******** WORKING WITH STRINGS 1 ********`);

// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //prints A
console.log(plane[1]); //prints 3
console.log(plane[2]); //prints 2
console.log('B737'[0]); //prints B

console.log(airline.length); //prints 16
console.log('B737'.length); //prints 4
console.log(airline.indexOf('r')); //prints index of 1st occurence of r = 6
console.log(airline.lastIndexOf('r')); //prints 10
console.log(airline.indexOf('Portugal')); //prints 8 . nb that  it is case sensitive. Returns -1 if not found

console.log(airline.slice(4)); //prints  "Air Portugal"
console.log(airline.slice(4, 7)); //prints "Air"

console.log(airline.slice(0, airline.indexOf(' '))); //prints "Tap"
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //prints "Portugal"

console.log(airline.slice(-2)); //prints "al"
console.log(airline.slice(1, -1)); //prints "AP Air Portuga"

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B'); //prints "You got the middle seat 😬"
checkMiddleSeat('23C'); //prints "You got lucky 😎"
checkMiddleSeat('3E'); //prints "You got the middle seat 😬"

console.log(new String('jonas')); //prints "String {'jonas'}"
console.log(typeof new String('jonas')); //prints "object"

console.log(typeof new String('jonas').slice(1)); //prints "string"

///////////////////////////////////////
console.log(`******** WORKING WITH STRINGS 2 ********`);
///////////////////////////////////////
// Working With Strings - Part 2

const airline_1 = 'TAP Air Portugal';

console.log(airline_1.toLowerCase()); //prints "tap air portugal"
console.log(airline_1.toUpperCase()); //prints "TAP AIR PORTUGAL"

// Fix capitalization in name
const passenger = 'jOnAS'; // should be = Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //prints "Jonas"

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

//instead of above
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //prints "hello@jonas.io"
console.log(email === normalizedEmail); //prints "true"

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); //prints "288.97$"

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate')); //prints "All passengers come to boarding gate 23. Boarding door 23!"

//replaces all occurences of the word "door" but "replaceAll" is still being worked on JS
//and so not yet functional in all browser but chrome as of Dec 15, 2021. May be working next time I try it

// console.log(announcement.replaceAll('door', 'gate'));

//using regex = /string/g replaces all ocurrences
console.log(announcement.replace(/door/g, 'gate')); //prints ""

// Booleans
const plane_1 = 'Airbus A320neo';
console.log(plane_1.includes('A320')); //prints "true"
console.log(plane_1.includes('Boeing')); //prints "false"
console.log(plane_1.startsWith('Airb')); //prints "true"

if (plane_1.startsWith('Airbus') && plane_1.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family'); //prints "Part of the NEW ARirbus family"
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife'); //prints "You are NOT allowed on board"
checkBaggage('Socks and camera'); //prints "Welcome aboard!"
checkBaggage('Got some snacks and a gun for protection'); //prints "You are NOT allowed on board"

///////////////////////////////////////
// Working With Strings - Part 3
console.log('');
console.log(`******** WORKING WITH STRINGS 3 ********`);

// Split turns strings to array using the demiliter/symbol passed to it and join assemble strings with user set delimiter passed
console.log('a+very+nice+string'.split('+')); //prints "['a', 'very', 'nice', 'string']"
console.log('Jonas Schmedtmann'.split(' ')); //prints "['Jonas', 'Schmedtmann']"

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); //could also have been done with template literals instead of join()
console.log(newName); //prints "Mr. Jonas SCHMEDTMANN"

//Capitalizes all names recieved
const capitalizeName = function (name) {
  const names = name.split(' '); //changes letters in "name" to array
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1)); //or below

    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis'); //prints "Jessica Ann Smith Davis"
capitalizeName('jonas schmedtmann'); //prints "Jonas Schmedtmann"

// Padding strings
//pad start adds padding to the start of a string using a a specified number
//number of padding items added to the start will be " specified number - string length"
//pad end adds padding to the end of a string using a a specified number
//number of padding items added  to the end will be " specified number - string length - padstartNumber"
//when no symbol pass, like padStart(20), blank spaces are used for padding

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+')); //prints "++++++Go to gate 23!++++++++++"
console.log('Jonas'.padStart(20, '+').padEnd(30, '+')); //prints "+++++++++++++++Jonas++++++++++"

const maskCreditCard = function (number) {
  const str = number + ''; //another way of converting number to string instead of string(number)
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836)); //prints "****7836"
console.log(maskCreditCard(43378463864647384)); //prints "*************7384"
console.log(maskCreditCard('334859493847755774747')); //prints "*****************4747"

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5)); //prints " message2 times 5"

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5); //prints "There are 5 planes in line 🛩🛩🛩🛩🛩"
planesInLine(3); //prints "There are 3 planes in line 🛩🛩🛩"
planesInLine(12); //prints "There are 12 planes in line 🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩"

///////////////////////////////////////
// String Methods Practice

const flights_2 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights_2.split('+'));
for (const flight of flights_2.split('+')) {
  console.log(flight);
}
console.log('');

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights_2.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36); //with no symbol pass blank spaces are used for padding
  console.log(output);
}
