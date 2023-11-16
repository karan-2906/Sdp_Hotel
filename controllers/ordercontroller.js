const asyncHandler = require('express-async-handler')
const Order = require('../models/ordermodel')
const Menu = require('../models/Menumodel');
const { json } = require('express');

const getAllorder = asyncHandler(async (req, res) => {
    const orderrec = await Order.find({})
    res.status(200).json(orderrec);
});

const addorder = asyncHandler(async (req, res) => {
    const { CustomerId, ItemId, quantity } = req.body
    if (!CustomerId || !ItemId || !quantity) {
        return res.status(422).json({ message: "Invalid data, Please Enter valid Data" })
    }
    const item = await Menu.findById(ItemId)
    console.log(item)

    if (!item) {
        return res.status(422).json({ message: "Item not Found" })
    }
    const neworder = await Order.create({
        CustomerId,
        ItemId,
        amount: item.price * quantity
    }
    )
    await neworder.save();
    if (neworder) {
        res.status(200).json({ message: "Order Created", order: neworder })
    } else {
        res.status(400).json({ message: "Order Not Created" })
    }
})


const updateorder = async (req, res) => {
    try {
        const { CustomerId, ItemId, quantity } = req.body;
        const orderId = req.params.id;

        if (!CustomerId || !ItemId) {
            return res.status(422).json({ message: "Invalid data, Please Enter valid Data" });
        }

        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(422).json({ message: "Order not Found" });
        }

        const item = await Menu.findById(ItemId);
        if (!item) {
            return res.status(422).json({ message: "Item not Found" });
        }

        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { CustomerId, ItemId, amount: item.price * quantity },
            { new: true }
        );

        if (updatedOrder) {
            res.status(200).json({ message: "Order Updated", order: updatedOrder });
        }
    } catch (error) {
        console.log(error)
        res.status(200).json(error);


    }
};

const deleteorder = asyncHandler(async (req, res) => {
    const orderId = req.params.id;

    const order = await Order.findByIdAndDelete(orderId);

    if (!order) {
        return res.status(400).json({ message: "Order not Found" })
    }

    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (deletedOrder) {
        res.status(200).json({ message: "Order Deleted", order: deletedOrder });
    } else {
        res.status(400).json({ message: "Order Not Deleted" });
    }
});


module.exports = { getAllorder, addorder, updateorder, deleteorder };