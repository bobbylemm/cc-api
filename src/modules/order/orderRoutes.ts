import { Router } from 'express';
import OrderController from './orderController';

const router = Router();
const authController = new OrderController();

router.post(
    '/',
    authController.createOrder
);

router.put(
    '/:orderId',
    authController.editOrder
);

export default router;