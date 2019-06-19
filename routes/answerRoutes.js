let express = require("express"),

// add Mergeparams to access params from the parent router
    answerRoutes = express.Router();

// =============================================

let answerSchema = require('../models/answer.model');

let check_question = require("../middleware/question"),
    has_correct_answer = require("../middleware/hasCorrectAnswer");



answerRoutes.delete("/:id", (req, res) => {
    answerSchema.findById(req.params.id, (err, answer) => {
        if(!answer) {
            res.status(422).json({ message: 'This Answer is Not Found'});
        }
        else {
            answerSchema.deleteOne({_id: req.params.id}, (err) => {
                if(!err) {
                    res.status(200).json({message: "Answer Deleted Successfully"})
                }
                else {
                    res.send(err)
                }
            })
        }
    })
})
        
answerRoutes.use(check_question);

answerRoutes.post("/create", has_correct_answer , (req, res, next) => {
    console.log(req.body);
    let answer = {
        title: req.body.title,
        question_id: req.body.question_id,
        is_correct: req.body.is_correct
    };
    answer = answerSchema(answer);
    answer.save((err, answer) => {
        if (!err) {
            return res.status(200).send(answer);
        } else {
            console.log(err)
            if (err.code == 11000)
                return res.status(409).json({ message: 'This Answer is already in this Question answers'});
            else
                res.send(err)
        }
    })
})

// get Answers of the Question
answerRoutes.post("/get", (req, res) => {
    answerSchema.find({question_id: req.body.question_id}, (err, result) => {
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

answerRoutes.put("/update", (req, res, next) => {
    console.log(req.body);
    answerSchema.update({ _id: req.body._id },
        {title: req.body.title, is_correct: req.body.is_correct} , err => {
            if (!err) {
                answerSchema.findOne({_id:req.body._id}, (err, result) => {
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

module.exports = answerRoutes;