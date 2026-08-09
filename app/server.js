const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(8080, () => {
  console.log("Health service listening on port 8080");
});