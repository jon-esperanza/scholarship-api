import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db/connection.js';
import scholarships from './routes/scholarships.js';
const port = process.env.PORT || 5000;
const api = express();


//config middleware
connectDB();
api.use("/scholarships", scholarships);
api.use(express.json({extended: false})); 


//start the api
api.listen(port);
console.log('api running on port: ' + port);