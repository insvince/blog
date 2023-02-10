const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const a = 2;
  const b = 8;

  const c = a - b;
  console.log(c);

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
