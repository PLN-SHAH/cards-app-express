export class Card {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
    this.render();
    this.renderData();
  }

  renderData() {
    fetch("/cards")
      .then(res => res.json())
      .then(data => {
        console.log("data is ", data[0].title);

        data.forEach(card => {
          const cardHTML = document.createElement("section");
          const cardsContainer = document.querySelector(".cards");
          cardHTML.className = "card";
          cardHTML.innerHTML = `
            <button class="card__button-close">x</button>
            <h3 class="card__title">${card.title}</h3>
            <p class="card__text">${card.text}</p>
            <p class="card__category">${card.category}</p>`;

          cardsContainer.appendChild(cardHTML);
        });
      });
  }
  render() {
    const cardHTML = document.createElement("section");
    const cardsContainer = document.querySelector(".cards");
    cardHTML.className = "card";
    cardHTML.innerHTML = `
        <button class="card__button-close">x</button>
        <h3 class="card__title">${this.title}</h3>
        <p class="card__text">${this.text}</p>
        <p class="card__category">${this.category}</p>`;

    cardsContainer.appendChild(cardHTML);
  }
}

/*
const card = new Card(
  "Lorem ipsum",
  "voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  "somecategory"
);
*/

const card2 = new Card(
  "Lorem ipsum2",
  "voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  "somecategory"
);

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
    .then(createdCard => console.log(createdCard))
    .catch(err => console.log(err));

  new Card(titleEl.value, textEl.value, categoryEl.value);
});
