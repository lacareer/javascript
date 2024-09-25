'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// BANKIST APP

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
//date formatters

const formatMovementDate = function (date, locale) {
  //calculates the diff between 2 dates
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  //displays days
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

//ADDS DEPOSIT AND WITHDRAWAL OF CASH TRANSACTION
const displayMovements = function (acc, sort = false) {
  //empty the content of the container
  //removes manual content placeholder we had in the html. SEE CONSOLE LOG BELOW
  //console.log(containerMovements.innerHTML);
  containerMovements.innerHTML = '';
  console.log(acc);
  // console.log(acc.movements);

  //Rember slice with no param produces a copy of an array
  //when chaining is involved slicing for producing copy is better than the spread operator
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  console.log(movs);

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
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

//changing the tansaction rows styling when the balance label is clicked
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     // every second row 0, 2, 4, 6
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     //every third  0, 3, 6, 9
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

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
  const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);

  labelBalance.textContent = `${formattedMov}`;
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

  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const expenditure = acc.movements
    .filter((mov, i, arr) => {
      return mov < 0;
    })
    .reduce((acc, cur, i, arr) => {
      return acc + cur;
    }, 0);

  labelSumOut.textContent = formatCur(
    Math.abs(expenditure),
    acc.locale,
    acc.currency
  );

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

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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
  displayMovements(account);
  //displays balance
  calcPrintDisplayBalance(account);
  //displays summary
  calcDisplaySummary(account);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };

  // Set time to 2 minutes
  let time = 120;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

//Event handlers
let currentAccount, timer;

//faking login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

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

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      //weekday: 'long', //short or narrow are other options
    };
    // const day = `${now.getDate()}`.padStart(2, 0);
    // //months have 0 index
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); //give months like so 02, 03, 01 , 12
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // console.log(min, hour);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    //clear login input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    //make the pin input field lose cursor focus
    inputLoginPin.blur();

    //calling timer function and checking if its running for another account
    if (timer) {
      clearInterval(timer);
    }
    timer = startLogOutTimer();

    //UPDATES UI WHEN TRANSACTIONS ARE MADE
    updateUI(currentAccount);

    //Display movemments
    displayMovements(currentAccount);
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
    //deduct amount fromaccount
    currentAccount.movements.push(amount * -1);

    //add amount to the receiving aacount
    receiveAcc.movements.push(amount);
    //add the transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiveAcc.movementsDates.push(new Date().toISOString());

    //update the user interface
    updateUI(currentAccount);
    console.log('Valid transfer');

    //reset timer to initial number of minutes after transfer activity

    clearInterval(timer);
    timer = startLogOutTimer();
  }

  inputTransferTo.value = inputTransferAmount.value = '';
});

//loan event handler
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  //user must have one of his transaction 10% of loan required and must be > 0
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //sets a delay to simulate loan too so time before approval
    setTimeout(function () {
      currentAccount.movements.push(amount);
      //add the transfer date
      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
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
