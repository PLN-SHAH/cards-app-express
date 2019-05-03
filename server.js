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
  cards = [...cards, newCard];
  res.json(newCard);
});

//delete user
app.delete("/cards", (req, res) => {
  const { title, text } = req.body;
  //return array withpout element
  cards = cards.filter(card => card.title !== title && card.text !== text);
  console.log(cards, "after filter");
  res.json(cards);
});

app.listen(3000, err => {
  err ? console.log(err) : console.log("Server ready");
});
