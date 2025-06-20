const mongoose = require('mongoose');

const packages = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    duration:{type:Number,required:true},
    lessions:{type:Number,required:true},
    vehicaletype:{type:String,required:true,enum:["Auto","Manual","Auto/Manual"]},
    theory:{type:Boolean,default:false},
    fee:{type:Boolean,default:false},
});

module.exports = mongoose.model("packages",packages);