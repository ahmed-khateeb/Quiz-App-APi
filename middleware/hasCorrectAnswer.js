let answerSchema = require("../models/answer.model");
has_correct_answer = (req,res,next) => {
    console.log(req.body);
    // Check if there is a correct answer inserted for that question
    if (req.body.is_correct == 'true') {
        answerSchema.findOne({question_id: req.body.question_id, is_correct: true},
            (err, result) => {
                if(result) {
                    return res.status(409).json({message: "Question Have Already Correct Answer"})
                }
                else {
                    next()
                }
            })
    }
    else {
        next()
    }
}

module.exports = has_correct_answer