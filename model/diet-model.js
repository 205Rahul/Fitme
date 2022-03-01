const mongoose = require("mongoose")

//Schema

let dietSchema = new mongoose.Schema({
    title: {
        type: String

    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})


const DietModel = mongoose.model("diet", dietSchema)
module.exports = DietModel