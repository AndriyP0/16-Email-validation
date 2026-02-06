"use strict";

const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordInput = document.querySelector("#password");

confirmPasswordInput.addEventListener("change", (e) => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    confirmPasswordInput.style.borderColor = "green";
  } else {
    confirmPasswordInput.style.borderColor = "red";
  }
});
