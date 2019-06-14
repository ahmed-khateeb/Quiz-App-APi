let questionSchema = require("../models/question.model");
check_question = (req,res,next) => {
    questionSchema.findById(req.params.questionId, (err, question) => {
        if(!question) {
            res.status(422).json({ message: 'This Quiz Not Found'});
        }
        else {
            next();
        }
    })
}

module.exports = check_question