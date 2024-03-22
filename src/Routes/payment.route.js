import { Router } from 'express';
const router = Router();
import { processPayment, getPayment, updatePayment, deletePayment } from '../Controller/payment.controller.js';


router.post('/payment', processPayment);
router.get('/payment/:paymentId', getPayment);
router.put('/payment/:paymentId', updatePayment);
router.delete('/payment/:paymentId', deletePayment);

export default router;