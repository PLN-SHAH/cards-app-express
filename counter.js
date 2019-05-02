const fs = require("fs");
let actualCount = 0;

fs.readFile(__dirname + "/counter.txt", "utf8", (err, data) => {
  if (err) {
    console.log("it was an error");
  } else {
    console.log(data);
  }
});
