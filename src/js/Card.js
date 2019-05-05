export class Card {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
    this.render();
    this.createButton();
  }

  createButton() {
    const buttonDelete = document.createElement("button");
    buttonDelete.className = "card__button-close";
    buttonDelete.innerHTML = "x";
  }

  render() {
    const buttonDelete = document.createElement("button");
    const cardsContainer = document.querySelector(".cards");
    const cardHTML = document.createElement("section");
    const cardMeta = document.createElement("section");

    cardHTML.className = "card";
    buttonDelete.className = "card__button-close";
    buttonDelete.innerHTML = "x";

    buttonDelete.addEventListener("click", event => {
      //delete on server
      fetch("/cards/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        //req.body
        body: JSON.stringify({
          category: this.category,
          title: this.title,
          text: this.text
        })
      })
        .then(res => res.json())
        .then(data => console.log("this is data obj", data));
      //delete from dom
      event.target.parentNode.remove();
    });

    cardMeta.classList = "card__meta";
    cardMeta.innerHTML = `<span class="card__category"> ${
      this.category
    }</span>`;
    cardMeta.appendChild(buttonDelete);

    cardHTML.innerHTML = `<h3 class="card__title">${this.title}</h3>
                          <p class="card__text">${this.text}</p> `;
    cardHTML.insertAdjacentElement("afterbegin", cardMeta);
    cardsContainer.appendChild(cardHTML);
  }
}
