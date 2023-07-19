const mongoose = require('mongoose');
const Custs = require("../models/Customermodel");

const getALLcust = async (req, res) => {

    let custs;

    try {
        custs = await Custs.find({});
        console.log(custs);
    } catch (er) {
        return console.log(er);
    }

    if (!custs) {
        return res.status(500).json({ message: "No Customer Found" })
    } else {
        return res.status(200).json({ custs })
    }
}
const addcust = async (req, res) => {
    const { fname, lname, cat, contact_info } = req.body;

    // Check if both first name and last name are provided and not empty
    if (!fname || !lname) {
        return res.status(422).json({ message: "Invalid Data, Please Enter Valid First Name and Last Name" });
    }

    // Add additional validations for other fields if required
    // For example, if the 'cat' and 'contact_info' fields are mandatory:
    // if (!cat || cat.trim() === "" || !contact_info || contact_info.trim() === "") {
    //     return res.status(422).json({ message: "Invalid Data, Please Enter Valid Category and Contact Information" });
    // }

    try {
        // Create a new instance of the Custs model with the provided data
        const newCustomer = await new Custs({
            fname,
            lname,
            cat,
            contact_info
        }).save();

        res.status(201).json({ newCustomer, message: "Customer created successfully" });
        console.log('Successfully Created Customer');
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to create customer. Please try again later." });
    }
}

const getCustById = async (req, res) => {
    const id = req.params.id;

    let custs;

    try {
        custs = await Custs.findById(id);
    } catch (er) {
        console.log(er)
    }

    if (!custs) {
        return res.status(404).json({ message: "No Customer Exit with such ID" })
    } else {
        return res.status(200).json({ custs })
    }
}

const updateCust = async (req, res) => {

    const id = req.params.id;
    const { fname, lname, cat, contact_info } = req.body;

    if (!fname && fname.trim() === "" &&
        !lname && lname.trim() === "" &&
        !cat && cat.trim() === "" &&
        !contact_info && contact_info.trim()
    ) {
        return res.status(422).json({ message: "Invalid Data,  Please Enter Valid Data" })
    }

    let custs;

    try {
        docs = await Custs.findByIdAndUpdate(id, {
            fname,
            lname,
            cat,
            contact_info
        });
    } catch (er) {
        return console.log(er);
    }

    if (!custs) {
        return res.status(500).json({ message: "Unable to Update the Customer" });
    } else {
        return res.status(200).json({ message: "Customer Updated Successfully" });
    }
}

const deleteCust = async (req, res) => {

    const id = req.params.id;
    let custs;

    try {
        custs = await Custs, Custs.findByIdAndRemove(id);
    } catch (er) {
        return console.log(er);
    }

    if (!docs) {
        return res.status(500).json({ message: "Unable to Delete Customer" });
    } else {
        return res.status(201).json({ message: "Deleted Successfully" });
    }
}

module.exports = { getALLcust, addcust, getCustById, updateCust, deleteCust };