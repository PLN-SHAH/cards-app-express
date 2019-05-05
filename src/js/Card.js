export class Card {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
    this.render(title, text, category);
  }

  render() {
    const cardsContainer = document.querySelector(".cards");
    const cardHTML = document.createElement("section");

    const buttonDelete = document.createElement("button");
    buttonDelete.classList = "card__button-close";
    buttonDelete.innerHTML = "x";

    cardHTML.className = "card";
    cardHTML.innerHTML = `<section class="card__meta">
    <span class="card__category">${this.category}</span>
    </section>
          <h3 class="card__title">${this.title}</h3>
          <p class="card__text">${this.text}</p>
          `;
    cardHTML.appendChild(buttonDelete);
    cardsContainer.appendChild(cardHTML);
  }
}
