const express = require("express");

//new instance of express server
const app = express();

let i = 0;

//@param -> req = request, res = response
app.get("/", (req, res) => {
  res.send(`Hello world ${i++}`);
});

//init port
app.listen(3000, err => {
  err ? console.log(err) : console.log("server ready...");
});
