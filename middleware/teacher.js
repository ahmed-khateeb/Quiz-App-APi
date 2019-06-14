let userSchema = require("../models/user.model");
check_teacher = (req,res,next) => {
    userSchema.findById(req._id, (err, user) => {
        if(!err) {
            if (user.role !== "teacher") {
                res.status(422).json({ message: 'You are not a teacher'});
            }
            else 
                next();
        }
        else {
            console.log(err)
        }
    })
}

module.exports = check_teacher