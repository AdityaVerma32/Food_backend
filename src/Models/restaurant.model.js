import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    },
    contactNumber: {
        type: String
    }
});

const Restaurant = model('Restaurant', restaurantSchema);

export default Restaurant;
