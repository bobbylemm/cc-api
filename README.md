# CC - API

This project was created with Node/Express JS and connects to Firestore\

## Available Scripts

In the project directory, you can run:

### `yarn start` - starts API in production mode
### `yarn dev` - starts API in development mode
### `yarn test` - Run unit and integrations test
### `yarn build` - build project from typescript to javascript

This project opens on port `http://localhost:3090`

### Project structure
- `Modules` this folder is organized by identifying and seperating entities/core parts into modules, this modules then contain controller, repositories, routes e.t.c concerning an entity/core aspect.
- `Middleware` this contains API middlewares
- `lib` this contains configurations for firebase configurations and typescript type definitions

### How To Run Project
- First clone this project
- Run yarn install
- Create a .env file containing the following 
```
FIREBASE_PROJECTID=your-firebase-projectid
FIREBASE_PRIVATE_KEY=your-firebase-private-key,
FIREBASE_CLIENT_EMAIL=your-firebase-client-email
```
- Run yarn test to view client tests status
- Finally run yarn dev

### Project Routes
- `post - /orders`
```
Payload => {
  "title": any title,
  "bookingDate": booking date,
  "customer": {
    "name": customer name
    "email": customer email,
    "phone": customer phone number
  },
  "address": {
    "city": address city,
    "country": address country,
    "street": address country
  }
 }
```

- `put - /orders/:id`
```
Payload => 
  {
    "title": any title,
    "bookingDate": booking date
  }
```
