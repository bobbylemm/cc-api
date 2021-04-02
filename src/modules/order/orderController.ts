import { Request, Response } from 'express';

import OrderRepo, { Order } from './orderRepository'

export default class OrderController {
    repo: OrderRepo;

    constructor() {
        this.repo = new OrderRepo();
    }

    public async createOrder(req: Request, res: Response) {
        const payload = req.body as Order;
        try {
            const data = await this.repo.create(payload)
            return res.status(201).json({ data });
        } catch (error) {
            return error
        }
    }

    public async editOrder(req: Request, res: Response) {

    }
}