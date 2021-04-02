import { db, NewData } from '../../lib'
export interface Order {
  title: string;
  bookingDate: number;
  address: {
    city: string;
    country: string;
    street: string;
    zip: string;
  };
  customer: {
    email: string;
    name: string;
    phone: string;
  };
}

export default class MessageRepo {
  private _orderRef = db.collection('orders');

  async create(data: Order): Promise<NewData<Order>> {
    const newOrderRef = await this._orderRef.add(data);

    return { id: newOrderRef.id, data };
  }
}