import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.MONGO_KEY;


const connectDB = async()=> {
    await mongoose.connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });
    console.log('api connected to mongoDB');
}

export default connectDB;