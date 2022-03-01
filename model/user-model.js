const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String,
    },
    gender: {
        type: String

    },
    contactNumber: {
        type: String
    },
    dob: {
        type: Date
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "role"
    },
    isSubscribed: {
        type: Boolean
    }
})


const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel