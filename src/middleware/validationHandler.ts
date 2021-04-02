import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationChain } from "express-validator";


const errorCB = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    return next();
}

const validationHandler = (validationRules: ValidationChain[]) => [
    ...validationRules,
    errorCB,
];

export default validationHandler