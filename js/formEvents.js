"use strict";

document.body.style.minHeight = "200vh";

const scrollItem = document.querySelector(".scroll__item");

scrollItem.style.marginTop = "100px";
scrollItem.style.display = "inline-block";

window.addEventListener("scroll", (event) => {
  let documentScroll = parseInt(scrollY) + "px";
  console.log(documentScroll);

  if (documentScroll === "300px") {
    document.body.style.background = "yellow";
  } else {
    document.body.style.background = "";
  }
});

// document.documentElement.getBoundingClientRect().top = 0;
// document.documentElement.getBoundingClientRect().bottom = 2000;

function populate() {
  while (true) {
    // нижня частина документа
    let windowRelativeBottom =
      document.documentElement.getBoundingClientRect().bottom;

    // якщо користувач не прокрутив достатньо далеко (>100px до кінця)
    if (windowRelativeBottom > document.documentElement.clientHeight + 100)
      break;

    // додамо більше даних
    document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
  }
}

document.onscroll = populate;

const form = document.forms[0];
const formElement = form.elements.two;

const radioButtons = document.forms[1];

// console.log(radioButtons);

let ageElems = radioButtons.elements.age;

// console.log(ageElems);

const fieldsetForm = document.forms[2];
// console.log(fieldsetForm.elements.login);

const newNameByForm = (fieldsetForm.login.name = "userName");

// console.log(fieldsetForm.login == fieldsetForm.userName);

let login = fieldsetForm.login;

// const selectItem = document.querySelector("#select");
// console.log(selectItem);
const items = selectItem.options;

// let selected = Array.from(selectItem.options)
  // .filter((option) => option.selected)
  // .map((option) => option.value);
// console.log(selected);
const option = new Option("Banana", "banana", true, true);
console.log(option);
selectItem.append(option);
const formNode = document.forms[1];
console.log(formNode.elements);
const selectGeners = document.querySelector("#genres");
const newOption = new Option('Класика', 'classic', false, false);
selectGeners.append(newOption);
let selectedOption = genres.options[genres.selectedIndex];
alert( selectedOption.value );

// const form = document.forms.first;
// console.log(form);

const nameElem = form.elements;
console.log(nameElem);

// const fieldsetForm = document.forms[1];

// console.log(fieldsetForm);

const fieldsetFormElements = fieldsetForm.elements;
// console.log(fieldsetFormElements);

// console.log(fieldsetForm.elements.login);

let fieldset = fieldsetForm.elements.userFields;

// console.log(fieldset);

// console.log(fieldset.elements.login == fieldsetForm.elements.login);

fieldset.login = "New name";

// const form = document.forms[1];
// console.log(form);

let input = form.elements.login;

input.value = "some new Value";

// console.log(input);

let textArea = form.elements.area;

// textArea.value = "Write text to this textArea!";
// textArea.rows = 20;
// textArea.cols = 10;

textArea.remove();

const select = form.elements[2];
console.log(select.options);
let selected = [...select.options]
  .filter((selectItem) => selectItem.selected)
  .map((option) => option.value);

console.log(selected);

// let newOption = new Option('Grape', 'grape', false, false);
// newOption.selected = true;
console.log(newOption.selected);
console.log(newOption.text);
select.append(newOption);

// const form = document.forms[0];
// console.log(form);

// const formElements = form.elements.two;
// console.log(formElements);

const radioForm = document.forms[1];

// const form = document.forms[1];

const fieldsetNode = form.elements.userFields;

console.log(fieldsetNode.elements.login.value = 'some text');

console.log(fieldsetNode.elements.login == form.login);

form.login.name = 'fieldset name';

const form = document.forms["my"];
console.log(form);

// const formElements = form.elements.pass;
console.log(formElements);

// const select = document.querySelector("select");

// const selectOptions = select.options;

console.log(select.value);
console.log(select.selectedIndex);

// let newOption = new Option("Виноград", "grape", true, true);

select.append(newOption);
// let selected = Array.from(select.options)
  // .filter((option) => option.selected)
  // .map((option) => option.value);

const form = document.forms[0];

const fieldset = form.elements.userFields;

console.log(fieldset.elements.login);

console.log(form.elements.login == fieldset.elements.login);

form.login.name = 'New';

console.log(form.login);
console.log(form.New);

// const select = document.forms[0].elements.sel;

console.log(select);

// const selectOptions = select.options;

const thirdSelectElem = select.options[2];

thirdSelectElem.selected = true;

console.log(selectOptions);
console.log(select.value);
console.log(select.selectedIndex);

