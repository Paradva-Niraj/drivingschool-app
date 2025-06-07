const mongoose = require('mongoose');

const admin = new mongoose.Schema({
    username:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true},
    isactive:{type:Boolean},
    lastlogin:{type:Date},
    role:{type:String,enum:["superadmin","admin"]},
});

module.exports = mongoose.model("admin",admin);