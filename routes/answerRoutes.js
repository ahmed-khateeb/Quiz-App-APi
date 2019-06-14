let express = require("express"),

// add Mergeparams to access params from the parent router
    answerRoutes = express.Router({mergeParams: true});

// =============================================

let answerSchema = require('../models/answer.model');

let check_question = require("../middleware/question");

answerRoutes.use(check_question);

answerRoutes.post("/create", (req, res, next) => {
    console.log(req.body);
    let answer = {
        title: req.body.title,
        question_id: req.params.questionId,
        is_correct: req.body.is_correct
    };
    answer = answerSchema(answer);
    answer.save((err, answer) => {
        if (!err) {
            res.status(200).send(answer);
        } else {
            console.log(err)
            if (err.code == 11000)
                res.status(409).json({ message: 'This Answer is already in this Question answers'});
            else
                return next(err);
        }
    })
})

// get Answers of the Question
answerRoutes.get("", (req, res) => {
    answerSchema.find({question_id: req.params.questionId}, (err, result) => {
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

answerRoutes.delete("", (req, res) => {
    answerSchema.findById(req.body.answer_id, (err, answer) => {
        if(!answer) {
            res.status(422).json({ message: 'This Answer is Not Found'});
        }
        else {
            answerSchema.deleteOne({_id: req.body.answer_id}, (err) => {
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
module.exports = answerRoutes;