let selectValueResult = Array.from(selectOptions)
  .filter((option) => option.selected)
  .map((option) => option.value);

console.log(selectValueResult);

// let newOption = new Option("Grape", "grape", true, true);

select.append(newOption);
console.log(newOption.selected);
console.log(newOption.index);
console.log(newOption.text);

const span = document.querySelector("span");

span.innerText = "Hello!";

const liveForm = document.forms;
console.log(liveForm);

const staticForm = document.querySelectorAll("form");
console.log(staticForm);

document.body.insertAdjacentHTML(
  "beforeend",
  `<form name='some' class='some__form' action=#></form>`
);

// const select = document.querySelector("select");

const selectOptions = select.options;
selectOptions[2].selected = true;
selectOptions[1].selected = true;
selectOptions[0].selected = true;
const selectResult = Array.from(selectOptions)
  .filter((option) => option.selected)
  .map((option) => option.value);

console.log(selectResult);

// let newOption = new Option("Виноград", "grape", true, true);

select.prepend(newOption);

console.log(newOption.value);
console.log(newOption.selected);
console.log(newOption.index);

// const select = document.querySelector("select");

const bluesItem = select.options[1];
alert(bluesItem.innerText);

// const newOption = new Option('Класика', 'classic', true, true);

select.append(newOption);

const input = document.querySelector("input");

input.addEventListener("blur", (event) => {
  if (!input.value.includes("@")) {
    input.classList.add("invalid");
    error.innerHTML = "Будь ласка , введіть валідний email";
  }
});

input.addEventListener("focus", (event) => {
  if (input.classList.contains("invalid")) {
    input.classList.remove("invalid");
    error.innerHTML = "";
  }
});

const validInput = document.querySelector("input");
const errorItem = document.querySelector(".error");

validInput.addEventListener("blur", (event) => {
  if (!validInput.value.includes("@")) {
    validInput.classList.add("invalid");
    error.innerHTML = "Будь ласка , введіть валідну email адресу";
  }
});

validInput.addEventListener("focus", (event) => {
  if (validInput.classList.contains("invalid")) {
    validInput.classList.remove("invalid");
    error.innerHTML = "";
  }
});

const input = document.querySelector("input");

input.addEventListener("blur", (event) => {
  if (!input.value.includes("@")) {
    input.classList.add("error");
    input.focus();
  } else {
    input.classList.remove("error");
  }
});

const listItem = document.querySelector("ul > li:nth-child(4)");
console.log(listItem)
listItem.tabIndex = '2';

const formFocused = document.querySelector("form");

formFocused.addEventListener("focusin", (event) => {
  formFocused.classList.add("focused");
});

formFocused.addEventListener("focusout", (event) => {
  formFocused.classList.remove("focused");
});

const div = document.createElement("div");

div.className = "div";
div.innerText = "test";
document.body.prepend(div);
div.style.cursor = "pointer";

div.addEventListener("click", (event) => {
  if (div.tagName == "DIV") {
    div.remove();
    let textarea = document.createElement("textarea");
    document.body.prepend(textarea);
  }
});

const form = document.forms["valid"];
console.log(form);
const passwordItem = form.elements.pass;
console.log(passwordItem);

const formElements = form.elements;
console.log(formElements[3].checked);

console.log(passwordItem.form);
passwordItem.remove();

const selectItem = form.elements[4];
console.log(selectItem);

const selectOptions = selectItem.options;
console.log(selectOptions[0].value);
console.log(selectOptions.selectedIndex);

selectOptions.selectedIndex = 2;

const inputPasswordItem = form.elements.pass;

inputPasswordItem.addEventListener("focus", function () {
  this.classList.add("focus");
});

inputPasswordItem.addEventListener("blur", function () {
  this.classList.remove("focus");
});

const input = document.querySelector("input");

input.addEventListener("blur", (event) => {
  if (!event.target.value.includes("@")) {
    input.classList.add("invalid");
    error.innerHTML = "Будь ласка, введіть валідний email ";
  }
});

input.addEventListener("focus", function (event) {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error.innerHTML = "";
  }
});

input.addEventListener("blur", function (event) {
  if (!event.target.value.includes("@")) {
    event.target.classList.add("error");
    event.target.focus();
  } else {
    event.target.classList.remove("error");
  }
});

const form = document.forms[0];

form.addEventListener(
  "focus",
  (event) => {
    form.classList.add("focus");
  },
  { capture: true }
);

form.addEventListener(
  "blur",
  (event) => {
    form.classList.remove("focus");
  },
  { capture: true }
);



