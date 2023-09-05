
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
// const cookieParser = require("cookie-parser")
const Authenticate = async (req, res, next) => {
    try {
        console.log("first")
        let tokenFromCookie = req.cookies.jwtLogin;
        console.log("token" + tokenFromCookie)
        // let verifyToken = jwt.verify(tokenFromCookie, process.env.SECRET_KEY)

        // let rootUser = await User.findOne({ _id: verifyToken._id, "tokenArray.tokenObj": tokenFromCookie })



        // if (!rootUser) {
        //     throw new Error("user not found")

        // }

        // req.tokenFromCookie = tokenFromCookie;
        // req.rootUser = rootUser;
        // req.userID = rootUser._id

        next();
    } catch (error) {
        res.status(400).send("unacuthoriuze")
        console.log(error)
    }

}
module.exports = Authenticate; 