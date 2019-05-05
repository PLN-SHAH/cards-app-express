import "./js/CardList.js";
import "./js/Card.js";
import "./js/Form.js";

/*
function renderData() {
  console.log("i am the function renderdata not this.renderdata");
  fetch("/cards")
    .then(res => res.json())
    .then(data => {
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
}*/
