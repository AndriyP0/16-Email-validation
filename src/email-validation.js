"use strict";

const emailInput = document.querySelector("#email");

const errEmail = document.querySelector(".div-error");

emailInput.addEventListener("input", (e) => {
  const email = emailInput.value;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    emailInput.style.borderColor = "red";
    errEmail.classList.add("error-email-visi");
    errEmail.classList.remove("error-email-novisi");
  } else {
    emailInput.style.borderColor = "green";
    errEmail.classList.remove("error-email-visi");
    errEmail.classList.add("error-email-novisi");
  }
});
