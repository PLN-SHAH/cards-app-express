const express = require("express");
const uid = require("uid");

const app = express();
app.use(express.json());
app.use(express.static("./dist"));

let cards = [
  { title: "card_one", text: "card_one_text", id: uid() },
  { title: "card_two", text: "card_two_text", id: uid() }
];

app.get("/cards", (req, res) => {
  res.json(cards);
});

app.get("/cards/:title", (req, res) => {
  const { title } = req.params;
  res.json(cards.find(user => user.title === title));
});

//new user
app.post("/cards", (req, res) => {
  const newCard = req.body; //let
  newCard.id = uid();
  console.log(newCard);
  cards = [...cards, newCard];
  res.json(newCard);
});

app.listen(3000, err => {
  err ? console.log(err) : console.log("Server ready");
});

console.log(cards);
