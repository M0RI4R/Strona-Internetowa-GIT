const burgerBtn = document.querySelector(".burger");
const barsIcon = document.querySelector(".fa-bars");
const xmark = document.querySelector(".x-mark");
let nav = document.querySelector("nav ul");
const menuRight = document.querySelector(".menu-right");
const header = document.querySelector("header");

const ulList = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const a1 = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");
const a4 = document.createElement("a");
a1.textContent = "Facebook";
a2.textContent = "Twitter";
a3.textContent = "Instagram";
a4.textContent = "LinkedIn";
header.append(ulList);
li1.append(a1);
li2.append(a2);
li3.append(a3);
li4.append(a4);
ulList.append(li1, li2, li3, li4);

a1.setAttribute("href", "https://www.facebook.com");
a2.setAttribute("href", "https://www.twitter.com");
a3.setAttribute("href", "https://www.instagram.com");
a4.setAttribute("href", "https://www.linkedin.com");

ulList.setAttribute("class", "none");

const handleNav = () => {
  nav.classList.toggle("act");
  xmark.classList.toggle("xmarkactive");
  barsIcon.classList.toggle("hide");
  menuRight.classList.toggle("act");
  ulList.classList.toggle("act");
};

burgerBtn.addEventListener("click", handleNav);

// ----------------------------------------FORMULARZ----------------------------------

const formBtn = document.querySelector(".form-button2");
const closeFormBtn = document.querySelector(".close-form");
const popup = document.querySelector(".popup");
const body = document.querySelector("body");

const openForm = () => {
  popup.style.display = "flex";

  body.classList.toggle("blurr");
};

const closeForm = () => {
  popup.style.display = "none";
  body.classList.remove("blurr");
};
formBtn.addEventListener("click", openForm);
closeFormBtn.addEventListener("click", closeForm);
