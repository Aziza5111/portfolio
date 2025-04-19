let NavMenu = document.querySelector(".nav-menu");
let Bars = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");

Bars.addEventListener("click", () => {
  NavMenu.style.display = "flex";
});

xmark.addEventListener("click", () => {
  NavMenu.style.display = "none";
});
