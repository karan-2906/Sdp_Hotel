const mongoose = require('mongoose');
const Menu = require('./Menumodel');
const {Customer} = require('./Customermodel');

const Ordermodel = mongoose.Schema({
    CustomerId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Customer'
    },
    ItemId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Menu'
    },
    
    amount:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Menu'
    },
})

const Order = mongoose.model('Order', Ordermodel);

module.exports = Order;