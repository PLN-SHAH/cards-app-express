import { CardList } from "./CardList.js";

const form = document.querySelector(".card-form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const { title: titleEl, text: textEl, category: categoryEl } = event.target;

  fetch("/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: titleEl.value,
      text: textEl.value,
      category: categoryEl
    })
  })
    .then(res => console.log(res))
    .then(data => console.log(data));
  new CardList();
});

export class Form {
  constructor() {
    this.render();
  }

  render() {
    this.createInput(form);
    this.createTextArea(form);
    this.createCategory(form);
    this.createSubmitButton(form);
  }

  createTextArea() {
    const sectionTextarea = document.createElement("section");
    const textarea = document.createElement("textarea");
    const label = document.createElement("label");

    sectionTextarea.classList = "card-form__text";
    textarea.classList = "card-form__textarea";

    label.innerHTML = "Card title";
    textarea.name = "text";
    textarea.placeholder = "type in text here";

    sectionTextarea.appendChild(label);
    sectionTextarea.appendChild(textarea);
    form.appendChild(sectionTextarea);
  }

  createInput() {
    const sectionInput = document.createElement("section");
    sectionInput.classList = "card-form__title";
    const label = document.createElement("label");
    label.innerHTML = "Card title";
    const inputTitle = document.createElement("input");
    inputTitle.classList = "card-form__title__input";
    inputTitle.type = "text";
    inputTitle.name = "title";
    inputTitle.placeholder = " type in title here";
    inputTitle.required = " true";

    sectionInput.appendChild(label);
    sectionInput.appendChild(inputTitle);

    form.appendChild(sectionInput);
  }

  createCategory() {
    const sectionCategory = document.createElement("section");
    const label = document.createElement("label");
    const inputCategory = document.createElement("input");

    sectionCategory.classList = "card-form__category";
    inputCategory.classList = "card-form__category__input";

    label.innerHTML = "Category";
    inputCategory.type = "text";
    inputCategory.name = "category";
    inputCategory.required = " true";

    sectionCategory.appendChild(label);
    sectionCategory.appendChild(inputCategory);

    form.appendChild(sectionCategory);
  }

  createSubmitButton() {
    const button = document.createElement("button");

    button.classList = "card-form__button";
    button.type = "submit";
    button.innerHTML = "Create new card";

    form.appendChild(button);
  }
}
