const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({
    msg: "Success",
  });
});

app.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("DataBase connection is established successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});
