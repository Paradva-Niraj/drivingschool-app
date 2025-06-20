const express = require('express');
const mongoose = require('mongoose');
const packages = require('../models/packages');
const verifytoken  = require('../middleware/verifytoken');

const router = express.Router();

router.post('/addpackage',verifytoken,async(req,res)=>{
    const {name,price,duration,lessons,vehicle,theory,testfee} = req.body.form;
    // console.log(name, price, duration, lessons, vehicle, theory, testfee);
    
    try{
        const newPackage = new packages({name,price,duration,lessons,vehicle,theory,testfee});
        await newPackage.save();
        console.log("Package added successfully!");
        res.status(201).json({message:"Package Added Successfully"});
    }
    catch(err){
        res.status(400).json({error:`Package Creation Error: ${err.message}`});
    }
})

module.exports = router;