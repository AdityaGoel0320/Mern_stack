const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const Authenticate = require("../middleware/authenticate");
// const {  Authenticate } = require("../middleware/Authenticate");
// const { SECRET_KEY } = require("../config"); // Import your secret key from a config file

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


// router.get("/about",Authenticate ,  (req, res) => {
//     console.log("about us ka page")
//     res.send("Hello World from contact")
// })



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

            if (!passwordIsMatch) {
                return res.status(400).json({ error: "Invalid credentials" });
            } else {
                // const token = jwt.sign({ _id: userLogin._id }, SECRET_KEY); // Create a token
                // userLogin.tokens = userLogin.tokens.concat({ token }); // Add token to user's tokens array
                // await userLogin.save();

                // res.cookie("jetToken", token, {
                //     expires: new Date(Date.now() + 9999999999999),
                //     httpOnly: true,
                // });

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

module.exports = router;




// let express = require("express");




// let router = express.Router();
// let bcrypt = require("bcryptjs")

// let jwt = require("jsonwebtoken")





// require("../db/conn")
// let User = require("../model/userSchema")

// router.get("/", (req, res) => {
//     res.send("Mern Stack Project Home Page")
// })


// router.get("/register", (req, res) => {
//     // console.log(req.body)
    
//     res.send("register page using get ")
// })



// router.post("/register", async (req, res) => {


//     try {


//         let { name, email, phone, work, password, cpassword } = req.body;

//         // checking user didnt make any empty field
//         if (!name || !email || !phone || !work || !password || !cpassword) {
//             return res.status(422).send("enter details properly")
//         }
//         if (password != cpassword) {
//             return res.status(422).send("password are not maching")

//         } else {

//             let userExist = await User.findOne({ email: email })
//             if (userExist == true) {
//                 return res.status(422).json({ error: "user already register" })
//             }


//             let newUserDetails = new User({ name, email, phone, work, password, cpassword })


//             // now here wer have to hash our pass and cpass so  using bcryptjs


//             // as in schema file we make a fnc pre which automatically run before saving as we make it as pre("save") thus before saving we want hashing we wrte acc to it in pre


//             await newUserDetails.save();

//             return res.status(201).json({ message: "user registerd successfully" })
//         }



//     } catch (error) {
//         console.log(error)
//         // console.log("error in registration post request")
//     }



// })



// router.get("/signin", (req, res) => {
//     res.send("welcome to sign in  page")
// })


// router.post("/signin", async (req, res) => {

//     try {
//         let { email, password } = req.body;

//         // checking given data is not empty
//         if (!email || !password) {
//             res.status(400).send("enter details propely for sigin ")
//         }

//         // a variable that store details if email match the databse
//         let userLogin = await User.findOne({ email: email })

//         if (userLogin) {
//             let passwordIsMatch = await bcrypt.compare(password, userLogin.password)

//             // as creating a jwt token so to make code small we make a fnc in databse 

//             let newToken = await userLogin.generateAuthToken()  ; 
//             console.log("new token is " + newToken)


//             // now storing this token in cookie
//             res.cookie("jetToken" , newToken , {
//                 expires : new Date(Date.now() + 9999999999999) ,  //time in millisec
//                 httpOnly : true 
                
//             })



//             if (!passwordIsMatch) {
//                 res.json("invalid credentials")
//             } else {
//                 res.json("user login succesfully")
//             }
//         }

//         else {
//             res.json("user is not registerd")
//         }


//     } catch (error) {
//         console.log(error)
//     }

// })

// // router.get("/contact", middleware, (req, res) => {
// //     res.send("Hello World from contact")
// // })
// // router.get("/signin", (req, res) => {
// //     res.send("Hello World from sign in")
// // })
// // router.get("/signup", (req, res) => {
// //     res.send("Hello World from sign up")
// // })


// module.exports = router; 
