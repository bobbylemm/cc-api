import { db, NewData } from '../../lib'
export interface Order {
  title: string;
  bookingDate: string;
  address: string;
  customer: string;
}

export default class MessageRepo {
  private _orderRef = db.collection('orders');

  async create(data: Order): Promise<NewData<Order>> {
    const newOrderRef = await this._orderRef.add(data);

    return { id: newOrderRef.id, data };
  }
}