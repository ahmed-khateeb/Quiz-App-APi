const mongoose = require('mongoose');
const User = require('./user.model');
const options = { discriminatorKey: 'role' };

let studentSchema = User.discriminator('student',
    new mongoose.Schema({

    }, options));

module.exports = studentSchema;

