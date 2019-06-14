const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

let quizSchema = mongoose.Schema({
    title: { type: String, required: "Please Enter A title for the quiz" },
    status: { type: String, enum: ['pending', 'published'], default: 'pending'},
    user_id: { type: ObjectId, ref: "User", required: "User_Id is required" },
})




module.exports = mongoose.model('Quiz', quizSchema);