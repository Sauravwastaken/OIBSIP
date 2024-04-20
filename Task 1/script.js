let darkMode = document.getElementById("darkMode");
let lightMode = document.getElementById("lightMode");
let hamburger = document.getElementById("hamburger");
let nav = document.getElementsByTagName("nav")[0];
let nav_links = document.getElementById("nav_links");

// Dark Mode Start

if (localStorage.getItem("theme") == "dark") {
  dark();
} else {
  light();
}

darkMode.addEventListener("click", () => {
  dark();
});
lightMode.addEventListener("click", () => {
  light();
});

function dark() {
  document.getElementsByTagName("html")[0].classList.add("dark");
  localStorage.setItem("theme", "dark");
}

function light() {
  document.getElementsByTagName("html")[0].classList.remove("dark");
  localStorage.setItem("theme", "light");
}

// Dark Mode End

if (document.documentElement.clientWidth < 767) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("responsive_nav");
    nav_links.classList.toggle("responsive_nav_links");
  });

  Array.from(nav_links.children).forEach((element) => {
    element.addEventListener("click", () => {
      nav.classList.toggle("responsive_nav");
      nav_links.classList.toggle("responsive_nav_links");
    });
  });
}
