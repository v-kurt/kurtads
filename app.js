import express from "express";

const app = express();

app.set("view engine", "ejs");

const port = 4000;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
