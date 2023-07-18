const mongoose = require('mongoose');

const Menumodel = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Int16Array,
        required:true,
    },
    Desc:{
        type:String,
        required:true,
    }
})

const Menu = mongoose.model('Menu',Menumodel);

module.exports = Menu