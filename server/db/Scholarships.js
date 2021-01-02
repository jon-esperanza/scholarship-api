import { truncate } from 'fs';
import mongoose from 'mongoose';

const scholarship = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    }, 
    award: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }, 
    website: {
        type: String,
        required: true
    }
});
const Scholarship = mongoose.model('scholarships', scholarship);
export default Scholarship;
    