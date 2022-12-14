"use strict";
// TOGGLE MOBILE BTN
const navOpen = document.querySelector("nav-open");
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

// NEXT/PREVIOUS SLIDE
const slidesDesktop = document.querySelectorAll(".hero__desktop-slide-img");
const slidesMobile = document.querySelectorAll(".hero__mobile-slide-img");
const btnLeft = document.querySelector(".btn__box--left");
const btnRight = document.querySelector(".btn__box--right");

const slidesArticle = document.querySelectorAll(".shop__article-box");

// TOGGLE MOBILE BTN
btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// NEXT/PREVIOUS SLIDE
let curSlide = 0;
const maxSlide = slidesDesktop.length;

const goToSlide = function (slide) {
  // first slide index = 0, slide = 0;
  // second slide index = 1, slide = 1;
  // etc
  slidesDesktop.forEach(
    (s, index) => (s.style.transform = `translateX(${100 * (index - slide)}%)`)
  );
  slidesMobile.forEach(
    (s, index) => (s.style.transform = `translateX(${100 * (index - slide)}%)`)
  );

  slidesArticle.forEach(
    (s, index) => (s.style.transform = `translateX(${100 * (index - slide)}%)`)
  );

};
goToSlide(0);

const nextSlide = function () {
  // after clicking the btnRight adds 1 to the (let curSlide = 0)
  // before iteration let curSlide = 0;
  // first click let curSlide = 1;
  // second click let curSlide = 2;
  // etc.
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  console.log(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

// NEXT/PREV SLIDE
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

// Moves slides with keyboard arrows
document.addEventListener("keydown", function (e) {
  // if e.key === 'ArrowLeft', then we call function "prevSlide()"
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});
