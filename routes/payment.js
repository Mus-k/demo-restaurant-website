const cardNumber = document.querySelector(".card-number-input");
const carbox = document.querySelector(".card-number-box");
cardNumber.addEventListener("input", () => {
  carbox.innerHTML = cardNumber.value;
});

//   full name
const cardHolder = document.querySelector(".card-holder-input");
const carName = document.querySelector(".card-holder-name");
cardHolder.addEventListener("input", () => {
  carName.innerHTML = cardHolder.value;
});
//   month
//  month
const cardMonth = document.querySelector(".month-input");
const expMonth = document.querySelector(".exp-month");
cardMonth.addEventListener("input", () => {
  expMonth.innerHTML = cardMonth.value;
});

// year
const cardYear = document.querySelector(".year-input");
const expYear = document.querySelector(".exp-year");
cardYear.addEventListener("input", () => {
  expYear.innerHTML = cardYear.value;
});

// ccv
const cvv = document.querySelector(".cvv-input");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
cvv.addEventListener("mouseenter", () => {
  front.style.transform = "perspective(1000px) rotateY(-180deg)";
  back.style.transform = "perspective(1000px) rotateY(0deg)";
});
cvv.addEventListener("mouseleave", () => {
  front.style.transform = "perspective(1000px) rotateY(0deg)";
  back.style.transform = "perspective(1000px) rotateY(180deg)";
});

const cvvBox = document.querySelector(".cvv-box");
cvv.addEventListener("input", () => {
  cvvBox.innerHTML = cvv.value;
});

const submitbtn = document.getElementById("submit");
const cancelbtn = document.getElementById("cancel");
const form = document.getElementById("form");
const btns = document.querySelectorAll(".formBtn");

submitbtn.addEventListener("click", () => {
  let cardNumberValue = cardNumber.value;
  let cardHolderValue = cardHolder.value;
  let cardYearValue = cardYear.value;
  let cardMonthValue = cardMonth.value;
  let ccvValue = cvv.value;

  if (cardNumberValue === "" || cardNumberValue.length < 8) {
    alert("enter card number minimum 8 digits");
    return;
  } else if (cardHolderValue === "" || cardHolderValue.length < 4) {
    alert("enter cardHolder  name minimum 4 letters");
    return;
  } else if (!cardMonthValue) {
    alert("choose month");
    return;
  } else if (!cardYearValue) {
    alert("choose year");
    return;
  } else if (ccvValue === "") {
    alert("enter cvv");
    return;
  }

  (cardNumber.value = ""),
    (cardYear.value = ""),
    (cardMonth.value = ""),
    (cvv.value = ""),
    (cardHolder.value = "");

  window.location.href = "../index.html";
});

cancelbtn.addEventListener("click", () => {
  window.location.href = "./order.html";
});
