const SubscriptionModel = require("../model/subscription-model")


//add[POST]

module.exports.addSubscription = function(req, res) {
    let title = req.body.title
    let duration = req.body.duration
    let offer = req.body.offer
    let offerDescription = req.body.offerDescription
    let price = req.body.price

    let subscription = new SubscriptionModel({
        title: title,
        duration: duration,
        offer: offer,
        offerDescription: offerDescription,
        price: price

    })

    subscription.save(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "subscription complete welcome...", data: data, status: 200 })
        }
    })
}

//list
module.exports.getAllSubscription = function(req, res) {
    SubscriptionModel.find(function(err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 }) //-1[404 ]
        } else {
            res.json({ msg: "Subscriptions  users are here..", data: data, status: 200 })
        }
    })
}

//delete
module.exports.deleteSubscription = function(req, res) {
    let subscriptionId = req.params.subscriptionId

    SubscriptionModel.deleteOne({ _id: subscriptionId }, function(err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "removed....", status: 200, data: success })
        }
    })
}

//update
module.exports.updateSubscription = function(req, res) {
    let subscriptionId = req.body.subscriptionId
    let title = req.body.title
    let duration = req.body.duration
    let offer = req.body.offer
    let offerDescription = req.body.offerDescription
    let price = req.body.price

    SubscriptionModel.updateOne({ _id: subscriptionId }, { title: title, duration: duration, offer: offer, offerDescription: offerDescription, price: price }, function(err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })

}