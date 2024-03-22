import { asyncHandler } from '../utils/asyncHandler.js';

const redeemPoints = asyncHandler(async (req, res) => {
    try {
        const { userId, pointsToRedeem } = req.body;

        // Fetch user's current points
        const user = await findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if user has enough points to redeem
        if (user.points < pointsToRedeem) {
            return res.status(400).json({ message: 'Insufficient points' });
        }

        // Implement logic to redeem points (e.g., awarding gifts)

        // Update user's points after redemption
        await findByIdAndUpdate(userId, { $inc: { points: -pointsToRedeem } });

        res.json({ message: 'Points redeemed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

export {
    redeemPoints
};
