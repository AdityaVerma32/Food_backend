import { Router } from 'express';
const router = Router();
import { redeemPoints } from '../Controller/points.controller.js';


router.post('/points/redeem', redeemPoints);


export default router;
