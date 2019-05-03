console.log("card");

export class Card {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.render();
  }

  render() {
    const cardHTML = document.createElement("section");
    cardHTML.className = "card";
    cardHTML.innerHTML = `
        <button class="bookmark"></button>
        <h3 class="card__title">${this.title}</h3>
        <p class="card__text">${this.text}</p>`;

    document.body.appendChild(cardHTML);
  }
}

const card2 = new Card(
  "Lorem ipsum2",
  "voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
);

const card3 = new Card(
  "Lorem ipsum3",
  "voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
);

document.body.insertAdjacentElement("beforeend", card2);
document.body.insertAdjacentElement("beforeend", card3);
