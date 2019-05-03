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

  //createCard() {}
}

const card2 = new Card(
  "Lorem ipsum2",
  "voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
);

const card3 = new Card(
  "Lorem ipsum3",
  "voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
);

console.log("form");

const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const { title: titleEl, text: textEl } = event.target;

  fetch("/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: titleEl.value, text: textEl.value })
  })
    .then(res => res.json())
    .then(createdUser => console.log(createdUser))
    .catch(err => console.log(err));

  new Card(titleEl.value, textEl.value);
});
