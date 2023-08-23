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
            type: String,
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
        tokenArray: [{
            tokenObj: {
                type: String,
                required: true,
            }
        }]
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

// userSchema.methods.generateAuthToken = async function () {
//     try {


//         let tokenGenerated = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)


//         // now adding this new token in databse

//         this.tokenArray = this.tokenArray.concat({tokenObj:tokenGenerated})
//         await this.save();


//         return tokenGenerated ; 

        
//     } catch (error) {
//         console.log("error in token fnc in scehma file")
//     }
// }

userSchema.methods.generateAuthToken = async function () {
    try {
        let tokenGenerated = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);

        // Append the new token to the tokenArray
        this.tokenArray.push({ tokenObj: tokenGenerated });
        
        // Save the updated user object
        await this.save();

        return tokenGenerated;
    } catch (error) {
        console.error("Error in generateAuthToken:", error.message);
        throw error; // Propagate the error
    }
}




let User = new mongoose.model("User", userSchema)

module.exports = User;

