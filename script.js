const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("nav-active");
  navMenu.classList.toggle("nav-active");
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("nav-active");
    navMenu.classList.remove("nav-active");
  })
);

const contactForm = document.querySelector(".contact-form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const tel = document.getElementById("telephone");
const textarea = document.getElementById("textarea");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !fname.value ||
    !lname.value ||
    !email.value ||
    !tel.value ||
    !textarea.value
  ) {
    alert("all fiels must be fill");
    return;
  }
  fname.value = "";
  lname.value = "";
  tel.value = "";
  email.value = "";
  textarea.value = "";
});
