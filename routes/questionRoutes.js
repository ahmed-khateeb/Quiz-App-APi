let express = require("express"),

    questionRoutes = express.Router();

// =============================================

let questionSchema = require('../models/question.model'),
    answerSchema = require('../models/answer.model'),

    answerRouter = require("./answerRoutes");

let check_quiz = require("../middleware/quiz");


questionRoutes.get("/:id/hasCorrectAnswer", (req, res) => {
    answerSchema.findOne({question_id: req.params.id, is_correct: true},
        (err, result) => {
            if(result) {
                return res.status(200).json({hasCorrect: true})
            }
            else {
                if(err) {
                    res.send(err)
                }
                return res.status(200).json({hasCorrect: false})
            }
        })
})

// Add The Middleware

questionRoutes.post("/create", check_quiz , (req, res, next) => {
    console.log(req.body);
    let question = {
        title: req.body.title,
        quiz_id: req.body.quiz_id,
    };
    question = questionSchema(question);
    question.save((err, question) => {
        if (!err) {
            res.status(200).send(question);
        } else {
            console.log(err)
            if (err.code == 11000)
                res.status(409).json({ message: 'This question is already in this quiz'});
            else
                return next(err);
        }
    })
})

// get Questions of the Quiz
questionRoutes.post("/get", (req, res) => {
    console.log(req.body)
    questionSchema.find({quiz_id: req.body.quiz_id}, (err, result) => {
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

questionRoutes.put("/update", (req, res, next) => {
    console.log(req.body);
    questionSchema.update({ _id: req.body.question_id },
        {title: req.body.title} , err => {
            if (!err) {
                questionSchema.findOne({_id:req.body.question_id}, (err, result) => {
                    if (!err) {
                        console.log(result);
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

questionRoutes.delete("/:id", (req, res) => {
    questionSchema.findById(req.params.id, (err, result) => {
        if (!err) {
            console.log(result)
            answerSchema.remove({question_id: result._id}, err=>{
                if(err){
                    res.send(err)
                }
                result.remove();
                res.status(200).json({ message: 'Cascade Deletion Success'});
            });
        }
        else {
            console.log(err);
            return res.send(err);
        }
    })
})

module.exports = questionRoutes;