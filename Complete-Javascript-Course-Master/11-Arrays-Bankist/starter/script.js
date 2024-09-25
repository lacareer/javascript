'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Functions

//ADDS DEPOSIT AND WITHDRAWAL OF CASH TRANSACTION
const displayMovements = function (movements, sort = false) {
  //empty the content of the container
  //removes manual content placeholder we had in the html. SEE CONSOLE LOG BELOW
  //console.log(containerMovements.innerHTML);
  containerMovements.innerHTML = '';

  //Rember slice with no param produces a copy of an array
  //when chaining is involved slicing for producing copy is better than the spread operator
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">💲${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    ///note about "insertAdjacentHTML". Can be:
    //beforebegin
    //afterbegin
    //beforeend
    //afterend
  });
};

const user = 'Steven Thomas Williams'; //username should be stw
//split returns an array so we can just chain a map to it directly and join to get "stw"
const username_test = user.toLowerCase().split(' ');
console.log(username_test);

//calculates the balance of each account owner
const calcPrintDisplayBalance = function (acc) {
  const balance = acc.movements.reduce(function (acc, cur, i, arr) {
    return acc + cur; //keeps adding each item in the array  to the accumulator
  }, 0);
  //creates a new balance property on the account object
  acc.balance = balance;
  labelBalance.textContent = `💲${acc.balance}`;
  console.log(acc.balance);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov, i, arr) => {
      return mov > 0;
    })
    .reduce((acc, cur, i, arr) => {
      return acc + cur;
    }, 0);

  labelSumIn.textContent = `💲${incomes}`;

  const expenditure = acc.movements
    .filter((mov, i, arr) => {
      return mov < 0;
    })
    .reduce((acc, cur, i, arr) => {
      return acc + cur;
    }, 0);

  labelSumOut.textContent = `💲${Math.abs(expenditure)}`;

  //calculating an interest of 1.2%
  const interest = acc.movements
    .filter((move, i, arr) => {
      //removes all withdrawal
      return move > 0;
    })
    .map((deposit, i, arr) => {
      //calculates the interst of each deposit
      return (deposit * acc.interestRate) / 100;
    })
    .filter((move, i, arr) => {
      //remove all deposit with interest less than 1
      return move >= 1;
    })
    .reduce((acc, cur, i, arr) => {
      //sums all the interest after iterating thru and filtering
      return acc + cur;
    }, 0);

  labelSumInterest.textContent = `💲${interest}`;
};

//receives all user names and creates an array of their username
const createUsernames = function (accts) {
  accts.forEach(function (acc) {
    //creates a new property username on all account object
    //and set it to the initial of the each owner
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(initial => {
        return initial[0]; //first letter in a string
      })
      .join('');
    console.log(acc.username); //prints all account owner usernames
  });
};
createUsernames(accounts);

//updates the ui whe a transaction is made
//
const updateUI = function (account) {
  //Display movemments
  displayMovements(account.movements);
  //displays balance
  calcPrintDisplayBalance(account);
  //displays summary
  calcDisplaySummary(account);
};

//Event handlers
let currentAccount;

////login event handler
btnLogin.addEventListener('click', function (e) {
  //stops the form form login from submitting/refreshing page.
  //default behaviour of submitted forms
  // console.log(e.target.value);
  e.preventDefault();
  //checks the username entered for login
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  //if username exist check if the pin exist and is correct
  // ? only reads the property to the left if the property before it is not undefined
  //same as below
  // if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(`Login`);
    //displays login message, using the firstname,
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    //and set the class "app" UI to visible/100
    containerApp.style.opacity = 100;

    //clear login input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    //make the pin input field lose cursor focus
    inputLoginPin.blur();

    //UPDATES UI WHEN TRANSACTIONS ARE MADE
    updateUI(currentAccount);

    //Display movemments
    displayMovements(currentAccount.movements);
    //displays balance
    calcPrintDisplayBalance(currentAccount);
    //displays summary
    calcDisplaySummary(currentAccount);
  }
});

//transfer of money transaction
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  //gets transfer amount from user input
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiveAcc);

  //checks that the login user meets transfer conditions below before transactions
  if (
    currentAccount.balance >= amount &&
    receiveAcc &&
    amount > 0 &&
    receiveAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(amount * -1);
    receiveAcc.movements.push(amount);
    updateUI(currentAccount);
    console.log('Valid transfer');
  }

  inputTransferTo.value = inputTransferAmount.value = '';
});

//loan event handler
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  //user must have one of his transaction 10% of loan required and must be > 0
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//close account event handler
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete');

  //makes sure the user login on is the one trying to delete his account
  //similar to find method but just retrns the index of the first found element and  not the element
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => (currentAccount.username = acc.username)
    );
    console.log(index);
    //deletes account
    accounts.splice(index, 1);
    //and hides the ui by setting the class "app" UI to 0
    containerApp.style.opacity = 0;

    inputClosePin.value = inputCloseUsername.value = '';
    console.log(accounts);
  }
});

//sort event listener

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
