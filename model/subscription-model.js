const mongoose = require("mongoose")

//schema

let SubscriptionSchema = new mongoose.Schema({
    title: {
        type: String
    },
    duration: {
        type: String
    },
    offer: {
        type: String
    },
    offerDescription: {
        type: String
    },
    price: {
        type: Number
    }
})

const SubscriptionModel = mongoose.model("subscription", SubscriptionSchema)
module.exports = SubscriptionModel