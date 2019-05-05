const express = require("express");
const uid = require("uid");

const app = express();
app.use(express.json());
app.use(express.static("./dist"));

let cards = [
  {
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    id: uid(),
    category: "done"
  },
  {
    title: "Lorem",
    text: "sed diam nonumy eirmod tempor invidunt ut labore",
    id: uid(),
    category: "done"
  },
  {
    title: "Ipsum",
    text: " dolor sit amet. Lorem ipsum dolor sit",
    id: uid(),
    category: "doing"
  }
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
