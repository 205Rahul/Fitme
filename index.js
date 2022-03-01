const express = require("express");
const mongoose = require("mongoose");
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const usermeasurementController = require("./controller/usermeasurement-controller")
const subscriptionController = require("./controller/subscription-controller")
const usersubscriptionController = require("./controller/usersubscription-controller")
const dietController = require("./controller/diet-controller")
const userdietController = require("./controller/userdiet-controller")
const workoutController = require("./controller/workout-controller")
const workoutplanController = require("./controller/workoutplan-controller")

const app = express()

//middle ware
app.use(express.json()) //mobile -> accept json data from request and set data into body
app.use(express.urlencoded({ extended: true })) //web --> accept url encoded from request and set data into body


//database
mongoose.connect('mongodb://localhost:27017/fitmeUp', function(err) {
    if (err) {
        console.log("db connection failed.....");
        console.log(err);
    } else {
        console.log("db conneceted....");
    }
})


//roles
app.post("/roles", roleController.addRole)
app.get("/roles", roleController.getAllRoles)
app.delete("/roles/:roleId", roleController.deleteRole)
app.put("/roles", roleController.updateRole)


//user
app.post("/users", userController.addUser)
app.get("/users", userController.getAllusers)
app.delete("/users/:userId", userController.deleteUser)
app.put("/users", userController.updateUser)
app.post("/login", userController.login)


//usermeasurement
app.post("/usermeasurements", usermeasurementController.addUsermeasurement)
app.get("/usermeasurements", usermeasurementController.getAllusermeasurement)
app.put("/usermeasurements", usermeasurementController.updateUsermeasurement)
app.delete("/usermeasurements/:usermeasurementId", usermeasurementController.deleteUsermeasurement)


//subscription
app.post("/subscriptions", subscriptionController.addSubscription)
app.get("/subscriptions", subscriptionController.getAllSubscription)
app.delete("/subscriptions/:subscriptionId", subscriptionController.deleteSubscription)
app.put("/subscriptions", subscriptionController.updateSubscription)


//usersubscription
app.post("/usersubscriptions", usersubscriptionController.addUsersubscription)
app.get("/usersubscriptions", usersubscriptionController.getAllUsersubscription)
app.delete("/usersubscriptions/:usersubscriptionId", usersubscriptionController.deleteUsersubscription)
app.put("/usersubscriptions", usersubscriptionController.updateUsersubscription)


//diet
app.post("/diets", dietController.addDiet)
app.get("/diets", dietController.getAlldiets)
app.delete("/diets/:dietId", dietController.deleteDiet)
app.put("/diets", dietController.updateDiet)



//user_diet
app.post("/userdiets", userdietController.addUserdiet)
app.get("/userdiets", userdietController.getAllUserdiets)
app.delete("/userdiets/:userdietId", userdietController.deleteUserdiet)
app.put("/userdiets", userdietController.updateUserdiets)

//workout
app.post("/workouts", workoutController.addWorkout)
app.get("/workouts", workoutController.getAllWorkout)
app.delete("/workouts/:workoutId", workoutController.deleteWorkout)
app.put("/workouts", workoutController.updateWorkout)


//workoutplan
app.post("/workoutplans", workoutplanController.addWorkoutplan)
app.get("/workoutplans", workoutplanController.getAllWorkoutplan)
app.delete("/workoutplans/:workoutplanId", workoutplanController.deleteWorkoutplan)
app.put("/workoutplans", workoutplanController.updateWorkoutplan)


//server
app.listen(3000, function() {
    console.log("server started on 3000");
})