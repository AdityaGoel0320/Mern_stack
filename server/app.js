let express = require("express")
let app = express();
let port = 3000;


// middleware
let middleware = (req, res, next) => {
    console.log("this is my middleware")
    // without next() page will go in infintie loading for about page 
    next();
}
// middleware();

app.get("/", (req, res) => {
    res.send("Hello World from server")
})
app.get("/contact", middleware, (req, res) => {
    res.send("Hello World from contact")
})
app.get("/signin", (req, res) => {
    res.send("Hello World from sign in")
})
app.get("/signup", (req, res) => {
    res.send("Hello World from sign up")
})


app.listen(port, () => {
    console.log(`server connected on port ${port}`)
})