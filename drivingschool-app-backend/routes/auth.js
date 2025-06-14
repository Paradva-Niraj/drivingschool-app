const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const  user = require('../models/user');
const router = express.Router();

//register admin
router.post('/adminregister',async(req,res) => {
    const {username,email,password,isactive,lastlogin,role} = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const newadmin = new user({username,email,hashedPassword,isactive,lastlogin,role});
        await newadmin.save();
        res.status(201).json({message:"Admin Registered Successfully"});
    }
    catch(err){
        res.status(400).json({error:`Register Error ${err.message}`});
    }
})

//login admin
router.post('/adminlogin', async(req,res) => {
    const { email,password } = req.body;
    // console.log("Password from request:", req.body.password);

    try{
            const admin = await user.findOne({email});
            if(!admin) return res.status(404).json({error:"User Not Found"});

            const match =await bcrypt.compare(password,admin.hashedPassword);
            if(!match) return res.status(400).json({error:"Invalid Password"});

            const token = jwt.sign({id:admin._id,role:admin.role},process.env.JWT_SECRET,{expiresIn:'7d'});

            res.status(200).json({token,role:admin.role,name:admin.username,mail:admin.email});
    }
    catch(err){
        res.status(500).json({error:`Login Error ${err.message}`});
    }
})



module.exports = router;