const express = require("express");
const uid = require("uid");

const app = express();
app.use(express.json());

let i = 0;

let users = [
  { name: "Joe", role: "mechanic", id: uid() },
  { name: "Dr. Who", role: "time traveller", id: uid() },
  { name: "Jan", role: "assistant coach", id: uid() },
  { name: "Dalia", role: "boss", id: uid() }
];

app.get("/", (req, res) => {
  res.send(`Hello world ${i++}`);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json(users.find(user => user.id === id));
});

//new user
app.post("/users", (req, res) => {
  let newUser = req.body;
  newUser.id = uid();
  console.log(newUser);
  users = [...users, newUser];
  res.json(newUser);
});

app.listen(3000, err => {
  err ? console.log(err) : console.log("Server ready");
});

console.log(users);
