const express = require("express");

const app = express(); // create server instance

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", function (req, res) {
  res.send("This is about page");
});

app.get("/home", (req, res) => {
  res.send("This is Home page");
});

app.listen(3000); // start the server
