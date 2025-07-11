const jwt = require('jsonwebtoken');

const verifytoken = (req,res,next) => {
    const token = req.headers.authorization?.split(' ')[1];
    // console.log("Token: ", token);
    if(!token) return res.status(401).json({error:"Token not provided"});

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        res.status(401).json({error:"Token is not valid"});
    }
}

module.exports = verifytoken;