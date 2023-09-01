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

// country with code
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the telephone input element
  const input = document.querySelector("#telephone");

  // Initialize the intl-tel-input plugin
  //
  const iti = window.intlTelInput(input, {
    preferredCountries: ["tr", "ca", "gb", "au"], // Optionally, set the preferred countries
    separateDialCode: true, // Show the dial code in a separate input
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Include the utils.js script
  });

  // Get the selected country dial code
  iti.getSelectedCountryData().dialCode;
});

// form validation

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
