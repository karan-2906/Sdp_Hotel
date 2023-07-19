const mongoose = require('mongoose');
const Menu = require('./Menumodel');
const { Customer } = require('./Customermodel');

const Ordermodel = mongoose.Schema({
    CustomerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    ItemId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Menu'
    },

    quantity: {
        type: Number,
        required: false,
        default: 1
    },
    amount: {
        type: Number,
        required: true,

    },
})

const Order = mongoose.model('Order', Ordermodel);

module.exports = Order;