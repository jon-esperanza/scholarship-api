import express from 'express';
import connectDB from './db/connection.js';
import scholarships from './routes/scholarships.js';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
const port = process.env.PORT;
const api = express();


//config middleware
api.use(express.json({extended: false})); 
api.use(cors());
connectDB();
api.use("/scholarships", scholarships);


//start the api
api.listen(port);
console.log('api running on port: ' + port);