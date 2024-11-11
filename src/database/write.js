import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from './config';

export async function save(data) {
    try {
        const dbCollection = collection(db, "BorrowedBook")
        const docRef = await addDoc(dbCollection, data)
        return docRef.id
    } catch (e) {
        return null
    }
}