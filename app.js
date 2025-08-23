import express from "express";

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");

const port = 4000;

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/index-v1", (req, res) => {
  res.render("index-v1");
});
app.get("/index-v2", (req, res) => {
  res.render("index-v2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
