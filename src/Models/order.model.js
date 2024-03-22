import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        dish: {
            type: Schema.Types.ObjectId,
            ref: 'Dishes',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'delivered'],
        default: 'pending'
    },
    deliveryAddress: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    },
    paymentStatus: {
        type: Schema.Types.ObjectId,
        ref: 'Payment'
    }
});

const Order = model('Order', orderSchema);

export default Order;
