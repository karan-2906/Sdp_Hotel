const { Long } = require('bson');
const mongoose = require('mongoose');

const Menumodel = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    Desc:{
        type:String,
        required:true,
    }
})

const Menu = mongoose.model('Menu',Menumodel);

module.exports = Menu