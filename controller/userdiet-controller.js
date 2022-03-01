const UserdietModel = require("../model/userdiet-model")

//add[POST]

module.exports.addUserdiet = function(req, res) {
    let user = req.body.user
    let diet = req.body.diet
    let isActive = req.body.isActive
    let assignDate = req.body.assignDate
    let revokeDate = req.body.revokeDate
    let userdiet = new UserdietModel({
        user: user,
        diet: diet,
        isActive: isActive,
        assignDate: assignDate,
        revokeDate: revokeDate

    })

    userdiet.save(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 }) //-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Userdiet added...!!!", data: data, status: 200 }) //http status code 
        }
    })
}

//list[get]
module.exports.getAllUserdiets = function(req, res) {
    UserdietModel.find(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", status: -1, data: err })
        } else {
            res.json({ msg: "Show your list", status: 200, data: data })
        }
    })
}

//delete
module.exports.deleteUserdiet = function(req, res) {
    let userdietId = req.params.userdietId

    UserdietModel.deleteOne({ _id: userdietId }, function(err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "removed...", status: 200, data: success })
        }
    })
}

//update
module.exports.updateUserdiets = function(req, res) {

    let userdietId = req.body.userdietId

    let isActive = req.body.isActive
    let assignDate = req.body.assignDate
    let revokeDate = req.body.revokeDate

    UserdietModel.updateOne({ _id: userdietId }, { isActive: isActive, assignDate: assignDate, revokeDate: revokeDate }, function(err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })
}