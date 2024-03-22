import { Schema, model } from 'mongoose';

const cartSchema = new Schema({
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
    }]
});

const Cart = model('Cart', cartSchema);

export default Cart;
