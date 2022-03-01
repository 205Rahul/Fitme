const UsersubscriptionModel = require("../model/usersubscription-model")
const UsermeasurementModel = require("../model/usersubscription-model")

//add[POST]

module.exports.addUsersubscription = function(req, res) {
    let user = req.body.user
    let subscription = req.body.subscription
    let pay = req.body.pay
    let subscribeDate = req.body.subscribeDate
    let paymentRefCode = req.body.paymentRefCode

    let usersubscription = new UsersubscriptionModel({
        user: user,
        subscription: subscription,
        pay: pay,
        subscribeDate: subscribeDate,
        paymentRefCode: paymentRefCode
    })

    usersubscription.save(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 }) //-1 [302 404 500]
        } else {
            res.json({ msg: "user subscription is dpone", data: data, status: 200 }) //http status code
        }
    })
}

//list

module.exports.getAllUsersubscription = function(req, res) {
    UsersubscriptionModel.find(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", status: -1, data: err })
        } else {
            res.json({ msg: "show your list", status: 200, data: data })
        }
    })
}

//delete

module.exports.deleteUsersubscription = function(req, res) {
    let usersubscriptionId = req.params.usersubscriptionId

    UsersubscriptionModel.deleteOne({ _id: usersubscriptionId }, function(err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "removed...", status: 200, data: success })
        }
    })
}



//update
module.exports.updateUsersubscription = function(req, res) {
    let usersubscriptionId = req.body.usersubscriptionId
    let pay = req.body.pay
    let subscribeDate = req.body.subscribeDate
    let paymentRefCode = req.body.paymentRefCode

    UsersubscriptionModel.updateOne({ _id: usersubscriptionId }, { pay: pay, subscribeDate: subscribeDate, paymentRefCode: paymentRefCode }, function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 }) //-1 [302 404 500]
        } else {
            res.json({ msg: "user modified...", data: data, status: 200 }) //http status code
        }
    })
}