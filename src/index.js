'use strict';

class Person {
  constructor(data) {
    Object.assign(this, data);
  }
}

const form = document.querySelector('#person');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const personData = {};

  for (const [key, value] of formData.entries()) {
    // если в будущем появятся пароли — просто исключим
    if (!key.toLowerCase().includes('password')) {
      personData[key] = value;
    }
  }

  const person = new Person(personData);

  if (!person.lastName) {
    console.log('Last name is required');
    return;
  }

  localStorage.setItem(person.lastName, JSON.stringify(person));

  console.log('Saved person:', person);
  form.reset();
}
