const express = require('express');
const enquiry = require('../models/enquiry');
const verify = require('../middleware/verifytoken')
const Route = express.Router();

Route.get('/enquirys',verify,async(req,res)=>{
    try{
        const data = await enquiry.find();
        if(!data){
            res.status(404).json({error:'no data avalable'});
        }
        res.status(200).json(data);
    }
    catch(err){
        res.status(404).json({error:'error for find data'});
    }

})

Route.post('/sendenquiry',async(req,res)=>{
    const {name,email,phonenumber,message} = req.body.form;
    console.log(name,email,phonenumber,message);
    
    try{
        const data = new enquiry({name,email,phonenumber,message});
        res.status(200).json({message:'Submited Successfully'})
        await data.save();
    }
    catch(err){
         res.status(404).json({error:`Error In Request`});
        //  console.log(err);
    }
})

Route.get('/sendencount',verify,async(req,res)=>{
    try{
        const count = await enquiry.countDocuments();
        res.status(200).json(count);
    }
    catch(err){
        console.log("error at count find in enquiry : " + err)
    }
})

Route.post('/changeread/:id',verify,async(req,res)=>{
    const id = req.params.id;
    // console.log(id);
    
    try{
        await enquiry.findByIdAndUpdate(id,{read:true})
        res.status(200).json({message:'Read Update Success'})
    }
    catch(err){
        res.status(404).json({error:"error at read :"+err})
        console.log("error at read enquiry"+err);
        
    }
})
module.exports = Route;