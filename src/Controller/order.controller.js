import Order from '../Models/order.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const placeOrder = asyncHandler(async (req,res) => {
    try {
        // Implement order placement logic...
        const { userId, totalAmount } = req.body;

        // Calculate points earned (e.g., 1 point for every $10 spent)
        const pointsEarned = Math.floor(totalAmount / 10);

        // Update user's points
        await User.findByIdAndUpdate(userId, { $inc: { points: pointsEarned } });

        // Save order to database
        const order = new Order(req.body);
        await order.save();

        res.status(201).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

const getOrder = asyncHandler(async (req,res) => {

})

const updateOrder = asyncHandler(async (req,res) => {
    // Implement order update
})

const deleteOrder = asyncHandler(async (req,res) => {
    // Implement order deletion
})

export {
    placeOrder,
    getOrder,
    updateOrder,
    deleteOrder
};
