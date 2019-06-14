const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

let questionSchema = mongoose.Schema({
    title: { type: String, required: "Please Enter A title for this question"},
    quiz_id: { type: ObjectId, ref: "Quiz", required: "Quiz Id is required" },
})

questionSchema.index({ title: 1, quiz_id: 1 }, { unique: true });

module.exports = mongoose.model('Question', questionSchema);