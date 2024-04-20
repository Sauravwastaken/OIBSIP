let body = document.getElementsByTagName("body")[0];
let cardContainer = document.getElementById("card-container");
let sliderLeft = document.getElementById("slider-left");
let sliderRight = document.getElementById("slider-right");
let card = document.getElementsByClassName("card")[0];
sliderLeft.onclick = function () {
  if (body.clientWidth < 639) {
    cardContainer.scrollLeft += -cardContainer.clientWidth;
  } else {
    cardContainer.scrollLeft += 1.126 * -card.clientWidth;
  }
};

sliderRight.onclick = function () {
  if (body.clientWidth < 639) {
    cardContainer.scrollLeft += 1.126 * card.clientWidth;
    console.log(card.clientWidth);
  } else {
    cardContainer.scrollLeft += 1.5 * card.clientWidth;
  }
};

function navRes() {
  nav_links.classList.toggle("nav_links_ham");
  // nav.classList.toggle("nav_ham");
}

let nav_links = document.getElementById("nav_links");
let hamburger = document.getElementById("hamburger");
let nav = document.getElementsByTagName("nav")[0];

hamburger.addEventListener("click", () => {
  navRes();
});
if (document.documentElement.clientWidth < 767) {
  Array.from(nav_links.children).forEach((element) => {
    element.addEventListener("click", () => {
      navRes();
    });
  });
}
// let slider = document.getElementsByClassName("slider");

// Array.from(slider).forEach((element) => {
//   element.addEventListener("click", () => {
//     if (element.id == "slider-left") {
//       cardContainer.scrollLeft += -100;
//     } else {
//       cardContainer.scrollLeft += 100;
//     }
//   });
// });

let dark = document.getElementById("darkmode");
dark.onclick = function () {
  document.getElementsByTagName("html")[0].classList.toggle("dark");
  if (localStorage.getItem("isdark") == 1) {
    localStorage.setItem("isdark", 0);
  } else {
    localStorage.setItem("isdark", 1);
  }
};
if (localStorage.getItem("isdark") == 1) {
  document.getElementsByTagName("html")[0].classList.toggle("dark");
}

import pdfURL from "./assets/cv.pdf?url";
document.querySelector(".cv_download").href = pdfURL;
