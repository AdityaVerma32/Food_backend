import { Schema, model } from 'mongoose';

const blacklistedTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    expiryDate: {
        type: Date,
        required: true
    }
});

const BlacklistedToken = model('BlacklistedToken', blacklistedTokenSchema);

export default BlacklistedToken;
