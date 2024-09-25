"use strict";

/** TOPIC COVERED */
console.log(`***** SELECTING DOM ELEMENTS *****`);

console.log(document.documentElement); //selects the entire html
console.log(document.head); //selects the head html
console.log(document.body); //selects the body html
console.log(document.querySelector(".header")); //selects the first element head class

const allSections = document.querySelectorAll(".section"); //selects all node/element  with the section class
console.log(allSections);

//selects all html element with name = button. THE RESULT IS A HTML COLLECTION AND NOT A NODE LIST
//IF THE DOM CHANGES THE COLLECTION  CHANGES TOO
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementById("section--1")); //select the element with the unique id section--1

//selects all html element with name = button. THE RESULT IS A HTML COLLECTION AND NOT A NODE LIST
//IF THE DOM CHANGES THE COLLECTION  CHANGES TOO
console.log(document.getElementsByClassName("btn"));

console.log("");
console.log(`***** CREATING AND INSERTING ELEMENTS *****`);

//1. inserting using insertAdjacentHTML like we did in the bankist app to see example

//2.createElement
const message = document.createElement("div");

message.classList.add("cookie-message");

// message.textContent =
//   "We  use cookies for improved functionality and analytics";

//sames the above but for the button that is added
message.innerHTML =
  "We  use cookies for improved functionality and analytics. <button class= 'btn btn--close-cookie'> Got it!</button>";

//adding the new element to the dom
const header = document.querySelector(".header");
console.log(message);
//adds the new element as the first child of the header selected
// header.prepend(message);

//adds the new element just as the last child of the header selected
header.append(message);

//another way to add to dom
//adds a new copy to the dom even after the append above as the new last child
// header.append(message.cloneNode(true));

//add before the header selected
// header.before(message);
//add after the header selected
// header.after(message);

//deleting elements from the dom

console.log("");
console.log(`***** DELETING DOM ELEMENTS *****`);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    //old school way of deletion
    //   message.parentElement.removeChild(message);

    //MODERN WAY
    message.remove();
  });

//setting style uses camelCase

console.log("");
console.log(`***** STYLING DOM ELEMENTS *****`);

message.style.backgroundColor = "#37383d";
// message.style.borderRadius = "2.5%";
message.style.width = "120%";

console.log(message.style.color); //doesn't get the dom color of the message element
console.log(message.style.backgroundColor); //prints rgb(55, 56, 61)

//better way to get all dom styles is to use the getComputedStyle()
console.log(getComputedStyle(message)); //prints all styes applied to the element
console.log(getComputedStyle(message).color); //prints THE COLOR STYLE APPLIED: rgb(187, 187, 187)
console.log(getComputedStyle(message).height); //prints THE HEIGHT STYLE APPLIED: 48.9844px

//Changeing dom style using getComputedStyle()
//Number.parseFloat is to read the already applied height without the px appended to it: 48.9844 only instead of 48.9844px
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

//changing css custome property/variables
document.documentElement.style.setProperty("--color-primary", "orangered"); //changes  color from --color-primary: #5ec576; to orangered

console.log("");
console.log(`***** ACCESSING DOM ATTRIBUTESS *****`);

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt); // prints: Bankist logo
console.log(logo.className); //prints nav__logo
console.log(logo.src); //prints absolute url: http://127.0.0.1:5500/13-Advanced-DOM-Bankist/DOM_Manupulation/img/logo.png
console.log(logo.getAttribute("src")); //prints relative url: img/logo.png
const link = document.querySelector(".nav__link--btn");
console.log(link.href); //prints the absolute url: http://127.0.0.1:5500/13-Advanced-DOM-Bankist/DOM_Manupulation/index.html#
console.log(link.getAttribute("href")); //prints the relative url: #

//change attribute text
logo.alt = "Beautiful minimalist logo";
console.log(logo.alt); //prints Beautiful minimalist logo

//non-standard attributes
console.log(logo.designer); //prinst undefined bcs 'designer' is not a standard attribute

