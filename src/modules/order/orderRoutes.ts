import { Router } from 'express';
import OrderController from './orderController';
import validationHandler from '../../middleware/validationHandler'
import OrderValidator from './orderValidator'

const router = Router();
const authController = new OrderController();

router.post(
    '/',
    validationHandler(OrderValidator.createOrderRules()),
    authController.createOrder
);

router.put(
    '/:orderId',
    validationHandler(OrderValidator.updateOrderRules()),
    authController.editOrder
);

export default router;