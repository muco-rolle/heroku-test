const express = require("express");

const app = express();

app.get("/", (req, res) => res.send({ message: "Hello" }));

app.listen(process.env.PORT || 3000, () =>
  console.log("App running on http://localhost:3000")
);
