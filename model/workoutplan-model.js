const mongoose = require("mongoose")

//Schema

let WorkoutplanSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "workout"
    },
    workoutdate: {
        type: Date
    },
    workouttime: {
        type: Number
    },
    isworkoutComplete: {
        type: Boolean
    }
})

const WorkoutplanModel = mongoose.model("workoutplan", WorkoutplanSchema)
module.exports = WorkoutplanModel