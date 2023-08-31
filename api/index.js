const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

//endpoint to register

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
  console.log("server is running on port " + port);
});

const User = require("./models/user");
const Order = require("./models/order");
//function to send verification email to the user

const sendVerificationEmail = async (email, verificationToken) => {
  //create a  nodemail transport
  const transporter = nodemailer.createTransport({
    //configure the email service
    service: "gmail",
    auth: {
      user: "peteradedokun167@gmail.com",
      pass: "bltbdygydxnipffu",
    },
    //compose the email message
  });
  const mailOptions = {
    from: "peterade.com",
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify your email: http://localhost:8000/verify/${verificationToken}`,
  };
  //send the email

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error sending verification email", error);
  }
};
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if the email is already register

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    //create new user
    const newUser = new User({ name, email, password });
    //generate verification and store verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save the user to the database
    await newUser.save();
    //send verification email to the user

    sendVerificationEmail(newUser.email, newUser.verificationToken);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Registration failed" });
  }
});
//endpoint to verify email

app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    //find the user with the given verification token
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }
    //mark the user as verified
    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully " });
  } catch (error) {
    res.status(500).json({ message: "Email verification failed" });
  }
});
