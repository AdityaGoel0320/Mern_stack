// to use env file for storing inportant data
let dotenv = require("dotenv");
dotenv.config({path:"./config.env"})



// importing important npm packages
let express = require("express");
let app = express();
let port = process.env.PORT || 3000 ; 



// importing database connection ans model 
require("./db/conn")
let User= require("./model/userSchema")

// now making website understand data will conme in json 
app.use(express.json())

// routing of pages
app.use(require("./route/auth"))

// app.use(express.urle)
// middleware
let middleware = (req, res, next) => {
    console.log("this is my middleware")
    // without next() page will go in infintie loading for about page 
    next();
}
// middleware();



app.listen(port, () => {
    console.log(`server connected on port ${port}`)
})