//to get no-satndard attru=ibute do below
console.log(logo.getAttribute("designer"));

//set a non-standard attribute using Js
logo.setAttribute("company", "Bankist"); //attribute = company, attribute text = Bankist
console.log(logo.getAttribute("company"));

// Data attributes
console.log(logo.dataset.versionNumber);
console.log(`${logo.dataset.tab}`);

// Classes
console.log(`***** ADDING AND REMOVING ATTRIBUTESS *****`);
logo.classList.add("c", "j"); //adds c and j as new  classes to the existing class on logo if there is any
// logo.classList.remove("c", "j"); //removes c and j on logo and leaving the others if there is any
// logo.classList.toggle("c"); //adds the class if it doesn't exist and removes it if it does
// logo.classList.contains("c"); // returns true or false like array  includes()
console.log(logo);

// Don't use
// logo.clasName = 'jonas';

console.log("");
console.log(`***** TYPES OF EVENT AND EVENT HANDLERS *****`);

//important types of events; read up on MSDN

const h1 = document.querySelector("h1");
const alertH1 = function (e) {
  alert("AddEventlistener: Great! You are now reading the page header");
};

//modern way

h1.addEventListener("mouseenter", alertH1);

//removing the eventlister with settimeout timer after 2secs
//hoving on h1 does not fire the alert anymore bcs the event has been removed
setTimeout(() => {
  h1.removeEventListener("mouseenter", alertH1);
}, 2000);

//OLD SCHOOL WAY
// h1.onmouseenter = function (e) {
//   alert("OnMouseEnter: You are no longer reading the page header");
// };

///////////////////////////////////////
// Event Propagation in Practice
console.log("");
console.log(`***** EVENT PROPAGATION IN PRACTICE *****`);
//

//random number between two numbers
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

//generates random colors
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());

//changes the color of the element with each click(the anchor, a, elements)
//also causes the click events of the parents to run because it
//bubbles up all the way to the  top which runs their click event
document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation to parents
  //uncomment to see that only this child element changes color
  // e.stopPropagation();
});

//this is the container of the nav elements so
//there is no bubbling to children node
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});

console.log("");
console.log(`***** DOM TRAVERSAL *****`);

///////////////////////////////////////
// DOM Traversing
//const h1 = document.querySelector("h1");//ALREADY DECLARED ABOVE

// Going downwards: child
console.log(h1.querySelectorAll(".highlight")); //selects all children element with the class "highlight"
console.log(h1.childNodes); //all direct children, which is everything under the h1 parent element
console.log(h1.children); //gives only the direct html children element that are children  to h1
h1.firstElementChild.style.color = "white"; //first child of h1
h1.lastElementChild.style.color = "orangered"; //last h1 child

// // Going upwards: parents
console.log(h1.parentNode); //h1 parent
console.log(h1.parentElement); //h1 parent

h1.closest(".header").style.background = "var(--gradient-secondary)"; //the closest element with a class of "header"

h1.closest("h1").style.background = "var(--gradient-primary)"; //closest h1 will be the h1 itself

// // Going sideways: siblings
console.log(h1.previousElementSibling); //null bcs not previous siblings
console.log(h1.nextElementSibling); //h4 tag

//should be same as above but browser behaviour makes it unreliable
//so just the above instead
console.log(h1.nextSibling); //
console.log(h1.previousSibling); //

//move up and down
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});

///////////////////////////////////////
// Sticky navigation: Intersection Observer API
//readup
console.log("");
console.log(`***** Intersection Observer API *****`);

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    console.log(observer);
  });
};

//root = viewport
//threshold is what sets the limit that is must be reached before the call obCallBack is fired
const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const section1 = document.querySelector("#section--1");
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

// ///////////////////////////////////////
// // Lifecycle DOM Events
console.log("");
console.log(`***** Lifecycle DOM Events *****`);

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree built!", e);
});

window.addEventListener("load", function (e) {
  console.log("Page fully loaded", e);
});

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = "";
});
