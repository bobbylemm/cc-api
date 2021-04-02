import { Router } from 'express';
import OrderController from './orderController';

const router = Router();
const authController = new OrderController();

router.get(
    '/',
    authController.getOrders
);

router.get(
    '/:orderId',
    authController.getOrder
);

router.put(
    '/:orderId',
    authController.editOrder
);

export default router;