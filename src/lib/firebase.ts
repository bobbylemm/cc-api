import * as firebaseAdmin from 'firebase-admin';

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(),
    databaseURL: process.env.DATABASE_URL
});

export const db = firebaseAdmin.firestore();

export const admin = firebaseAdmin;