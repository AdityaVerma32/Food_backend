import { Router } from 'express';
const router = Router();
import { createDish, getDish, updateDish, deleteDish } from '../Controller/dishes.controller.js';


router.post('/dishes', createDish);
router.get('/dishes/:dishId', getDish);
router.put('/dishes/:dishId', updateDish);
router.delete('/dishes/:dishId', deleteDish);

export default router;