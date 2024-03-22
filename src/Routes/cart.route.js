import { Router } from 'express';
const router = Router();
import { addToCart, removeFromCart, getCart, updateCart } from '../Controller/cart.controller.js';


router.post('/cart', addToCart);
router.delete('/cart', removeFromCart);
router.get('/cart/:userId', getCart);
router.put('/cart/:userId', updateCart);

export default router;