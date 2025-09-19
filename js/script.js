const menuToggle = document.querySelector("#menu-toggle");
const menuClose = document.querySelector("#menu-close");
const navBar = document.querySelector("header nav");

function showMenu() {
  navBar.classList.add("navIsOpen");
}
function closeMenu() {
  navBar.classList.remove("navIsOpen");
}
menuToggle.addEventListener("click", showMenu);
menuClose.addEventListener("click", closeMenu);

// Change mode (Dark or Light)
const modeBtn = document.querySelector("header button:last-of-type");
const body = document.querySelector("body");
const modeIcon = document.querySelector("header button:last-of-type img");

let isModeLight = localStorage.getItem("theme") === "dark" ? false : true;

function changeMode() {
  if (isModeLight) {
    body.classList.toggle("dark-mode");
    modeIcon.src = "./images/icons-svg/sun_icon.svg";
    modeIcon.alt = "sun icon";
    localStorage.setItem("theme", "dark");
    isModeLight = false;
  } else {
    body.classList.toggle("dark-mode");
    modeIcon.src = "./images/icons-svg/moon.svg";
    modeIcon.alt = "moon icon";
    localStorage.setItem("theme", "light");
    isModeLight = true;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    modeIcon.src = "./images/icons-svg/sun_icon.svg";
    modeIcon.alt = "sun icon";
    isModeLight = false;
  } else {
    body.classList.remove("dark-mode");
    modeIcon.src = "./images/icons-svg/moon.svg";
    modeIcon.alt = "moon icon";
    isModeLight = true;

  }
});

modeBtn.addEventListener("click", changeMode);
