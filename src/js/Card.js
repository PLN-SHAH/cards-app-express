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
    cardHTML.className = "card";
    cardHTML.innerHTML = `
          <button class="card__button-close">x</button>
          <h3 class="card__title">${this.title}</h3>
          <p class="card__text">${this.text}</p>
          <p class="card__category">${this.category}</p>`;
    cardsContainer.appendChild(cardHTML);
  }
}
