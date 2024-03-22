
import { Router } from 'express';
const router = Router();
import { createRestaurant, getRestaurant, updateRestaurant, deleteRestaurant } from '../Controller/restaurant.controller.js';


router.post('/restaurant', createRestaurant);
router.get('/restaurant/:restaurantId', getRestaurant);
router.put('/restaurant/:restaurantId', updateRestaurant);
router.delete('/restaurant/:restaurantId', deleteRestaurant);

export default router;