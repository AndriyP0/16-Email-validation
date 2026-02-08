"use strict";
const errorMessage = document.querySelector(".error-confirm-password");
errorMessage.style.display = "none";

const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordConfirmInput = document.querySelector("#password");

function validatePassword() {
  const password = passwordConfirmInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    confirmPasswordInput.style.borderColor = "green";
    errorMessage.style.display = "none";
  } else {
    confirmPasswordInput.style.borderColor = "red";
    errorMessage.style.display = "block";
  }
}

passwordConfirmInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validatePassword);
