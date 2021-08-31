//jshint esversion: 6
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    noOfOrders: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('User', userSchema);

export default User;