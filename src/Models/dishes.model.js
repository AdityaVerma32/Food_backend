import { Schema, model } from 'mongoose';

const dishesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String]
    },
    category: {
        type: String
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    }
});

const Dishes = model('Dishes', dishesSchema);

export default Dishes;
