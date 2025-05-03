let NavMenu = document.querySelector(".nav-menu");
let Bars = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");

Bars.addEventListener("click", () => {
  NavMenu.style.display = "flex";
});

xmark.addEventListener("click", () => {
  NavMenu.style.display = "none";
});

function copyText() {
  const input = document.querySelector("#myInput");
  navigator.clipboard.writeText(input.value);
}

let gmailClone = document.querySelector(".gmail-clone");
let phoneClone = document.querySelector(".phone-clone");

gmailClone.addEventListener("click", () => {
  const gmail = document.querySelector(".com");
  const copiedGmail = document.querySelector(".copied-gmail");

  navigator.clipboard.writeText(gmail.textContent);

  gmailClone.style.display = "none";
  copiedGmail.style.display = "flex";

  setTimeout(() => {
    gmailClone.style.display = "flex";
    copiedGmail.style.display = "none";
  }, 2000);
});

phoneClone.addEventListener("click", () => {
  const number = document.querySelector(".number");
  const copiedPhone = document.querySelector(".copied-phone");

  navigator.clipboard.writeText(number.textContent);

  phoneClone.style.display = "none";
  copiedPhone.style.display = "flex";

  setTimeout(() => {
    phoneClone.style.display = "flex";
    copiedPhone.style.display = "none";
  }, 2000);
});
