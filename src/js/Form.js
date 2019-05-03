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
});
