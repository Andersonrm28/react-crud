import { firebaseApp } from './firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const db = getFirestore(firebaseApp)

export const getCollection = async(collectionParam) => {
    debugger;
    const result = { statusResponse: false, data: null, error: null }
    try {
        const collec = collection(db, collectionParam)
        const snapShot = await getDocs(collec)
        const collecList = snapShot.docs.map(doc => ({ id:doc.id, ...doc.data() }))

        result.statusResponse = true
        result.data = collecList
    } catch (error) {
        result.error = error
    }

    return result
}