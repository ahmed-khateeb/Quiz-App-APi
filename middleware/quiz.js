let quizSchema = require("../models/quiz.model");
check_quiz = (req,res,next) => {
    quizSchema.findById(req.params.quizId, (err, quiz) => {
        if(!quiz) {
            res.status(422).json({ message: 'This Quiz Not Found'});
        }
        else {
            next();
        }
    })
}

module.exports = check_quiz