const express = require("express");
const app = express();

app.get("/", (require, response) => {
  response.send("Express JS");
});

app.listen(3000);
