const asyncHandler = require('express-async-handler')
const Order = require('../models/ordermodel')
const Menu = require('../models/Menumodel');
const { json } = require('express');

const getAllorder = asyncHandler(async(req,res) => {
    const orderrec = await Order.find({})
    res.status(200).json(orderrec);
});

const addorder = asyncHandler(async(req,res) => {
    const {CustomerId, ItemId } = req.body
    if(!CustomerId || !ItemId) {
        return res.status(422).json({message : "Invalid data, Please Enter valid Data"}) 
    }
    const item = await Menu.findById(ItemId)
    console.log(item)
    if(!item){
        return res.status(422).json({message : "Item not Found"}) 
    }
    const neworder = await new Order({
        CustomerId,
        ItemId,
        amount : item.price
    })
    await neworder.save();
    if(neworder){
        res.status(200).json({message : "Order Created", order:neworder})
    }else{
        res.status(400).json({message: "Order Not Created"})
    }
})
module.exports = {getAllorder,addorder};