const loginForm = document.querySelector(".loginForm");
const password = document.querySelector(".password");
const useremail = document.querySelector(".email");
const emailValid = document.querySelector(".emailValid");
const passwordValid = document.querySelector(".passwordValid");

const logcheck = document.getElementById("logcheck");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateEmail(useremail.value)) {
    emailValid.textContent = "invalid email adress";
    return;
  }
  if (!validatePassword(password.value)) {
    passwordValid.textContent =
      "Invalid password. Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.";

    return;
  }

  useremail.value = "";
  password.value = "";
  logcheck.checked = false;
  passwordValid.textContent = "";
  emailValid.textContent = "";

  window.location.href = "./order.html";
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  return passwordRegex.test(password);
}

// animation js
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const signuplink = document.querySelector(".signup-link");
const loginlink = document.querySelector(".login-link");
const containerbg = document.querySelector(".account-container");
signuplink.addEventListener("click", (e) => {
  e.preventDefault();
  login.classList.remove("available");
  signup.classList.add("available");

  login.style.animationName = "slideOutToBottom";
  signup.style.animationName = "slideInFromBottom";
});
loginlink.addEventListener("click", (e) => {
  e.preventDefault();
  login.classList.add("available");
  containerbg.style.height = "450px";
  signup.classList.remove("unavailable");
  login.style.animationName = "slideInFromBottom";
  signup.style.animationName = "slideOutToBottom";
});
