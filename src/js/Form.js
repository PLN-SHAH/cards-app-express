import "./Card.js";
import "./CardList.js";
import { CardList } from "./CardList.js";

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
    .then(createdCard => console.log("this is created card ", createdCard))
    .catch(err => console.log(err));
  new CardList();
});
