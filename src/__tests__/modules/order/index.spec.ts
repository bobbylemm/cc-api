
import Supertest from 'supertest'

import server from '../../../modules/app'

const request = Supertest(server)

jest.mock('firebase-admin', () => {
    return {
      initializeApp: jest.fn(),
      credential: {
        cert: jest.fn(),
      },
      firestore: jest.fn(() => {
        return {
          collection: jest.fn().mockReturnThis(),
          doc: jest.fn().mockReturnThis(),
          update: jest.fn((value) => value),
          add: jest.fn((value) => value),
        }
      }),
    }
})


test('Can create an order', async () => {
    const response = await request.post('/orders').send({
        title: 'cement',
        bookingDate: 1554284950000,
        address: {
            city: "Berlin",
            country: "Germany",
            street: "Wriezener Str. 12",
        },
        customer: {
            email: "emad.alam@construyo.de",
            name: "Emad Alam",
            phone: "015252098067"
        }
    })

    expect(response.status).toEqual(201)
    expect(response.body.data).toEqual(
        expect.objectContaining({
            title: 'cement',
            bookingDate: 1554284950000,
            address: {
                city: "Berlin",
                country: "Germany",
                street: "Wriezener Str. 12",
            },
            customer: {
                email: "emad.alam@construyo.de",
                name: "Emad Alam",
                phone: "015252098067"
            }
        })
      )
})

test('Cannot create an order with incomplete payload (validation failed)', async () => {
    const response = await request.post('/orders').send({
        address: {
            city: "Berlin",
            country: "Germany",
            street: "Wriezener Str. 12",
        },
        customer: {
            email: "emad.alam@construyo.de",
            name: "Emad Alam",
            phone: "015252098067"
        }
    })

    expect(response.status).toEqual(422)
    expect(response.body.errors).toEqual([
        { msg: 'Title required', param: 'title', location: 'body' },
        {
          msg: 'Booking date is required',
          param: 'bookingDate',
          location: 'body'
        }
    ])
})

test('Can update an order', async () => {
    const response = await request.put('/orders/1').send({
        title: 'soap',
        bookingDate: 1554284950000,
    })

    expect(response.status).toEqual(200)
})