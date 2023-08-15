
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const Authenticate = async (req, res, next) => {
    try {
        let token = req.cookies.jwtoken;
        let verifyToken = jwt.verify(token , process.env.SECRET_KEY)

        let rootUser = await User.findOne({_d : verifyToken._id , "tokens:token"   : token})



        if(!rootUser){
            throw new Error("user not found")

        }

        req.token = oken ; 
        req.rootUser = rootUser ; 
        req.userID  = rootUser._id

        next() ; 
    } catch (error) {
        res.status(400).send("unacuthoriuze")
        console.log(error)
    }

}
module.exports = Authenticate; 