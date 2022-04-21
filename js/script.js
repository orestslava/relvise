"use strict";

const menuIcon = document.querySelector(".menu__icon");
const menuLinks = document.querySelector(".menu__links");

menuIcon.addEventListener("click", function () {
  document.body.classList.toggle("_lock");
  menuIcon.classList.toggle("_active");
  menuLinks.classList.toggle("_active");
});
