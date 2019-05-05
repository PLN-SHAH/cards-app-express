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

    buttonDelete.className = "card__button-close";
    cardHTML.className = "card";

    buttonDelete.innerHTML = "x";

    buttonDelete.addEventListener("click", event => {
      const promise = fetch("/cards/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: this.title })
      })
        .then(res => res.json())
        .then(data => console.log("this is data obj", data));
      console.log(promise);
      event.target.parentNode.remove();
    });

    cardHTML.innerHTML = `<section class="card__meta">
                             <span class="card__category">
                             ${this.category}
                             </span>
                          </section>
                          <h3 class="card__title">${this.title}</h3>
                          <p class="card__text">${this.text}</p> `;
    cardHTML.appendChild(buttonDelete);
    cardsContainer.appendChild(cardHTML);
  }
}
