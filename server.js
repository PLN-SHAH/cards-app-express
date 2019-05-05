const express = require("express");
const uid = require("uid");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.static("./dist"));

let cards = [
  {
    title: "Card1",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    id: uid(),
    category: "today"
  },
  {
    title: "Card2",
    text: "sed diam nonumy eirmod tempor invidunt ut labore",
    id: uid(),
    category: "tomorrow"
  },
  {
    title: "Card3",
    text: " dolor sit amet. Lorem ipsum dolor sit",
    id: uid(),
    category: "next week"
  }
];

app.get("/cards", (req, res) => {
  res.json(cards);
});

app.get("/cards/:title", (req, res) => {
  const { title } = req.params;
  res.json(cards.find(card => card.title === title));
});

//new user
app.post("/cards", (req, res) => {
  const newCard = req.body; //let
  newCard.id = uid();
  cards = [...cards, newCard];
  res.json(newCard);
});

//delete card
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

/*
fs.readFile("./cardData.json", "utf8", (err, content) => {
  if (err) {
    console.log(err, "err");
  } else {
    console.log("this is card data content", content);
    //writeFile();
  }
});

//const jsonString = fs.readFileSync("./cardData.json");

const cardData = "{
  title: 'card_t',
  text: 'text_t',
  category: 'done_t'
};

function writeFile() {
  fs.writeFile("./cardData.json", cardData, err => {
    if(err){
      console.log('this is error:',err)
    } else {
      console.log("File updated");
    }
   
  });
}
*/
