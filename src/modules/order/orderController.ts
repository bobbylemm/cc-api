import { Request, Response } from 'express';

import OrderRepo, { Order } from './orderRepository'

export default class OrderController {
    private readonly repo: OrderRepo;

    constructor() {
        this.repo = new OrderRepo();
    }

    public createOrder = async (req: Request, res: Response) => {
        const payload = req.body as Order;
        try {
            const data = await this.repo.create(payload)
            return res.status(201).json({ ...data });
        } catch (error) {
            return error
        }
    }

    public editOrder = async (req: Request, res: Response) => {
        const payload = req.body as Partial<Order>;
        try {
            const data = await this.repo.update(req.params.orderId, payload)
            return res.status(200).json({ data });
        } catch (error) {
            return error
        }
    }
}