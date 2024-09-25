console.log(``);
console.log(`Outputs from coding challenges`);
///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
console.log(`
Coding challenge #1`);
const calcAverage = (firstScore, secondScore, thirdScore) => {
  return (firstScore + secondScore + thirdScore) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(
      `The Dolphins are the winners with ${avgDolphins} score and the Koalas ${avgKoalas}`
    );
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(
      `The Koalas are the winners with ${avgKoalas} score and the Dolphins ${avgDolphins}`
    );
  } else {
    console.log(
      `There are no winner. The Dolphins averaged ${avgDolphins} and the Koalas ${avgKoalas}`
    );
  }
};

// Data 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

checkWinner(avgDolphins, avgKoalas);

// Data 2
const avgDolphins_1 = calcAverage(85, 54, 41);
const avgKoalas_1 = calcAverage(23, 34, 27);

checkWinner(avgDolphins_1, avgKoalas_1);

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300,
and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above
(you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
console.log(`
Coding challenge #2`);

const calcTip = (bill) => {
  let tip = 0;
  if (bill >= 50 && bill <= 300) {
    tip = 0.15 * bill;
  } else {
    tip = 0.2 * bill;
  }

  return tip;
};

const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`${bills}
${tips}
${total}`);

console.log(`Total cost for ${bills[0]} is ${total[0]}.
Total cost for ${bills[1]} is ${total[1]}.
Total cost for ${bills[2]} is ${total[2]}.`);

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
console.log(`
Coding challenge #3`);

const markObject = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    //creates a new object item called bmi. Could do without it though.
    //When you, call the function like so: markObject.calcBMI() AND the return statement will now be: return this.mass / this.height ** 2;
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
  summary: function () {
    return `${this.fullName} has a BMI of ${this.calcBMI}`;
  },
};

const johnObject = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    //creates a new object item called bmi. Could do without it though.
    //When you, call the function like so: johnObject.calcBMI() AND the return statement will now be: return this.mass / this.height ** 2;
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
  summary: function () {
    return `${this.fullName} has a BMI of ${this.calcBMI}`;
  },
};

console.log(
  `${johnObject.calcBMI().toFixed(2)}, ${markObject.calcBMI().toFixed(2)}`
);

const johnsResult = `${johnObject.fullName}'s BMI ${johnObject.bmi.toFixed(
  2
)} is higher than ${markObject.fullName}'s ${markObject.bmi.toFixed(2)}!`;
const marksResult = `${markObject.fullName}'s BMI ${markObject.bmi.toFixed(
  2
)} is higher than ${johnObject.fullName}'s ${johnObject.bmi.toFixed(2)}!`;

if (markObject.bmi > johnObject.bmi) {
  console.log(marksResult);
} else if (johnObject.bmi > markObject.bmi) {
  console.log(johnsResult);
} else {
  console.log(`They both have the same BMI.

  `);
}

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array.
   This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration,
       add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
console.log(`
Coding challenge #4`);

const tipsLoop = [];
const totalsLoop = [];
const billsLoop = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTipLoop = (bill) => {
  let tips = 0;

  for (let item = 0; item < bill.length; item++) {
    if (bill[item] >= 50 && bill[item] <= 300) {
      tips = 0.15 * bill[item];
    } else {
      tips = 0.2 * bill[item];
    }
    tipsLoop.push(tips);
    totalsLoop.push(tips + bill[item]);
  }
};

calcTipLoop(billsLoop);
console.log(`${totalsLoop}, \n${tipsLoop}}`);

for (let item = 0; item < billsLoop.length; item++) {
  console.log(
    `${item + 1}. For a bill of ${billsLoop[item]}, you'll give a tip of ${
      tipsLoop[item]
    }. Your total bill will be: ${totalsLoop[item]}`
  );
}
// Bonus
const calcAllAverage = (arr) => {
  let sum = 0;
  for (let item = 0; item < arr.length; item++) {
    sum += arr[item];
  }

  return sum / arr.length;
};

console.log(calcAllAverage(tipsLoop));
console.log(calcAllAverage(billsLoop));
console.log(calcAllAverage(totalsLoop));
