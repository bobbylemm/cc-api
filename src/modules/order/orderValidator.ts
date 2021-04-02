import { check } from 'express-validator';

export default class OrderValidator {
  static createOrderRules() {
    return [
      check('title')
        .isString()
        .withMessage('Title required'),
      check('bookingDate').isNumeric().withMessage('Booking date is required').isLength({min: 1, max: 4}),
      check('customer.phone').isString().withMessage('Customer phone number is required').isLength({min: 12, max: 12}),
      check('customer.name').isString().withMessage('Customer name is required').isLength({min: 12, max: 12}),
      check('customer.email').isString().withMessage('Customer email is required').isLength({min: 12, max: 12}),
      check('address.city').isString().withMessage('Address city is required').isLength({min: 3, max: 50}),
      check('address.country').isString().withMessage('Address country is required').isLength({min: 3, max: 50}),
      check('address.street').isString().withMessage('Address street is required').isLength({min: 5, max: 50}),
      check('address.zip').isString().withMessage('Address zip is required').isLength({min: 4, max: 6}),
    ];
  }
}