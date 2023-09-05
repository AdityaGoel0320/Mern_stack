const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");
const cookieParser = require('cookie-Parser')
// const {  Authenticate } = require("../middleware/Authenticate");
// const { SECRET_KEY } = require("../config"); // Import your secret key from a config file

router.use(cookieParser());

// for handling of form

require("../db/conn");

router.get("/", (req, res) => {
    res.send("Mern Stack Project Home Page");
});

router.get("/register", (req, res) => {
    
    res.send("register page using get ");
});


router.get("/signin", (req, res) => {
    res.send("Welcome to the sign-in page");
});





router.post("/register", async (req, res) => {
    try {
        const { name, email, phone, work, password, cpassword } = req.body;

        // Checking user didn't leave any field empty
        if (!name || !email || !phone || !work || !password || !cpassword) {
            return res.status(422).json({ error: "Enter all details properly" });
        }

        if (password !== cpassword) {
            return res.status(422).json({ error: "Passwords do not match" });
        } else {
            const userExist = await User.findOne({ email: email });
            if (userExist) {
                return res.status(422).json({ error: "User already registered" });
            }
            

            const newUserDetails = new User({ name, email, phone, work, password, cpassword });
            await newUserDetails.save();

            return res.status(201).json({ message: "User registered successfully" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error in registration" });
    }
});


router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Checking if the given data is not empty
        if (!email || !password) {
            return res.status(400).json({ error: "Enter details properly for sign in" });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const passwordIsMatch = await bcrypt.compare(password, userLogin.password);

            let loginNewToken = await userLogin.generateAuthToken();
            // now to save this token so we add in cookie in login page
            res.cookie("jwtLogin", loginNewToken);
            // res.cookie("jwtLogin", loginNewToken);
            // console.log(req.cookies.jwtLogin)

            if (!passwordIsMatch) {
                return res.status(400).json({ error: "Invalid credentials wrong password" });
            } else {
                
                return res.status(200).json({ message: "User logged in successfully" });


            }
        } else {
            return res.status(400).json({ error: "User is not registered" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error in signing in" });
    }
});


router.get("/about" ,  (req, res) => {
    console.log("about us ka page")
    res.send("Hello World from contact")
})

module.exports = router;

