import * as firebaseAdmin from 'firebase-admin';
import dotenv from 'dotenv'

dotenv.config()

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
        "projectId": process.env.FIREBASE_PROJECTID,
        "privateKey": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
        "clientEmail": process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: process.env.DATABASE_URL
});

export const db = firebaseAdmin.firestore();

export const admin = firebaseAdmin;