const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

let answerSchema = mongoose.Schema({
    title: { type: String, required: "Please Enter A title for this question" },
    question_id: { type: ObjectId, ref: "Question", required: "Question Id is required" },
    is_correct: {type: Boolean, required: "You must specifiy the status of the answer"},
})

answerSchema.index({ title: 1, question_id: 1 }, { unique: true });

module.exports = mongoose.model('Answer', answerSchema);