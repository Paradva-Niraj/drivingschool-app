const mongoose = require('mongoose');

const admin = new mongoose.Schema({
    username:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    hashedPassword:{type:String, require:true},
    isactive:{type:Boolean,default:true},
    lastlogin:{type:Date,default:Date.now},
    role:{type:String,enum:["superadmin","admin"]},
});

module.exports = mongoose.model("admin",admin);