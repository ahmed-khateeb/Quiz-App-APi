let express = require("express"),
    quizRoutes = express.Router();

// =============================================

let quizSchema = require('../models/quiz.model');

let check_teacher = require("../middleware/teacher");

// Get published Quizzes for students

quizRoutes.get("/allPublished", (req, res) => {
    quizSchema.find({status: "published"}).populate('user_id')
    .exec((err, result) => {
        console.log(result)
        if (err) {
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.status(200).send(result);
        }
    })
})

// use teacher Middleware to prevent student accounts from using quiz api
quizRoutes.use(check_teacher)

// Quiz Routes

quizRoutes.post("/create", (req, res, next) => {
    console.log(req.body);
    let quiz = {
        title: req.body.title,
        user_id: req._id,
    };

    quiz = quizSchema(quiz);
    quiz.save((err, quiz) => {
        if (!err) {
            res.status(200).send(quiz);
        } else {
            console.log(err)
            if (err.code == 11000)
                res.status(409).json({ message: 'This name is already in your quiz list'});
            else
                return next(err);
        }
    })
})

// get Teacher pending Quizzes
quizRoutes.get("/pending", (req, res) => {
    quizSchema.find({user_id: req._id, status: "pending"}, (err, result) => {
        if (err) {
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.status(200).send(result);
        }
    })
})

// get Teacher published Quizzes
quizRoutes.get("/published", (req, res) => {
    quizSchema.find({user_id: req._id, status: "published"}, (err, result) => {
        if (err) {
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.status(200).send(result);
        }
    })
})

//Get Quiz By ID 
quizRoutes.get("/:id", (req, res) => {
    quizSchema.findById(req.params.id, (err, result) => {
        if (!err) {
            res.status(200).send(result);
        }
        else {
            console.log(err);
            return res.send(err);
        }
    })
})

quizRoutes.put("/updateStatus", (req, res, next) => {
    console.log(req.body);
    quizSchema.update({ _id: req.body.quiz_id },
        {status: "published"} , err => {
            if (!err) {
                quizSchema.findOne({_id:req.body.quiz_id}, (err, result) => {
                    if (!err) {
                        res.status(200).send(result);
                    }
                    else {
                        console.log(err);
                        return next(err);
                    }
                })
            }
            else {
                console.log(err);
                return next(err);
            }
        })
})


module.exports = quizRoutes;