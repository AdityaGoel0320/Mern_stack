// to use env file for storing inportant data
let dotenv = require("dotenv");
dotenv.config({path:"./config.env"})


let cors = require("cors")


// importing important npm packages
let express = require("express");
let app = express();
let port = process.env.PORT || 3000 ; 



// importing database connection ans model 
require("./db/conn")
let User= require("./model/userSchema")

// now making website understand data will conme in json 
app.use(express.json())

// cors 

const corsOptions = {
    origin: "*", // Set your frontend domain here, or "*" to allow all origins
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));
  
// app.use(cors()) ; 

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