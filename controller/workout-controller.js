const WorkoutModel = require("../model/workout-model")

//add[POST]
module.exports.addWorkout = function(req, res) {
    let name = req.body.name
    let description = req.body.description
    let user = req.body.user

    let workout = new WorkoutModel({
        name: name,
        description: description,
        user: user
    })

    workout.save(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 }) //-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "workout added", data: data, status: 200 }) //http status code 
        }
    })
}

//list
module.exports.getAllWorkout = function(req, res) {
    WorkoutModel.find(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", status: -1, data: err })
        } else {
            res.json({ msg: "show your list", status: 200, data: data })
        }
    })
}

//delete
module.exports.deleteWorkout = function(req, res) {
    let workoutId = req.params.workoutId

    WorkoutModel.deleteOne({ _id: workoutId }, function(err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "removed...", status: 200, data: success })
        }
    })
}

//update

module.exports.updateWorkout = function(req, res) {
    let workoutId = req.body.workoutId
    let name = req.body.name
    let description = req.body.description


    WorkoutModel.updateOne({ _id: workoutId }, { name: name, description: description }, function(err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })
}