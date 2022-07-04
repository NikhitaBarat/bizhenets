const mongoose = require('mongoose')

// applicaiton validation schema
const applicationSchema = new mongoose.Schema({
    applied_to: {
        type: String,
        required: [true, 'Please Enter Applicant']
    },
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email']
    },
    age: {
        type: Number,
        min: [14, 'You are Under age'],
        max: 110
    },
    prev_employment: {
        type: String,
        required: [true, 'Please enter your employment detail']
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: [true, 'Please specify gender preferences']
    },
    criminal_status: {
        type: Boolean,
        required: [true, 'Please specify you criminal status']
    },
    image_url: {
        type: String,
        required: true
    },
    applied_date: {
        type: Date,
        default: Date.now
    },

},
    {
        timestamps: true
    })

module.exports = mongoose.model('bizapplicantdb', applicationSchema);