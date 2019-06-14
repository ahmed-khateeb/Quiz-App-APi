let express = require("express"),

// add Mergeparams to access params from the parent router
    questionRoutes = express.Router({mergeParams: true});

// =============================================

let questionSchema = require('../models/question.model'),

    answerRouter = require("./answerRoutes");

let check_quiz = require("../middleware/quiz");

questionRoutes.use(check_quiz);

questionRoutes.post("/create", (req, res, next) => {
    console.log(req.body);
    let question = {
        title: req.body.title,
        quiz_id: req.params.quizId,
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
questionRoutes.get("", (req, res) => {
    questionSchema.find({quiz_id: req.params.quizId}, (err, result) => {
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
    questionSchema.update({ _id: req.body._id },
        {title: req.body.title} , err => {
            if (!err) {
                questionSchema.findOne({_id:req.body._id}, (err, result) => {
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

questionRoutes.delete("", (req, res) => {
    questionSchema.findById(req.body.question_id, (err, question) => {
        if(!question) {
            res.status(422).json({ message: 'This Question is Not Found'});
        }
        else {
            questionSchema.deleteOne({_id: req.body.question_id}, (err, question) => {
                if(!err) {
                    res.status(200).json({message: "Question Deleted Successfully"})
                }
                else {
                    res.send(err)
                }
            })
        }
    })
})

// Question Nested Routes

questionRoutes.use('/:questionId/answers', answerRouter);

module.exports = questionRoutes;