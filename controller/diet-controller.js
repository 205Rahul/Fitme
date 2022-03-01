const DietModel = require("../model/diet-model")

//add
module.exports.addDiet = function(req, res) {
    let title = req.body.title
    let description = req.body.description
    let user = req.body.user

    let diet = new DietModel({
        title: title,
        description: description,
        user: user
    })

    diet.save(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 }) //-1[302 404 500]
        } else {
            res.json({ msg: "diet added..", data: data, status: 200 })
        }
    })
}

//list
module.exports.getAlldiets = function(req, res) {
    DietModel.find(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "show your diet list", status: 200, data: data })
        }
    })
}



//delete
module.exports.deleteDiet = function(req, res) {
    let dietId = req.params.dietId

    DietModel.deleteOne({ _id: dietId }, function(err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "removed...", status: 200, data: success })
        }
    })
}

//update
module.exports.updateDiet = function(req, res) {
    let dietId = req.body.dietId
    let title = req.body.title
    let description = req.body.description

    DietModel.updateOne({ _id: dietId }, { title: title, description: description }, function(err, data) {
        if (err) {
            res.json({ msg: "Somethinf went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })


}