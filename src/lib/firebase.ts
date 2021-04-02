import * as firebaseAdmin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json'

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
});

export const db = firebaseAdmin.firestore();

export const admin = firebaseAdmin;