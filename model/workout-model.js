const mongoose = require("mongoose")

//Schema

let WorkoutSchema = new mongoose.Schema({
    name: {
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


const WorkoutModel = mongoose.model("workout", WorkoutSchema)
module.exports = WorkoutModel