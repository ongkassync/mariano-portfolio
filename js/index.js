const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const mobileNav = document.querySelector(".mobile-nav-wrapper");
const mobileMenuBtns = document.querySelectorAll(".mobile-menu-btns li a");
const main = document.querySelector("main");

openMenuBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

mobileMenuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});