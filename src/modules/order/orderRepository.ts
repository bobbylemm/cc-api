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

export default class OrderRepo {
  private _orderRef = db.collection('orders');

  async create(data: Order): Promise<NewData<Order>> {
    const newOrderRef = await this._orderRef.add(data);

    return { id: newOrderRef.id, data };
  }

  async update(id: string, data: Partial<Order>): Promise<Partial<Order>> {
    await this._orderRef.doc(id).update(data);

    return { ...data };
  }
}