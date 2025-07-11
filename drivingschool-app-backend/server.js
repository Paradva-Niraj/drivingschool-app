// initial imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// routes import 
const authroute = require('./routes/auth');
const admin = require('./routes/admin');
const package = require('./routes/package');
const enquiry = require('./routes/enquiry');

//server create
const app = express();
app.use(cors());
app.use(express.json());


//database connection in local mongo compass
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("database connected!")).catch((err)=>console.log("database error while connecting "+ err));

//base redirection
app.get('/', (req, res) => {
  res.send('API is working');
});

//auth api for admin ( future refrence = user and teacher)
app.use('/api/auth',authroute);
app.use('/api/admin',admin);
app.use('/api/package',package);
app.use('/api/enquiry',enquiry);

//port for running
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>console.log("server running on PORT : "+PORT));