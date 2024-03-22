import { Router } from 'express';
const router = Router();
import { placeOrder, getOrder, updateOrder, deleteOrder } from '../Controller/order.controller.js';


router.post('/order', placeOrder);
router.get('/order/:orderId', getOrder);
router.put('/order/:orderId', updateOrder);
router.delete('/order/:orderId', deleteOrder);

export default router;