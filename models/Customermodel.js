// customerModel.js

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    cat: String,
    contact_info: String,
});

const Custs = mongoose.model('Custs', customerSchema);

module.exports = Custs;
