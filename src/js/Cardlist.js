import "./Card";
import "./Form";

export class CardList {
  constructor() {
    this.clearList();
    this.renderData();
    console.log("3 init constructor cards");
  }

  clearList() {
    const cardsContainer = document.querySelector(".cards");
    cardsContainer.innerHTML = "";
  }

  renderData() {
    console.log("1 called renderdata()");
    const cardsContainer = document.querySelector(".cards");

    console.log("2 created cardscontainer");

    fetch("/cards")
      .then(res => res.json())
      .then(data => {
        console.log(" data:", data);
        data.forEach(card => {
          const cardHTML = document.createElement("section");

          cardHTML.className = "card";
          cardHTML.innerHTML = `
              <button class="card__button-close">x</button>
              <h3 class="card__title">${card.title}</h3>
              <p class="card__text">${card.text}</p>
              <p class="card__category">${card.category}</p>`;
          console.log("before append card html", cardHTML);
          cardsContainer.appendChild(cardHTML);
        });
      });
  }
}

new CardList();
