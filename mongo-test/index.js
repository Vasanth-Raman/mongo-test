const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({
    msg: "Success",
  });
});

app.listen(PORT, () => {
  console.log(`App is up an running at the port ${PORT}`);
});
