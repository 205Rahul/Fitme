const mongoose = require("mongoose")
    // const { boolean } = require("webidl-conversions")


//Schema
let UserdietSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    diet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "diet"
    },
    isActive: {
        type: Boolean
    },
    assignDate: {
        type: Date
    },
    revokeDate: {
        type: Date
    }
})

const UserdietModel = mongoose.model("userdiet", UserdietSchema)
module.exports = UserdietModel