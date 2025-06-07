// initial imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoos');
const dotenv = require('dotenv');

// routes import 
const authroute = require('./routes/auth')

dotenv.config();

const app = express();
app.use(cprs());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("database connected!")).catch((err)=>console.log("database error while connecting"+err));

app.use('/api/auth',authroute);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log("server running on PORT"+PORT));