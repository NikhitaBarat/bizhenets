const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        require: [true, 'Please Enter your email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    }
}, 
{
    timestamps: true 
})

module.exports = mongoose.model('bizuserdb', userSchema);