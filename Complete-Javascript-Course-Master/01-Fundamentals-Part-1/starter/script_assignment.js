// lECTURE ASSIGNMENT
// 1.Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console
// Practice assignement
console.log("");
console.log("Assignment output from 'script_assignment'");
console.log("Practice Assignment");
console.log("");
let country = "Nigeria";
let continent = "Africa";
let population = 200000000;
console.log(
  `My country is ${country} in the continent of ${continent} with a population of ${population} million person`
);

// Coding challenge #1
console.log(``);
console.log(`Challenge 1`);
// Data 1
const mark_weight = 78;
const mark_height = 1.69;

const john_height = 1.95;
const john_weight = 92;

const mark_bmi = mark_weight / mark_height ** 2;
const john_bmi = john_weight / john_height ** 2;

const markHigerBMI = mark_bmi > john_bmi; //? true : false;

console.log(mark_bmi);
console.log(john_bmi);
console.log(markHigerBMI);

// Data 2. Same calculation like above but with various variable data

console.log(``);
console.log(`Challenge 2`);
// coding challenge #2
if (markHigerBMI) {
  console.log(
    `Mark's BMI ${mark_bmi.toFixed(
      4
    )} is higher than John's BMI ${john_bmi.toFixed(4)}`
  );
} else {
  console.log(
    `John's BMI ${john_bmi.toFixed(
      4
    )} is higher than Mark's BMI ${mark_bmi.toFixed(4)}`
  );
}

console.log(``);
console.log(`Challenge 3`);
// Coding 3 challenge
// DATA 1
const teamOneAverage = (96 + 108 + 89) / 3;
const teamTwoAverage = (88 + 91 + 110) / 3;

if (teamOneAverage > teamTwoAverage) {
  console.log(
    `Team 1 has ${teamOneAverage.toFixed(
      2
    )} while Team 2 has ${teamTwoAverage.toFixed(2)}. Team 1 is the winner!`
  );
} else if (teamOneAverage < teamTwoAverage) {
  console.log(
    `Team 1 has ${teamOneAverage.toFixed(
      2
    )} while Team 2 has ${teamTwoAverage.toFixed(2)}. Team 2 is the winner!`
  );
} else {
  console.log(`It is a draw`);
}

// Data 2
// const teamOneAverage_1 = (97 + 112 + 101) / 3;
const teamOneAverage_1 = (109 + 95 + 123) / 3;
const teamTwoAverage_1 = (109 + 95 + 123) / 3;

if (teamOneAverage_1 > teamTwoAverage_1 && teamOneAverage_1 > 100) {
  console.log(
    `Team 1 has ${teamOneAverage_1.toFixed(
      2
    )} while Team 2 has ${teamTwoAverage_1.toFixed(
      2
    )}. Team 1 is the winner! 👌`
  );
} else if (teamOneAverage_1 < teamTwoAverage_1 && teamTwoAverage_1 > 100) {
  console.log(
    `Team 1 has ${teamOneAverage_1.toFixed(
      2
    )} while Team 2 has ${teamTwoAverage_1.toFixed(
      2
    )}. Team 2 is the winner! 🤞`
  );
} else if (teamOneAverage_1 === teamTwoAverage_1 && teamTwoAverage_1 > 100) {
  console.log(`It is a draw! 👏`);
} else {
  console.log(
    `There was no winner because Team 1 scored ${teamOneAverage_1} and Team 2 ${teamTwoAverage_1} was less than 100 points. 😒`
  );
}
