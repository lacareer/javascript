'use strict';

console.log('');
console.log(`***** Constructor functions *****`);
console.log('');

//constructor functions uses the key word 'function' with the 'new' keyword
//Function name is conventionally in uppercase
//arrow functions cannot be used for constructor functions because it does not have its own keyword
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method in a constructor function
  //Although it would work

  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

//instantiation of the Person class
const jonas = new Person('Jonas', 1991);
console.log(jonas);
console.log(jonas instanceof Person); //prints  true

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda);
console.log(jack);

//adding a 'hey' method to a the Person class
Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();

console.log('');
console.log(`***** JS Prototype Property *****`);
console.log('');
///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

//Best way of adding a method to an object using JS PROTOTYPE
//adding a 'hey' method to a the Person class
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas)); //prints true
console.log(Person.prototype.isPrototypeOf(matilda)); //prints true
console.log(Person.prototype.isPrototypeOf(Person)); //prints false

// .prototyeOfLinkedObjects

//adding an attribute to a class object
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); //new attribute now available to the instance

console.log(jonas.hasOwnProperty('firstName')); //prints true
console.log(jonas.hasOwnProperty('species')); //prints false

///////////////////////////////////////
console.log('');
console.log(`***** JS Prototypal Inheritance on Built-In Objects *****`);
console.log('');
// Prototypal Inheritance on Built-In Objects

console.log(jonas.__proto__); //inherits from construtor

// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__); //inherits from the object constructor
console.log(jonas.__proto__.__proto__.__proto__); //null bcs all class object inherits from the object __proto__

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__); //prints all inheritted method of the array class
console.log(arr.__proto__ === Array.prototype); //same as the Array class

console.log(arr.__proto__.__proto__);

//adding a new method to the array class using inheritance
//returns only unique values for the array
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

console.log('');
console.log(`***** ES6 CLASSES *****`);
console.log('');

///////////////////////////////////////
// ES6 Classes

// 1. Class expression
// const PersonCl = class {}

// 2. Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this); //refers  to the class
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in 'strict mode'

const walter = new PersonCl('Walter White', 1965);
//calling a static method must be done with the class name
PersonCl.hey();

///////////////////////////////////////
console.log('');
console.log(`***** ES6 CLASSES (Setters and Getters) *****`);
console.log('');

// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

//SET A NEW MOVEMENT
account.latest = 50;
console.log(account.movements);

///////////////////////////////////////
// Object.create
//it is the least used way of implementing the prototype inheritance
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// 1. Inheritance Between "Classes": Constructor Functions
console.log('');
console.log(
  `***** Actual Inheritance Between "Classes": Constructor Functions *****`
);
console.log(`***** Class concept more as it is similar to Java or C *****`);
console.log('');

//PersonNew class with calAge()
const PersonNew = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonNew.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//Student class, linking it to the parent using Obejct.create()
//and adding an introduce()
const Student = function (firstName, birthYear, course) {
  //calling the parent class contructor
  //and setting the 'this' key word to the student class
  PersonNew.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(PersonNew.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

//a;; print true to show inheritance
console.log(mike instanceof Student);
console.log(mike instanceof PersonNew);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////
// 2. Inheritance Between "Classes": Constructor Functions
console.log('');
console.log(
  `***** ES6 Inheritance Between "Classes": Constructor Functions *****`
);
console.log(`***** Class concept more as it is similar to Java or C *****`);
console.log('');

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCll {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCll extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first! CALL SUPER FIRST IN CHILD CLASS
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCll('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

///////////////////////////////////////
console.log('');
console.log(`***** Inheritance Between "Classes": Object.create *****`);
console.log('');
// Inheritance Between "Classes": Object.create

const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven1 = Object.create(PersonProto1);

const StudentProto = Object.create(PersonProto1);
//ADDING THE ATTRIBUTES OF THE PARENT CLASS TO THE CHILD CLASS
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto1.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

///////////////////////////////////////
console.log('');
console.log(`***** Encapsulation: Protected Properties and Methods *****`);
console.log('');
// Encapsulation: Protected Properties and Methods

//NOT THAT THE ENCAPSULATION OF DATA IN JS AHS NOT YET BEING FULLY IMPLEMENT AS AT DEC 26, 2021
//But below is just creating a logic of what to encapsulate and how it would be done when fully implement in Js
// 1) Public fields: _
// 2) Private fields: #
// 3) Public methods: _
// 4) Private methods: #
// (there is also the static version)

class Account {
  //NOT NEED FOR LET OR CONST FOR FIELD ATTRIBUTES
  //MUST BE TERMONATED WITH A SEMI-COLON: ;

  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    //making the method chainable even without a return value
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    //making the method chainable even without a return value
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      //making the method chainable even without a return value
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Chuks', 'CAD', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

//CONSOLE PRINST ERROR BCS THESE FIELDS ARE PRIVATE
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
