//jshint esversion: 6
import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;