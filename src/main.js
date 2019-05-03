console.log("Hello world");

/*
fetch("/users")
  .then(res => res.json())
  .then(data => console.log(data));

const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const { name: nameEl, role: roleEl } = event.target;
  fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: nameEl.value, role: roleEl.value })
  })
    .then(res => res.json())
    .then(createdUser => console.log(createdUser))
    .catch(err => console.log(err));
});*/

/*
fetch("/")
  .then(res => res.json())
  .then(data => console.log(data));*/

const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("click button form");
  const { title: titleEl, text: textEl } = event.target;
  console.log(titleEl, textEl);

  /*fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: nameEl.value, role: roleEl.value })
  })
    .then(res => res.json())
    .then(createdUser => console.log(createdUser))
    .catch(err => console.log(err));*/
});
