import { CardList } from "./CardList.js";

const form = document.querySelector("form");

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
    .then(res => res.json())
    .catch(err => console.log(err));
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
    sectionTextarea.classList = "card-form__text";
    const label = document.createElement("label");
    const textarea = document.createElement("textarea");
    console.log(textarea);

    label.innerHTML = "Card title";

    textarea.classList = "card-form__textarea";
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
    console.log(sectionInput);
  }

  createCategory() {
    const sectionCategory = document.createElement("section");
    sectionCategory.classList = "card-form__category";
    const label = document.createElement("label");
    label.innerHTML = "Category";
    const inputCategory = document.createElement("input");
    inputCategory.classList = "card-form__category__input";
    inputCategory.type = "text";
    inputCategory.name = "category";
    inputCategory.required = " true";

    sectionCategory.appendChild(label);
    sectionCategory.appendChild(inputCategory);

    form.appendChild(sectionCategory);
    console.log(sectionCategory);
  }

  createSubmitButton() {
    const button = document.createElement("button");
    button.classList = "card-form__button";
    button.type = "submit";
    button.innerHTML = "Create new card";
    form.appendChild(button);
  }
}

/*
<section class="card-form__category">
  <label for="category">Card category</label>
  <textarea
    class="card-form__category"
    name="category"
    placeholder="categorytext here..."
  />
</section>;*/

/*
<section class="card-form__text">
  <label for="text">Card text</label>
  <textarea
    class="card-form__textarea"
    name="text"
    placeholder="type text here..."
  />
</section>;
*/
