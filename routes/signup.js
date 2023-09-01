document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form inputs
    const username = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const termCon = document.getElementById("termCon");

    // errors
    const emailError = document.querySelector(".emailError");
    const usernameError = document.querySelector(".usernameError");
    const passwordError = document.querySelector(".passwordError");
    const confirmPasswordError = document.querySelector(
      ".confirmPasswordError"
    );

    // Validation logic
    const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (username.value === "") {
      usernameError.textContent = "username is required";
      return;
    }
    if (emailInput.value === "") {
      emailError.textContent = "email is required";
      return;
    }
    if (!validEmailRegex.test(emailInput.value)) {
      emailError.textContent = "Invalid email address.";
      return;
    }
    if (passwordInput.value === "") {
      passwordError.textContent = "password is required";
      return;
    }
    if (!validPasswordRegex.test(passwordInput.value)) {
      passwordError.textContent =
        "Invalid password. Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.";
      return;
    }
    if (confirmPasswordInput.value === "") {
      confirmPasswordError.textContent = "confirm password is required";
      return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = "Passwords do not match.";
      return;
    }

    username.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    termCon.checked = false;

    // reset errors
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    // If validation passes, you can proceed with form submission or other actions
    alert("Signup successful!");
    location.reload();
  });
