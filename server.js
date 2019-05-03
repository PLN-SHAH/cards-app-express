const express = require("express");
const uid = require("uid");

const app = express();
app.use(express.json());
app.use(express.static("./dist"));

let cards = [
  { title: "card_one", text: "card_one_text", id: uid(), category: "1" },
  { title: "card_two", text: "card_two_text", id: uid(), category: "2" },
  { title: "card_three", text: "card_three_text", id: uid(), category: "3" }
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
  const { title, text, category } = req.body;
  //return array without element
  cards = cards.filter(
    card =>
      card.title !== title && card.text !== text && card.category !== category
  );
  res.json(cards);
});

app.listen(3000, err => {
  err ? console.log(err) : console.log("Server ready");
});
