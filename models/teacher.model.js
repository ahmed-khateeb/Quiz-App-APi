const mongoose = require('mongoose');
const User = require('./user.model');
const options = { discriminatorKey: 'role' };

let teacherSchema = User.discriminator('teacher',
    new mongoose.Schema({

    }, options));

module.exports = teacherSchema;
