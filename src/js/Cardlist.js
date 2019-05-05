import { Card } from "./Card";

const cardsContainer = document.querySelector(".cards");

export class CardList {
  constructor() {
    this.clearList();
    this.renderList();
  }

  clearList() {
    cardsContainer.innerHTML = "";
  }

  renderList() {
    fetch("/cards")
      .then(res => res.json())
      .then(data => {
        data.forEach(card => {
          new Card(card.title, card.text, card.category);
          console.log(card.category);
        });
      });
  }
}
