const express = require("express");
const bodyParser = require("body-parser");
const mongoose= require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
const jwt = require("jsonwebtoken");


mongoose
  .connect(
    "mongodb+srv://peteradedokun436:20032022@cluster0.3aw1gy6.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to MongoDB...");
  })
  .catch((err) => {
    console.log(err, "error connecting to MongoDB");
  });

app.listen(port, () => {
    console.log("server is running on port " +  port)
})