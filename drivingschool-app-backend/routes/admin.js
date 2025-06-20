const express = require('express');
const verifytoken = require('../middleware/verifytoken');
const Package = require('../models/package');

const router = express.Router();

router.get('/dashboard',verifytoken,(req,res)=>{
    res.status(200).json()
})

router.post('/addpackage',verifytoken,(req,res)=>{
    const {name,price,duration,lessions,vehicle,theory,testfee} = req.body;

    try{
        const newPackage = new Package({name,price,duration,lessions,vehicle,theory,testfee});
        newPackage.save();
        res.status(201).json({message:"Package Added Successfully"});
    }
    catch(err){
        res.status(400).json({error:`Package Creation Error: ${err.message}`});
    }
})

module.exports = router;