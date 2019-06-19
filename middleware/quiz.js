let quizSchema = require("../models/quiz.model");
check_quiz = (req,res,next) => {
    console.log(req.body)
    quizSchema.findById(req.body.quiz_id, (err, quiz) => {
        if(!quiz) {
            res.status(422).json({ message: 'This Quiz Not Found'});
        }
        else {
            next();
        }
    })
}

module.exports = check_quiz