const WorkoutplanModel = require("../model/workoutplan-model")

//add[POST]
module.exports.addWorkoutplan = function(req, res) {
    let user = req.body.user
    let workout = req.body.workout
    let workoutdate = req.body.workoutdate
    let workouttime = req.body.workouttime
    let isworkoutComplete = req.body.isworkoutComplete
    let workoutplan = new WorkoutplanModel({
        user: user,
        workout: workout,
        workoutdate: workoutdate,
        workouttime: workouttime,
        isworkoutComplete: isworkoutComplete,

    })

    workoutplan.save(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 }) //-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "workoutplan done", data: data, status: 200 }) //http status code 
        }
    })
}

//list
module.exports.getAllWorkoutplan = function(req, res) {
    WorkoutplanModel.find(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", status: -1, data: err })
        } else {
            res.json({ msg: "show your list", status: 200, data: data })
        }
    })
}

//delete
module.exports.deleteWorkoutplan = function(req, res) {
    let workoutplanId = req.params.workoutplanId

    WorkoutplanModel.deleteOne({ _id: workoutplanId }, function(err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "removed...", status: 200, data: success })
        }
    })
}

//update
module.exports.updateWorkoutplan = function(req, res) {
    let workoutplanId = req.body.workoutplanId
    let workoutdate = req.body.workoutdate
    let workouttime = req.body.workouttime
    let isworkoutComplete = req.body.isworkoutComplete

    WorkoutplanModel.updateOne({ _id: workoutplanId }, { workoutdate: workoutdate, workouttime: workouttime, isworkoutComplete: isworkoutComplete }, function(err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })
}