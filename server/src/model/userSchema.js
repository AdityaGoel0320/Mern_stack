let mongoose = require("mongoose")

let bcrypt = require("bcryptjs")
let jwt = require("jsonwebtoken")



let userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        work: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        cpassword: {
            type: String,
            required: true,
        },


        // as token has to be added also
        tokens: [
            {
                token: {
                    type: String,
                    required: true,
                }
            }
        ]
    }
)



// now fnc of bcryptjs

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next();
})



// jwt token 

userSchema.methods.generateAuthToken = async function () {
    try {

        let newToken = jwt.sign({ id: this._id }, process.env.SECRET_KEY)

        // now adding this new token in databse
        this.tokens = this.tokens.concat({ token: newToken })

        await this.save() ; 
        return newToken ; 
    } catch (error) {
        console.log("error in token fnc in scehma file")
    }
}





let User = new mongoose.model("User", userSchema)

module.exports = User;

