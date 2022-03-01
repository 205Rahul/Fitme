const UsermeasurementModel = require("../model/usermeasurement-model")



//add

module.exports.addUsermeasurement = function(req, res) {

    let user = req.body.user
    let height = req.body.height
    let weight = req.body.weight
    let bmi = req.body.bmi
    let measurementDate = req.body.measurementDate
    let measurementByduration = req.body.measurementByduration

    let usermeasurement = new UsermeasurementModel({
        user: user,
        height: height,
        weight: weight,
        bmi: bmi,
        measurementDate: measurementDate,
        measurementByduration: measurementByduration
    })


    usermeasurement.save(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })

        } else {
            res.json({ msg: "measurement done....", data: data, status: 200 }) //http ststus code
        }
    })

}

//list

module.exports.getAllusermeasurement = function(req, res) {
    UsermeasurementModel.find(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "usermeasurements are here...", data: data, status: 200 })
        }
    })
}

//delete
module.exports.deleteUsermeasurement = function(req, res) {
    //params userid 
    let usermeasurementId = req.params.usermeasurementId //postman -> userid 

    UsermeasurementModel.deleteOne({ _id: usermeasurementId }, function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 }) //-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "usermeasurement removed...", data: data, status: 200 }) //http status code 
        }
    })
}

//update

module.exports.updateUsermeasurement = function(req, res) {
    let usermeasurementId = req.body.usermeasurementId
    let height = req.body.height
    let weight = req.body.weight
    let bmi = req.body.bmi
    let measurementDate = req.body.measurementDate
    let measurementByduration = req.body.measurementByduration

    UsermeasurementModel.updateOne({ _id: usermeasurementId }, { height: height, weight: weight, bmi: bmi, measurementDate: measurementDate, measurementByduration: measurementByduration }, function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 }) //-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "usermeasurement modified...", data: data, status: 200 }) //http status code 
        }
    })

}