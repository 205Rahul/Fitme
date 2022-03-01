const mongoose = require("mongoose")

let usersubscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    subscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subscription"
    },
    pay: {
        type: String
    },
    subscribeDate: {
        type: Date
    },
    paymentRefCode: {
        type: String
    }

})

const UsersubscriptionModel = mongoose.model("usersubscription", usersubscriptionSchema)

module.exports = UsersubscriptionModel