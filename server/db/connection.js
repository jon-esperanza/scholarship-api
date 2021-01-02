import mongoose from 'mongoose';
import dotenv from 'dotenv';
const uri = 'mongodb+srv://admin:i6bnLL5KONzjQkI4@scholarship-rest.yqu9v.mongodb.net/list?retryWrites=true&w=majority';


const connectDB = async()=> {
    await mongoose.connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });
    console.log('api connected to mongoDB');
}

export default connectDB;