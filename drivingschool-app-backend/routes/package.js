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
        console.log(`Error saving package: ${err.message}`);
    }
})

router.get('/packages',verifytoken,async(req,res)=>{
    try{
        const packagesList = await packages.find();
        res.status(200).json(packagesList);
    }
    catch(err){
        res.status(500).json({error:`no packages found`});
        console.log(`Error fetching packages: ${err.message}`)
    }
})

router.put('/editpackage/:id',verifytoken,async(req,res)=>{
    const {name,price,duration,lessons,vehicle,theory,testfee} = req.body.form;
    try{
        const updatedpackage = await packages.findByIdAndUpdate(req.params.id,{name,price,duration,lessons,vehicle,theory,testfee},
            {
                new: true,
                runValidators: true,
            }
        )
        if(!updatedpackage){
            return res.status(404).json({error:"Package Not Found"});
        }

        return res.status(200).json({message:"Package updated successfully"});
    }
    catch(err){
        res.status(400).json({error:`Package Update Error:`});
        console.log(`Error updating package: ${err.message}`);
    }
})

router.delete('/deletepackage/:id',verifytoken,async(req,res)=>{
    const id = req.params.id;
    try{
        const deletepackage = await packages.deleteOne({_id:id});
        if(!deletepackage.deletedCount){
            return res.status(404).json({error:"Package Not Found"});
        }
        return res.status(200).json({message:"Package deleted successfully"});
    }
    catch(err){
        res.status(400).json({error:`Package Deletion Error`});
        console.log(`Error deleting package: ${err.message}`);
    }
})

module.exports = router;