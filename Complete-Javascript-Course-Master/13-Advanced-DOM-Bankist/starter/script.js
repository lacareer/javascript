'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

//function to open modal
const openModal = function (e) {
  // e.preveventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function to close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//event to open modal
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

//same as the loop above but using foreach instead
//event to open modal
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

//event to close modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//close modal on keyboard escape key, esc
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//SMOTH SCROLL TO SECTION 1 WHEN BUTTON IS CLICKED
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//old school way of smooth scrolling
buttonScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); //gets section 1 coordinates on the dom
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  //1 method still old school
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //2 method still old school
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behaviour: 'smooth',
  // });

  //MODERN WAY OF SMOOTH SCROLLING
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page navigation: So that when the menu items are clicked on
//rather than jump to that section on the page, it scrolls to that
//point gently

//solution 1
//not ideal as it creates event the same listener for each element
// the more the elements, the more performance will be impacted

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     //stops the click on menu from going to the page section as program in the html
//     e.preventDefault();
//     const id = this.getAttribute('href'); //it is the string id
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//solution 2. Using event delagtion to solve the above smooth scrolling
// 1. Add event listener to common parent element : nav__links'
// 2. Determine what element originated the event: e.target gives you where the event originated from

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.classList.contains('nav__link'));
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Building the Tabbed component
//similar to the browser tabs, each with its content
//on our html its the div with class="operations"
//use event delegation for tabbing
//solution 2. Using event delagtion to solve the above smooth scrolling
// 1. Add event listener to common parent element : operations__tab'
// 2. Determine what element originated the event: e.target gives you where the event originated from

tabsContainer.addEventListener('click', function (e) {
  //just using e.taget will not work as when you click on the number, 01 or 02 or 03 in the span
  //element we get the span  element instead of the button as shown in the console.log below
  console.log(e.target);

  //so we use closest()
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //

  // Guard clause
  if (!clicked) return;

  // Remove active classes FOR ALL TABS
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Add the 'active' class to Active/clicked tab
  clicked.classList.add('operations__tab--active');

  //will give you the prepended number at the end of this class: operations__content--x
  //where x is the nummber
  console.log(clicked.dataset.tab);

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////
// Menu fade animation

// 1. Add event listener to common parent element : operations__tab'
// 2. Determine what element originated the event: e.target gives you where the event originated from

//option 1: Easier to read and understand

// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target; //gets the anchor tag
//     //moves from  the anchor tag to the nav tag and selects all the anchor tag
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     //moves from  the anchor tag to the nav tag and selects image tag
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// };

// // Passing "argument" into handler
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

//option 2
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target; //gets the anchor tag
    //moves from  the anchor tag to the nav tag and selects all the anchor tag
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    //moves from  the anchor tag to the nav tag and selects image tag
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5)); //sets "this" to 0.5
nav.addEventListener('mouseout', handleHover.bind(1)); //sets "this" to 1

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const header = document.querySelector('.header'); //what to observe for before making the navigation sticky/fixed
const navHeight = nav.getBoundingClientRect().height; //gets the height of the nav bar

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  //root margin adds a height specified when the sticky nav is added
  //because our nav bar is 9rem/90px we want it to kick in 90px before the end of the header
  //since the header is 100vh
  //this makes the sticky header flush with the next element/border-top in this case
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////////
// Gradually revealing sections as we approach them from top to bottom

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //removes hidden class
  entry.target.classList.remove('section--hidden');
  //stop observation
  observer.unobserve(entry.target);
};

//our intersection observer API
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

//hiding all html section class
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// // Lazy loading images
//image tag in the a very small img something like 100 by 100: src="img/card-lazy.jpg"
//our high resolution image : data-src="img/card.jpg"
//theres a filter bluring the low resolution in our css
//our  actual html image tag
{
  /* <img
    src="img/card-lazy.jpg"
    data-src="img/card.jpg"
    alt="Credit card"
    class="features__img lazy-img"
/> */
}

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  //removes the css calss with the blur used in the low resolution image
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  //stop observation from firing to improve efficiency
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
