import { check } from 'express-validator';

export default class OrderValidator {
  static createOrderRules() {
    return [
      check('title')
        .isString()
        .withMessage('Title required'),
      check('bookingDate', 'Booking date is required').exists(),
      check('customer.phone').isString().withMessage('Customer phone number is required').isLength({ min: 12 }),
      check('customer.name').exists().isString().withMessage('Customer name is required'),
      check('customer.email').exists().isString().withMessage('Customer email is required'),
      check('address.city').exists().isString().withMessage('Address city is required'),
      check('address.country').exists().isString().withMessage('Address country is required'),
      check('address.street').exists().isString().withMessage('Address street is required'),
    ];
  }

  static updateOrderRules() {
    return [
      check('title')
        .isString()
        .withMessage('Title required'),
      check('bookingDate', 'Booking date is required').exists(),
    ];
  }
}