import { Router } from 'express';
const router = Router();

import userRoute from './user.route.js';
import restaurantRoute from './restaurents.route.js';
import orderRoute from './order.route.js';
import dishedRoute from './dishes.route.js';
import addressRoute from './address.route.js';
import cartRoute from './cart.route.js';
import redeemRoute from './redeem.route.js';


router.use('/user', userRoute)
router.use('/restaurent', restaurantRoute)
router.use('/dishes', dishedRoute)
router.use('/order', orderRoute)
router.use('/address', addressRoute);
router.use('/cart', cartRoute);
router.use('/redeem', redeemRoute);


export default router;