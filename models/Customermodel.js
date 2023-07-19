const mongoose = require('mongoose');

const Customermodel = mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true
    },
    cat:{
        type:String,
        required:true
    },
    contact_info:{
        type:String,
        required:true
    },
})

Customermodel.static('getFullName', function(customer) { return `${customer.fname}+${customer.lname}` });

const Customer = mongoose.model('Customer',Customermodel);
module.exports= {Customer, Customermodel}
