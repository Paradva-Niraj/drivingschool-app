const express = require('express');
const verifytoken = require('../middleware/verifytoken');

const router = express.Router();

router.get('/dashboard',verifytoken,async(req,res)=>{
    res.status(200).json()
})

module.exports = router;