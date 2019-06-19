let questionSchema = require("../models/question.model");
check_question = (req,res,next) => {
    questionSchema.findById(req.body.question_id, (err, question) => {
        if(!question) {
            res.status(404).json({ message: 'This Question Not Found'});
        }
        else {
            next();
        }
    })
}

module.exports = check_question