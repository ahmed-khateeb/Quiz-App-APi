let userSchema = require("../models/user.model");
check_teacher = (req,res,next) => {
    userSchema.findOne({_id: req._id, role: "teacher"}, (err, user) => {
        console.log(req._id)
        if(!user) {
            res.status(422).json({ message: 'You are not a teacher'});
        }
        else if(err) {
            console.log(err)
        }
        else {
            next()
        }
    })
}

module.exports = check_teacher