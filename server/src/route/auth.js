const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Mern Stack Project Home Page");
});

router.get("/register", (req, res) => {
  res.send("register page using get");
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, work, password, cpassword } = req.body;

    // checking user didn't leave any empty fields
    if (!name || !email || !phone || !work || !password || !cpassword) {
      return res.status(422).send("Enter all details properly");
    }

    if (password !== cpassword) {
      return res.status(422).send("Passwords do not match");
    } else {
      const userExist = await User.findOne({ email: email });

      if (userExist) {
        return res.status(422).json({ error: "User already registered" });
      }

      // Hashing the password
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUserDetails = new User({
        name,
        email,
        phone,
        work,
        password: hashedPassword, // Save hashed password to the database
        cpassword: hashedPassword, // You may want to remove this field from the schema
      });

      await newUserDetails.save();
      return res.status(201).json({ message: "User registered successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in registration");
  }
});

router.get("/signin", (req, res) => {
  res.send("Welcome to the sign-in page");
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Checking if the given data is not empty
    if (!email || !password) {
      return res.status(400).send("Enter details properly for signin");
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const passwordIsMatch = await bcrypt.compare(password, userLogin.password);

      if (!passwordIsMatch) {
        return res.json("Invalid credentials");
      } else {
        // Creating and sending a JSON Web Token (JWT) upon successful login
        const token = jwt.sign({ _id: userLogin._id }, "your_secret_key"); // Replace 'your_secret_key' with your actual secret key
        console.log("new token is " + token);

        // Storing the token in a cookie
        res.cookie("jwtToken", token, {
          expires: new Date(Date.now() + 9999999999999), // Expiry date for the cookie
          httpOnly: true,
        });

        res.json("User login successful");
      }
    } else {
      res.json("User is not registered");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in signing in");
  }
});

module.exports = router;
