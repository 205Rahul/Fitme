const mongoose = require("mongoose")


const UsermeasurementSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    bmi: {
        type: String
    },
    measurementDate: {
        type: Date
    },
    measurementByduration: {
        type: Number
    }
})


const UsermeasurementModel = mongoose.model("usermeasurement", UsermeasurementSchema)
module.exports = UsermeasurementModel