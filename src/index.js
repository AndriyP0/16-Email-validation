"use strict";

const btn = document.querySelector("#btn-container button[type=submit]");
const collectionProps = Array.from(document.querySelectorAll("#person input"));

class Person {
  constructor(...args) {
    args.forEach(({ name, value }) => (this[name] = value));
  }
}
function collectPropsFromForm(event) {
  event.preventDefault();
  const person = new Person(...collectionProps);
  const jsonPerson = JSON.stringify(
    person,
    (key, value) => {
      return key === "password" ? undefined : value;
    },
    2,
  );
  console.log(jsonPerson);
  localStorage.setItem(`${person.lastName}`, jsonPerson);
  console.log(JSON.parse(localStorage.getItem(`${person.lastName}`)));
}
btn.addEventListener("click", collectPropsFromForm);
