"use strict";
const outside = document.querySelector("main");
const features = document.querySelector(".features-menu");
const company = document.querySelector(".company-menu");
const featuresMenu = document.querySelector(".features");
const companyMenu = document.querySelector(".company");
const origins = document.querySelector(".img");
const original = document.querySelector(".image-e");
const img = document.querySelector(".togger");
const image = document.querySelector(".tog");
features.addEventListener("click", function () {
  featuresMenu.classList.toggle("act");
  origins.classList.toggle("togger");
  img.classList.toggle("togger");
});
company.addEventListener("click", function () {
  companyMenu.classList.toggle("activer");
  original.classList.toggle("tog");
  image.classList.toggle("tog");
});

/* Mobile Menu*/
const hamburger = document.querySelector(".mobile-menu");
const mobileMenu = document.querySelector(".mobile");
const closeMenu = document.querySelector(".close");
const featuresBtn = document.querySelector(".features-btn-mobile");
const companyBtn = document.querySelector(".company-btn-mobile");
const arrowDown = document.querySelector(".mobile-down");
const arrowUp = document.querySelector(".mobile-up");
const arrowDowns = document.querySelector(".mobile-downs");
const arrowUps = document.querySelector(".mobile-ups");
const mobileFeatures = document.querySelector(".features-mobile");
const mobileCompany = document.querySelector(".company-mobile");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("in-active");
  closeMenu.classList.toggle("mobile-menu");
  mobileMenu.classList.toggle("in-active");
});
closeMenu.addEventListener("click", function () {
  closeMenu.classList.toggle("mobile-menu");
  hamburger.classList.toggle("mobile-menu");
  mobileMenu.classList.toggle("in-active");
});
featuresBtn.addEventListener("click", function () {
  arrowDown.classList.toggle("mobile-up");
  arrowUp.classList.toggle("mobile-up");
  mobileFeatures.classList.toggle("features-mobile");
});
companyBtn.addEventListener("click", function () {
  arrowDowns.classList.toggle("mobile-ups");
  arrowUps.classList.toggle("mobile-ups");
  mobileCompany.classList.toggle("company-mobile");
});
