import { Router } from 'express';
import { body } from 'express-validator';
import { verifyJWT } from '../Middlewares/auth.middleware.js';
import { upload } from "../Middlewares/multer.middleware.js";
import { register, login, updateUser, logout, getCurrentUser } from '../Controller/user.controller.js';

const router = Router();

router.route('/register').post(
    [
        body('email').isEmail(),
        body('password').isLength({ min: 5 }),
        body('name').isLength({ min: 3 })
    ],
    register);

router.route('/login').post(
    login);

router.route('/:userId').put(
    verifyJWT,
    updateUser);

router.route('/get-user').get(
    verifyJWT,
    getCurrentUser
)

router.route('/logout').post(
    verifyJWT,
    logout);

export default router;
