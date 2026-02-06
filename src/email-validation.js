"use strict";

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

const emailInput = document.querySelector('#email');

emailInput.addEventListener('change', (e) => {
    const email = emailInput.value;
    const isValid = validateEmail(email);
    if (isValid) {
        emailInput.style.borderColor = 'green';
    } else {
        emailInput.style.borderColor = 'red';
    }
});