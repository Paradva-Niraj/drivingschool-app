const mongoose = require('mongoose');

const enquiry = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
    date:{ type:String }
});

module.exports = mongoose.model('enquiry', enquiry);