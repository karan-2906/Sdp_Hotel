const mongoose = require('mongoose');
const Menus = require("../models/Menumodel");

const getAllMenu = async (req, res) => {

    let menus;

    try {
        menus = await Menus.find({});
        console.log(menus);
    } catch (er) {
        console.log(er);
    }

    if (!menus) {
        return res.status(500).json({ message: "No Item Found" })
    } else {
        return res.status(200).json({ menus })
    }
}

const addMenu = async (req, res) => {

    const { name, price, Desc } = req.body;

    if (!name && name.trim() === "" &&
        !price && price.trim() === "" &&
        !Desc && Desc.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid data, Please Enter valid Data" })
    }

    try {
        const newMenu = await Menus.create({
            name,
            price,
            Desc
        });

        await newMenu.save();

        res.status(201).json({ newMenu, message: "menus created" });
        console.log('Successfully Created Menu')
    } catch (er) {
        return console.log(er);
    }
}

const getMenuById = async (req, res) => {
    const id = req.params.id;

    let menus;

    try {
        menus = await Menus.findById(id);
    } catch (er) {
        console.log(er)
    }

    if (!docs) {
        return res.status(404).json({ message: "No Menu exist with such ID" })
    } else {
        return res.status(200).json({ menus })
    }
}

const updateMenu = async (req, res) => {

    const id = req.params.id;
    const { name, price, Desc } = req.body;

    if (!name && name.trim() === "" &&
        !price && price.trim() === "" &&
        !Desc && Desc.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid data, Please Enter valid Data" })
    };

    let menus;

    try {
        menus = await Menus.findByIdAndUpdate(id, {
            name,
            price,
            Desc
        });
    } catch (er) {
        return console.log(er);
    }

    if (!menus) {
        return res.status(500).json({ message: "Unable to update the Menu" });
    } else {
        return res.status(200).json({ message: "Menu Updated Successfully" });
    }
}

const deleteMenu = async (req, res) => {

    const id = req.params.id;
    let menus;

    try {
        menus = await Menus.findByIdAndRemove(id);
    } catch (er) {
        return console.log(er);
    }

    if (!menus) {
        return res.status(500).json({ message: "Unable to delete Menu" });
    } else {
        return res.status(201).json({ message: "Deleted Successfully" });
    }
}

module.exports = { getAllMenu, addMenu, getMenuById, updateMenu, deleteMenu };