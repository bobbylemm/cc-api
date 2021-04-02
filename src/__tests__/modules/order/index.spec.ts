
import Supertest from 'supertest'
import * as admin from 'firebase-admin';

import server from '../../../modules/app'

const request = Supertest(server)


test('Can create an order', async () => {
    jest.spyOn(admin.firestore().collection('orders'), 'add').mockReturnValue(Promise.resolve({id: "1"} as any))

    const response = await request.post('/orders').send({
        title: 'cement',
        bookingDate: 1554284950000,
        address: {
            city: "Berlin",
            country: "Germany",
            street: "Wriezener Str. 12",
            zip: "13055"
        },
        customer: {
            email: "emad.alam@construyo.de",
            name: "Emad Alam",
            phone: "015252098067"
        }
    })

    expect(response.status).toEqual(201)
})

test('Cannot create an order with incomplete payload', async () => {
    jest.spyOn(admin.firestore().collection('orders'), 'add').mockReturnValue(Promise.resolve({id: "1"} as any))

    const response = await request.post('/orders').send({
        address: {
            city: "Berlin",
            country: "Germany",
            street: "Wriezener Str. 12",
            zip: "13055"
        },
        customer: {
            email: "emad.alam@construyo.de",
            name: "Emad Alam",
            phone: "015252098067"
        }
    })

    console.log(response, '-==>body')
    expect(response.status).toEqual(201)
})

test('Can update an order', async () => {
    
})