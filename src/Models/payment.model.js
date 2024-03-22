import { Schema, model } from 'mongoose';

const paymentSchema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['paid', 'pending'],
        default: 'pending'
    },
    paymentMethod: {
        type: String
    },
    transactionId: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Payment = model('Payment', paymentSchema);

export default Payment;
