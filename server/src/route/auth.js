let express = require("express");

let router = express.Router();
let bcrypt = require("bcryptjs")


let jwt = require("jsonwebtoken")


require("../db/conn")
let User = require("../model/userSchema")

router.get("/", (req, res) => {
    res.send("Mern Stack Project Home Page")
})


router.get("/register", (req, res) => {
    // console.log(req.body)
    res.send("register page using get ")
})



router.post("/register", async (req, res) => {

    try {

        let { name, email, phone, work, password, cpassword } = req.body;

        // checking user didnt make any empty field
        if (!name || !email || !phone || !work || !password || !cpassword) {
            return res.status(422).send("enter details properly")
        }
        if (password != cpassword) {
            return res.status(422).send("password are not maching")

        } else {

            let userExist = await User.findOne({ email: email })
            if (userExist == true) {
                return res.status(422).json({ error: "user already register" })
            }

            let newUserDetails = new User({ name, email, phone, work, password, cpassword })


            await newUserDetails.save();

            return res.status(201).json({ message: "user registerd successfully" })
        }



    } catch (error) {
        console.log(error)
        // console.log("error in registration post request")
    }



})



router.get("/signin", (req, res) => {
    res.send("welcome to sign in  page")
})


router.post("/signin", async (req, res) => {

    try {
        let { email, password } = req.body;

        // checking given data is not empty
        if (!email || !password) {
            res.status(400).send("enter details propely for sigin ")
        }

        // a variable that store details if email match the databse
        let userLogin = await User.findOne({ email: email })

        if (userLogin) {
            let passwordIsMatch = await bcrypt.compare(password, userLogin.password)

            // as creating a jwt token so to make code small we make a fnc in databse 

            let newToken = await userLogin.generateAuthToken()  ; 
            console.log("new token is " + newToken)


            // now storing this token in cookie
            res.cookie("jetToken" , newToken , {
                expires : new Date(Date.now() + 9999999999999) ,  //time in millisec
                httpOnly : true 
                
            })



            if (!passwordIsMatch) {
                res.json("invalid credentials")
            } else {
                res.json("user login succesfully")
            }
        }

        else {
            res.json("user is not registerd")
        }


    } catch (error) {
        console.log(error)
    }

})

// router.get("/contact", middleware, (req, res) => {
//     res.send("Hello World from contact")
// })
// router.get("/signin", (req, res) => {
//     res.send("Hello World from sign in")
// })
// router.get("/signup", (req, res) => {
//     res.send("Hello World from sign up")
// })


module.exports = router; 
