import { Router } from 'express';
const router = Router();
import { createAddress, getAddress, updateAddress, deleteAddress } from '../Controller/address.controller.js';


router.post('/address', createAddress);
router.get('/address/:addressId', getAddress);
router.put('/address/:addressId', updateAddress);
router.delete('/address/:addressId', deleteAddress);

export default router;