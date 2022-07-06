const mongoose = require('mongoose')

const SosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    sos_type: {
        type: String,
        required: true 
    },
    sos_msg: String
}, {
    timestamps: true
})

module.exports = mongoose.model('bizsosdb', SosSchema);