///// HAM BTN AND NAV OPEN/CLOSEDS

const hamBtn = document.querySelector(".ham-btn");
const nav = document.querySelector(".nav");

hamBtn.addEventListener("click", (e) => {
  if (nav.getAttribute("aria-expanded") === "false") {
    nav.setAttribute("aria-expanded", "true");
    hamBtn.setAttribute("data-active", "true");
  } else {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  }
});

const navLink = document.querySelectorAll(".header .nav__link");
navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  });
});

///////// INTERSECTION OBSERVER

const observere = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      //  else {
      //   entry.target.classList.remove("active");
      // }
    });
  },
  { threshold: 0.2 }
);

// left
const left = document.querySelectorAll(".hidden-left");
left.forEach((el) => observere.observe(el));
// right
const right = document.querySelectorAll(".hidden-right");
right.forEach((el) => observere.observe(el));
// bottom
const fade = document.querySelectorAll(".hidden-fade");
fade.forEach((el) => observere.observe(el));
// clippy circle
const clippyCircle = document.querySelectorAll(".circle-clip-animation");
clippyCircle.forEach((el) => observere.observe(el));
