// import firebase from "firebase/compat/app"
import firebase from 'firebase/app'

import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"


const firebaseConfig = {
 apiKey: "AIzaSyAqBZ9YJEeWal-uJ-PBHil-yHLozfCMXwI",
  authDomain: "drop-9978c.firebaseapp.com",
  projectId: "drop-9978c",
  storageBucket: "drop-9978c.appspot.com",
  messagingSenderId: "452563320512",
  appId: "1:452563320512:web:ce76c1a35073c583b93725",
  measurementId: "G-WH61R3EY9Q"
};

const app = firebase.initializeApp(firebaseConfig);
const fs = app.firestore();

export const db = {
    folders: fs.collection('folders'),
    files: fs.collection('files'),
    getTime: firebase.firestore.FieldValue.serverTimestamp,
    formatDoc: doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    }
}

export const storage = app.storage();
export const auth = app.auth();

export default app;